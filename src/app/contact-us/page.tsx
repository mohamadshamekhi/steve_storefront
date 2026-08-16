import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'ارتباط با ما',
        description: 'با کارشناسان استیو موبایل از طریق فرم تماس، شماره تلفن یا ایمیل در ارتباط باشید. پاسخ‌گویی سریع، پشتیبانی کامل و راهنمایی تخصصی در ساری و سراسر ایران.',
        tags: 'ارتباط با ما, پشتیبانی, تماس, استیو موبایل',
        canonical: 'https://stevemobile.com/contact-us',
        og_title: 'ارتباط با استیو موبایل',
        og_url: 'https://stevemobile.com/contact-us',
        og_description: 'راه‌های ارتباط با استیو موبایل؛ پشتیبانی آنلاین، شماره تماس و آدرس فروشگاه.',
        og_sitename: 'استیو موبایل',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, 'ارتباط با ما');
}

const PhoneSales = () => <ClientPage />;

export default PhoneSales;
