import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { SingleProductItem } from '@/models/product.model';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { truncateText } from '@/utils/string.util';
import { discountedPrice, variantDiscount } from '@/utils/price.util';
import { isVariantInStock } from '@/utils/stock.util';
import { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';
import ClientPage from './client-page';

// API prices are in Toman; schema.org/OG need an ISO currency, so they are sent as Rial.
const TOMAN_TO_RIAL = 10;

// JSON for a <script> tag: escape "<" so admin-entered text can't close the tag early.
const toJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

const stripHtml = (html?: string) => (html ? html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : '');

// ISR: re-render this route at most every 2 minutes instead of on every single request
export const revalidate = 120;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const productResponse = await fetchSingleProduct(slug);
    const product = productResponse?.data?.product;

    const primaryImage = product?.gallery?.find((img) => img.is_primary)?.url || product?.gallery?.[0]?.url;
    const lowestPrice = product?.variants?.length
        ? Math.min(...product.variants.map((v) => discountedPrice(v.price, variantDiscount(v.id, product.discount))))
        : undefined;
    // SEO fields from the panel win; otherwise fall back to the product's own name/description.
    // word-boundary truncation instead of a raw char slice, so the meta
    // description doesn't get cut off mid-word/mid-sentence
    const seoTitle = product?.seo_title?.trim() || product?.name;
    const plainDescription = truncateText(product?.seo_description?.trim() || stripHtml(product?.description), 160);
    // canonical always points at the product's current slug, even if this request came in on an old one
    const canonical = `https://stevemobile.com/product/${product?.slug ?? slug}`;

    const data: PageSeoModel = {
        title: seoTitle ?? 'جزییات محصول',
        description: plainDescription,
        tags: [product?.focus_keyword, product?.brand?.name, product?.category?.name, 'خرید', 'استیو موبایل']
            .filter(Boolean)
            .join(', '),
        canonical,
        og_title: seoTitle ?? '',
        og_url: canonical,
        og_description: plainDescription,
        og_sitename: 'استیو موبایل',
        og_image: primaryImage
            ? {
                  data: {
                      attributes: {
                          url: primaryImage,
                          alternativeText:
                              product?.gallery?.find((img) => img.url === primaryImage)?.alt?.trim() || product?.name || '',
                          width: 1200,
                          height: 630
                      }
                  }
              }
            : undefined,
        noindex: false,
        nofollow: false
    };

    const seo = pageSeoGenerator(data, seoTitle);

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
                    'product:price:amount': (lowestPrice * TOMAN_TO_RIAL).toString(),
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

    // The API also answers for a product's old slug (after a rename); send visitors and crawlers to the current URL.
    if (product?.slug && product.slug !== slug && product.slug !== decodeURIComponent(slug)) {
        permanentRedirect(`/product/${encodeURIComponent(product.slug)}`);
    }

    const commentsResponse = await fetcher(ApiKeys.GET_PRODUCT_COMMENTS(product?._id), 'web', 'GET');
    const comments = commentsResponse?.data?.comments || [];

    const relatedProductsResponse = await fetcher(
        `${ApiKeys.GET_Products}?brand_id=${product?.brand?.id}`,
        'web',
        'GET'
    );
    const relatedProducts = relatedProductsResponse?.data?.products || [];

    const productUrl = `https://stevemobile.com/product/${product?.slug ?? slug}`;
    const prices = product?.variants?.map((v) => discountedPrice(v.price, variantDiscount(v.id, product.discount))) ?? [];
    const ratingCount = product?.rating_count || 0;
    const jsonLd = product
        ? {
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: product.name,
              description: truncateText(product.seo_description?.trim() || stripHtml(product.description), 500),
              image: product.gallery?.map((item) => item.url) ?? [],
              sku: product._id,
              url: productUrl,
              ...(product.brand?.name && { brand: { '@type': 'Brand', name: product.brand.name } }),
              // only real ratings: users who rated (rating_count), or — for products rated before
              // the count existed — the approved reviews shown on the page
              ...(product.rating > 0 &&
                  (ratingCount > 0 || comments.length > 0) && {
                      aggregateRating: {
                          '@type': 'AggregateRating',
                          ratingValue: Math.round(product.rating * 10) / 10,
                          bestRating: 5,
                          worstRating: 1,
                          ...(ratingCount > 0 ? { ratingCount } : { reviewCount: comments.length })
                      }
                  }),
              ...(prices.length > 0 && {
                  offers: {
                      '@type': 'AggregateOffer',
                      priceCurrency: 'IRR',
                      lowPrice: Math.min(...prices) * TOMAN_TO_RIAL,
                      highPrice: Math.max(...prices) * TOMAN_TO_RIAL,
                      offerCount: product.variants.length,
                      availability: product.variants.some((v) => isVariantInStock(v))
                          ? 'https://schema.org/InStock'
                          : 'https://schema.org/OutOfStock',
                      itemCondition: product.is_second_hand
                          ? 'https://schema.org/UsedCondition'
                          : 'https://schema.org/NewCondition',
                      seller: { '@type': 'Organization', name: 'استیو موبایل', url: 'https://stevemobile.com' },
                      url: productUrl
                  }
              })
          }
        : null;

    const faqItems = product?.faq?.filter((f) => f.question?.trim() && f.answer?.trim()) ?? [];
    const faqJsonLd =
        faqItems.length > 0
            ? {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: faqItems.map((f) => ({
                      '@type': 'Question',
                      name: f.question.trim(),
                      acceptedAnswer: { '@type': 'Answer', text: f.answer.trim() }
                  }))
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
                      item: productUrl
                  }
              ]
          }
        : null;

    return (
        <>
            {jsonLd && (
                <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />
            )}
            {faqJsonLd && (
                <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: toJsonLd(faqJsonLd) }} />
            )}
            {breadcrumbJsonLd && (
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbJsonLd) }}
                />
            )}
            <ClientPage slug={slug} product={product} comments={comments} relatedProducts={relatedProducts} />
        </>
    );
}

