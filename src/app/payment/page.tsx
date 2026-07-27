import PaymentTemplate from '@/components/ui/templates/payment/PaymentTemplate';
import { Metadata } from 'next/types';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'پرداخت | استیو شاپ',
    robots: { index: false, follow: false }
};

function Payment() {
    return (
        <Suspense fallback={<div>در حال بارگذاری اطلاعات پرداخت...</div>}>
            <PaymentTemplate />
        </Suspense>
    );
}

export default Payment;
