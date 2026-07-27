'use client';

import LogoIcon from '@/components/icons/LogoIcon';
import { useEffect, useRef, useState } from 'react';

const getCurrentUrl = () => `${window.location.pathname}${window.location.search}`;

const PageTransitionOverlay = () => {
    const [currentUrl, setCurrentUrl] = useState<string | null>(null);
    const previousUrl = useRef<string | null>(null);

    const [visible, setVisible] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const showOverlay = () => {
        setFadeOut(false);
        setVisible(true);
    };

    // مقداردهی اولیه بعد از mount (چون window فقط تو کلاینت هست)
    useEffect(() => {
        const url = getCurrentUrl();
        setCurrentUrl(url);
        previousUrl.current = url;
    }, []);

    // پچ کردن pushState و replaceState برای گرفتن هر نوع ناوبری
    useEffect(() => {
        const originalPushState = history.pushState.bind(history);
        const originalReplaceState = history.replaceState.bind(history);

        const handleNav = (nextUrl: string | URL | null | undefined) => {
            if (!nextUrl) return;

            let targetPathname: string;
            let targetSearch: string;
            let targetHash: string;

            try {
                const target = new URL(nextUrl, window.location.href);
                targetPathname = target.pathname;
                targetSearch = target.search;
                targetHash = target.hash;
            } catch {
                return;
            }

            const isSamePage =
                targetHash !== '' ||
                (targetPathname === window.location.pathname &&
                    targetSearch === window.location.search);

            if (!isSamePage) {
                setTimeout(showOverlay, 0);
            }
        };

        history.pushState = (...args) => {
            handleNav(args[2] as string | URL | null | undefined);
            return originalPushState(...args);
        };

        history.replaceState = (...args) => {
            handleNav(args[2] as string | URL | null | undefined);
            return originalReplaceState(...args);
        };

        // برای دکمه‌ی back/forward مرورگر
        const handlePopState = () => {
            setCurrentUrl(getCurrentUrl());
        };
        window.addEventListener('popstate', handlePopState);

        // بعد از هر تغییر مسیر (چه از پچ بالا، چه از popstate)، URL رو sync کن
        const interval = setInterval(() => {
            const url = getCurrentUrl();
            setCurrentUrl((prev) => (prev !== url ? url : prev));
        }, 50);

        return () => {
            history.pushState = originalPushState;
            history.replaceState = originalReplaceState;
            window.removeEventListener('popstate', handlePopState);
            clearInterval(interval);
        };
    }, []);

    // نمایش overlay وقتی روی لینک کلیک می‌شه
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (!target) return;

            const href = target.getAttribute('href');
            if (!href) return;

            if (href.startsWith('http') || href.startsWith('//') || href.startsWith('#')) return;

            try {
                const targetUrl = new URL(href, window.location.href);
                const isSamePage =
                    targetUrl.pathname === window.location.pathname &&
                    targetUrl.search === window.location.search;
                if (isSamePage) return;
            } catch {
                return;
            }

            showOverlay();
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    // هر وقت URL واقعاً عوض شد، overlay رو مخفی کن
    useEffect(() => {
        if (currentUrl && previousUrl.current !== null && currentUrl !== previousUrl.current) {
            previousUrl.current = currentUrl;
            setFadeOut(true);
        } else if (currentUrl) {
            previousUrl.current = currentUrl;
        }
    }, [currentUrl]);

    useEffect(() => {
        if (fadeOut) {
            const timer = setTimeout(() => {
                setVisible(false);
                setFadeOut(false);
            }, 400);

            return () => clearTimeout(timer);
        }
    }, [fadeOut]);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-400 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <div className='animate-pulse'>
                <LogoIcon className='h-16 w-auto' />
            </div>
        </div>
    );
};

export default PageTransitionOverlay;