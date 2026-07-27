'use client';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@public/images/_general/logo.png';
import FooterLinks from './FooterLinks';

import bale from '@public/images/footer/bale.png';
import instageram from '@public/images/footer/instageram.png';
import telegram from '@public/images/footer/telegram.png';

import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronTop from '@/components/icons/ChevronTop';
import FooterIcon from '@/components/icons/FooterIcon';
import ROUTES from '@/constants/routes/routes.constant';
import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import FooterSubscription from './FooterSubscription';

const companyLinks = [
    { href: ROUTES.Blog, label: 'بلاگ استیو' },
    { href: ROUTES.ContactUs, label: 'تماس با استیو' },
    { href: ROUTES.AboutUs, label: 'درباره استیو' }
];

const quickAccess = [
    { href: '#', label: 'خرید گوشی موبایل' },
    { href: '#', label: 'تعمیر گوشی موبایل' },
    { href: '#', label: 'گوشی آیفون' },
    { href: '#', label: 'گوشی سامسونگ' },
    { href: '#', label: 'گوشی هوآوی' },
    { href: '#', label: 'گوشی شیائومی' },
    { href: '#', label: 'خرید تبلت' },
    { href: '#', label: 'ساعت هوشمند' },
    { href: '#', label: 'خرید هندزفری بلوتوثی' }
];

// const customerLinks = [
//     { href: ROUTES.Landing, label: 'پاسخ به پرسش‌های متداول' },
//     { href: ROUTES.Landing, label: 'رویه‌های بازگرداندن کالا' },
//     { href: ROUTES.Landing, label: 'شرایط استفاده' },
//     { href: ROUTES.Landing, label: 'حریم خصوصی' },
//     { href: ROUTES.Landing, label: 'گزارش استیو' }
// ];

// const guideLinks = [
//     { href: ROUTES.Landing, label: 'نحوه ثبت سفارش' },
//     { href: ROUTES.Landing, label: 'رویه ارسال سفارش' },
//     { href: ROUTES.Landing, label: 'شرایط استفاده' },
//     { href: ROUTES.Landing, label: 'شیوه‌های پرداخت' }
// ];

const socials = [
    // { href: 'https://eitaa.com', src: eitaa, title: 'ایتا' },
    { href: 'https://ble.ir/pouriazahedi', src: bale, title: 'بله' },
    { href: 'https://instagram.com/stevemobile.store', src: instageram, title: 'اینستاگرام' },
    // { href: 'https://news.com', src: news, title: 'اخبار' },
    // { href: 'https://rubika.ir', src: rubika, title: 'روبیکا' },
    // { href: 'https://soroush.com', src: sorush, title: 'سروش' },
    { href: 'https://telegram.org/@pouriazhd', src: telegram, title: 'تلگرام' }
];

// const enamds = [
//     { href: '/', src: img1, title: 'test' },
//     { href: '/', src: img2, title: 'test' },
//     // { href: '/', src: img3, title: 'test' },
//     { href: '/', src: img4, title: 'test' }
// ];

