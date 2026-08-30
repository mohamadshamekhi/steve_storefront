'use client';

import ROUTES from '@/constants/routes/routes.constant';
import { getPartnerStatusView, partnerToneClasses } from '@/helpers/partner';
import { usePartnerStatus } from '@/hooks/usePartnerStatus';
import { useSessionStore } from '@/state';
import { toEnglishDigits } from '@/utils/string.util';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import Button from '../../atoms/Button/Button';
import PartnerApplyForm from './PartnerApplyForm';

const LoginGateOverlay = () => {
    const router = useRouter();

    const goToLogin = () => {
        const callbackUrl = encodeURIComponent(`${ROUTES.PartnerSales}?apply=1`);
        router.push(`${ROUTES.Login}?callbackUrl=${callbackUrl}`);
    };

    return (
        <div className='absolute inset-0 flex items-center justify-center rounded-2xl bg-white/70 p-4 backdrop-blur-[3px]'>
            <div className='flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-6 text-center shadow-sm'>
                <span className='bg-primary-50 text-primary-600 flex h-11 w-11 items-center justify-center rounded-full'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M7 10V7a5 5 0 0 1 10 0v3M6 10h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z'
                            stroke='currentColor'
                            strokeWidth='1.6'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </span>
                <p className='font-semibold text-gray-800'>برای ثبت درخواست همکاری باید وارد شوید</p>
                <p className='max-w-xs text-xs leading-6 text-gray-500'>
                    پس از ورود، به همین صفحه بازمی‌گردید و می‌توانید فرم را تکمیل کنید.
                </p>
                <Button size='lg' onClick={goToLogin}>
                    ورود | ثبت نام
                </Button>
            </div>
        </div>
    );
};

const PartnerApplySection = () => {
    const { data, loading, refetch } = usePartnerStatus();
    const sessionStatus = useSessionStore((state) => state.status);
    const nationalCode = useSessionStore((state) => state.session.profile?.national_code);
    const searchParams = useSearchParams();
    const formWrapperRef = useRef<HTMLDivElement>(null);
    const scrollHandled = useRef(false);

    const isGuest = sessionStatus === 'unauthenticated';
    const isAuth = sessionStatus === 'authenticated';

    const view = getPartnerStatusView(data);
    const showForm = isGuest || (isAuth && !loading && view.canApply);

    const prefill = useMemo(() => {
        const normalizedCode = nationalCode ? toEnglishDigits(nationalCode).replace(/\D/g, '') : '';
        return {
            company_name: data?.company_name ?? '',
            national_id: normalizedCode.length === 10 ? normalizedCode : ''
        };
    }, [data?.company_name, nationalCode]);

    // با آمدن از داشبورد یا بازگشت از لاگین (partner-sales?apply=1) به فرم اسکرول می‌شود
    useEffect(() => {
        if (scrollHandled.current) return;
        if (searchParams.get('apply') !== '1') return;
        if (!isAuth || loading || !showForm) return;

        scrollHandled.current = true;
        formWrapperRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, [searchParams, isAuth, loading, showForm]);

    return (
        <section id='partner-apply' className='mx-auto mt-8 max-w-3xl scroll-mt-24'>
            {sessionStatus === 'loading' && (
                <p className='text-center text-sm text-gray-500'>در حال بارگذاری...</p>
            )}

            {/* وضعیت فعلی همکاری (فقط کاربر لاگین‌کرده) */}
            {isAuth && !loading && (data?.status || data?.has_partnership) && (
                <div className={`rounded-lg border p-4 ${partnerToneClasses[view.tone]}`}>
                    <p className='font-semibold text-gray-800'>{view.title}</p>
                    <p className='mt-1 text-sm leading-7 text-gray-600'>{view.description}</p>
                </div>
            )}

            {isAuth && loading && <p className='text-center text-sm text-gray-500'>در حال بررسی وضعیت همکاری شما...</p>}

            {/* تایید شده — ورود به پنل همکار */}
            {isAuth && !loading && data?.status === 'approved' && (
                <div className='mt-6 text-center'>
                    <Link href={ROUTES.Dashboard}>
                        <Button size='lg'>ورود به پنل همکار</Button>
                    </Link>
                </div>
            )}

            {/* فرم درخواست به‌صورت این‌لاین — برای مهمان با لایه‌ی «نیاز به ورود» */}
            {showForm && (
                <div ref={formWrapperRef} className='relative mt-6'>
                    {isAuth && data?.status === 'rejected' && (
                        <p className='mb-3 text-sm font-medium text-gray-700'>
                            اطلاعات را بررسی و اصلاح کنید و دوباره ارسال نمایید:
                        </p>
                    )}
                    <PartnerApplyForm
                        initialValues={prefill}
                        locked={isGuest}
                        submitLabel={
                            isAuth && data?.status === 'rejected' ? 'ارسال مجدد درخواست' : 'ثبت درخواست همکاری'
                        }
                        onApplied={refetch}
                    />
                    {isGuest && <LoginGateOverlay />}
                </div>
            )}
        </section>
    );
};

export default PartnerApplySection;
