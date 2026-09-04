import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { ProductProps } from '@/components/ui/organisms/ProductsOrganisms/product.types';
import { brandDirectory } from '@/config/data/brand-directory.data';
import { pageSeoGenerator, PageSeoModel, SITE_URL } from '@/seo';
import { Metadata } from 'next/types';
import { notFound } from 'next/navigation';
import ClientPage from './client-page';

interface Props {
    params: Promise<{ brandSlug: string }>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

// resolve the real brand by matching the directory entry's slug directly
// against Brand.slug from GET_ALL_BRAND (admin-set per brand, see
// brand-directory.data.ts).
const resolveBrand = (brandSlug: string, apiBrands: { id: string; name: string; slug?: string }[]) => {
    const entry = brandDirectory.find((b) => b.slug === brandSlug);
    if (!entry) return undefined;
    const brand = apiBrands.find((b) => b.slug === entry.slug);
    if (!brand) return undefined;
    return { entry, brand };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { brandSlug } = await params;
    const entry = brandDirectory.find((b) => b.slug === brandSlug);
    if (!entry) return {};

    const data: PageSeoModel = {
        title: entry.title,
        description: entry.metaDescription,
        tags: `${entry.title}, محصولات, گوشی موبایل, خرید آنلاین, استیو موبایل`,
        canonical: `${SITE_URL}/product/brand/${brandSlug}`,
        og_title: `${entry.title} | استیو موبایل`,
        og_url: `${SITE_URL}/product/brand/${brandSlug}`,
        og_description: entry.metaDescription,
        og_sitename: 'استیو موبایل',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, entry.title);
}

const fetchProductsByBrand = async (
    brandId: string,
    searchParams?: Record<string, string | string[] | undefined>
): Promise<{ data: { products: ProductProps[] } }> => {
    const params: Record<string, string | string[]> = { brand_id: brandId };

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

const BrandProducts = async ({ params, searchParams }: Props) => {
    const { brandSlug } = await params;
    const resolvedSearchParams = searchParams ? await searchParams : {};

    const [brandsResponse, categoriesResponse] = await Promise.all([
        fetcher(ApiKeys.GET_ALL_BRAND, 'web', 'GET', { next: { revalidate: 300 } }),
        fetcher(ApiKeys.GET_ALL_CATEGORY, 'web', 'GET', { next: { revalidate: 300 } })
    ]);

    const brands = brandsResponse.data?.brands?.length ? brandsResponse.data.brands : [];
    const resolved = resolveBrand(brandSlug, brands);

    if (!resolved) notFound();

    const { entry, brand } = resolved;
    const productsResponse = await fetchProductsByBrand(brand.id, resolvedSearchParams);

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'خانه', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'لیست محصولات', item: `${SITE_URL}/product` },
            { '@type': 'ListItem', position: 3, name: entry.title, item: `${SITE_URL}/product/brand/${brandSlug}` }
        ]
    };

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <ClientPage
                brand={{ id: brand.id, name: brand.name }}
                seoContent={{ title: entry.contentTitle, body: entry.contentBody }}
                pageHeading={entry.title}
                data={productsResponse.data?.products?.length ? productsResponse.data.products : []}
                brands={brands}
                categories={categoriesResponse.data?.categories?.length ? categoriesResponse.data.categories : []}
            />
        </>
    );
};

export default BrandProducts;
