import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { ProductProps } from '@/components/ui/organisms/ProductsOrganisms/product.types';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

interface Props {
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'محصولات',
        description: 'مشاهده و خرید آنلاین انواع گوشی موبایل، لوازم جانبی و کالای دیجیتال با بهترین قیمت از استیو شاپ.',
        tags: 'محصولات, گوشی موبایل, لوازم جانبی, کالای دیجیتال, خرید آنلاین, استیو شاپ',
        canonical: 'https://stevemobile.com/product',
        og_title: 'محصولات استیو شاپ',
        og_url: 'https://stevemobile.com/product',
        og_description: 'مشاهده و خرید آنلاین انواع گوشی موبایل، لوازم جانبی و کالای دیجیتال با بهترین قیمت از استیو شاپ.',
        og_sitename: 'استیو شاپ',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, 'محصولات');
}

const fetchProductsPosts = async (
    searchParams?: Record<string, string | string[] | undefined>
): Promise<{
    data: {
        products: ProductProps[];
    };
}> => {
    const params: Record<string, string | string[]> = {};

    if (searchParams) {
        Object.entries(searchParams).forEach(([key, value]) => {
            if (value !== undefined) {
                params[key] = value;
            }
        });
    }

    const res = await fetcher(ApiKeys.GET_Products, 'web', 'GET', {
        params
    });
    return res;
};

const Products = async ({ searchParams }: Props) => {
    const resolvedParams = searchParams ? await searchParams : {};
    const [productsResponse, brandsResponse, categoriesResponse] = await Promise.all([
        fetchProductsPosts(resolvedParams),
        fetcher(ApiKeys.GET_ALL_BRAND, 'web', 'GET'),
        fetcher(ApiKeys.GET_ALL_CATEGORY, 'web', 'GET')
    ]);

    return (
        <ClientPage
            data={productsResponse.data?.products?.length ? productsResponse.data.products : []}
            brands={brandsResponse.data?.brands?.length ? brandsResponse.data.brands : []}
            categories={categoriesResponse.data?.categories?.length ? categoriesResponse.data.categories : []}
        />
    );
};

export default Products;
