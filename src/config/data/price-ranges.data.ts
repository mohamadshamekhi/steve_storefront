// Backs the dedicated price-range landing pages at /product/price-range/[rangeSlug].
// Fully frontend - no backend change needed, since GET_Products already
// accepts min_price/max_price (see ProductFilterTemplate's price slider).
// Prices are in Toman (see TomanIcon usage in ProductRangSlider).
//
// Bands are non-overlapping by design (unlike "تا ۱۰م / تا ۱۵م / تا ۲۰م" which
// nest inside each other) - three near-duplicate pages covering mostly the
// same products is exactly the kind of thin/duplicate content Google's
// Helpful Content system penalizes.
//
// NOTE: these thresholds are a starting point, not verified against the
// live catalog (no network access to the API from this environment) -
// double check them against real current prices before relying on them;
// a band with almost no matching products is worse for SEO than no page.
export interface PriceRangeEntry {
    slug: string;
    label: string;
    min?: number;
    max?: number;
    title: string;
    metaDescription: string;
    contentTitle: string;
    contentBody: string;
}

export const priceRanges: PriceRangeEntry[] = [
    {
        slug: 'under-10-million',
        label: 'زیر ۱۰ میلیون تومان',
        max: 10000000,
        title: 'خرید گوشی زیر ۱۰ میلیون تومان',
        metaDescription: 'خرید گوشی موبایل زیر ۱۰ میلیون تومان با بهترین قیمت و ضمانت اصالت از استیو موبایل.',
        contentTitle: 'خرید گوشی اقتصادی زیر ۱۰ میلیون تومان',
        contentBody:
            'اگر به دنبال گوشی مناسب با بودجه‌ای محدود هستید، استیو موبایل گزینه‌های متنوعی زیر ۱۰ میلیون تومان برای شما فراهم کرده است. این گوشی‌ها برای استفاده روزمره، تماس، پیام‌رسانی و کارهای عمومی مناسب هستند و همگی با ضمانت اصالت کالا و بهترین قیمت بازار عرضه می‌شوند.'
    },
    {
        slug: '10-to-15-million',
        label: '۱۰ تا ۱۵ میلیون تومان',
        min: 10000000,
        max: 15000000,
        title: 'خرید گوشی ۱۰ تا ۱۵ میلیون تومان',
        metaDescription: 'خرید گوشی موبایل در بازه قیمتی ۱۰ تا ۱۵ میلیون تومان با بهترین قیمت از استیو موبایل.',
        contentTitle: 'خرید گوشی میان‌رده اقتصادی، بازه ۱۰ تا ۱۵ میلیون تومان',
        contentBody:
            'گوشی‌های این بازه قیمتی معمولاً تعادل خوبی میان امکانات و قیمت دارند و برای کاربرانی که به دنبال دوربین بهتر، باتری قوی‌تر و عملکرد روان‌تر نسبت به گوشی‌های اقتصادی هستند مناسب‌اند. استیو موبایل مدل‌های متنوعی در این بازه قیمتی با ضمانت اصالت عرضه می‌کند.'
    },
    {
        slug: '15-to-20-million',
        label: '۱۵ تا ۲۰ میلیون تومان',
        min: 15000000,
        max: 20000000,
        title: 'خرید گوشی ۱۵ تا ۲۰ میلیون تومان',
        metaDescription: 'خرید گوشی موبایل در بازه قیمتی ۱۵ تا ۲۰ میلیون تومان با بهترین قیمت از استیو موبایل.',
        contentTitle: 'خرید گوشی میان‌رده رو به بالا، بازه ۱۵ تا ۲۰ میلیون تومان',
        contentBody:
            'در این بازه قیمتی می‌توانید گوشی‌هایی با دوربین قوی‌تر، پردازنده مناسب گیمینگ سبک تا متوسط و طراحی به‌روزتر پیدا کنید؛ گزینه‌ای مناسب برای کاربرانی که به دنبال «قاتل پرچمدار» با قیمتی معقول‌تر هستند. استیو موبایل این مدل‌ها را با بهترین قیمت و ضمانت اصالت عرضه می‌کند.'
    },
    {
        slug: 'flagship',
        label: 'پرچمدار (بالای ۲۰ میلیون تومان)',
        min: 20000000,
        title: 'خرید گوشی پرچمدار',
        metaDescription: 'خرید گوشی پرچمدار با بهترین قیمت، ضمانت اصالت و ارسال سریع از استیو موبایل.',
        contentTitle: 'خرید گوشی پرچمدار از استیو موبایل',
        contentBody:
            'گوشی‌های پرچمدار بالاترین سطح پردازنده، دوربین، کیفیت ساخت و امکانات نرم‌افزاری را ارائه می‌دهند و برای کاربرانی مناسب‌اند که به دنبال بهترین تجربه ممکن، بدون محدودیت بودجه، هستند. استیو موبایل جدیدترین گوشی‌های پرچمدار برندهای معتبر را با ضمانت اصالت کالا و بهترین قیمت بازار عرضه می‌کند.'
    }
];
