module.exports = [
"[project]/src/api/config/retry-blacklist.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const retryBlacklist = [
    ''
];
const __TURBOPACK__default__export__ = retryBlacklist;
}),
"[project]/src/api/config/error-retry.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$retry$2d$blacklist$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/retry-blacklist.ts [app-rsc] (ecmascript)");
;
const swrOnErrorRetry = (error, key, config, revalidate, { retryCount })=>{
    // Never retry on 404.
    if (error.status === 404) return;
    // Never retry for a specific key.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$retry$2d$blacklist$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].indexOf(key) > -1) return;
    // Only retry up to 10 times.
    if (retryCount >= 10) return;
    // Retry after 3 seconds.
    setTimeout(()=>{
        revalidate({
            retryCount
        });
    }, 3000);
};
const __TURBOPACK__default__export__ = swrOnErrorRetry;
}),
"[project]/src/state/stores/auth/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSessionStore",
    ()=>useSessionStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/react.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/middleware.mjs [app-rsc] (ecmascript)");
;
;
const fetchSessionFromApi = async ()=>{
    try {
        const response = await fetch('/api/auth/session');
        if (response.ok) {
            const data = await response.json();
            return data ? {
                session: {
                    session: data.session ?? null,
                    profile: data.profile ?? null
                },
                status: 'authenticated'
            } : {
                session: {
                    session: null,
                    profile: null
                },
                status: 'unauthenticated'
            };
        }
        return {
            session: {
                session: null,
                profile: null
            },
            status: 'unauthenticated'
        };
    } catch  {
        return {
            session: {
                session: null,
                profile: null
            },
            status: 'unauthenticated'
        };
    }
};
const useSessionStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        session: {
            profile: null,
            session: null
        },
        status: 'loading',
        clearSession: ()=>{
            set({
                session: {
                    profile: null,
                    session: null
                },
                status: 'unauthenticated'
            });
        },
        updateSession: async ()=>{
            const { session, status } = await fetchSessionFromApi();
            set({
                session,
                status
            });
        },
        updateProfile: (updates)=>{
            set((state)=>({
                    session: {
                        ...state.session,
                        profile: state.session.profile ? {
                            ...state.session.profile,
                            ...updates
                        } : null
                    }
                }));
        }
    }), {
    name: 'auth-storage',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    partialize: (state)=>({
            session: state.session,
            status: state.status
        })
}));
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
"[project]/src/api/config/global-error-report.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const onSwrGlobalError = (err, key, config)=>{
    console.log(`level: error \n message: ${err.message} \n ${{
        key,
        extra: config,
        name: err.name,
        stack: err.stack
    }}`);
};
const __TURBOPACK__default__export__ = onSwrGlobalError;
}),
"[project]/src/utils/cookie.util.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCookieUniversal",
    ()=>getCookieUniversal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nookies$40$2$2e$5$2e$2$2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nookies@2.5.2/node_modules/nookies/dist/index.js [app-rsc] (ecmascript)");
