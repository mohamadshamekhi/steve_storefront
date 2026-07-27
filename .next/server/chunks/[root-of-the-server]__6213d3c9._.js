module.exports = [
"[project]/.next-internal/server/app/api/auth/session/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/api/config/retry-blacklist.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/api/config/error-retry.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$retry$2d$blacklist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/retry-blacklist.ts [app-route] (ecmascript)");
;
const swrOnErrorRetry = (error, key, config, revalidate, { retryCount })=>{
    // Never retry on 404.
    if (error.status === 404) return;
    // Never retry for a specific key.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$retry$2d$blacklist$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].indexOf(key) > -1) return;
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
"[project]/src/state/stores/auth/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSessionStore",
    ()=>useSessionStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/react.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/middleware.mjs [app-route] (ecmascript)");
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
const useSessionStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["persist"])((set)=>({
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
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    partialize: (state)=>({
            session: state.session,
            status: state.status
        })
}));
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
"[project]/src/api/config/global-error-report.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/utils/cookie.util.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCookieUniversal",
    ()=>getCookieUniversal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nookies$40$2$2e$5$2e$2$2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nookies@2.5.2/node_modules/nookies/dist/index.js [app-route] (ecmascript)");
;
async function getCookieUniversal(name) {
    if ("TURBOPACK compile-time truthy", 1) {
        const { cookies } = await __turbopack_context__.A("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/headers.js [app-route] (ecmascript, async loader)");
        const cookieStore = await cookies();
        return cookieStore.get(name)?.value || null;
    }
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/api/config/media-uploader.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cookie$2e$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cookie.util.ts [app-route] (ecmascript)");
;
const mediaUploader = async ({ file, domain, isPublic = true, convertToWebp = true })=>{
    const access_token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cookie$2e$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCookieUniversal"])('steve-session');
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
        const response = await fetch(`${("TURBOPACK compile-time value", "https://api.stevemobile.com")}/media/storefront/upload`, {
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
"[project]/src/api/config/uploader.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
        ("TURBOPACK compile-time value", "https://api.stevemobile.com"),
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
"[project]/src/api/config/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$fetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "mediaUploader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$media$2d$uploader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "onSwrGlobalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$global$2d$error$2d$report$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "swrOnErrorRetry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$error$2d$retry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    "uploader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$uploader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/api/config/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$error$2d$retry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/error-retry.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$fetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/fetcher.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$global$2d$error$2d$report$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/global-error-report.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$media$2d$uploader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/media-uploader.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$uploader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/uploader.ts [app-route] (ecmascript)");
}),
"[project]/src/api/keys/auth.keys.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/api/keys/blog.keys.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/api/keys/cart.keys.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/api/keys/comment.keys.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/api/keys/common.keys.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/api/keys/dashboard.keys.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/api/keys/landing.keys.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/api/keys/phoneSales.keys.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/api/keys/product.keys.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/api/keys/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$auth$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/auth.keys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$blog$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/blog.keys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$cart$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/cart.keys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$comment$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/comment.keys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$common$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/common.keys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$dashboard$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/dashboard.keys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$landing$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/landing.keys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$phoneSales$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/phoneSales.keys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$product$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/product.keys.ts [app-route] (ecmascript)");
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
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$auth$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$blog$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$cart$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$product$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$landing$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$phoneSales$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$common$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$comment$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$dashboard$2e$keys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
};
const __TURBOPACK__default__export__ = ApiKeys;
}),
"[project]/src/state/stores/cart/cart.types.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/state/stores/cart/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCartStore",
    ()=>useCartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/api/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/react.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/middleware.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/auth/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$cart$2f$cart$2e$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/cart/cart.types.ts [app-route] (ecmascript)");
;
;
;
;
;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
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
            const authStatus = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useSessionStore"].getState().status;
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
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].GET_ACTIVE_CART, 'dashboard', 'GET', {
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
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].ADD_ITEM, 'dashboard', 'POST', {
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
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].REMOVE_ITEM, 'dashboard', 'POST', {
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
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].CALC_CART, 'dashboard', 'POST', {
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
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
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
"[project]/src/state/stores/toast/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToastStore",
    ()=>useToastStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/react.mjs [app-route] (ecmascript)");
;
const useToastStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"])((set)=>({
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
"[project]/src/state/stores/user-preferences/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserPreferencesStore",
    ()=>useUserPreferencesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/react.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.14_@types+react@19.2.17_react@19.2.8_use-sync-external-store@1.6.0_react@19.2.8_/node_modules/zustand/esm/middleware.mjs [app-route] (ecmascript)");
;
;
const useUserPreferencesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["persist"])((set)=>({
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
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$14_$40$types$2b$react$40$19$2e$2$2e$17_react$40$19$2e$2$2e$8_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$8_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    partialize: (state)=>({
            activeAddressId: state.activeAddressId,
            activeAddress: state.activeAddress
        })
}));
}),
"[project]/src/state/stores/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/auth/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$cart$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/state/stores/cart/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$toast$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/toast/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$user$2d$preferences$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/user-preferences/index.ts [app-route] (ecmascript)");
;
;
;
;
}),
"[project]/src/state/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/state/stores/index.ts [app-route] (ecmascript) <locals>");
;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[project]/src/api/config/fetcher.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/state/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$toast$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/stores/toast/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cookie$2e$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cookie.util.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nookies$40$2$2e$5$2e$2$2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nookies@2.5.2/node_modules/nookies/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$querystring__$5b$external$5d$__$28$querystring$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/querystring [external] (querystring, cjs)");
;
;
;
;
const getFetchPath = (location)=>{
    switch(location){
        case 'dashboard':
        case 'web':
            return "TURBOPACK compile-time value", "https://api.stevemobile.com";
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
        const access_token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cookie$2e$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCookieUniversal"])('steve-session');
        if (!access_token || access_token.length < 5) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nookies$40$2$2e$5$2e$2$2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["destroyCookie"])(null, 'steve-session');
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
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$toast$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useToastStore"].getState().showToast({
                    message: 'مشکل در احراز هویت٬ دوباره وارد شوید',
                    type: 'error',
                    duration: 5000
                });
                // TODO : redirect to /logout page
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nookies$40$2$2e$5$2e$2$2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["destroyCookie"])(null, 'steve-session');
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$stores$2f$toast$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useToastStore"].getState().showToast({
                message: 'مشکل در احراز هویت٬ دوباره وارد شوید',
                type: 'error',
                duration: 5000
            });
            // TODO : redirect to /logout page
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nookies$40$2$2e$5$2e$2$2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["destroyCookie"])(null, 'steve-session');
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
"[project]/src/api/config/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$error$2d$retry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/error-retry.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$fetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/fetcher.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$global$2d$error$2d$report$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/global-error-report.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$media$2d$uploader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/media-uploader.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$uploader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/uploader.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/src/api/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/api/config/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/index.ts [app-route] (ecmascript)");
;
;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/auth/session/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/api/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/config/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/keys/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jwt-decode@4.0.0/node_modules/jwt-decode/build/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
;
;
async function GET() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const encryptedSession = cookieStore.get('steve-session')?.value;
    if (!encryptedSession) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Session Not Found!'
        }, {
            status: 401
        });
    }
    // const session = await decryptSession(encryptedSession);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$keys$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].ME, 'dashboard', 'POST');
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtDecode"])(encryptedSession);
    const data = {
        session,
        profile: response?.data?.user ?? {}
    };
    return Response.json(data);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6213d3c9._.js.map