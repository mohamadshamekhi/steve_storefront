import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // gzip/brotli the HTML/JS/CSS responses `next start` serves (the Docker
    // container is hit directly on :3000, no nginx in front) — helps
    // "Enable text compression" / render-blocking transfer size.
    compress: true,
    poweredByHeader: false,
    images: {
        // AVIF/WebP instead of the source JPEG/PNG — the single biggest lever on
        // "Improve image delivery" / "enormous network payloads".
        formats: ['image/avif', 'image/webp'],
        // Optimized images are served from /_next/image with a long immutable
        // cache — fixes "Use efficient cache lifetimes" for API/product images
        // (source: storage.c2.liara.space, which sends short/no cache headers).
        minimumCacheTTL: 31 * 24 * 60 * 60, // 31 days
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            },
            {
                protocol: 'http',
                hostname: '**'
            },
            {
                protocol: 'https',
                hostname: 'stevemobile.com'
            },
            {
                protocol: 'http',
                hostname: 'stevemobile.com'
            },
            {
                protocol: 'https',
                hostname: 'storage.c2.liara.space',
                pathname: '/**'
            },
            {
                protocol: 'http',
                hostname: 'storage.c2.liara.space',
                pathname: '/**'
            }
        ]
    },
    experimental: {
        authInterrupts: true
    },
    async redirects() {
        return [
            // duplicate article: competed with the guide below for «گوشی دانش‌آموزی»;
            // unpublish it in the panel — this keeps its old links and rankings flowing to the guide
            {
                source: '/blog/behtarin-gooshi-daneshamoozi',
                destination: '/blog/student-phone-buying-guide',
                permanent: true
            }
        ];
    },
    // "Use efficient cache lifetimes": the container is served directly with no
    // CDN/nginx, so Next must emit the long-lived immutable headers itself for
    // the fingerprinted build output and the static /public assets.
    async headers() {
        const immutable = [
            {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable'
            }
        ];
        return [
            { source: '/_next/static/:path*', headers: immutable },
            { source: '/fonts/:path*', headers: immutable },
            { source: '/images/:path*', headers: immutable },
            { source: '/icons/:path*', headers: immutable },
            {
                source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf)',
                headers: immutable
            }
        ];
    }
};

export default nextConfig;
