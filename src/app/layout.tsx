import type { Metadata } from 'next';
import '../styles/master.css';

import { ToastContainer } from '@/components/ui/molecules/Toast/ToastContainer';
import YekanFont from '@/config/fonts/YekanFont';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import ClientPage from './client-page';

export const metadata: Metadata = {
    title: 'استیو شاپ | بزرگترین فروشگاه اینترنتی ایران',
    description:
        'استیو شاپ، بزرگترین فروشگاه اینترنتی ایران با تنوع گسترده کالا، ضمانت اصالت، ارسال سریع و پشتیبانی حرفه‌ای.',
    robots: {
        index: false,
        follow: false
    }
};

const RootLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='fa'>
            <head>
                <meta name='enamad' content='8840088' />
            </head>
            <body className={`${YekanFont.variable} bg-gray-50`}>
                <NuqsAdapter>
                    <ClientPage components={children} />
                </NuqsAdapter>

                <ToastContainer position='bottom-left' />
            </body>
        </html>
    );
};
export default RootLayout;

