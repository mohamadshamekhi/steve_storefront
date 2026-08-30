import { JSX } from 'react';
import Container from '../../organisms/Container/Container';

type IconName = 'tag' | 'zap' | 'grid' | 'shield' | 'truck' | 'activity';

const icons: Record<IconName, JSX.Element> = {
    tag: (
        <path
            d='M3.5 11.5 11 4h6.5A2.5 2.5 0 0 1 20 6.5V13l-7.5 7.5a2 2 0 0 1-2.8 0l-6.2-6.2a2 2 0 0 1 0-2.8ZM15.5 9h.01'
            stroke='currentColor'
            strokeWidth='1.7'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    ),
    zap: (
        <path
            d='M13 2 4 14h7l-1 8 9-12h-7l1-8Z'
            stroke='currentColor'
            strokeWidth='1.7'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    ),
    grid: (
        <path
            d='M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z'
            stroke='currentColor'
            strokeWidth='1.7'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    ),
    shield: (
        <path
            d='M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3Zm-2.5 9 2 2 4-4'
            stroke='currentColor'
            strokeWidth='1.7'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    ),
    truck: (
        <path
            d='M3 6h11v9H3V6Zm11 3h4l3 3v3h-7V9ZM7.5 18.5A1.5 1.5 0 1 0 7.5 15.5a1.5 1.5 0 0 0 0 3ZM17.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
            stroke='currentColor'
            strokeWidth='1.7'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    ),
    activity: (
        <path
            d='M3 12h4l3 8 4-16 3 8h4'
            stroke='currentColor'
            strokeWidth='1.7'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    )
};

const features: { icon: IconName; title: string; description: string }[] = [
    {
        icon: 'tag',
        title: 'قیمت ویژهٔ همکاران',
        description: 'کل کاتالوگ موبایل و کالای دیجیتال را با قیمتی پایین‌تر از خرده‌فروشی و مخصوص همکاران تهیه کنید.'
    },
    {
        icon: 'zap',
        title: 'تخفیف خودکار روی هر تنوع',
        description:
            'درصد تخفیف اختصاصی شما به‌صورت خودکار روی قیمت هر رنگ و ظرفیت اعمال می‌شود؛ نیازی به کد تخفیف نیست.'
    },
    {
        icon: 'grid',
        title: 'کاتالوگ اختصاصی همکار',
        description:
            'کاتالوگی جدا با قیمت همکاری، جست‌وجو بر اساس برند و دسته‌بندی و نمایش مبلغ دقیق تخفیف هر کالا.'
    },
    {
        icon: 'shield',
        title: 'ضمانت اصالت و گارانتی',
        description: 'همان کالای اصل و دارای گارانتی معتبر استیو موبایل، این بار با قیمت همکاری.'
    },
    {
        icon: 'truck',
        title: 'تسویه و ارسال مطمئن',
        description: 'سفارش‌ها با بسته‌بندی استاندارد و امکان پیگیری ارسال، مطمئن به دست شما می‌رسد.'
    },
    {
        icon: 'activity',
        title: 'پیگیری شفاف وضعیت',
        description: 'وضعیت درخواست و همکاری شما (در حال بررسی، تایید، رد یا تعلیق) همیشه در پنل کاربری قابل مشاهده است.'
    }
];

const PartnerBenefitsTemplate = () => {
    return (
        <Container>
            <section id='partner-benefits' className='scroll-mt-24'>
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='text-2xl font-bold text-gray-800 md:text-3xl'>چرا همکاری با استیو موبایل؟</h2>
                    <p className='mt-3 text-sm leading-8 text-gray-600 md:text-base'>
                        هر چیزی که برای خرید عمده و مطمئن لازم دارید، یک‌جا و بدون واسطه.
                    </p>
                </div>

                <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className='hover:border-primary-200 hover:shadow-md group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200'
                        >
                            <span className='bg-primary-50 text-primary-600 group-hover:bg-primary-600 flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:text-white'>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' aria-hidden>
                                    {icons[feature.icon]}
                                </svg>
                            </span>
                            <h3 className='mt-4 text-lg font-semibold text-gray-800'>{feature.title}</h3>
                            <p className='mt-2 text-sm leading-7 text-gray-600'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    );
};

export default PartnerBenefitsTemplate;
