import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'سبد خرید',
        description: 'سبد خرید شما در استیو شاپ',
        tags: '',
        canonical: 'https://stevemobile.com/checkout/cart',
        og_title: 'سبد خرید',
        og_url: 'https://stevemobile.com/checkout/cart',
        og_description: 'سبد خرید شما در استیو شاپ',
        og_sitename: 'استیو شاپ',
        noindex: true,
        nofollow: true
    };
    return pageSeoGenerator(data, 'سبد خرید');
}

const Checkout = () => <ClientPage />;

export default Checkout;
