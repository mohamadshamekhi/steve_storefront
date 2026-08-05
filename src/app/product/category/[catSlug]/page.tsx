import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { ProductProps } from '@/components/ui/organisms/ProductsOrganisms/product.types';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

interface Props {
    params: Promise<{ catSlug: string }>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { catSlug: rawCatSlug } = await params;
    const catSlug = decodeURIComponent(rawCatSlug);

    const categoriesResponse = await fetcher(ApiKeys.GET_ALL_CATEGORY, 'web', 'GET', { next: { revalidate: 300 } });
    const category = categoriesResponse?.data?.categories?.find(
        (c: { slug: string; name: string }) => c.slug === catSlug
    );
    const categoryName = category?.name ?? catSlug;

    const data: PageSeoModel = {
        title: categoryName,
        description: `مشاهده و خرید آنلاین ${categoryName} با بهترین قیمت، ضمانت اصالت و ارسال سریع از استیو شاپ.`,
        tags: `${categoryName}, محصولات, گوشی موبایل, لوازم جانبی, خرید آنلاین, استیو شاپ`,
        canonical: `https://stevemobile.com/product/category/${catSlug}`,
        og_title: `${categoryName} | استیو شاپ`,
        og_url: `https://stevemobile.com/product/category/${catSlug}`,
        og_description: `مشاهده و خرید آنلاین ${categoryName} با بهترین قیمت، ضمانت اصالت و ارسال سریع از استیو شاپ.`,
        og_sitename: 'استیو شاپ',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, categoryName);
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
                data={productsResponse.data?.products?.length ? productsResponse.data.products : []}
                brands={brandsResponse.data?.brands?.length ? brandsResponse.data.brands : []}
                categories={categoriesResponse.data?.categories?.length ? categoriesResponse.data.categories : []}
            />
        </>
    );
};

export default CategoryProducts;