;
async function getCookieUniversal(name) {
    if ("TURBOPACK compile-time truthy", 1) {
        const { cookies } = await __turbopack_context__.A("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/headers.js [app-rsc] (ecmascript, async loader)");
        const cookieStore = await cookies();
        return cookieStore.get(name)?.value || null;
    }
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/api/config/media-uploader.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cookie$2e$util$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cookie.util.ts [app-rsc] (ecmascript)");
;
const mediaUploader = async ({ file, domain, isPublic = true, convertToWebp = true })=>{
    const access_token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cookie$2e$util$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookieUniversal"])('steve-session');
    if (!access_token || access_token.length < 5) {
        return {
            success: false,
            message: 'برای آپلود تصویر باید وارد حساب کاربری شوید'
        };
    }
    const formData = new FormData();
    formData.append('domain', domain);
    formData.append('file', file);
    formData.append('is_public', String(isPublic));
    formData.append('convert_to_webp', String(convertToWebp));
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/media/storefront/upload`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${access_token}`
            },
            body: formData
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'خطا در آپلود تصویر'
        };
    }
};
const __TURBOPACK__default__export__ = mediaUploader;
}),
"[project]/src/api/config/uploader.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const uploader = async ({ url, files, bearer })=>{
    const headersList = {};
    headersList['Authorization'] = `Bearer ${bearer}`;
    const formData = new FormData();
    files.forEach((file)=>{
        formData.append(`files`, file, file.name);
    });
    const response = await fetch([
        process.env['NEXT_PUBLIC_API_URL'],
        url
    ].join(''), {
        method: 'PUT',
        headers: headersList,
        body: formData
    });
    return response?.json();
};
const __TURBOPACK__default__export__ = uploader;
}),
"[project]/src/api/config/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$fetcher$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "mediaUploader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$media$2d$uploader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "onSwrGlobalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$global$2d$error$2d$report$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "swrOnErrorRetry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$error$2d$retry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "uploader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$uploader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/api/config/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$error$2d$retry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/error-retry.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$fetcher$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/fetcher.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$global$2d$error$2d$report$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/global-error-report.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$media$2d$uploader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/media-uploader.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$uploader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/uploader.ts [app-rsc] (ecmascript)");
}),
"[project]/src/api/keys/auth.keys.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const keys = {
    LOGIN: '/user/send-otp',
    VERIFY_LOGIN: '/user/verify-otp',
    LOGOUT: '/user/logout',
    ME: '/user/me'
};
const __TURBOPACK__default__export__ = keys;
}),
"[project]/src/api/keys/blog.keys.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const keys = {
    GET_BLOG_POSTS: '/article/storefront',
    GET_BLOG_SINGLE: (slug)=>`/article/storefront/get-by-slug/${slug}`
};
const __TURBOPACK__default__export__ = keys;
}),
"[project]/src/api/keys/cart.keys.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const cartKeys = {
    GET_ACTIVE_CART: '/cart/get-active',
    ADD_ITEM: '/cart/add-item',
    REMOVE_ITEM: '/cart/remove-item',
    CALC_CART: '/cart/calc-cart',
    REGISTER_ORDER: '/order/register',
    GET_SHIPPING_METHODS: '/shipping/storefront',
    START_PAYMENT: '/payment/storefront/start',
    VERIFY_PAYMENT: '/payment/storefront/verify',
    GET_ALL_ORDERS: '/order/storefront/all'
};
const __TURBOPACK__default__export__ = cartKeys;
}),
"[project]/src/api/keys/comment.keys.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const keys = {
    GET_ALL_COMMENTS: '/comment',
    GET_PRODUCT_COMMENTS: (productId)=>`/comment/storefront/product/${productId}`,
    GET_ARTICLE_COMMENTS: (articleId)=>`/comment/storefront/article/${articleId}`,
    ADD_COMMENT: '/comment/add'
};
const __TURBOPACK__default__export__ = keys;
}),
"[project]/src/api/keys/common.keys.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const keys = {
    POST_CONTACT_US: '/contact-us/storefront',
    POST_MEDIA_UPLOAD: '/media/storefront/upload'
};
const __TURBOPACK__default__export__ = keys;
}),
"[project]/src/api/keys/dashboard.keys.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const dashboardKeys = {
    GET_ORDER_STATICS: '/order/storefront/user-order/statics',
    GET_SELL_STATICS: '/sell/storefront/user-sell/statics',
    GET_REPAIR_STATICS: '/repair/storefront/user-repair/statics',
    GET_MY_REPAIRS: '/repair/storefront/my-repair',
    GET_MY_SELLS: '/sell/storefront/my-sell',
    UPDATE_ADDRESS: '/user/update-address',
    ADD_ADDRESS: '/user/add-address',
    UPDATE_PROFILE: '/user'
};
const __TURBOPACK__default__export__ = dashboardKeys;
}),
"[project]/src/api/keys/landing.keys.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const keys = {
    GET_ALL_BRAND: '/brand/storefront',
    GET_ALL_CATEGORY: '/category/storefront',
    GET_ALL_PRODUCT_DISCOUNT: '/product/storefront/get-products-with-special-discount',
    GET_ALL_BANNER: '/banner/storefront',
    GET_CATEGORY_FILTERS: '/category/storefront/get-filter'
};
const __TURBOPACK__default__export__ = keys;
}),
"[project]/src/api/keys/phoneSales.keys.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const keys = {
    POST_PHONE_SALES: '/sell/storefront/add',
    POST_PHONE_REPAIR: '/repair/storefront/add'
};
const __TURBOPACK__default__export__ = keys;
}),
"[project]/src/api/keys/product.keys.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const keys = {
    GET_Products: '/product/storefront',
    GET_SINGLE_PRODUCT: (id)=>`/product/storefront/${id}`,
    GET_SINGLE_PRODUCT_BY_SLUG: (slug)=>`/product/storefront/get-by-slug/${slug}`,
    GET_PRODUCT_WITH_AUTO_DISCOUNT: `/product/storefront/with-auto-discount`,
    UPSERT_RATING: '/rating/storefront/upsert'
};
const __TURBOPACK__default__export__ = keys;
}),
"[project]/src/api/keys/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$auth$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/auth.keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$blog$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/blog.keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$cart$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/cart.keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$comment$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/comment.keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$common$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/common.keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$dashboard$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/dashboard.keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$landing$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/landing.keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$phoneSales$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/phoneSales.keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$product$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/product.keys.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const ApiKeys = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$auth$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$blog$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$cart$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$product$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$landing$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$phoneSales$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$common$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$comment$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$dashboard$2e$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
};
const __TURBOPACK__default__export__ = ApiKeys;
}),
"[project]/src/state/stores/cart/cart.types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/state/stores/cart/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCartStore",
    ()=>useCartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/api/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/react.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/middleware.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/auth/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$cart$2f$cart$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/cart/cart.types.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        cart: null,
        items: [],
        status: 'idle',
        itemCount: 0,
        subtotal: 0,
        finalPrice: 0,
        isReady: false,
        discountCode: null,
        discountedSubtotal: 0,
        isAuthenticated: ()=>{
            const authStatus = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSessionStore"].getState().status;
            return authStatus === 'authenticated';
        },
        fetchCart: async ()=>{
            if (!get().isAuthenticated()) {
                set({
                    cart: null,
                    items: [],
                    status: 'idle',
                    itemCount: 0,
                    subtotal: 0,
                    finalPrice: 0,
                    isReady: false
                });
                return;
            }
            set({
                status: 'loading'
            });
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].GET_ACTIVE_CART, 'dashboard', 'GET', {
                    requiredAuth: true
                });
                if (response?.success && response.data?.cart) {
                    const cart = response.data.cart;
                    const items = cart.items || [];
                    const itemCount = items.reduce((acc, item)=>acc + item.Quantity, 0);
                    const summary = items[0]?.summary;
                    set({
                        cart,
                        items,
                        status: 'idle',
                        itemCount,
                        subtotal: summary?.subtotal || cart.subtotal || 0,
                        finalPrice: summary?.final_price || cart.subtotal || 0,
                        isReady: summary?.is_ready ?? true
                    });
                } else {
                    // Cart is empty
                    set({
                        cart: null,
                        items: [],
                        status: 'idle',
                        itemCount: 0,
                        subtotal: 0,
                        finalPrice: 0,
                        isReady: false
                    });
                }
            } catch  {
                set({
                    status: 'error'
                });
            }
        },
        addItem: async (payload)=>{
            if (!get().isAuthenticated()) {
                return false;
            }
            set({
                status: 'loading'
            });
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].ADD_ITEM, 'dashboard', 'POST', {
                    requiredAuth: true,
                    body: payload
                });
                if (response?.success) {
                    await get().fetchCart();
                    return true;
                }
                set({
                    status: 'idle'
                });
                return false;
            } catch  {
                set({
                    status: 'error'
                });
                return false;
            }
        },
        removeItem: async (payload)=>{
            if (!get().isAuthenticated()) {
                return false;
            }
            set({
                status: 'loading'
            });
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].REMOVE_ITEM, 'dashboard', 'POST', {
                    requiredAuth: true,
                    body: payload
                });
                if (response?.success) {
                    await get().fetchCart();
                    return true;
                }
                set({
                    status: 'idle'
                });
                return false;
            } catch  {
                set({
                    status: 'error'
                });
                return false;
            }
        },
        applyDiscount: async (discountCode)=>{
            if (!get().isAuthenticated()) {
                return {
                    success: false,
                    message: 'لطفا وارد حساب کاربری خود شوید'
                };
            }
            set({
                status: 'loading'
            });
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].CALC_CART, 'dashboard', 'POST', {
                    requiredAuth: true,
                    body: {
                        discount_code: discountCode
                    }
                });
                if (response?.success && response?.data) {
                    const data = response.data;
                    set({
                        status: 'idle',
                        subtotal: data.subtotal || 0,
                        finalPrice: data.final_price || 0,
                        discountedSubtotal: data.discounted_subtotal || 0,
                        discountCode: discountCode,
                        isReady: data.is_ready ?? true
                    });
                    return {
                        success: true
                    };
                }
                set({
                    status: 'idle'
                });
                return {
                    success: false,
                    message: response?.message || 'کد تخفیف نامعتبر است'
                };
            } catch  {
                set({
                    status: 'error'
                });
                return {
                    success: false,
                    message: 'خطا در اعمال کد تخفیف'
                };
            }
        },
        clearCart: ()=>{
            set({
                cart: null,
                items: [],
                status: 'idle',
                itemCount: 0,
                subtotal: 0,
                finalPrice: 0,
                isReady: false,
                discountCode: null,
                discountedSubtotal: 0
            });
        },
        getItemQuantity: (productId, variantId)=>{
            const items = get().items;
            const item = items.find((i)=>i.product_id === productId && i.variant_id === variantId);
            return item?.Quantity || 0;
        }
    }), {
    name: 'cart-storage',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    partialize: (state)=>({
            cart: state.cart,
            items: state.items,
            itemCount: state.itemCount,
            subtotal: state.subtotal,
            finalPrice: state.finalPrice,
            isReady: state.isReady
        })
}));
// Subscribe to auth changes - clear cart when user logs out
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
;
}),
"[project]/src/state/stores/toast/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToastStore",
    ()=>useToastStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/react.mjs [app-rsc] (ecmascript)");
