import { NextRequest } from 'next/server';

const VISITOR_COOKIE = 'steve_visitor_id';

/**
 * The article detail page (`/blog/:slug`) is a Server Component: its data
 * fetch happens server-to-server, so the browser's cookie jar never gets a
 * chance to send/receive `steve_visitor_id` on that request the way it does
 * for client-side calls (see `fetcher.ts`'s `credentials: 'include'`).
 *
 * For a first-time visitor (no cookie yet) this middleware makes a
 * lightweight upstream call to the same endpoint the page is about to call,
 * purely to obtain the `Set-Cookie` the API issues. It then:
 *  - writes the resolved id onto `request.cookies`, so once the caller
 *    passes `request` back into `NextResponse.next({ request })`, the page's
 *    own fetch (via `fetcher.ts`) forwards that same id and the API's SADD
 *    dedup treats it as an already-seen visitor (no double count).
 *  - returns the raw `Set-Cookie` header so the caller can relay it onto the
 *    actual response, making the browser store it.
 *
 * Returning visitors (cookie already present) skip the extra request
 * entirely — `fetcher.ts` alone is enough to forward their existing id.
 */
export async function ensureVisitorCookie(request: NextRequest): Promise<string | null> {
    const slugMatch = request.nextUrl.pathname.match(/^\/blog\/([^/]+)\/?$/);
    if (!slugMatch || request.cookies.has(VISITOR_COOKIE)) {
        return null;
    }

    const apiBase = process.env.NEXT_PUBLIC_API_URL;
    if (!apiBase) {
        return null;
    }

    const slug = decodeURIComponent(slugMatch[1]);

    try {
        const upstream = await fetch(`${apiBase}/article/storefront/get-by-slug/${slug}`, {
            headers: { Accept: 'application/json' },
            cache: 'no-store'
        });

        const setCookie = upstream.headers.get('set-cookie');
        if (!setCookie) {
            return null;
        }

        const value = setCookie.match(new RegExp(`${VISITOR_COOKIE}=([^;]+)`))?.[1];
        if (value) {
            request.cookies.set(VISITOR_COOKIE, value);
        }

        return setCookie;
    } catch {
        // Best-effort only: if the API is unreachable here, the page's own
        // fetch will simply pick up the cookie on a later visit instead.
        return null;
    }
}