const FooterOrganisms = () => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-opacity-1/2 relative bg-white bg-[url('/images/_general/bg/footer-bg.jpg')] bg-cover bg-top px-4 pt-3 pb-[90px] text-sm text-gray-700 md:px-10 lg:px-[143px] lg:pt-15 lg:pb-0">
            <Button
                onClick={scrollToTop}
                variant='light'
                color='primary'
                className='absolute top-0 left-10 z-30 min-w-[138px] !rounded-t-[0] rounded-b-4xl !text-gray-800'
                size='md'
            >
                <span className=''>
                    <FooterIcon />
                </span>
                <span className='absolute right-1/2 z-2 flex translate-x-1/2 transform items-center justify-center gap-2'>
                    <span>بازگشت به بالا</span>

                    <ChevronTop className='text-primary-900 bg-white!' />
                </span>
            </Button>
            <div className='absolute inset-0 z-0 bg-white/93'></div>

            <div className='relative z-10'>
                <Image loading='lazy' src={logo} width={90} height={35} alt='لوگوی استیو شاپ' />

                <div className='text-md mt-8 pb-20 font-medium lg:text-xl'>
                    تلفن پشتیبانی 09379377797 | ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
                </div>

                <div className='mb-16 grid grid-cols-1 gap-8 lg:grid-cols-6'>
                    <div className='lg:col-span-4'>
                        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3'>
                            <FooterLinks title='دسترسی سریع' links={quickAccess} />
                            <FooterLinks title='با استیو' links={companyLinks} />
                            {/* <FooterLinks title='خدمات مشتریان' links={customerLinks} />
                            <FooterLinks title='راهنمای خرید از دیجی‌ شاپ' links={guideLinks} /> */}
                        </div>
                    </div>

                    <div className='lg:col-span-2'>
                        <div className='text-body2-bold mb-4 text-gray-800'>همراه ما باشید!</div>

                        <ul className='flex flex-wrap gap-4'>
                            {socials.map((social, index) => (
                                <li key={index}>
                                    <Link href={social.href} target='_blank' rel='noopener noreferrer'>
                                        <div className='relative flex h-8.25 w-8.25 items-center justify-center'>
                                            <Image
                                                src={social.src}
                                                alt={social.title}
                                                fill
                                                title={social.title}
                                                loading='lazy'
                                                className='object-contain'
                                            />
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <FooterSubscription />
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-6 space-y-3 leading-7 text-gray-800 lg:grid-cols-3'>
                    <div className='lg:col-span-2'>
                        <div className='mb-3 font-semibold'>استیو شاپ؛ فروشگاه اینترنتی تخصصی کالای دیجیتال</div>

                        <div className={`${expanded ? 'h-auto' : 'max-h-36 overflow-hidden'}`}>
                            <p className='mb-4'>
                                استیو شاپ با سال‌ها حضور فعال در حوزه فروش آنلاین کالای دیجیتال، به یکی از مطمئن‌ترین
                                مقاصد خرید اینترنتی برای کاربران ایرانی تبدیل شده است. استیو موبایل با بهره‌گیری از تیمی
                                متخصص و با تجربه، فضایی امن و مطمئن برای خرید آنلاین فراهم کرده است. در استیو شاپ، شما
                                می‌توانید با اطمینان کامل اقدام به خرید گوشی موبایل، تبلت، هدفون، هندزفری، ساعت هوشمند،
                                قاب موبایل، پاوربانک، تجهیزات فیلم‌برداری و نورپردازی و انواع کالای دیجیتال کنید. خرید
                                از استیو موبایل یعنی دریافت کالایی اصل، با بهترین قیمت و ضمانت اصالت کامل.
                            </p>
                            <p className='mb-2 font-semibold'>خرید گوشی موبایل از استیو شاپ</p>
                            <p className='mb-4'>
                                برای بسیاری از کاربران، استیو شاپ همان فروشگاه اینترنتی موبایل است که همیشه دنبالش
                                بودند. در استیو شاپ می‌توانید جدیدترین و بهترین گوشی موبایل از برندهای محبوب جهانی را با
                                بهترین قیمت و ضمانت اصالت پیدا کنید. اگر به دنبال خرید موبایل اقتصادی هستید، استیو شاپ
                                گزینه‌های متنوعی در رنج‌های قیمتی مختلف پیش روی شما قرار می‌دهد. گوشی با قیمت مناسب دیگر
                                یک آرزو نیست؛ در استیو شاپ می‌توانید با کمترین بودجه، بهترین گوشی را انتخاب کنید.
                            </p>
                            <p className='mb-2 font-semibold'>خرید گوشی آیفون از استیو شاپ</p>
                            <p className='mb-4'>
                                گوشی آیفون یکی از پرطرفدارترین و پرفروش‌ترین محصولات استیو شاپ است. برند آمریکایی اپل با
                                طراحی بی‌نظیر، دوربین حرفه‌ای، پردازنده قدرتمند و سیستم‌عامل روان، همواره در صدر انتخاب
                                کاربران قرار داشته است. شما می‌توانید انواع مدل‌های آیفون از جدیدترین نسل‌ها تا مدل‌های
                                میان‌رده را با بهترین قیمت، ضمانت اصالت و خدمات پس از فروش از استیو شاپ خریداری کنید.
                            </p>
                            <p className='mb-2 font-semibold'>خرید گوشی سامسونگ، شیائومی و هواوی</p>
                            <p className='mb-4'>
                                استیو شاپ انواع گوشی‌های سامسونگ، شیائومی و هواوی را در مدل‌های پرچم‌دار، میان‌رده و
                                اقتصادی برای کاربران فراهم کرده است. برند کره‌ای سامسونگ با تنوع بی‌نظیر در گوشی‌های
                                گیمینگ، دوربین‌محور و اقتصادی، یکی از محبوب‌ترین انتخاب‌ها در استیو شاپ است. شیائومی نیز
                                با ارائه گوشی‌هایی با امکانات بالا در قیمتی مقرون‌به‌صرفه، همواره مورد توجه خریداران
                                بوده است. اگر به دنبال بهترین گوشی در هر بودجه‌ای هستید، استیو شاپ تمام نیازهای شما را
                                پوشش می‌دهد.
                            </p>
                            <p className='mb-2 font-semibold'>خرید تبلت</p>
                            <p className='mb-4'>
                                انواع تبلت‌های اندروید و آیپد برای کار، تحصیل و سرگرمی در استیو شاپ موجود است. از
                                تبلت‌های ورودی با قیمت مناسب گرفته تا مدل‌های حرفه‌ای با بالاترین کیفیت، همه چیز در
                                استیو شاپ در دسترس شماست. تبلت‌های موجود در این فروشگاه از برندهای معتبر جهانی هستند و
                                با ضمانت اصالت و خدمات پس از فروش کامل ارائه می‌شوند. اگر به دنبال تبلتی برای مطالعه،
                                طراحی، کار با نرم‌افزارهای حرفه‌ای یا صرفاً سرگرمی هستید، استیو شاپ بهترین گزینه‌ها را
                                با مناسب‌ترین قیمت پیش روی شما می‌گذارد.
                            </p>
                            <p className='mb-2 font-semibold'>خرید هدفون و هندزفری</p>
                            <p className='mb-4'>
                                در دنیای امروز، هدفون و هندزفری از ضروری‌ترین گجت‌های دیجیتالی هستند که همه به آن‌ها
                                نیاز دارند. استیو شاپ گسترده‌ترین تنوع هدفون و هندزفری بی‌سیم و باسیم را از برندهای
                                معتبر جهانی در اختیار شما قرار می‌دهد. از هندزفری ساده و اقتصادی برای استفاده روزمره تا
                                هدفون‌های حرفه‌ای با قابلیت حذف نویز فعال و کیفیت صدای استودیویی، همه در استیو شاپ موجود
                                است. تمامی هدفون‌ها و هندزفری‌های موجود در استیو شاپ با ضمانت اصالت و بهترین قیمت ارائه
                                می‌شوند.
                            </p>
                            <p className='mb-2 font-semibold'>خرید قاب موبایل و لوازم جانبی</p>
                            <p className='mb-4'>
                                استیو شاپ یکی از بهترین مقاصد برای خرید قاب موبایل و انواع لوازم جانبی است. اگر به دنبال
                                قاب آیفون یا قاب گوشی های دیگر با طرح‌های متنوع و کیفیت بالا هستید، می‌توانید از میان
                                صدها مدل مختلف در رنگ‌ها و جنس‌های گوناگون انتخاب کنید. قاب گوشی آیفون در استیو شاپ شامل
                                انواع سیلیکونی، چرمی، شفاف، ضدضربه و طرح‌دار می‌شود. علاوه بر قاب موبایل، انواع پاوربانک
                                با ظرفیت‌های مختلف، کابل شارژ، شارژر دیواری و بی‌سیم، محافظ صفحه، گلس و سایر لوازم جانبی
                                با بهترین قیمت در استیو شاپ موجود است.
                            </p>
                            <p className='mb-2 font-semibold'>خرید ساعت هوشمند</p>
                            <p className='mb-4'>
                                ساعت هوشمند این روزها به یکی از پرطرفدارترین گجت‌های دیجیتالی تبدیل شده است. از ساعت‌های
                                هوشمند با امکانات پیشرفته مانند پایش سلامت، ضربان قلب، GPS و مقاومت در برابر آب تا
                                مدل‌های شیک و اقتصادی برای استفاده روزمره، استیو شاپ بهترین انتخاب را برای شما فراهم
                                کرده است. تمام ساعت‌های هوشمند موجود در استیو موبایل از برندهای معتبر جهانی هستند و با
                                ضمانت اصالت و بهترین قیمت ارائه می‌شوند. چه به دنبال یک ساعت هوشمند ورزشی باشید چه یک
                                مدل شیک و رسمی، استیو شاپ گزینه‌های متنوعی در رنج‌های قیمتی مختلف پیش روی شما قرار
                                می‌دهد.
                            </p>
                            <p className='mb-2 font-semibold'>خرید تجهیزات فیلم‌برداری و نورپردازی</p>
                            <p className='mb-4'>
                                استیو شاپ انواع تجهیزات حرفه‌ای و نیمه‌حرفه‌ای فیلم‌برداری و نورپردازی را برای
                                محتواسازان، یوتیوبرها، اینستاگرام و فیلم‌سازان فراهم کرده است. از سه‌پایه، استابلایزر و
                                گیمبال گرفته تا رینگ لایت و پانل‌های نورپردازی حرفه‌ای، همه چیز در استیو شاپ موجود است.
                                اگر به دنبال ارتقای کیفیت محتوای ویدیویی و عکاسی خود هستید، استیو شاپ با ارائه بهترین
                                تجهیزات با قیمت مناسب، بهترین همراه شما خواهد بود.
                            </p>
                            <p className='mb-2 font-semibold'>خرید تجهیزات صوتی و تصویری</p>
                            <p className='mb-4'>
                                انواع تجهیزات صوتی و تصویری برای خانه و محیط کار از جمله اسپیکر بلوتوثی، ساندبار، سیستم
                                صوتی خانگی و پروژکتور با بهترین قیمت و ضمانت اصالت در فروشگاه استیو موبایل در دسترس است.
                                اگر به دنبال ارتقای تجربه صوتی و تصویری خانه خود هستید، استیو شاپ با گسترده‌ترین تنوع
                                محصولات در این حوزه آماده خدمت‌رسانی به شماست.
                            </p>
                            <p className='mb-2 font-semibold'>خرید تجهیزات گیمینگ</p>
                            <p className='mb-4'>
                                استیو شاپ گیمرها را فراموش نکرده است! شما می‌توانید از میان گسترده‌ترین تنوع تجهیزات
                                گیمینگ شامل کنسول بازی، دسته بازی، هدست گیمینگ، موس، کیبورد و پد موس با بهترین قیمت و
                                ضمانت اصالت در استیو شاپ خرید کنید. استیو شاپ با ارائه جدیدترین تجهیزات گیمینگ از
                                برندهای معتبر جهانی، مقصد اول گیمرهای حرفه‌ای و تازه‌کار است.
                            </p>
                            <p className='mb-2 font-semibold'>تعمیرات تخصصی موبایل در استیو شاپ</p>
                            <p className='mb-4'>
                                استیو شاپ علاوه بر فروش، خدمات تعمیرات موبایل را نیز به صورت تخصصی ارائه می‌دهد. تعمیر
                                آیفون، تعمیر گوشی سامسونگ، شیائومی، هواوی و سایر برندها با قطعات اصلی، هزینه کاملاً
                                منصفانه و تحویل سریع از جمله خدماتی است که استیو شاپ به مشتریان خود ارائه می‌دهد.
                                متخصصین مجرب استیو شاپ با سال‌ها تجربه در تعمیر گوشی، آماده‌اند تا مشکلات دستگاه شما از
                                جمله تعویض صفحه، تعمیر دوربین، مشکلات نرم‌افزاری و سایر خرابی‌ها را در کوتاه‌ترین زمان
                                ممکن برطرف کنند. اگر گوشی شما دچار مشکل شده، با اطمینان کامل به استیو شاپ مراجعه کنید و
                                تعمیر تخصصی در سریع ترین زمان ممکن را تجربه کنید.
                            </p>
                            <p className='mb-2 font-semibold'>چرا استیو شاپ؟</p>
                            <p>
                                خرید از استیو شاپ به این معناست که علاوه بر دریافت کالایی اصل و باکیفیت، از خدمات پس از
                                فروش و پشتیبانی حرفه‌ای نیز بهره‌مند خواهید شد. استیو شاپ با ارسال سریع به سراسر ایران،
                                ضمانت اصالت کالا، بهترین قیمت و پشتیبانی آنلاین، تجربه‌ای متفاوت و مطمئن از خرید
                                اینترنتی را برای شما فراهم کرده است. همین حالا وارد استیو شاپ شوید و بهترین انتخاب را با
                                خیالی آسوده انجام دهید.
                            </p>
                        </div>
                        <Button
                            onClick={() => setExpanded((prev) => !prev)}
                            variant='text'
                            color='black'
                            className='text-body3-regular'
                        >
                            <div className='flex items-center justify-start gap-2'>
                                <span className=''>{!expanded ? 'نمایش بیشتر' : 'نمایش کمتر'}</span>

                                <ChevronLeft
                                    className={`text-primary-800 ${expanded ? '-rotate-90 transform' : 'max-h-36 overflow-hidden'}`}
                                />
                            </div>
                        </Button>
                    </div>

                    <div className='grid grid-cols-5 gap-3'>
                        {/* enamad logo */}
                        {/* {enamds.map((item, index) => (
                            <Link href={item.href} target='_blank' rel='noopener noreferrer' key={index}>
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={108}
                                    height={108}
                                    title={item.title}
                                    className='w-full'
                                    loading='lazy'
                                />
                            </Link>
                        ))} */}
                        <a
                            referrerPolicy='origin'
                            target='_blank'
                            href='https://trustseal.enamad.ir/?id=706517&Code=91TZVc31FFDRaymO6VyArhi6WWqO8kcY'
                        >
                            <Image
                                referrerPolicy='origin'
                                src='/images/footer/enamad/enamad.webp?id=706517&Code=91TZVc31FFDRaymO6VyArhi6WWqO8kcY'
                                alt='enamad'
                                width={108}
                                height={108}
                                className='w-full cursor-pointer'
                                loading='lazy'
                            />
                        </a>
                    </div>
                </div>

                <div className='text-body2-regular mt-3 mb-4 text-center leading-[44px] lg:mt-[60px]'>
                    برای استفاده از مطالب استیو، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز
                    برای شرکت نوآوران فن آوازه (فروشگاه آنلاین استیو) است.
                </div>
            </div>
        </footer>
    );
};

export default FooterOrganisms;
