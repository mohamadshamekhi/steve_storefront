import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
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
    }
};

export default nextConfig;
