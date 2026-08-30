import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import { Suspense } from 'react';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'فروش همکاری',
        description:
            'با استیو موبایل همکار شوید؛ ثبت درخواست همکاری، دریافت درصد تخفیف اختصاصی و دسترسی به کاتالوگ همکار با قیمت ویژه همکاران.',
        tags: 'فروش همکاری, همکاری در فروش, نمایندگی فروش موبایل, استیو موبایل',
        canonical: 'https://stevemobile.com/partner-sales',
        og_title: 'فروش همکاری با استیو موبایل',
        og_url: 'https://stevemobile.com/partner-sales',
        og_description:
            'فروشگاه‌ها و کسب‌وکارهای حوزه موبایل می‌توانند با ثبت درخواست همکاری، محصولات استیو موبایل را با قیمت ویژه همکاران تهیه کنند.',
        og_sitename: 'استیو موبایل',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, 'فروش همکاری');
}

const PartnerSales = () => (
    <Suspense fallback={null}>
        <ClientPage />
    </Suspense>
);

export default PartnerSales;
