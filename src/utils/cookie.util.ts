import { parseCookies } from 'nookies';

export async function getCookieUniversal(name: string) {
    if (typeof window === 'undefined') {
        const { cookies } = await import('next/headers');
        const cookieStore = await cookies();
        return cookieStore.get(name)?.value || null;
    }
    // Client Side
    return parseCookies()[name] || null;
}

