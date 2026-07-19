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

    const requestInit: RequestInit = {
        method,
        headers: headersList,
        ...(options && options.body && { body: JSON.stringify(options.body) })
    };

    try {
        // initial url structure
        const constructUrl = [getFetchPath(location), fetcherKey];

        // add query params to url
        if (options && options.params) {
            constructUrl.push(`?${stringify(options.params)}`);
        }

        console.log(`${method} -> ${location} -> ${requiredAuth ? '🔒' : ''} ${constructUrl.join('')} `);

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
                console.log(message, 'message');
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
