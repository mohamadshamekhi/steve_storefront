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

    return (
        <div className='bg-primary-50 flex min-h-svh w-full items-center justify-center px-4 py-12'>
            <div className='w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm sm:p-8'>
                {isLoading ? (
                    <div className='flex flex-col items-center gap-4 py-10'>
                        <span className='border-primary-200 border-t-primary-600 size-10 animate-spin rounded-full border-4' />
                        <p className='text-sm text-gray-500'>در حال بررسی وضعیت پرداخت...</p>
                    </div>
                ) : (
                    <>
                        <Image
                            width={301}
                            height={301}
                            src={PaymentImageSrc}
                            alt={isSuccess ? 'پرداخت موفق' : 'پرداخت ناموفق'}
                            className='mx-auto w-40 sm:w-48'
                        />

                        <h1
                            className={`mt-4 text-lg font-bold sm:text-xl ${
                                isSuccess ? 'text-green-600' : 'text-secondary-600'
                            }`}
                        >
                            {message}
                        </h1>

                        {trackingCode && (
                            <div className='mt-4 inline-flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-2.5 text-sm'>
                                <span className='text-gray-500'>کد پیگیری</span>
                                <span dir='ltr' className='text-gray-850 font-mono font-bold'>
                                    #{trackingCode}
                                </span>
                            </div>
                        )}

                        <div className='mt-8 flex flex-col gap-3'>
                            {isSuccess ? (
                                <>
                                    <Link
                                        href='/dashboard/order'
                                        className='bg-primary-600 hover:bg-primary-700 rounded-lg py-2.5 text-center text-sm font-semibold text-white transition'
                                    >
                                        مشاهده سفارش‌ها
                                    </Link>
                                    <Link
                                        href='/'
                                        className='rounded-lg border border-gray-200 py-2.5 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-50'
                                    >
                                        ادامه خرید
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href='/checkout/cart'
                                        className='bg-primary-600 hover:bg-primary-700 rounded-lg py-2.5 text-center text-sm font-semibold text-white transition'
                                    >
                                        بازگشت به سبد خرید و تلاش مجدد
                                    </Link>
                                    <Link
                                        href='/contact-us'
                                        className='rounded-lg border border-gray-200 py-2.5 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-50'
                                    >
                                        تماس با پشتیبانی
                                    </Link>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default PaymentTemplate;
