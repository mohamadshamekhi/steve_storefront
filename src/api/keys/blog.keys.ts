const keys = {
    GET_BLOG_POSTS: '/article/storefront',
    GET_BLOG_SINGLE: (slug: string) => `/article/storefront/get-by-slug/${slug}`
};

export default keys;

