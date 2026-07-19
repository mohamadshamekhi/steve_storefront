import DefaultSeo from '@/config/utilities/seo.utils';
import { PageSeoModel } from '../models';

const pageSeoGenerator = (pageSeo: PageSeoModel, titleRewrite?: string) => {
    const seo = pageSeo;

    if (!pageSeo || !seo) return {};

    const image = seo?.og_image?.data.attributes;

    let title = seo.title ? seo.title : DefaultSeo.title;

    if (titleRewrite) title = titleRewrite;

    return {
        title: `${title} ${DefaultSeo.titleSuffix}`,
        description: seo.description ?? DefaultSeo.description,
        keywords: seo.tags ?? DefaultSeo.keywords,
        alternates: {
            canonical: seo?.canonical ?? DefaultSeo.canonical
        },
        robots: {
            index: seo?.noindex !== undefined ? !seo.noindex : DefaultSeo.noindex !== 'true',
            follow: seo?.nofollow !== undefined ? !seo.nofollow : DefaultSeo.nofollow !== 'true'
        },
        openGraph: {
            title: seo.og_title ?? DefaultSeo.og.title,
            url: seo.og_url ?? DefaultSeo.og.url,
            description: seo.og_description ?? DefaultSeo.og.description,
            siteName: seo.og_sitename ?? DefaultSeo.og.sitename,
            locale: 'fa_IR',
            type: 'website',
            ...(image && {
                images: {
                    url: image.url,
                    secureUrl: image.url,
                    alt: image.alternativeText,
                    width: image.width,
                    height: image.height
                }
            })
        },
        twitter: {
            title: seo.title
                ? `${seo.title} ${DefaultSeo.titleSuffix}`
                : `${DefaultSeo.title} ${DefaultSeo.titleSuffix}`,
            description: seo.description ?? DefaultSeo.description,
            site: DefaultSeo.twitter.site,
            card: 'summary_large_image',
            images: DefaultSeo.twitter.images
        }
    };
};

export default pageSeoGenerator;
