const keys = {
    GET_Products: '/product/storefront',
    GET_SINGLE_PRODUCT: (id: string) => `/product/storefront/${id}`,
    GET_SINGLE_PRODUCT_BY_SLUG: (slug: string) => `/product/storefront/get-by-slug/${slug}`,
    GET_PRODUCT_WITH_AUTO_DISCOUNT: `/product/storefront/with-auto-discount`,
    UPSERT_RATING: '/rating/storefront/upsert'
};

export default keys;

