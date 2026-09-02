'use client';

import { useEffect, useRef } from 'react';

/**
 * Reports an element's rendered height to a CSS custom property on <html>, so
 * other elements can position/pad against it without hard-coding its size.
 *
 * Used for the stack of fixed chrome: the mobile header (`--app-header-h`), the
 * bottom nav (`--app-bottom-nav`) and a page's own bottom bar (`--app-bottom-bar`).
 * Pass `active: false` when the element isn't rendered — the var is forced to 0px.
 * Read it with a fallback, e.g. `top-[var(--app-header-h,0px)]`.
 */
export default function useElementHeightVar<T extends HTMLElement = HTMLDivElement>(
    varName: string,
    active: boolean
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const root = document.documentElement;
        const el = ref.current;

        if (!active || !el) {
            root.style.setProperty(varName, '0px');
            return () => root.style.removeProperty(varName);
        }

        const update = () => root.style.setProperty(varName, `${Math.round(el.getBoundingClientRect().height)}px`);
        update();

        const observer = new ResizeObserver(update);
        observer.observe(el);
        window.addEventListener('resize', update);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', update);
            root.style.removeProperty(varName);
        };
    }, [varName, active]);

    return ref;
}
