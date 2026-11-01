import EmptyState from '@/components/ui/molecules/EmptyState/EmptyState';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'صفحه پیدا نشد | استیو موبایل',
    // overrides the root layout's "index, follow"
    robots: { index: false, follow: true }
};

const NotFound = () => {
    return (
        <Layout>
            <div className='mx-auto flex max-w-xl flex-col items-center px-4 py-12 text-center lg:py-20'>
                <EmptyState
                    title='صفحه‌ای که دنبالش بودید پیدا نشد'
                    subtitle='ممکن است آدرس اشتباه باشد یا این صفحه حذف شده باشد.'
                    titleClass='text-gray-900'
                    subtitleClass='text-gray-500'
                />
                <div className='mt-2 flex w-full flex-col justify-center gap-3 sm:flex-row'>
                    <Link
                        href='/product'
                        className='bg-primary-600 hover:bg-primary-700 flex min-h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white transition-colors'
                    >
                        مشاهده محصولات
                    </Link>
                    <Link
                        href='/'
                        className='flex min-h-11 items-center justify-center rounded-lg border border-gray-300 px-6 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50'
                    >
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default NotFound;
