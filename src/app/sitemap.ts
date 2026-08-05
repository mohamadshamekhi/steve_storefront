import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://stevemobile.com';

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
    { url: `${BASE_URL}/phone-sales`, changeFrequency: 'weekly', priority: 0.7 }
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [categoriesRes, productsRes, articlesRes] = await Promise.allSettled([
        fetcher(ApiKeys.GET_ALL_CATEGORY, 'web', 'GET'),
        fetcher(ApiKeys.GET_Products, 'web', 'GET', { params: { page_number: '1', page_size: '5000' } }),
        fetcher(ApiKeys.GET_BLOG_POSTS, 'web', 'GET')
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
            ? (productsRes.value?.data?.products ?? [])
                  .filter((product: { slug?: string }) => product?.slug)
                  .map((product: { slug: string; updated_at?: string }) => ({
                      url: `${BASE_URL}/product/${product.slug}`,
                      lastModified: product.updated_at ? new Date(product.updated_at) : undefined,
                      changeFrequency: 'daily' as const,
                      priority: 0.9
                  }))
            : [];

    const articleRoutes: MetadataRoute.Sitemap =
        articlesRes.status === 'fulfilled'
            ? (articlesRes.value?.data?.articles ?? [])
                  .filter((article: { slug?: string }) => article?.slug)
                  .map((article: { slug: string; updated_at?: string }) => ({
                      url: `${BASE_URL}/blog/${article.slug}`,
                      lastModified: article.updated_at ? new Date(article.updated_at) : undefined,
                      changeFrequency: 'weekly' as const,
                      priority: 0.5
                  }))
            : [];

    return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...articleRoutes];
}
