import { NextRequest } from 'next/server';
import { authMiddleware } from './app/core/middleware/auth';
import { ensureVisitorCookie } from './app/core/middleware/visitor';

export async function middleware(request: NextRequest) {
    const visitorSetCookie = await ensureVisitorCookie(request);

    const response = await authMiddleware(request);

    if (visitorSetCookie) {
        response.headers.append('set-cookie', visitorSetCookie);
    }

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next|signout|favicon\\.ico|robots\\.txt|sitemap\\.xml|manifest\\.json|.*\\.(?:png|jpg|jpeg|svg|webp|gif|woff|woff2|ttf|eot|json|webmanifest)).*)'
    ]
};
