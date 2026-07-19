'use client';

import LogoIcon from '@/components/icons/LogoIcon';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const PageTransitionOverlay = () => {
    const pathname = usePathname();
    const previousPathname = useRef(pathname);
    const [visible, setVisible] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const showOverlay = () => {
        setFadeOut(false);
        setVisible(true);
    };

    // Patch history.pushState to catch router.push globally
    useEffect(() => {
        const originalPushState = history.pushState.bind(history);

        history.pushState = (...args) => {
            const nextUrl = typeof args[2] === 'string' ? args[2] : null;
            const isSamePage =
                !nextUrl ||
                nextUrl === window.location.pathname ||
                nextUrl === window.location.href ||
                nextUrl.includes('#');

            if (!isSamePage) {
                showOverlay();
            }

            return originalPushState(...args);
        };

        return () => {
            history.pushState = originalPushState;
        };
    }, []);

    // Show overlay immediately when a navigation link is clicked
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (!target) return;

            const href = target.getAttribute('href');
            if (!href) return;

            const isExternal = href.startsWith('http') || href.startsWith('//');
            const isHashOnly = href.startsWith('#');
            const isSamePage = href === pathname || href === window.location.pathname;

            if (isExternal || isHashOnly || isSamePage) return;

            showOverlay();
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [pathname]);

    // Hide overlay after new page has loaded
    useEffect(() => {
        if (pathname !== previousPathname.current) {
            previousPathname.current = pathname;
            setFadeOut(true);
        }
    }, [pathname]);

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
