import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { ProductProps } from '@/components/ui/organisms/ProductsOrganisms/product.types';
import Categories from '@/config/types/categories.types';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { paginatedCanonical } from '@/seo/utilities/paginated-canonical';
import { slimBrands, slimListingProducts } from '@/utils/listing-payload.util';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

interface Props {
    params: Promise<{ catSlug: string }>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { catSlug: rawCatSlug } = await params;
    const pageNumber = (await searchParams)?.page_number;
    const catSlug = decodeURIComponent(rawCatSlug);

    const categoriesResponse = await fetcher(ApiKeys.GET_ALL_CATEGORY, 'web', 'GET', { next: { revalidate: 300 } });
    const category = categoriesResponse?.data?.categories?.find(
        (c: Categories) => c.slug === catSlug
    );
    const categoryName = category?.name ?? catSlug;
    // the admin's own SEO copy wins; the generated pattern covers categories without it
    const seoTitle = category?.seo_title?.trim() || `خرید ${categoryName}`;
    const seoDescription =
        category?.seo_description?.trim() ||
        `مشاهده و خرید آنلاین ${categoryName} با بهترین قیمت، ضمانت اصالت و ارسال سریع از استیو موبایل.`;

    const data: PageSeoModel = {
        title: categoryName,
        description: seoDescription,
        tags: `${categoryName}, محصولات, گوشی موبایل, لوازم جانبی, خرید آنلاین, استیو موبایل`,
        canonical: paginatedCanonical(`https://stevemobile.com/product/category/${catSlug}`, pageNumber),
        og_title: `${categoryName} | استیو موبایل`,
        og_url: `https://stevemobile.com/product/category/${catSlug}`,
        og_description: seoDescription,
        og_sitename: 'استیو موبایل',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, seoTitle);
}

const fetchProductsByCategory = async (
    catSlug: string,
    searchParams?: Record<string, string | string[] | undefined>
): Promise<{ data: { products: ProductProps[] } }> => {
    const params: Record<string, string | string[]> = {
        category_slug: catSlug
    };

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

const CategoryProducts = async ({ params, searchParams }: Props) => {
    const { catSlug: rawCatSlug } = await params;
    const catSlug = decodeURIComponent(rawCatSlug);
    const resolvedSearchParams = searchParams ? await searchParams : {};

    const [productsResponse, brandsResponse, categoriesResponse] = await Promise.all([
        fetchProductsByCategory(catSlug, resolvedSearchParams),
        fetcher(ApiKeys.GET_ALL_BRAND, 'web', 'GET', { next: { revalidate: 300 } }),
        fetcher(ApiKeys.GET_ALL_CATEGORY, 'web', 'GET', { next: { revalidate: 300 } })
    ]);

    const categoryName =
        categoriesResponse.data?.categories?.find((c: { slug: string; name: string }) => c.slug === catSlug)
            ?.name ?? catSlug;

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://stevemobile.com' },
            { '@type': 'ListItem', position: 2, name: 'لیست محصولات', item: 'https://stevemobile.com/product' },
            {
                '@type': 'ListItem',
                position: 3,
                name: categoryName,
                item: `https://stevemobile.com/product/category/${catSlug}`
            }
        ]
    };

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <ClientPage
                catSlug={catSlug}
                data={slimListingProducts(productsResponse.data?.products)}
                brands={slimBrands(brandsResponse.data?.brands)}
                categories={categoriesResponse.data?.categories?.length ? categoriesResponse.data.categories : []}
            />
        </>
    );
};

export default CategoryProducts;
