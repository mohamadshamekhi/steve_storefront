import PaymentTemplate from '@/components/ui/templates/payment/PaymentTemplate';
import { Metadata } from 'next/types';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'پرداخت | استیو موبایل',
    robots: { index: false, follow: false }
};

function Payment() {
    return (
        <Suspense
            fallback={
                <div className='bg-primary-50 flex min-h-svh w-full items-center justify-center px-4 py-12'>
                    <div className='flex flex-col items-center gap-4'>
                        <span className='border-primary-200 border-t-primary-600 size-10 animate-spin rounded-full border-4' />
                        <p className='text-sm text-gray-500'>در حال بارگذاری اطلاعات پرداخت...</p>
                    </div>
                </div>
            }
        >
            <PaymentTemplate />
        </Suspense>
    );
}

export default Payment;
