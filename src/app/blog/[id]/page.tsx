import { fetcher } from "@/api";
import ApiKeys from "@/api/keys";
import type Blog from "@/config/types/blog.types";
import { Comment } from "@/models/common.model";
import { pageSeoGenerator, PageSeoModel } from "@/seo";
import { Metadata } from "next/types";
import ClientPage from "./client-page";

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

  const canonicalUrl = `https://stevemobile.com/blog/${id}`;

  const data: PageSeoModel = {
    title: article?.title ?? "",
    description: article?.meta_description ?? "",
    tags: article?.tags?.join(", ") ?? "",
    canonical: canonicalUrl,
    og_title: article?.title ?? "",
    og_url: canonicalUrl,
    og_description: article?.meta_description ?? "",
    og_sitename: "استیو شاپ",
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
  console.log(res, "ressss");
  return res;
};

const fetchBlogPosts = async (): Promise<{
  data: {
    articles: Blog[];
  };
}> => {
  const res = await fetcher(ApiKeys.GET_BLOG_POSTS, "web", "GET");
  return res;
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
      name: article.back_office_name ?? "استیو شاپ",
    },
    publisher: {
      "@type": "Organization",
      name: "استیو شاپ",
      url: "https://stevemobile.com",
    },
    url: `https://stevemobile.com/blog/${id}`,
    keywords: article.tags?.join(", ") ?? "",
    inLanguage: "fa-IR",
    isPartOf: {
      "@type": "Blog",
      name: "بلاگ استیو شاپ",
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
        item: `https://stevemobile.com/blog/${id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ClientPage
        article={article}
        blogs={articles}
        comments={comments as unknown as Comment[]}
        all_approved_comments_count={all_approved_comments_count}
      />
    </>
  );
}