;
const useToastStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"])((set)=>({
        toasts: [],
        showToast: (toast)=>{
            const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
            const duration = toast.duration ?? 3000;
            const newToast = {
                ...toast,
                id,
                duration
            };
            set((state)=>({
                    toasts: [
                        ...state.toasts,
                        newToast
                    ]
                }));
            setTimeout(()=>{
                set((state)=>({
                        toasts: state.toasts.filter((t)=>t.id !== id)
                    }));
            }, duration);
        },
        removeToast: (id)=>set((state)=>({
                    toasts: state.toasts.filter((t)=>t.id !== id)
                }))
    }));
}),
"[project]/src/state/stores/user-preferences/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserPreferencesStore",
    ()=>useUserPreferencesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/react.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/middleware.mjs [app-rsc] (ecmascript)");
;
;
const useUserPreferencesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        activeAddressId: null,
        activeAddress: null,
        setActiveAddress: (address)=>{
            set({
                activeAddress: address,
                activeAddressId: address?.id || null
            });
        },
        setActiveAddressById: (addressId, addresses)=>{
            const address = addresses.find((a)=>a.id === addressId) || null;
            set({
                activeAddress: address,
                activeAddressId: addressId
            });
        },
        clearPreferences: ()=>{
            set({
                activeAddressId: null,
                activeAddress: null
            });
        }
    }), {
    name: 'user-preferences-storage',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    partialize: (state)=>({
            activeAddressId: state.activeAddressId,
            activeAddress: state.activeAddress
        })
}));
}),
"[project]/src/state/stores/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/auth/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$cart$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/state/stores/cart/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$toast$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/toast/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$user$2d$preferences$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/user-preferences/index.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/src/state/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/state/stores/index.ts [app-rsc] (ecmascript) <locals>");
;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[project]/src/api/config/fetcher.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/state/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$toast$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/toast/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cookie$2e$util$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cookie.util.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nookies$40$2$2e$5$2e$2$2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nookies@2.5.2/node_modules/nookies/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$querystring__$5b$external$5d$__$28$querystring$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/querystring [external] (querystring, cjs)");
;
;
;
;
const getFetchPath = (location)=>{
    switch(location){
        case 'dashboard':
        case 'web':
            return process.env.NEXT_PUBLIC_API_URL;
        default:
            return '';
    }
};
const fetcher = async (fetcherKey, location, method, options)=>{
    let requiredAuth = true;
    if (options && options.requiredAuth === false || location !== 'dashboard') {
        requiredAuth = false;
    }
    const headersList = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...options && options.headers && {
            body: JSON.stringify(options.headers)
        }
    };
    if (requiredAuth) {
        // const cookie = parseCookies();
        // const access_token = cookie['steve-session'];
        const access_token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cookie$2e$util$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookieUniversal"])('steve-session');
        if (!access_token || access_token.length < 5) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nookies$40$2$2e$5$2e$2$2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["destroyCookie"])(null, 'steve-session');
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return;
        }
        headersList.Authorization = `Bearer ${access_token}`;
    }
    const requestInit = {
        method,
        headers: headersList,
        ...options && options.body && {
            body: JSON.stringify(options.body)
        }
    };
    try {
        // initial url structure
        const constructUrl = [
            getFetchPath(location),
            fetcherKey
        ];
        // add query params to url
        if (options && options.params) {
            constructUrl.push(`?${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$querystring__$5b$external$5d$__$28$querystring$2c$__cjs$29$__["stringify"])(options.params)}`);
        }
        console.log(`${method} -> ${location} -> ${requiredAuth ? '🔒' : ''} ${constructUrl.join('')} `);
        // send a request
        const response = await fetch(constructUrl.join(''), requestInit);
        if (!response.ok) {
            if (response?.status === 401) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$toast$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useToastStore"].getState().showToast({
                    message: 'مشکل در احراز هویت٬ دوباره وارد شوید',
                    type: 'error',
                    duration: 5000
                });
                // TODO : redirect to /logout page
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nookies$40$2$2e$5$2e$2$2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["destroyCookie"])(null, 'steve-session');
                window.location.href = '/auth/sign-in';
                return;
            }
            const error = {
                status: response?.status || 500,
                message: response?.statusText || 'مشکلی پیش امده'
            };
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return error;
        }
        return response.json();
    } catch (error) {
        if (error?.status === 401) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$toast$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useToastStore"].getState().showToast({
                message: 'مشکل در احراز هویت٬ دوباره وارد شوید',
                type: 'error',
                duration: 5000
            });
            // TODO : redirect to /logout page
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nookies$40$2$2e$5$2e$2$2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["destroyCookie"])(null, 'steve-session');
            window.location.href = '/auth/sign-in';
            return;
        }
        const fetchError = {
            status: error?.status || 500,
            message: error?.statusText || 'مشکلی پیش امده'
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return fetchError;
    }
};
const __TURBOPACK__default__export__ = fetcher;
}),
"[project]/src/api/config/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$error$2d$retry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/error-retry.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$fetcher$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/fetcher.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$global$2d$error$2d$report$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/global-error-report.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$media$2d$uploader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/media-uploader.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$uploader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/uploader.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/src/api/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/api/config/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/index.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/src/actions/auth.action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0097bdc40ef768406238d176f33dda408737f5e526":"signOutAction","40720411efdcbfa83319084ea7bb96549c678c9605":"setAuthCookieAction","409f432709dd932afc8dffb37bd1aedeb0aa125d35":"signInVerifyAction","40f4d6b2a3925edb0a3d7795684ab626e226be5770":"signInAction"},"",""] */ __turbopack_context__.s([
    "setAuthCookieAction",
    ()=>setAuthCookieAction,
    "signInAction",
    ()=>signInAction,
    "signInVerifyAction",
    ()=>signInVerifyAction,
    "signOutAction",
    ()=>signOutAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/api/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function signInAction(model) {
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].LOGIN, 'web', 'POST', {
            body: {
                ...model
            }
        });
        if (response) {
            return {
                success: true,
                ...response
            };
        }
    } catch (error) {
        return {
            success: false,
            error
        };
    }
}
async function signInVerifyAction(authParams) {
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].VERIFY_LOGIN, 'web', 'POST', {
            body: {
                ...authParams
            }
        });
        if (response) {
            await setAuthCookieAction(response.data.token);
            return {
                success: true,
                ...response
            };
        }
    } catch (error) {
        return {
            success: false,
            error
        };
    }
}
async function signOutAction() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionCookie = await cookieStore.get('steve-session')?.value;
    if (!sessionCookie) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].LOGOUT, 'dashboard', 'POST');
        cookieStore.delete('steve-session');
    } catch  {
        cookieStore.delete('steve-session');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
}
async function setAuthCookieAction(token) {
    // const decoded = jwtDecode<JWT>(token);
    // const session: JWT = {
    //     sub: decoded.sub,
    //     exp: decoded.exp * 1000,
    //     entity_id: decoded.entity_id,
    //     kind: decoded.kind,
    //     role_keys: decoded.role_keys,
    //     permission_keys: decoded.permission_keys
    // };
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    // const encryptedSession = await encryptSession(session);
    const thirtyDays = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    cookieStore.set('steve-session', token, {
        httpOnly: false,
        secure: true,
        sameSite: 'lax',
        path: '/',
        expires: thirtyDays
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signInAction,
    signInVerifyAction,
    signOutAction,
    setAuthCookieAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signInAction, "40f4d6b2a3925edb0a3d7795684ab626e226be5770", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signInVerifyAction, "409f432709dd932afc8dffb37bd1aedeb0aa125d35", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signOutAction, "0097bdc40ef768406238d176f33dda408737f5e526", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setAuthCookieAction, "40720411efdcbfa83319084ea7bb96549c678c9605", null);
}),
"[project]/.next-internal/server/app/blog/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.action.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/blog/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0097bdc40ef768406238d176f33dda408737f5e526",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOutAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$blog$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/blog/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/auth.action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.action.ts [app-rsc] (ecmascript)");
}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/seo/models/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/config/utilities/seo.utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const DefaultSeo = {
    titleSuffix: '| استیو شاپ',
    title: 'استیو شاپ؛ بزرگترین فروشگاه اینترنتی ایران | استیو شاپ',
    description: 'استیو شاپ سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل شده است. استیو کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، سرعت ارسال بالا، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در ایران محسوب می‌شود.',
    keywords: 'فروشگاه آنلاین, فروشگاه اینترنتی, آنلاین شاپ, لوازم دست دوم, فروش گوشی',
    canonical: 'https://sitename.domain',
    nofollow: 'false',
    noindex: 'false',
    og: {
        title: 'استیو شاپ؛ بزرگترین فروشگاه اینترنتی ایران | استیو شاپ',
        description: 'استیو شاپ سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل شده است. استیو کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، سرعت ارسال بالا، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در ایران محسوب می‌شود.',
        url: 'https://sitename.domain',
        sitename: 'استیو شاپ'
    },
    twitter: {
        title: 'استیو شاپ؛ بزرگترین فروشگاه اینترنتی ایران | استیو شاپ',
        description: 'استیو شاپ سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل شده است. استیو کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، سرعت ارسال بالا، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در ایران محسوب می‌شود.',
        site: '@steve',
        card: 'summary_large_image',
        images: [
            'https://sitename.domain/logo.png'
        ]
    }
};
const __TURBOPACK__default__export__ = DefaultSeo;
}),
"[project]/src/seo/utilities/page-seo-generator.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/utilities/seo.utils.ts [app-rsc] (ecmascript)");
;
const pageSeoGenerator = (pageSeo, titleRewrite)=>{
    const seo = pageSeo;
    if (!pageSeo || !seo) return {};
    const image = seo?.og_image?.data.attributes;
    let title = seo.title ? seo.title : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].title;
    if (titleRewrite) title = titleRewrite;
    return {
        title: `${title} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].titleSuffix}`,
        description: seo.description ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].description,
        keywords: seo.tags ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].keywords,
        alternates: {
            canonical: seo?.canonical ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].canonical
        },
        robots: {
            index: seo?.noindex !== undefined ? !seo.noindex : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].noindex !== 'true',
            follow: seo?.nofollow !== undefined ? !seo.nofollow : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].nofollow !== 'true'
        },
        openGraph: {
            title: seo.og_title ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].og.title,
            url: seo.og_url ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].og.url,
            description: seo.og_description ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].og.description,
            siteName: seo.og_sitename ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].og.sitename,
            locale: 'fa_IR',
            type: 'website',
            ...image && {
                images: {
                    url: image.url,
                    secureUrl: image.url,
                    alt: image.alternativeText,
                    width: image.width,
                    height: image.height
                }
            }
        },
        twitter: {
            title: seo.title ? `${seo.title} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].titleSuffix}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].title} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].titleSuffix}`,
            description: seo.description ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].description,
            site: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].twitter.site,
            card: 'summary_large_image',
            images: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$utilities$2f$seo$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].twitter.images
        }
    };
};
const __TURBOPACK__default__export__ = pageSeoGenerator;
}),
"[project]/src/seo/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$seo$2f$models$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/seo/models/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$seo$2f$utilities$2f$page$2d$seo$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/seo/utilities/page-seo-generator.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/src/seo/utilities/page-seo-generator.ts [app-rsc] (ecmascript) <export default as pageSeoGenerator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pageSeoGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$seo$2f$utilities$2f$page$2d$seo$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$seo$2f$utilities$2f$page$2d$seo$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/seo/utilities/page-seo-generator.ts [app-rsc] (ecmascript)");
}),
"[project]/src/app/blog/client-page.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/blog/client-page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/blog/client-page.tsx <module evaluation>", "default");
}),
"[project]/src/app/blog/client-page.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/blog/client-page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/blog/client-page.tsx", "default");
}),
"[project]/src/app/blog/client-page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$client$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/blog/client-page.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$client$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/blog/client-page.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$client$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/api/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$seo$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/seo/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$seo$2f$utilities$2f$page$2d$seo$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__pageSeoGenerator$3e$__ = __turbopack_context__.i("[project]/src/seo/utilities/page-seo-generator.ts [app-rsc] (ecmascript) <export default as pageSeoGenerator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$client$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/blog/client-page.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function generateMetadata() {
    const data = {
        title: 'وبلاگ',
        description: 'آخرین مقالات و اخبار تکنولوژی را در وبلاگ استیو شاپ بخوانید',
        tags: 'وبلاگ, مقالات, اخبار تکنولوژی, استیو شاپ',
        canonical: 'https://stevemobile.com/blog',
        og_title: 'وبلاگ استیو شاپ',
        og_url: 'https://stevemobile.com/blog',
        og_description: 'آخرین مقالات و اخبار تکنولوژی را در وبلاگ استیو شاپ بخوانید',
        og_sitename: 'استیو شاپ',
        noindex: false,
        nofollow: false
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$seo$2f$utilities$2f$page$2d$seo$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__pageSeoGenerator$3e$__["pageSeoGenerator"])(data, 'وبلاگ');
}
const fetchBlogPosts = async (searchParams)=>{
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].GET_BLOG_POSTS, 'web', 'GET', {
        params: {
            ...searchParams
        }
    });
    return res;
};
const Blog = async ({ searchParams })=>{
    const resolvedParams = searchParams ? await searchParams : {};
    const res = await fetchBlogPosts(resolvedParams);
    const articles = res?.data?.articles;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$client$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        data: articles?.length ? articles : []
    }, void 0, false, {
        fileName: "[project]/src/app/blog/page.tsx",
        lineNumber: 47,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Blog;
}),
"[project]/src/app/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6326c6c6._.js.map