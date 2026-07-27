import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { SingleProductItem } from '@/models/product.model';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next';
import ClientPage from './client-page';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const productResponse = await fetchSingleProduct(slug);
    const product = productResponse?.data?.product;

    const primaryImage = product?.gallery?.find((img) => img.is_primary)?.url || product?.gallery?.[0]?.url;
    const lowestPrice = product?.variants?.length
        ? Math.min(...product.variants.map((v) => v.price))
        : undefined;

    const data: PageSeoModel = {
        title: product?.name ?? 'جزییات محصول',
        description: product?.description?.replace(/<[^>]*>/g, '').slice(0, 160) ?? '',
        tags: [product?.brand?.name, product?.category?.name, 'خرید', 'استیو شاپ'].filter(Boolean).join(', '),
        canonical: `https://stevemobile.com/product/${slug}`,
        og_title: product?.name ?? '',
        og_url: `https://stevemobile.com/product/${slug}`,
        og_description: product?.description?.replace(/<[^>]*>/g, '').slice(0, 160) ?? '',
        og_sitename: 'استیو شاپ',
        og_image: primaryImage
            ? {
                  data: {
                      attributes: {
                          url: primaryImage,
                          alternativeText: product?.name ?? '',
                          width: 1200,
                          height: 630
                      }
                  }
              }
            : undefined,
        noindex: false,
        nofollow: false
    };

    const seo = pageSeoGenerator(data, product?.name);

    return {
        ...seo,
        openGraph: {
            ...seo.openGraph,
            type: 'website'
        },
        twitter: {
            ...seo.twitter,
            images: primaryImage ? [primaryImage] : undefined
        },
        ...(lowestPrice && {
            other: {
                'product:price:amount': lowestPrice.toString(),
                'product:price:currency': 'IRR'
            }
        })
    };
}

const fetchSingleProduct = async (
    slug: string
): Promise<{
    data: {
        product: SingleProductItem;
    };
}> => {
    const res = await fetcher(ApiKeys.GET_SINGLE_PRODUCT_BY_SLUG(slug), 'web', 'GET');
    return res;
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productResponse = await fetchSingleProduct(slug);
    const product = productResponse?.data?.product;

    const commentsResponse = await fetcher(ApiKeys.GET_PRODUCT_COMMENTS(product?._id), 'web', 'GET');
    const comments = commentsResponse?.data?.comments || [];

    const relatedProductsResponse = await fetcher(
        `${ApiKeys.GET_Products}?brand_id=${product?.brand?.id}`,
        'web',
        'GET'
    );
    const relatedProducts = relatedProductsResponse?.data?.products || [];

    return <ClientPage slug={slug} product={product} comments={comments} relatedProducts={relatedProducts} />;
}

