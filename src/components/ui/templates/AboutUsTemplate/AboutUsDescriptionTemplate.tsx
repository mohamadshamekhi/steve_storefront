import aboutImage from '@public/images/about-us/1.png';
import Image from 'next/image';
import PageTitle from '../../atoms/PageTitle/PageTitle';

const reasons = [
    'قیمت‌گذاری شفاف و منصفانه',
    'بررسی کارشناسی دقیق همه گوشی‌ها',
    'خدمات پس از فروش و پشتیبانی حرفه‌ای',
    'پرداخت سریع و جمع‌آوری رایگان برای فروشندگان',
    'استفاده از قطعات اصل در تعمیرات',
    'ضمانت کیفیت در خرید و تعمیر'
];

const CheckIcon = () => (
    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' aria-hidden className='shrink-0'>
        <path
            d='m5 13 4 4L19 7'
            className='stroke-primary-600'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

const AboutUsDescriptionTemplate = () => {
    return (
        <section className='relative mt-4 lg:mt-[22px]'>
            <Image
                src={aboutImage}
                alt='استیو موبایل'
                width={1644}
                height={492}
                className='aspect-[3/2] w-full rounded-2xl object-cover sm:aspect-[2.4/1] md:aspect-[1644/492]'
            />

            <PageTitle title='درباره ما' />

            <div className='mt-8 space-y-10'>
                <div className='space-y-4 text-sm leading-8 text-gray-600 sm:text-base'>
                    <p>
                        استیو با یک هدف ساده اما بزرگ متولد شد: ایجاد تجربه‌ای شفاف، راحت و مطمئن در خرید، فروش و تعمیر
                        گوشی‌های هوشمند. در دنیایی که تکنولوژی با سرعت بالا تغییر می‌کند، ما تلاش می‌کنیم دسترسی به
                        گوشی‌های باکیفیت و خدمات فنی تخصصی را برای همه آسان‌تر کنیم — بدون پیچیدگی، بدون ابهام و بدون
                        دردسر.
                    </p>
                </div>

                <div className='grid gap-4 md:grid-cols-2'>
                    <article className='rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6'>
                        <h2 className='mb-2 text-base font-bold text-gray-900'>
                            خرید و فروش گوشی دست دوم، با خیال راحت
                        </h2>
                        <p className='text-sm leading-8 text-gray-600'>
                            همه گوشی‌های دست دوم پیش از فروش، توسط تیم متخصص ما به‌صورت کامل تست می‌شوند؛ باتری،
                            نمایشگر، دوربین و بدنه بررسی می‌شوند، دستگاه‌ها بر اساس وضعیت دسته‌بندی و منصفانه
                            قیمت‌گذاری می‌شوند و همراه با گزارش کارشناسی و ضمانت سلامت تحویل داده می‌شوند. برای فروش هم
                            قیمت‌گذاری شفاف و لحظه‌ای، پرداخت سریع و جمع‌آوری رایگان از محل داریم.
                        </p>
                    </article>

                    <article className='rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6'>
                        <h2 className='mb-2 text-base font-bold text-gray-900'>تعمیرات تخصصی، با قطعات اصل و ضمانت</h2>
                        <p className='text-sm leading-8 text-gray-600'>
                            بخش تعمیرات استیو با تکیه بر تکنسین‌های حرفه‌ای و قطعات اصل، خدماتی سریع، دقیق و قابل اعتماد
                            ارائه می‌دهد. هر تعمیر با بالاترین استانداردهای فنی انجام می‌شود و روی بیشتر خدمات، گارانتی
                            معتبر ارائه می‌کنیم — از تعویض باتری و نمایشگر تا تعمیرات تخصصی برد.
                        </p>
                    </article>
                </div>

                <div className='rounded-2xl bg-primary-50 p-5 sm:p-8'>
                    <h2 className='mb-5 text-lg font-bold text-gray-900'>چرا استیو؟</h2>
                    <ul className='grid gap-x-6 gap-y-3 sm:grid-cols-2'>
                        {reasons.map((reason) => (
                            <li key={reason} className='flex items-start gap-2.5 text-sm leading-7 text-gray-700'>
                                <CheckIcon />
                                {reason}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='space-y-3'>
                    <h2 className='text-base font-bold text-gray-900'>ما به چه چیزهایی باور داریم؟</h2>
                    <p className='text-sm leading-8 text-gray-600 sm:text-base'>
                        ما در استیو به شفافیت، صداقت و رضایت مشتری باور داریم. معتقدیم اعتماد پایه‌ی اصلی هر معامله‌ی
                        موفق است، و به همین دلیل تلاش می‌کنیم در هر مرحله از ارتباط با شما، تجربه‌ای حرفه‌ای، محترمانه
                        و بی‌نقص رقم بزنیم.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUsDescriptionTemplate;
