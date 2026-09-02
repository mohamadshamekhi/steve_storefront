/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToastStore } from '@/state';
import { getCookieUniversal } from '@/utils/cookie.util';
import { destroyCookie } from 'nookies';
import { stringify } from 'querystring';

type LocationPath = 'dashboard' | 'web';

interface Options {
    headers?: Record<string, string>;
    params?: Record<string, any>;
    body?: any;
    requiredAuth?: boolean;
    forceBearer?: string;
    /** Next.js fetch cache config, forwarded as-is (e.g. { revalidate: 300 }). Ignored by the browser fetch. */
    next?: { revalidate?: number | false; tags?: string[] };
}

interface FetchError {
    status: number;
    message: string;
}

type method = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

const getFetchPath = (location: LocationPath) => {
    switch (location) {
        case 'dashboard':
        case 'web':
            return process.env.NEXT_PUBLIC_API_URL;
        default:
            return '';
    }
};

const fetcher = async (fetcherKey: string, location: LocationPath, method?: method, options?: Options) => {
    let requiredAuth = true;

    if (
        (options && options.requiredAuth === false) ||
        location !== 'dashboard'
        // || fetcherKey.indexOf("data-source") > -1
    ) {
        requiredAuth = false;
    }

    const headersList: HeadersInit = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(options && options.headers && { body: JSON.stringify(options.headers) })
    };

    if (requiredAuth) {
        // const cookie = parseCookies();
        // const access_token = cookie['steve-session'];

        const access_token = await getCookieUniversal('steve-session');

        if (!access_token || access_token.length < 5) {
            destroyCookie(null, 'steve-session');
            if (typeof window !== 'undefined') {
                useToastStore.getState().showToast({
                    message: 'دسترسی غیر مجاز',
                    type: 'error',
                    duration: 5000
                });
                window.location.href = '/auth/sign-in';
            }
            return;
        }

        headersList.Authorization = `Bearer ${access_token}`;
    }

    // Forward cookies (e.g. steve_visitor_id) so the API can tell unique
    // visitors apart. In the browser this is native fetch behavior; on the
    // server there is no cookie jar, so the incoming request's Cookie header
    // has to be relayed by hand. Some server-side callers (e.g. module-level
    // fetches used for static generation) run outside any request scope, in
    // which case `next/headers` throws — there's no visitor to forward for
    // anyway, so just skip it.
    if (typeof window === 'undefined') {
        try {
            const { headers: nextHeaders } = await import('next/headers');
            const incomingCookie = (await nextHeaders()).get('cookie');
            if (incomingCookie) {
                headersList.Cookie = incomingCookie;
            }
        } catch {
            // No request scope (static generation, build-time fetch, etc.) — skip.
        }
    }

    const requestInit: RequestInit = {
        method,
        headers: headersList,
        // NOT credentials: 'include' - the API's CORS config sends
        // `Access-Control-Allow-Origin: *` with no `Allow-Credentials`
        // header, so a credentialed browser request gets rejected by CORS
        // outright (breaks every client-side call, not just article ones).
        // The article view-count cookie is instead relayed server-side (see
        // the Cookie-forwarding block above and app/core/middleware/visitor.ts),
        // which is a plain server-to-server fetch and isn't subject to CORS.
        ...(options && options.body && { body: JSON.stringify(options.body) }),
        ...(options?.next && { next: options.next })
    };

    try {
        // initial url structure
        const constructUrl = [getFetchPath(location), fetcherKey];

        // add query params to url
        if (options && options.params) {
            constructUrl.push(`?${stringify(options.params)}`);
        }

        if (process.env.NODE_ENV === 'development') {
            console.log(`${method} -> ${location} -> ${requiredAuth ? '🔒' : ''} ${constructUrl.join('')} `);
        }

        // send a request
        const response = await fetch(constructUrl.join(''), requestInit);

        if (!response.ok) {
            if (response?.status === 401) {
                useToastStore.getState().showToast({
                    message: 'مشکل در احراز هویت٬ دوباره وارد شوید',
                    type: 'error',
                    duration: 5000
                });
                // TODO : redirect to /logout page
                destroyCookie(null, 'steve-session');
                window.location.href = '/auth/sign-in';
                return;
            }
            const error: FetchError = {
                status: response?.status || 500,
                message: response?.statusText || 'مشکلی پیش امده'
            };
            if (typeof window !== 'undefined') {
                const { message } = await response.json();
                useToastStore.getState().showToast({
                    message: message,
                    type: 'error',
                    duration: 5000
                });
            }
            return error;
        }

        return response.json();
    } catch (error: any) {
        if (error?.status === 401) {
            useToastStore.getState().showToast({
                message: 'مشکل در احراز هویت٬ دوباره وارد شوید',
                type: 'error',
                duration: 5000
            });

            // TODO : redirect to /logout page
            destroyCookie(null, 'steve-session');
            window.location.href = '/auth/sign-in';
            return;
        }
        const fetchError: FetchError = {
            status: error?.status || 500,
            message: error?.statusText || 'مشکلی پیش امده'
        };
        if (typeof window !== 'undefined') {
            useToastStore.getState().showToast({
                message: fetchError.message,
                type: 'error',
                duration: 5000
            });

            useToastStore.getState().showToast({
                message: 'خطا در ارتباط با سرور',
                type: 'error',
                duration: 5000
            });
        }
        return fetchError;
    }
};

export default fetcher;
