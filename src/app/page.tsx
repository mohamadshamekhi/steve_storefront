import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import Landing from '@/components/page/Landing';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import Categories from '@/config/types/categories.types';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'استیو شاپ | بزرگترین فروشگاه اینترنتی ایران',
        description:
            'خرید آنلاین گوشی موبایل، لوازم جانبی، کالای دیجیتال و دست دوم با بهترین قیمت، ضمانت اصالت و ارسال سریع از استیو شاپ.',
        tags: 'فروشگاه اینترنتی, خرید آنلاین, گوشی موبایل, لوازم جانبی, کالای دیجیتال, استیو شاپ',
        canonical: 'https://stevemobile.com',
        og_title: 'استیو شاپ | بزرگترین فروشگاه اینترنتی ایران',
        og_url: 'https://stevemobile.com',
        og_description:
            'خرید آنلاین گوشی موبایل، لوازم جانبی، کالای دیجیتال و دست دوم با بهترین قیمت، ضمانت اصالت و ارسال سریع از استیو شاپ.',
        og_sitename: 'استیو شاپ',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data);
}

const page = async () => {
    const [
        brands,
        categories,
        articles,
        secondHandProducts,
        bestSellerProduct,
        productsWithAutoDiscount,
        discountProduct,
        banners
    ] = await Promise.all([
        fetcher(ApiKeys.GET_ALL_BRAND, 'web', 'GET'),
        fetcher(ApiKeys.GET_ALL_CATEGORY, 'web', 'GET'),
        fetcher(ApiKeys.GET_BLOG_POSTS, 'web', 'GET'),
        fetcher(ApiKeys.GET_Products, 'web', 'GET', {
            params: {
                order_by: 'most_sold',
                is_second_hand: 'true'
            }
        }),
        fetcher(ApiKeys.GET_Products, 'web', 'GET', {
            params: {
                order_by: 'most_sold'
            }
        }),
        fetcher(ApiKeys.GET_PRODUCT_WITH_AUTO_DISCOUNT, 'web', 'GET'),
        fetcher(ApiKeys.GET_ALL_PRODUCT_DISCOUNT, 'web', 'GET'),
        fetcher(ApiKeys.GET_ALL_BANNER, 'web', 'GET')
    ]);

    const categoriesList: Categories[] = categories?.data?.categories || [];
    const categoryProductsPromises = categoriesList.slice(0, 4).map(async (category) => {
        const response = await fetcher(ApiKeys.GET_Products, 'web', 'GET', {
            params: {
                category_id: category.id,
                limit: 4
            }
        });

        return {
            title: category.name,
            subtitle: 'بر اساس سلیقه شما',
            products: response?.data?.products || [],
            url: category.url || category.link,
            categoryId: category.id
        };
    });

    const categoryProducts = await Promise.all(categoryProductsPromises);

    return (
        <Layout>
            <Landing
                brands={brands?.data?.brands}
                categories={categories?.data?.categories}
                articles={articles?.data?.articles}
                discountProduct={discountProduct?.data?.products || []}
                banners={banners?.data?.banners || []}
                categoryProducts={categoryProducts}
                secondHandProducts={secondHandProducts?.data?.products || []}
                bestSellerProduct={bestSellerProduct?.data?.products || []}
                productsWithAutoDiscount={
                    productsWithAutoDiscount?.data?.Products || productsWithAutoDiscount?.data?.products || []
                }
            />
        </Layout>
    );
};

export default page;
