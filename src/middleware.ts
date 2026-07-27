import { NextRequest } from 'next/server';
import { authMiddleware } from './app/core/middleware/auth';

export function middleware(request: NextRequest) {
    return authMiddleware(request);
}

export const config = {
    matcher: [
        '/((?!api|_next|signout|favicon\\.ico|robots\\.txt|sitemap\\.xml|manifest\\.json|.*\\.(?:png|jpg|jpeg|svg|webp|gif|woff|woff2|ttf|eot|json|webmanifest)).*)'
    ]
};
