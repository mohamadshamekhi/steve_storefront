import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'ارتباط با ما',
        description: 'راه‌های ارتباط با استیو شاپ؛ پشتیبانی آنلاین، شماره تماس و آدرس فروشگاه.',
        tags: 'ارتباط با ما, پشتیبانی, تماس, استیو شاپ',
        canonical: 'https://stevemobile.com/contact-us',
        og_title: 'ارتباط با استیو شاپ',
        og_url: 'https://stevemobile.com/contact-us',
        og_description: 'راه‌های ارتباط با استیو شاپ؛ پشتیبانی آنلاین، شماره تماس و آدرس فروشگاه.',
        og_sitename: 'استیو شاپ',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, 'ارتباط با ما');
}

const PhoneSales = () => <ClientPage />;

export default PhoneSales;
