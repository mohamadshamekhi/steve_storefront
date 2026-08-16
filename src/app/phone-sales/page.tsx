import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'فروش موبایل',
        description: 'گوشی  کار کرده خود را در چند مرحله ساده به استیو موبایل بفروشید. ثبت درخواست آنلاین، بررسی وضعیت دستگاه، دریافت بهترین قیمت و تسویه فوری، بدون دردسر و با بالاترین امنیت.',
        tags: 'فروش موبایل, فروش گوشی, گوشی دست دوم, استیو موبایل',
        canonical: 'https://stevemobile.com/phone-sales',
        og_title: 'فروش موبایل به استیو موبایل',
        og_url: 'https://stevemobile.com/phone-sales',
        og_description: 'فروش گوشی موبایل دست دوم و نو به استیو موبایل؛ ارزیابی رایگان، قیمت منصفانه و پرداخت سریع.',
        og_sitename: 'استیو موبایل',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, 'فروش موبایل');
}

const brands = await fetcher(ApiKeys.GET_ALL_BRAND, 'web', 'GET', { next: { revalidate: 300 } });

const jsonLd = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'فروش موبایل | استیو موبایل',
        description: 'گوشی کار کرده خود را در چند مرحله ساده به استیو موبایل بفروشید. ثبت درخواست آنلاین، بررسی وضعیت دستگاه، دریافت بهترین قیمت و تسویه فوری. بدون دردسر و با بالاترین امنیت.',
        provider: {
            '@type': 'MobilePhoneStore',
            name: 'استیو موبایل',
            telephone: '+989367397797',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'ساری، خیابان جمهوری، جنب بانک مسکن',
                addressLocality: 'ساری',
                addressCountry: 'IR'
            }
        },
        serviceType: ['خرید گوشی کار کرده', 'خرید گوشی دست دوم', 'فروش گوشی‌های کارکرده'],
        areaServed: {
            '@type': 'City',
            name: 'ساری'
        },
        offers: {
            '@type': 'Offer',
            priceCurrency: 'IRR',
            availability: 'https://schema.org/InStock'
        }
    },
    {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'سه سوت گوشیتو به استیو بفروش',
        description: 'گوشی کار کرده خود را در چند مرحله ساده به استیو موبایل بفروشید. ثبت درخواست آنلاین، بررسی وضعیت دستگاه، دریافت بهترین قیمت و تسویه فوری. بدون دردسر و با بالاترین امنیت.',
        step: [
            {
                '@type': 'HowToStep',
                name: 'ثبت درخواست فروش',
                text: 'در فرم پایین همین صفحه برند، مدل، رنگ، وضعیت سلامت باتری و رجیستر گوشی خود را وارد و درخواست فروش را ثبت کنید.'
            },
            {
                '@type': 'HowToStep',
                name: 'تحویل گوشی به استیو',
                text: 'پس از ثبت فرم، کارشناسان استیو با شما تماس می‌گیرند تا هماهنگی جهت تحویل دستگاه انجام شود.'
            },
            {
                '@type': 'HowToStep',
                name: 'تسویه حساب فوری',
                text: 'بعد از بررسی و تایید نهایی، پرداخت نقدی یا انتقال بانکی بلافاصله برای شما انجام خواهد شد.'
            }
        ],
        supply: [{ '@type': 'HowToSupply', name: 'گوشی کارکرده' }],
        tool: [{ '@type': 'HowToTool', name: 'فرم ثبت درخواست فروش' }]
    }
];

const PhoneSales = () => (
    <>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ClientPage brands={brands?.data?.brands ?? []} />
    </>
);

export default PhoneSales;
