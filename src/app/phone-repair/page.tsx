import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'تعمیر موبایل',
        description: 'خدمات تعمیر تخصصی گوشی موبایل در استیو شاپ؛ تعمیر انواع برندها با قطعات اصلی و ضمانت.',
        tags: 'تعمیر موبایل, تعمیر گوشی, خدمات تعمیر, استیو شاپ',
        canonical: 'https://stevemobile.com/phone-repair',
        og_title: 'تعمیر موبایل در استیو شاپ',
        og_url: 'https://stevemobile.com/phone-repair',
        og_description: 'خدمات تعمیر تخصصی گوشی موبایل در استیو شاپ؛ تعمیر انواع برندها با قطعات اصلی و ضمانت.',
        og_sitename: 'استیو شاپ',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, 'تعمیر موبایل');
}

const brands = await fetcher(ApiKeys.GET_ALL_BRAND, 'web', 'GET');

const PhoneRepair = () => <ClientPage brands={brands?.data?.brands ?? []} />;

export default PhoneRepair;
