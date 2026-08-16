import faqs from '@/config/data/faq.data';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'سوالات متداول',
        description: 'پاسخ به پرسش‌های متداول درباره خرید، فروش، تعمیر گوشی و خدمات استیو موبایل.',
        tags: 'سوالات متداول, FAQ, استیو موبایل, خرید گوشی, تعمیر گوشی',
        canonical: 'https://stevemobile.com/faq',
        og_title: 'سوالات متداول استیو موبایل',
        og_url: 'https://stevemobile.com/faq',
        og_description: 'پاسخ به پرسش‌های متداول درباره خرید، فروش، تعمیر گوشی و خدمات استیو موبایل.',
        og_sitename: 'استیو موبایل',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, 'سوالات متداول');
}

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
        }
    }))
};

const FAQ = () => (
    <>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <ClientPage />
    </>
);

export default FAQ;
