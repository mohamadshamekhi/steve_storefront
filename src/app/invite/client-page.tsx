'use client';

import { useSessionStore } from '@/state';
import { isValidRef, setStoredRef } from '@/utils/referral.util';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ClientPage = ({ refCode }: { refCode: string | null }) => {
    const router = useRouter();
    const status = useSessionStore((state) => state.status);

    useEffect(() => {
        // کد دعوت را نگه می‌داریم تا هنگام تکمیل ثبت‌نام همراه verify-otp ارسال شود.
        if (isValidRef(refCode)) {
            setStoredRef(refCode);
        }

        // کاربر لاگین‌کرده دیگر ثبت‌نام نمی‌کند (کد روی سرور نادیده گرفته می‌شود) → صفحه‌ی اصلی.
        // در غیر این صورت → شروع ثبت‌نام. تا وقتی وضعیت مشخص نشده، پیش‌فرضِ امن ثبت‌نام است.
        const target = status === 'authenticated' ? '/' : '/auth/sign-in';

        const t = setTimeout(() => router.replace(target), status === 'loading' ? 1200 : 0);
        return () => clearTimeout(t);
    }, [refCode, status, router]);

    return (
        <div className='flex min-h-svh w-full items-center justify-center px-4'>
            <div className='flex flex-col items-center gap-4'>
                <span className='border-primary-200 border-t-primary-600 size-10 animate-spin rounded-full border-4' />
                <p className='text-sm text-gray-500'>در حال انتقال شما...</p>
            </div>
        </div>
    );
};

export default ClientPage;
