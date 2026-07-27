const keys = {
    GET_ALL_COMMENTS: '/comment',
    GET_PRODUCT_COMMENTS: (productId: string) => `/comment/storefront/product/${productId}`,
    GET_ARTICLE_COMMENTS: (articleId: string) => `/comment/storefront/article/${articleId}`,
    ADD_COMMENT: '/comment/add'
};

export default keys;
