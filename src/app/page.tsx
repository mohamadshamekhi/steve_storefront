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
        // NOTE: pageSeoGenerator appends " | استیو موبایل" (titleSuffix) automatically -
        // don't repeat the brand name here or the <title> ends up with it twice.
        title: 'خرید گوشی موبایل و لوازم جانبی',
        description:
            'خرید آنلاین گوشی موبایل، لوازم جانبی، کالای دیجیتال و دست دوم با بهترین قیمت، ضمانت اصالت و ارسال سریع از استیو موبایل.',
        tags: 'فروشگاه اینترنتی, خرید آنلاین, گوشی موبایل, لوازم جانبی, کالای دیجیتال, استیو موبایل',
        canonical: 'https://stevemobile.com',
        og_title: 'استیو موبایل | بزرگترین فروشگاه اینترنتی ایران',
        og_url: 'https://stevemobile.com',
        og_description:
            'خرید آنلاین گوشی موبایل، لوازم جانبی، کالای دیجیتال و دست دوم با بهترین قیمت، ضمانت اصالت و ارسال سریع از استیو موبایل.',
        og_sitename: 'استیو موبایل',
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
        fetcher(ApiKeys.GET_ALL_BRAND, 'web', 'GET', { next: { revalidate: 300 } }),
        fetcher(ApiKeys.GET_ALL_CATEGORY, 'web', 'GET', { next: { revalidate: 300 } }),
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
        fetcher(ApiKeys.GET_ALL_BANNER, 'web', 'GET', { next: { revalidate: 120 } })
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

    // Combined Organization + LocalBusiness (as the more specific
    // MobilePhoneStore subtype, matching phone-repair/page.tsx's schema) in
    // one entity rather than two separate/duplicated schema blocks. This is
    // kept to the homepage on purpose - one canonical entity declaration is
    // what Google expects, not the same block repeated on every page.
    const organizationJsonLd = {
        '@context': 'https://schema.org',
        '@type': ['Organization', 'MobilePhoneStore'],
        name: 'استیو موبایل',
        alternateName: 'استیو شاپ',
        url: 'https://stevemobile.com',
        logo: 'https://stevemobile.com/images/_general/logo.png',
        telephone: '+989379377797',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'ساری، خیابان جمهوری، جنب بانک مسکن، فروشگاه استیو',
            addressLocality: 'ساری',
            addressCountry: 'IR'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 36.5644845,
            longitude: 53.054645
        },
        // only channels confirmed to belong to the store's own brand go here -
        // other footer social links currently point at what look like personal
        // accounts and were left out on purpose (see FooterOrganisms.tsx)
        sameAs: ['https://instagram.com/stevemobile.store']
    };

    // NOTE: no `potentialAction`/SearchAction here on purpose - the site's
    // product search (SearchProducts.tsx) hits /search/storefront and shows
    // results in a dropdown, it doesn't land on a dedicated search-results
    // URL. Add SearchAction back once there's a real `/product?<param>=...`
    // (or similar) page that actually renders filtered results for a query,
    // confirmed against the backend - otherwise Google's sitelinks search box
    // would send users to a broken/unfiltered page.
    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'استیو موبایل',
        url: 'https://stevemobile.com'
    };

    return (
        <Layout>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
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
