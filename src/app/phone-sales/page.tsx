import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'فروش موبایل',
        description: 'فروش گوشی موبایل دست دوم و نو به استیو شاپ؛ ارزیابی رایگان، قیمت منصفانه و پرداخت سریع.',
        tags: 'فروش موبایل, فروش گوشی, گوشی دست دوم, استیو شاپ',
        canonical: 'https://stevemobile.com/phone-sales',
        og_title: 'فروش موبایل به استیو شاپ',
        og_url: 'https://stevemobile.com/phone-sales',
        og_description: 'فروش گوشی موبایل دست دوم و نو به استیو شاپ؛ ارزیابی رایگان، قیمت منصفانه و پرداخت سریع.',
        og_sitename: 'استیو شاپ',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, 'فروش موبایل');
}

const brands = await fetcher(ApiKeys.GET_ALL_BRAND, 'web', 'GET');

const PhoneSales = () => <ClientPage brands={brands?.data?.brands ?? []} />;

export default PhoneSales;
