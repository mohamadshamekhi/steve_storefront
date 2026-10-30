import { fetcher } from "@/api";
import ApiKeys from "@/api/keys";
import type Blog from "@/config/types/blog.types";
import { Comment } from "@/models/common.model";
import { pageSeoGenerator, PageSeoModel } from "@/seo";
import {
  isRepairArticle,
  pickRelatedArticles,
  SearchProduct,
} from "@/utils/related-content.util";
import { permanentRedirect } from "next/navigation";
import { Metadata } from "next/types";
import ClientPage from "./client-page";

// JSON for a <script> tag: escape "<" so admin-entered text can't close the tag early.
const toJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

// ISR: re-render this route at most every 2 minutes instead of on every single request
export const revalidate = 120;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const {
    data: { article },
  } = await fetchBlogPost(id);

  // the API also answers for an article's old slug; canonical is always the current one
  const canonicalUrl = `https://stevemobile.com/blog/${article?.slug ?? id}`;

  const data: PageSeoModel = {
    title: article?.title ?? "",
    description: article?.meta_description ?? "",
    tags: article?.tags?.join(", ") ?? "",
    canonical: canonicalUrl,
    og_title: article?.title ?? "",
    og_url: canonicalUrl,
    og_description: article?.meta_description ?? "",
    og_sitename: "استیو موبایل",
    og_image: article?.media_url
      ? {
          data: {
            attributes: {
              url: article.media_url,
              alternativeText: article.alt ?? article.title,
              width: 1200,
              height: 630,
            },
          },
        }
      : undefined,
    noindex: false,
    nofollow: false,
  };

  const baseSeo = pageSeoGenerator(data, article?.title);

  return {
    ...baseSeo,
    openGraph: {
      ...baseSeo.openGraph,
      type: "article",
      publishedTime: article?.created_at,
      modifiedTime: article?.updated_at,
      tags: article?.tags,
      authors: article?.back_office_name
        ? [article.back_office_name]
        : undefined,
    },
    twitter: {
      ...baseSeo.twitter,
      images: article?.media_url ? [article.media_url] : undefined,
    },
  };
}

const fetchBlogPost = async (
  id: string
): Promise<{
  data: {
    article: Blog;
  };
}> => {
  const res = await fetcher(ApiKeys.GET_BLOG_SINGLE(id), "web", "GET");
  return res;
};

const fetchBlogPostComments = async (
  id: string
): Promise<{
  data: {
    comments: Comment;
    all_approved_comments_count: number;
  };
}> => {
  const res = await fetcher(ApiKeys.GET_ARTICLE_COMMENTS(id), "web", "GET");
  return res;
};

const fetchBlogPosts = async (): Promise<{
  data: {
    articles: Blog[];
  };
}> => {
  // a wider pool than the 4 shown, so related articles can be picked by shared tags
  const res = await fetcher(ApiKeys.GET_BLOG_POSTS, "web", "GET", {
    params: { page_size: 30 },
  });
  return res;
};

/** محصولات مرتبط با مقاله: جستجوی سایت روی دو تگ اول (یا عنوان) */
const fetchRelatedProducts = async (article: Blog): Promise<SearchProduct[]> => {
  const terms = (article.tags ?? []).map((t) => t.trim()).filter(Boolean).slice(0, 2);
  if (terms.length === 0 && article.title) terms.push(article.title);

  const results = await Promise.all(
    terms.map((term) =>
      fetcher(ApiKeys.STOREFRONT_SEARCH, "web", "GET", {
        params: { search: term },
        next: { revalidate: 3600 },
      }).catch(() => null)
    )
  );

  const seen = new Set<string>();
  const products: SearchProduct[] = [];
  for (const res of results) {
    for (const p of (res?.data?.products ?? []) as SearchProduct[]) {
      if (!p?.slug || seen.has(p.id)) continue;
      seen.add(p.id);
      products.push(p);
    }
  }
  return products.slice(0, 8);
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [
    {
      data: { article },
    },
    {
      data: { articles },
    },
  ] = await Promise.all([fetchBlogPost(id), fetchBlogPosts()]);

  // an old slug (after a rename) is answered by the API too; send it to the current URL
  if (
    article?.slug &&
    article.slug !== id &&
    article.slug !== decodeURIComponent(id)
  ) {
    permanentRedirect(`/blog/${encodeURIComponent(article.slug)}`);
  }

  const articleUrl = `https://stevemobile.com/blog/${article.slug ?? id}`;
  const relatedArticles = pickRelatedArticles(article, articles ?? []);
  const relatedProducts = await fetchRelatedProducts(article);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.meta_description ?? "",
    image: article.media_url ? [article.media_url] : undefined,
    datePublished: article.created_at,
    dateModified: article.updated_at,
    author: {
      "@type": "Person",
      name: article.back_office_name ?? "استیو موبایل",
    },
    publisher: {
      "@type": "Organization",
      name: "استیو موبایل",
      url: "https://stevemobile.com",
    },
    url: articleUrl,
    keywords: article.tags?.join(", ") ?? "",
    inLanguage: "fa-IR",
    isPartOf: {
      "@type": "Blog",
      name: "بلاگ استیو موبایل",
      url: "https://stevemobile.com/blog",
    },
  };

  const {
    data: { comments, all_approved_comments_count },
  } = await fetchBlogPostComments(article.id);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "خانه", item: "https://stevemobile.com" },
      { "@type": "ListItem", position: 2, name: "اخبار", item: "https://stevemobile.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbJsonLd) }}
      />
      <ClientPage
        article={article}
        blogs={relatedArticles}
        relatedProducts={relatedProducts}
        showRepairCta={isRepairArticle(article)}
        comments={comments as unknown as Comment[]}
        all_approved_comments_count={all_approved_comments_count}
      />
    </>
  );
}
