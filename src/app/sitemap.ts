import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { brandDirectory } from '@/config/data/brand-directory.data';
import { priceRanges } from '@/config/data/price-ranges.data';
import { SITE_URL } from '@/seo';
import type { MetadataRoute } from 'next';

const BASE_URL = SITE_URL;

// re-generate the sitemap at most once an hour
export const revalidate = 3600;

const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/product`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'daily', priority: 0.6 },
    { url: `${BASE_URL}/about-us`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/contact-us`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/faq`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/phone-repair`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/phone-sales`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/partner-sales`, changeFrequency: 'weekly', priority: 0.7 }
];

// always-on landing pages - fully frontend-defined, no live data dependency
const priceRangeRoutes: MetadataRoute.Sitemap = priceRanges.map((range) => ({
    url: `${BASE_URL}/product/price-range/${range.slug}`,
    changeFrequency: 'daily',
    priority: 0.7
}));

// The API may silently cap page_size (we've seen this bite the sitemap before -
// a single big-page_size request came back with far fewer products than the
// store actually has). Page through with `pagination.total` as the source of
// truth instead of trusting one oversized request to return everything.
const PAGE_SIZE = 200;
const MAX_PAGES = 100; // hard ceiling (~20k items) so a bad API response can't loop forever

type RawItem = { slug?: string; updated_at?: string };

const fetchAllPages = async (apiKey: string, listField: 'products' | 'articles'): Promise<RawItem[]> => {
    const firstPage = await fetcher(apiKey, 'web', 'GET', {
        params: { page_number: '1', page_size: String(PAGE_SIZE) }
    });

    const items: RawItem[] = firstPage?.data?.[listField] ?? [];
    const total: number = firstPage?.data?.pagination?.total ?? items.length;
    const totalPages = Math.min(Math.ceil(total / PAGE_SIZE), MAX_PAGES);

    if (totalPages > 1) {
        const remainingPages = await Promise.all(
            Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((pageNumber) =>
                fetcher(apiKey, 'web', 'GET', {
                    params: { page_number: String(pageNumber), page_size: String(PAGE_SIZE) }
                })
            )
        );
        remainingPages.forEach((page) => items.push(...(page?.data?.[listField] ?? [])));
    }

    return items;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [categoriesRes, productsRes, articlesRes, brandsRes] = await Promise.allSettled([
        fetcher(ApiKeys.GET_ALL_CATEGORY, 'web', 'GET'),
        fetchAllPages(ApiKeys.GET_Products, 'products'),
        fetchAllPages(ApiKeys.GET_BLOG_POSTS, 'articles'),
        fetcher(ApiKeys.GET_ALL_BRAND, 'web', 'GET')
    ]);

    const categoryRoutes: MetadataRoute.Sitemap =
        categoriesRes.status === 'fulfilled'
            ? (categoriesRes.value?.data?.categories ?? [])
                  .filter((category: { slug?: string }) => category?.slug)
                  .map((category: { slug: string }) => ({
                      url: `${BASE_URL}/product/category/${category.slug}`,
                      changeFrequency: 'daily' as const,
                      priority: 0.8
                  }))
            : [];

    const productRoutes: MetadataRoute.Sitemap =
        productsRes.status === 'fulfilled'
            ? productsRes.value
                  .filter((product): product is Required<Pick<RawItem, 'slug'>> & RawItem =>
                      Boolean(product?.slug)
                  )
                  .map((product) => ({
                      url: `${BASE_URL}/product/${product.slug}`,
                      lastModified: product.updated_at ? new Date(product.updated_at) : undefined,
                      changeFrequency: 'daily' as const,
                      priority: 0.9
                  }))
            : [];

    const articleRoutes: MetadataRoute.Sitemap =
        articlesRes.status === 'fulfilled'
            ? articlesRes.value
                  .filter((article): article is Required<Pick<RawItem, 'slug'>> & RawItem =>
                      Boolean(article?.slug)
                  )
                  .map((article) => ({
                      url: `${BASE_URL}/blog/${article.slug}`,
                      lastModified: article.updated_at ? new Date(article.updated_at) : undefined,
                      changeFrequency: 'weekly' as const,
                      priority: 0.5
                  }))
            : [];

    // only list a brand landing page once its slug actually resolves to a real
    // brand in the live catalog - see resolveBrand in
    // src/app/product/brand/[brandSlug]/page.tsx
    const apiBrands: { slug?: string }[] = brandsRes.status === 'fulfilled' ? (brandsRes.value?.data?.brands ?? []) : [];
    const brandRoutes: MetadataRoute.Sitemap = brandDirectory
        .filter((entry) => apiBrands.some((b) => b.slug === entry.slug))
        .map((entry) => ({
            url: `${BASE_URL}/product/brand/${entry.slug}`,
            changeFrequency: 'daily' as const,
            priority: 0.75
        }));

    return [
        ...staticRoutes,
        ...priceRangeRoutes,
        ...brandRoutes,
        ...categoryRoutes,
        ...productRoutes,
        ...articleRoutes
    ];
}
