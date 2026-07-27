import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'سوالات متداول',
        description: 'پاسخ به پرسش‌های متداول درباره خرید، فروش، تعمیر گوشی و خدمات استیو موبایل.',
        tags: 'سوالات متداول, FAQ, استیو شاپ, خرید گوشی, تعمیر گوشی',
        canonical: 'https://stevemobile.com/faq',
        og_title: 'سوالات متداول استیو شاپ',
        og_url: 'https://stevemobile.com/faq',
        og_description: 'پاسخ به پرسش‌های متداول درباره خرید، فروش، تعمیر گوشی و خدمات استیو موبایل.',
        og_sitename: 'استیو شاپ',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, 'سوالات متداول');
}

const FAQ = () => <ClientPage />;

export default FAQ;
