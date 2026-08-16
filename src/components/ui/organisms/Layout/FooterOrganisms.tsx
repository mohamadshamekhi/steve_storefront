'use client';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@public/images/_general/logo.png';
import FooterLinks from './FooterLinks';

import bale from '@public/images/footer/bale.png';
import instageram from '@public/images/footer/instageram.png';
import telegram from '@public/images/footer/telegram.png';

import ChevronTop from '@/components/icons/ChevronTop';
import FooterIcon from '@/components/icons/FooterIcon';
import ROUTES from '@/constants/routes/routes.constant';
import Button from '../../atoms/Button/Button';
import FooterSubscription from './FooterSubscription';

const companyLinks = [
    { href: ROUTES.Blog, label: 'بلاگ استیو' },
    { href: ROUTES.ContactUs, label: 'تماس با استیو' },
    { href: ROUTES.AboutUs, label: 'درباره استیو' }
];

// TODO: these used to all point to "#" (dead links - no SEO value, broken UX).
// Pointed at real routes for now; ideally the brand/model-specific ones
// (آیفون/سامسونگ/هوآوی/شیائومی/تبلت/ساعت هوشمند/هندزفری) should deep-link to
// their exact category or brand via `/product?category_id=` / `?brand_id=`
// (see CategoriesTemplate.tsx) once we wire real category/brand ids in here.
const quickAccess = [
    { href: ROUTES.Products, label: 'خرید گوشی موبایل' },
    { href: ROUTES.PhoneRepair, label: 'تعمیر گوشی موبایل' },
    { href: ROUTES.Products, label: 'گوشی آیفون' },
    { href: ROUTES.Products, label: 'گوشی سامسونگ' },
    { href: ROUTES.Products, label: 'گوشی هوآوی' },
    { href: ROUTES.Products, label: 'گوشی شیائومی' },
    { href: ROUTES.Products, label: 'خرید تبلت' },
    { href: ROUTES.Products, label: 'ساعت هوشمند' },
    { href: ROUTES.Products, label: 'خرید هندزفری بلوتوثی' }
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
                <Image loading='lazy' src={logo} width={90} height={35} alt='لوگوی استیو موبایل' />

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

                <div className='flex flex-wrap items-center justify-between gap-6'>
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
