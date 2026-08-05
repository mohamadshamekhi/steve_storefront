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

const brands = await fetcher(ApiKeys.GET_ALL_BRAND, 'web', 'GET', { next: { revalidate: 300 } });

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'تعمیر موبایل | استیو شاپ',
    description: 'تعمیرات تخصصی گوشی موبایل در استیو شاپ؛ تعمیر سامسونگ، اپل، شیائومی، هواوی و سایر برندها با قطعات اصلی، هزینه منصفانه و تحویل سریع.',
    url: 'https://stevemobile.com/phone-repair',
    serviceType: 'تعمیر تخصصی گوشی موبایل (تمام برندها)',
    areaServed: {
        '@type': 'Country',
        name: 'ایران'
    },
    provider: {
        '@type': 'MobilePhoneStore',
        name: 'استیو موبایل',
        url: 'https://stevemobile.com',
        telephone: '+989379377797',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'ساری، خیابان جمهوری، جنب بانک مسکن، فروشگاه استیو',
            addressLocality: 'ساری',
            addressCountry: 'IR'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 36.5644845,
            longitude: 53.054645
        }
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات تعمیر گوشی تمام برندها',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تعمیر گوشی سامسونگ' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تعمیر گوشی اپل (iPhone)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تعمیر گوشی شیائومی' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تعمیر گوشی هواوی' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تعمیر گوشی سایر برندها (نوکیا، آنر، وان‌پلاس، موتورولا و ...)' } }
        ]
    }
};

const PhoneRepair = () => (
    <>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ClientPage brands={brands?.data?.brands ?? []} />
    </>
);

export default PhoneRepair;
