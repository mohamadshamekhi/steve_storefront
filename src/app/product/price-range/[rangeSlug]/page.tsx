import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { ProductProps } from '@/components/ui/organisms/ProductsOrganisms/product.types';
import { priceRanges } from '@/config/data/price-ranges.data';
import { pageSeoGenerator, PageSeoModel, SITE_URL } from '@/seo';
import { Metadata } from 'next/types';
import { notFound } from 'next/navigation';
import ClientPage from './client-page';

interface Props {
    params: Promise<{ rangeSlug: string }>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { rangeSlug } = await params;
    const entry = priceRanges.find((r) => r.slug === rangeSlug);
    if (!entry) return {};

    const data: PageSeoModel = {
        title: entry.title,
        description: entry.metaDescription,
        tags: `${entry.title}, خرید گوشی, محصولات, استیو موبایل`,
        canonical: `${SITE_URL}/product/price-range/${rangeSlug}`,
        og_title: `${entry.title} | استیو موبایل`,
        og_url: `${SITE_URL}/product/price-range/${rangeSlug}`,
        og_description: entry.metaDescription,
        og_sitename: 'استیو موبایل',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, entry.title);
}

const fetchProductsByPriceRange = async (
    entry: { min?: number; max?: number },
    searchParams?: Record<string, string | string[] | undefined>
): Promise<{ data: { products: ProductProps[] } }> => {
    const params: Record<string, string | string[]> = {};
    if (entry.min !== undefined) params['min_price'] = String(entry.min);
    if (entry.max !== undefined) params['max_price'] = String(entry.max);

    if (searchParams) {
        Object.entries(searchParams).forEach(([key, value]) => {
            if (value !== undefined) {
                params[key] = value;
            }
        });
    }

    const res = await fetcher(ApiKeys.GET_Products, 'web', 'GET', { params });
    return res;
};

const PriceRangeProducts = async ({ params, searchParams }: Props) => {
    const { rangeSlug } = await params;
    const entry = priceRanges.find((r) => r.slug === rangeSlug);

    if (!entry) notFound();

    const resolvedSearchParams = searchParams ? await searchParams : {};

    const [productsResponse, brandsResponse, categoriesResponse] = await Promise.all([
        fetchProductsByPriceRange(entry, resolvedSearchParams),
        fetcher(ApiKeys.GET_ALL_BRAND, 'web', 'GET', { next: { revalidate: 300 } }),
        fetcher(ApiKeys.GET_ALL_CATEGORY, 'web', 'GET', { next: { revalidate: 300 } })
    ]);

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'خانه', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'لیست محصولات', item: `${SITE_URL}/product` },
            { '@type': 'ListItem', position: 3, name: entry.title, item: `${SITE_URL}/product/price-range/${rangeSlug}` }
        ]
    };

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <ClientPage
                priceRange={{ min: entry.min, max: entry.max, label: entry.label }}
                seoContent={{ title: entry.contentTitle, body: entry.contentBody }}
                pageHeading={entry.title}
                data={productsResponse.data?.products?.length ? productsResponse.data.products : []}
                brands={brandsResponse.data?.brands?.length ? brandsResponse.data.brands : []}
                categories={categoriesResponse.data?.categories?.length ? categoriesResponse.data.categories : []}
            />
        </>
    );
};

export default PriceRangeProducts;
