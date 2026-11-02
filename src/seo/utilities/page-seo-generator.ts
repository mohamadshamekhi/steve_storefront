import DefaultSeo from '@/config/utilities/seo.utils';
import { PageSeoModel } from '../models';

const MAX_TITLE_LENGTH = 65;
const MIN_TITLE_LENGTH = 25;

// Search results cut long titles, so the page's own words win over the brand
// suffix: drop the suffix first, then keep the first clause, then cut at a word.
const fitTitle = (rawTitle: string, suffix: string) => {
    const title = rawTitle.trim().replace(/\s+/g, ' ');
    const withSuffix = `${title} ${suffix}`;
    if (withSuffix.length <= MAX_TITLE_LENGTH) return withSuffix;
    if (title.length <= MAX_TITLE_LENGTH) return title;

    const clause = title.split(/\s*[؛:|]\s*|\s+[-–]\s+/)[0];
    if (clause.length >= MIN_TITLE_LENGTH && clause.length <= MAX_TITLE_LENGTH) {
        const clauseWithSuffix = `${clause} ${suffix}`;
        return clauseWithSuffix.length <= MAX_TITLE_LENGTH ? clauseWithSuffix : clause;
    }

    const cut = title.slice(0, MAX_TITLE_LENGTH);
    return cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s،,؛:|-]+$/, '');
};

const pageSeoGenerator = (pageSeo: PageSeoModel, titleRewrite?: string) => {
    const seo = pageSeo;

    if (!pageSeo || !seo) return {};

    const image = seo?.og_image?.data.attributes;

    let title = seo.title ? seo.title : DefaultSeo.title;

    if (titleRewrite) title = titleRewrite;

    return {
        title: fitTitle(title, DefaultSeo.titleSuffix),
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
            images: image
                ? {
                      url: image.url,
                      secureUrl: image.url,
                      alt: image.alternativeText,
                      width: image.width,
                      height: image.height
                  }
                : DefaultSeo.image
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
