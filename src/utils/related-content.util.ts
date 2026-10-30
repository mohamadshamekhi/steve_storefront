import type Blog from '@/config/types/blog.types';

/** محصولی که جستجوی سایت (/search/storefront) برمی‌گرداند */
export interface SearchProduct {
    id: string;
    name: string;
    slug: string;
    gallery?: { url: string; is_primary: boolean; alt?: string }[];
}

/**
 * مقاله‌های مرتبط: اول آن‌هایی که تگ مشترک بیشتری دارند، بعد جدیدترین‌ها.
 * خودِ مقاله هیچ‌وقت در لیست نمی‌آید.
 */
export const pickRelatedArticles = (article: Blog, articles: Blog[], limit = 4): Blog[] => {
    const tags = new Set((article.tags ?? []).map((t) => t.trim()).filter(Boolean));
    return articles
        .filter((a) => a.id !== article.id && a.slug !== article.slug)
        .map((a, index) => ({
            a,
            index,
            shared: (a.tags ?? []).filter((t) => tags.has(t.trim())).length
        }))
        .sort((x, y) => y.shared - x.shared || x.index - y.index)
        .slice(0, limit)
        .map(({ a }) => a);
};

/** مقاله‌های آموزشی خرابی/تعمیر که انتهایشان دکمه‌ی ثبت درخواست تعمیر می‌گیرند */
const REPAIR_ARTICLE_SLUGS = new Set([
    'علت-خرابی-پورت-شارژ-گوشی',
    'signs-of-phone-battery-failure',
    'signs-of-phone-touch-screen-and-lcd-failure',
    'why-phone-battery-drains-fast'
]);
const REPAIR_KEYWORDS = /تعمیر|خرابی|خراب شدن|تعویض باتری|تعویض ال\s?سی\s?دی|تعویض صفحه/;

export const isRepairArticle = (article: Blog): boolean => {
    const slug = safeDecode(article.slug);
    if (REPAIR_ARTICLE_SLUGS.has(slug)) return true;
    return REPAIR_KEYWORDS.test(article.title ?? '') || (article.tags ?? []).some((t) => REPAIR_KEYWORDS.test(t));
};

const safeDecode = (value: string) => {
    try {
        return decodeURIComponent(value);
    } catch {
        return value;
    }
};
