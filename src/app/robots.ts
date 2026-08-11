import { SITE_URL } from '@/seo';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/dashboard', '/checkout', '/auth', '/payment', '/api', '/ui']
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL
    };
}
