import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { SingleProductItem } from '@/models/product.model';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next';
import ClientPage from './client-page';

// ISR: re-render this route at most every 2 minutes instead of on every single request
export const revalidate = 120;

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
        ...(product?._id && {
            other: {
                // required by third-party product-comparison feeds (e.g. Torob) to identify this product
                product_id: product._id,
                ...(lowestPrice && {
                    'product:price:amount': lowestPrice.toString(),
                    'product:price:currency': 'IRR'
                })
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

    const jsonLd = product
        ? {
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: product.name,
              description: product.description?.replace(/<[^>]*>/g, '').slice(0, 500) ?? '',
              image: product.gallery?.map((item) => item.url) ?? [],
              sku: product._id,
              url: `https://stevemobile.com/product/${slug}`,
              ...(product.brand?.name && { brand: { '@type': 'Brand', name: product.brand.name } }),
              ...(product.rating > 0 &&
                  comments.length > 0 && {
                      aggregateRating: {
                          '@type': 'AggregateRating',
                          ratingValue: product.rating,
                          reviewCount: comments.length
                      }
                  }),
              ...(product.variants?.length > 0 && {
                  offers: {
                      '@type': 'AggregateOffer',
                      priceCurrency: 'IRR',
                      lowPrice: Math.min(...product.variants.map((v) => v.price)),
                      highPrice: Math.max(...product.variants.map((v) => v.price)),
                      offerCount: product.variants.length,
                      availability: product.variants.some((v) => v.quantity > 0)
                          ? 'https://schema.org/InStock'
                          : 'https://schema.org/OutOfStock',
                      url: `https://stevemobile.com/product/${slug}`
                  }
              })
          }
        : null;

    const breadcrumbJsonLd = product
        ? {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://stevemobile.com' },
                  {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'لیست محصولات',
                      item: 'https://stevemobile.com/product'
                  },
                  ...(product.category?.name
                      ? [
                            {
                                '@type': 'ListItem',
                                position: 3,
                                name: product.category.name,
                                item: `https://stevemobile.com/product/category/${product.category.slug}`
                            }
                        ]
                      : []),
                  {
                      '@type': 'ListItem',
                      position: product.category?.name ? 4 : 3,
                      name: product.name,
                      item: `https://stevemobile.com/product/${slug}`
                  }
              ]
          }
        : null;

    return (
        <>
            {jsonLd && (
                <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            )}
            {breadcrumbJsonLd && (
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                />
            )}
            <ClientPage slug={slug} product={product} comments={comments} relatedProducts={relatedProducts} />
        </>
    );
}

