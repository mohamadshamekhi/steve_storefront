'use client';
import ROUTES from '@/constants/routes/routes.constant';
import Link from 'next/link';
import { useState } from 'react';

// کد تخفیف اولین خرید از env خوانده می‌شود؛ تا وقتی تعریف نشده بنرش نمایش داده نمی‌شود.
// مثال: NEXT_PUBLIC_FIRST_PURCHASE_CODE=WELCOME  NEXT_PUBLIC_FIRST_PURCHASE_LABEL=۱۰٪ تخفیف
const FIRST_PURCHASE_CODE = process.env.NEXT_PUBLIC_FIRST_PURCHASE_CODE?.trim();
const FIRST_PURCHASE_LABEL = process.env.NEXT_PUBLIC_FIRST_PURCHASE_LABEL?.trim() || 'تخفیف ویژه';

const GiftIcon = () => (
    <svg aria-hidden width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <rect x='3' y='8' width='18' height='4' rx='1' />
        <path d='M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7' />
        <path d='M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5' />
    </svg>
);

const UsersIcon = () => (
    <svg aria-hidden width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
        <circle cx='9' cy='7' r='4' />
        <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
);

const FirstPurchaseCard = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false);
    const copy = () => {
        navigator.clipboard
            ?.writeText(code)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(() => {});
    };

    return (
        <div className='from-secondary-500 to-secondary-600 flex flex-col gap-4 rounded-2xl bg-linear-to-l p-5 text-white shadow-sm sm:p-6'>
            <div className='flex items-start gap-3'>
                <span className='grid size-11 shrink-0 place-items-center rounded-xl bg-white/15'>
                    <GiftIcon />
                </span>
                <div>
                    <h2 className='text-base font-bold sm:text-lg'>{FIRST_PURCHASE_LABEL} برای اولین خرید</h2>
                    <p className='mt-1 text-sm leading-7 text-white/85'>کد زیر را موقع پرداخت در سبد خرید وارد کنید.</p>
                </div>
            </div>
            <button
                type='button'
                onClick={copy}
                className='flex items-center justify-between gap-3 rounded-xl border border-dashed border-white/60 bg-white/10 px-4 py-2.5 transition hover:bg-white/15'
            >
                <span dir='ltr' className='font-mono text-base font-bold tracking-widest'>
                    {code}
                </span>
                <span className='text-sm font-semibold'>{copied ? 'کپی شد ✓' : 'کپی کد'}</span>
            </button>
        </div>
    );
};

const InviteFriendsCard = () => (
    <div className='from-primary-50 to-primary-100 flex flex-col gap-4 rounded-2xl bg-linear-to-l p-5 shadow-sm sm:p-6'>
        <div className='flex items-start gap-3'>
            <span className='bg-primary-600 grid size-11 shrink-0 place-items-center rounded-xl text-white'>
                <UsersIcon />
            </span>
            <div>
                <h2 className='text-base font-bold text-gray-800 sm:text-lg'>دوستانت را دعوت کن، هدیه بگیر</h2>
                <p className='mt-1 text-sm leading-7 text-gray-600'>
                    دوستانی که با لینک تو ثبت‌نام کنند کد تخفیف خوش‌آمد می‌گیرند و تو هم برای دعوت‌هایت هدیه می‌گیری.
                </p>
            </div>
        </div>
        <Link
            href={ROUTES.Referral}
            className='bg-primary-600 hover:bg-primary-700 mt-auto rounded-xl px-5 py-2.5 text-center text-sm font-bold text-white transition'
        >
            دریافت لینک دعوت
        </Link>
    </div>
);

const PromoCtaTemplate = () => (
    <section aria-label='پیشنهادهای ویژه' className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {FIRST_PURCHASE_CODE && <FirstPurchaseCard code={FIRST_PURCHASE_CODE} />}
        <div className={FIRST_PURCHASE_CODE ? '' : 'md:col-span-2'}>
            <InviteFriendsCard />
        </div>
    </section>
);

export default PromoCtaTemplate;
