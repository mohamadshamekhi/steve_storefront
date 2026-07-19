import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'درباره ما',
        description: 'با استیو شاپ آشنا شوید؛ بزرگترین فروشگاه اینترنتی ایران با سال‌ها تجربه در ارائه محصولات دیجیتال با ضمانت اصالت.',
        tags: 'درباره ما, استیو شاپ, فروشگاه اینترنتی',
        canonical: 'https://stevemobile.com/about-us',
        og_title: 'درباره استیو شاپ',
        og_url: 'https://stevemobile.com/about-us',
        og_description: 'با استیو شاپ آشنا شوید؛ بزرگترین فروشگاه اینترنتی ایران با سال‌ها تجربه در ارائه محصولات دیجیتال با ضمانت اصالت.',
        og_sitename: 'استیو شاپ',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, 'درباره ما');
}

const AboutUs = () => <ClientPage />;

export default AboutUs;
