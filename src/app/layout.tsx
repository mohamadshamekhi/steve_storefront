import type { Metadata } from 'next';
import '../styles/master.css';

import { GoogleAnalytics } from '@/components/ui/molecules/Analytics/GoogleAnalytics';
import { ToastContainer } from '@/components/ui/molecules/Toast/ToastContainer';
import YekanFont from '@/config/fonts/YekanFont';
import { SITE_URL } from '@/seo';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import ClientPage from './client-page';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'استیو موبایل | بزرگترین فروشگاه اینترنتی ایران',
    description:
        'استیو موبایل، بزرگترین فروشگاه اینترنتی ایران با تنوع گسترده کالا، ضمانت اصالت، ارسال سریع و پشتیبانی حرفه‌ای.',
    robots: {
        index: true,
        follow: true
    }
};

const RootLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='fa' dir='rtl'>
            <head>
                <meta name='enamad' content='8840088' />
            </head>
            <body className={`${YekanFont.variable} bg-gray-50`}>
                <GoogleAnalytics />

                <NuqsAdapter>
                    <ClientPage components={children} />
                </NuqsAdapter>

                <ToastContainer position='bottom-left' />
            </body>
        </html>
    );
};
export default RootLayout;

