import Container from '../../organisms/Container/Container';

const chips = [
    'بدون هزینهٔ عضویت',
    'تخفیف اختصاصی روی هر تنوع',
    'ضمانت اصالت کالا',
    'پشتیبانی اختصاصی همکاران'
];

const CheckIcon = () => (
    <svg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden>
        <path d='m5 13 4 4L19 7' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
);

const PartnerHeroTemplate = () => {
    return (
        <section className='from-primary-700 to-primary-900 relative overflow-hidden rounded-3xl bg-gradient-to-bl text-white'>
            <div
                aria-hidden
                className='bg-secondary-500/20 pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl'
            />
            <div
                aria-hidden
                className='bg-primary-400/20 pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full blur-3xl'
            />

            <Container className='relative px-6 py-12 md:py-16 lg:py-20'>
                <span className='bg-white/10 inline-block rounded-full px-4 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/15'>
                    ویژهٔ فروشگاه‌ها و کسب‌وکارهای حوزهٔ موبایل
                </span>

                <h1 className='mt-5 max-w-3xl text-3xl leading-tight font-bold md:text-4xl lg:text-[44px]'>
                    با استیو موبایل بفروش، <span className='text-secondary-300'>بیشتر سود کن</span>
                </h1>

                <p className='mt-5 max-w-2xl text-sm leading-8 text-white/85 md:text-base'>
                    به جمع همکاران فروش استیو موبایل بپیوندید و کل کاتالوگ موبایل و کالای دیجیتال را با قیمت ویژهٔ
                    همکاران و درصد تخفیف اختصاصی تهیه کنید؛ بدون هزینهٔ عضویت، با تسویه و ارسال مطمئن.
                </p>

                <div className='mt-8 flex flex-wrap items-center gap-3'>
                    <a
                        href='#partner-apply'
                        className='bg-white text-primary-700 hover:bg-white/90 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors md:text-base'
                    >
                        ثبت درخواست همکاری
                    </a>
                    <a
                        href='#partner-benefits'
                        className='hover:bg-white/10 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/25 transition-colors md:text-base'
                    >
                        مزایای همکاری را ببینید
                    </a>
                </div>

                <ul className='mt-9 flex flex-wrap gap-x-6 gap-y-3'>
                    {chips.map((chip) => (
                        <li key={chip} className='flex items-center gap-2 text-sm text-white/90'>
                            <span className='bg-white/15 flex h-5 w-5 items-center justify-center rounded-full text-white'>
                                <CheckIcon />
                            </span>
                            {chip}
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default PartnerHeroTemplate;
