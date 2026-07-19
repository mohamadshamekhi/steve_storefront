'use client';
import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { getPaymentMessage, isPaymentSuccess } from '@/config/utilities/paymentStatus';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import FailedPaymentImage from '@public/images/payment/failed.png';
import SuccessPaymentImage from '@public/images/payment/success.png';
import Link from 'next/link';

interface VerifyResponse {
    success: boolean;
    data?: {
        status?: string;
        tracking_code?: string;
        message?: string;
    };
}

function PaymentTemplate() {
    const searchParams = useSearchParams();
    const authority = searchParams.get('Authority');
    const urlStatus = searchParams.get('Status');

    const [status, setStatus] = useState<string | null>(null);
    const [trackingCode, setTrackingCode] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const verifyPayment = async () => {
            // If Status from URL is not OK, payment was cancelled/failed
            if (urlStatus !== 'OK') {
                setStatus('cancelled');
                setIsLoading(false);
                return;
            }

            if (!authority) {
                setStatus('failed');
                setIsLoading(false);
                return;
            }

            try {
                const response: VerifyResponse = await fetcher(ApiKeys.VERIFY_PAYMENT, 'dashboard', 'POST', {
                    requiredAuth: true,
                    body: {
                        gateway_transaction_id: authority
                    }
                });

                console.log('Verify response:', response);

                if (response?.success && response?.data?.status === 'successful') {
                    setStatus('success');
                    if (response?.data?.tracking_code) {
                        setTrackingCode(response.data.tracking_code);
                    }
                } else {
                    setStatus('failed');
                }
            } catch (error) {
                console.error('Verify error:', error);
                setStatus('failed');
            } finally {
                setIsLoading(false);
            }
        };

        verifyPayment();
    }, [authority, urlStatus]);

    const message = getPaymentMessage(status);
    const isSuccess = isPaymentSuccess(status);
    const PaymentImageSrc = isSuccess ? SuccessPaymentImage : FailedPaymentImage;

    if (isLoading) {
        return (
            <div className='bg-primary-50 flex h-screen w-screen flex-col items-center justify-center'>
                <div className='text-lg text-gray-600'>در حال بررسی وضعیت پرداخت...</div>
            </div>
        );
    }

    return (
        <div className='bg-primary-50 flex h-screen w-screen flex-col items-center justify-center'>
            <Image width={301} height={301} src={PaymentImageSrc} alt='payment-result' loading='lazy' />
            <h1 className='lg:text-h2-bold mt-14 text-xl text-gray-800'>{message}</h1>
            {trackingCode && (
                <h3 className='lg:text-h4-regular mt-4 flex gap-3 text-lg lg:mt-12'>
                    کد پیگیری
                    <span className='text-md lg:text-h4-bold'>#{trackingCode}</span>
                </h3>
            )}
            <Link
                href='/dashboard/order'
                className='text-primary-700 hover:bg-primary-700 mt-11 inline-block w-[250px] rounded-md bg-white py-2.5 text-center text-base font-normal transition ease-linear hover:text-white md:w-[373px]'
            >
                بازگشت به داشبورد
            </Link>
        </div>
    );
}

export default PaymentTemplate;
