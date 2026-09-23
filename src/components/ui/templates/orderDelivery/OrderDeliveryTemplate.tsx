'use client';

import ApiKeys from '@steve/api-keys';
import TomanIcon from '@/components/icons/TomanIcon';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';
import priceFormatter from '@/helpers/formatter';
import useOtpCountdown from '@/hooks/useOtpCountdown';
import { OrderDeliveryInfo, OrderDeliveryInvoice, OrderDeliveryVerifyResponse } from '@/models/orderDelivery.model';
import { formatJalali } from '@/utils/date.util';
import { toEnglishDigits } from '@/utils/string.util';
import Link from 'next/link';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

const OTP_LENGTH = 5;
const PHONE_REGEX = /^(?:\+98|0098|98|0)?9\d{9}$/;

type Step = 'loading' | 'error' | 'info' | 'otp' | 'done';

type ApiResult<T> = { ok: true; data: T; message?: string } | { ok: false; status: number; message: string };

/**
 * این endpointها public هستند و کد اشتباه 401 برمی‌گرداند — fetcher روی 401 کاربر را به
 * /auth/sign-in می‌فرستد، پس اینجا fetch مستقیم می‌زنیم و خطا را داخل همین صفحه نشان می‌دهیم.
 */
async function request<T>(path: string, init?: { method?: 'GET' | 'POST'; body?: unknown; headers?: HeadersInit }): Promise<ApiResult<T>> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
            method: init?.method ?? 'GET',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json', ...init?.headers },
            ...(init?.body !== undefined && { body: JSON.stringify(init.body) }),
            cache: 'no-store'
        });
        const json = await res.json().catch(() => null);
        if (!res.ok) return { ok: false, status: res.status, message: json?.message || 'مشکلی پیش آمده است.' };
        return { ok: true, data: json?.data as T, message: json?.message };
    } catch {
        return { ok: false, status: 0, message: 'خطا در ارتباط با سرور. اتصال اینترنت را بررسی کنید.' };
    }
}

// توکن فاکتور (بعد از verify) تا رفرش صفحه دوباره OTP نخواهد
const storageKey = (token: string) => `order-delivery-invoice:${token}`;
const readInvoiceToken = (token: string) => {
    try {
        const raw = sessionStorage.getItem(storageKey(token));
        if (!raw) return null;
        const { value, expiresAt } = JSON.parse(raw);
        return typeof value === 'string' && Date.now() < expiresAt ? value : null;
    } catch {
        return null;
    }
};
const saveInvoiceToken = (token: string, value: string, expiresInSec: number) => {
    try {
        sessionStorage.setItem(storageKey(token), JSON.stringify({ value, expiresAt: Date.now() + expiresInSec * 1000 }));
    } catch {
        // ignore storage errors
    }
};

const statusTone = (status: string) => {
    if (status === 'delivered') return 'bg-green-50 text-green-700 ring-green-600/20';
    if (status === 'cancelled' || status === 'refunded') return 'bg-secondary-50 text-secondary-700 ring-secondary-600/20';
    return 'bg-primary-50 text-primary-700 ring-primary-600/20';
};

const Price = ({ value, className }: { value: number; className?: string }) => (
    <span className={`inline-flex items-center gap-1 whitespace-nowrap ${className ?? ''}`}>
        {priceFormatter(value)}
        <TomanIcon />
    </span>
);

const Spinner = () => <span className='border-primary-200 border-t-primary-600 size-10 animate-spin rounded-full border-4' />;

const CheckBadge = () => (
    <span className='mx-auto flex size-16 items-center justify-center rounded-full bg-green-50 ring-8 ring-green-50/50'>
        <svg aria-hidden viewBox='0 0 24 24' className='size-8 text-green-600' fill='none' stroke='currentColor' strokeWidth={2.5} strokeLinecap='round' strokeLinejoin='round'>
            <path d='M5 12.5l4.5 4.5L19 7.5' />
        </svg>
    </span>
);

const InvoiceCard = ({ invoice }: { invoice: OrderDeliveryInvoice }) => {
    const address = invoice.shipping_address;
    const addressText = [address?.province, address?.city, address?.street].filter(Boolean).join('، ');

    return (
        <section aria-labelledby='invoice-title' className='rounded-2xl border border-gray-100 bg-white p-5 text-right shadow-sm sm:p-6'>
            <div className='flex flex-wrap items-center justify-between gap-2'>
                <h2 id='invoice-title' className='text-base font-bold text-gray-900'>
                    جزئیات بسته و فاکتور
                </h2>
                {invoice.created_at && <span className='text-xs text-gray-500'>ثبت: {formatJalali(new Date(invoice.created_at))}</span>}
            </div>

            <ul className='mt-4 divide-y divide-gray-100'>
                {invoice.items.map((item, i) => (
                    <li key={i} className='flex items-start justify-between gap-3 py-3'>
                        <div className='min-w-0'>
                            <p className='text-sm font-medium leading-6 text-gray-800'>{item.product_name}</p>
                            {item.variant_label && <p className='mt-0.5 text-xs text-gray-500'>{item.variant_label}</p>}
                            <p className='mt-1 text-xs text-gray-500'>
                                {item.quantity.toLocaleString('fa-IR')} عدد × {priceFormatter(item.unit_price)}
                                {item.discount > 0 && <span className='text-secondary-600'> — تخفیف {priceFormatter(item.discount)}</span>}
                            </p>
                        </div>
                        <Price value={item.total} className='shrink-0 text-sm font-semibold text-gray-900' />
                    </li>
                ))}
            </ul>

            <dl className='mt-2 space-y-2 border-t border-dashed border-gray-200 pt-4 text-sm'>
                <div className='flex justify-between text-gray-600'>
                    <dt>جمع کالاها</dt>
                    <dd><Price value={invoice.subtotal} /></dd>
                </div>
                <div className='flex justify-between text-gray-600'>
                    <dt>هزینه ارسال</dt>
                    <dd>{invoice.shipping_cost > 0 ? <Price value={invoice.shipping_cost} /> : 'رایگان'}</dd>
                </div>
                {invoice.discount > 0 && (
                    <div className='text-secondary-600 flex justify-between'>
                        <dt>تخفیف</dt>
                        <dd><Price value={invoice.discount} /></dd>
                    </div>
                )}
                <div className='flex justify-between pt-1 text-base font-bold text-gray-900'>
                    <dt>مبلغ پرداختی</dt>
                    <dd><Price value={invoice.final_amount} /></dd>
                </div>
            </dl>

            {addressText && (
                <div className='mt-4 rounded-xl bg-gray-50 p-3 text-xs leading-6 text-gray-600'>
                    <span className='font-semibold text-gray-700'>آدرس تحویل{address.title ? ` (${address.title})` : ''}: </span>
                    {addressText}
                    {address.postcode && <span className='block'>کد پستی: {address.postcode}</span>}
                </div>
            )}
        </section>
    );
};

export default function OrderDeliveryTemplate({ token }: { token: string }) {
    const [step, setStep] = useState<Step>('loading');
    const [info, setInfo] = useState<OrderDeliveryInfo | null>(null);
    const [invoice, setInvoice] = useState<OrderDeliveryInvoice | null>(null);
    const [pageError, setPageError] = useState('');

    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [maskedPhone, setMaskedPhone] = useState('');
    const [fieldError, setFieldError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const { start, isDisabled, formatted } = useOtpCountdown({ duration: 120, storageKey: `order-delivery-otp:${token}` });

    const load = useCallback(async () => {
        setStep('loading');
        const res = await request<OrderDeliveryInfo>(ApiKeys.GET_ORDER_DELIVERY(token));
        if (!res.ok) {
            setPageError(res.message);
            setStep('error');
            return;
        }
        setInfo(res.data);

        // بعد از رفرش: اگر همین مرورگر قبلاً تأیید کرده، فاکتور را بدون OTP دوباره بگیر
        const invoiceToken = readInvoiceToken(token);
        if (invoiceToken) {
            const inv = await request<{ invoice: OrderDeliveryInvoice }>(ApiKeys.ORDER_DELIVERY_INVOICE(token), {
                headers: { 'X-Invoice-Token': invoiceToken }
            });
            if (inv.ok && inv.data?.invoice) {
                setInvoice(inv.data.invoice);
                setStep('done');
                return;
            }
        }
        setStep('info');
    }, [token]);

    useEffect(() => {
        load();
    }, [load]);

    const sendOtp = async (e?: FormEvent) => {
        e?.preventDefault();
        const normalized = toEnglishDigits(phone).replace(/\s/g, '');
        if (!PHONE_REGEX.test(normalized)) {
            setFieldError('شماره موبایل معتبر نیست.');
            return;
        }
        setFieldError('');
        setSubmitting(true);
        const res = await request<{ masked_phone: string }>(ApiKeys.ORDER_DELIVERY_SEND_OTP(token), {
            method: 'POST',
            body: { phone_number: normalized }
        });
        setSubmitting(false);
        if (!res.ok) {
            setFieldError(res.message);
            return;
        }
        setPhone(normalized);
        setMaskedPhone(res.data?.masked_phone || normalized);
        setCode('');
        start();
        setStep('otp');
    };

    const verify = async (e?: FormEvent) => {
        e?.preventDefault();
        if (code.length !== OTP_LENGTH) {
            setFieldError(`کد ${OTP_LENGTH.toLocaleString('fa-IR')} رقمی را کامل وارد کنید.`);
            return;
        }
        setFieldError('');
        setSubmitting(true);
        const res = await request<OrderDeliveryVerifyResponse>(ApiKeys.ORDER_DELIVERY_VERIFY(token), {
            method: 'POST',
            body: { phone_number: phone, code }
        });
        setSubmitting(false);
        if (!res.ok) {
            setFieldError(res.message);
            setCode('');
            return;
        }
        if (res.data.invoice_token) saveInvoiceToken(token, res.data.invoice_token, res.data.invoice_token_expires_in || 1800);
        setInvoice(res.data.invoice ?? null);
        setInfo((prev) => (prev ? { ...prev, status: res.data.status, status_label: res.data.invoice?.status_label || 'تحویل شده', can_confirm: false } : prev));
        setStep('done');
    };

    const orderNumber = info?.order_id || invoice?.order_id;

    return (
        <main className='bg-primary-50 flex min-h-svh w-full justify-center px-4 py-8 sm:items-center sm:py-12'>
            <div className='w-full max-w-md space-y-4'>
                <div className='rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm sm:p-8'>
                    {step === 'loading' && (
                        <div className='flex flex-col items-center gap-4 py-10' role='status'>
                            <Spinner />
                            <p className='text-sm text-gray-500'>در حال دریافت اطلاعات سفارش...</p>
                        </div>
                    )}

                    {step === 'error' && (
                        <div className='py-6'>
                            <h1 className='text-secondary-600 text-lg font-bold'>سفارش پیدا نشد</h1>
                            <p className='mt-2 text-sm leading-7 text-gray-500'>{pageError}</p>
                            <div className='mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center'>
                                <Button type='button' color='primary' variant='fill' className='rounded-lg py-2.5' onClick={load}>
                                    تلاش دوباره
                                </Button>
                                <Link href='/' className='rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50'>
                                    صفحه اصلی
                                </Link>
                            </div>
                        </div>
                    )}

                    {(step === 'info' || step === 'otp' || step === 'done') && info && (
                        <>
                            {step === 'done' ? (
                                <>
                                    <CheckBadge />
                                    <h1 className='mt-4 text-lg font-bold text-green-700 sm:text-xl'>تحویل تأیید شد</h1>
                                    <p className='mt-2 text-sm leading-7 text-gray-500'>از خریدتان متشکریم. پیامک تأیید تحویل هم برایتان ارسال می‌شود.</p>
                                </>
                            ) : (
                                <h1 className='text-lg font-bold text-gray-900 sm:text-xl'>تأیید تحویل سفارش</h1>
                            )}

                            <div className='mt-5 flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3 text-right'>
                                <div className='min-w-0'>
                                    <p className='text-xs text-gray-500'>شماره سفارش</p>
                                    <p dir='ltr' className='truncate text-right text-sm font-semibold text-gray-800'>
                                        {orderNumber}
                                    </p>
                                </div>
                                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${statusTone(info.status)}`}>
                                    {info.status_label}
                                </span>
                            </div>

                            {step === 'info' && info.can_confirm && (
                                <form onSubmit={sendOtp} className='mt-6 space-y-4 text-right' noValidate>
                                    <p className='text-sm leading-7 text-gray-600'>
                                        برای تأیید دریافت بسته، شماره موبایلی که با آن سفارش داده‌اید را وارد کنید
                                        {info.masked_phone && (
                                            <>
                                                {' '}(
                                                <span dir='ltr' className='font-semibold text-gray-800'>
                                                    {info.masked_phone}
                                                </span>
                                                )
                                            </>
                                        )}
                                        .
                                    </p>
                                    <div>
                                        <label htmlFor='delivery-phone' className='mb-1.5 block text-sm font-medium text-gray-700'>
                                            شماره موبایل
                                        </label>
                                        <Input
                                            id='delivery-phone'
                                            name='phone_number'
                                            type='tel'
                                            dir='ltr'
                                            inputMode='numeric'
                                            autoComplete='tel'
                                            placeholder='09xxxxxxxxx'
                                            className='max-w-full! text-left'
                                            value={phone}
                                            aria-invalid={!!fieldError}
                                            aria-describedby={fieldError ? 'delivery-error' : undefined}
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                                if (fieldError) setFieldError('');
                                            }}
                                        />
                                        {fieldError && (
                                            <p id='delivery-error' role='alert' className='mt-1.5 text-xs text-red-500'>
                                                {fieldError}
                                            </p>
                                        )}
                                    </div>
                                    <Button type='submit' color='primary' variant='fill' disabled={submitting} className='w-full rounded-lg py-3 disabled:cursor-not-allowed disabled:opacity-60'>
                                        {submitting ? 'در حال ارسال...' : 'دریافت کد تأیید'}
                                    </Button>
                                </form>
                            )}

                            {step === 'otp' && (
                                <form onSubmit={verify} className='mt-6 space-y-4 text-right' noValidate>
                                    <p className='text-sm leading-7 text-gray-600'>
                                        کد {OTP_LENGTH.toLocaleString('fa-IR')} رقمی ارسال‌شده به{' '}
                                        <span dir='ltr' className='font-semibold text-gray-800'>
                                            {maskedPhone}
                                        </span>{' '}
                                        را وارد کنید.
                                    </p>
                                    <div>
                                        <OtpInput
                                            value={code}
                                            onChange={(val) => {
                                                setCode(toEnglishDigits(val).replace(/\D/g, ''));
                                                if (fieldError) setFieldError('');
                                            }}
                                            numInputs={OTP_LENGTH}
                                            shouldAutoFocus
                                            inputStyle={{
                                                direction: 'ltr',
                                                minWidth: '2.75rem',
                                                height: '3rem',
                                                fontSize: '1.375rem',
                                                fontWeight: 600,
                                                borderRadius: '10px',
                                                border: `1px solid ${fieldError ? '#EF4444' : '#D1D5DB'}`,
                                                textAlign: 'center',
                                                backgroundColor: '#fff',
                                                outline: 'none'
                                            }}
                                            containerStyle={{ direction: 'ltr', display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}
                                            renderInput={(props) => <input dir='ltr' {...props} inputMode='numeric' autoComplete='one-time-code' aria-label='کد تأیید' />}
                                        />
                                        {fieldError && (
                                            <p role='alert' className='mt-1.5 text-xs text-red-500'>
                                                {fieldError}
                                            </p>
                                        )}
                                    </div>
                                    <Button type='submit' color='primary' variant='fill' disabled={submitting} className='w-full rounded-lg py-3 disabled:cursor-not-allowed disabled:opacity-60'>
                                        {submitting ? 'در حال بررسی...' : 'تأیید تحویل'}
                                    </Button>
                                    <div className='flex items-center justify-between gap-3 text-sm'>
                                        {isDisabled ? (
                                            <span className='text-gray-400'>ارسال مجدد کد تا {formatted}</span>
                                        ) : (
                                            <button type='button' disabled={submitting} onClick={() => sendOtp()} className='text-primary-600 hover:text-primary-700 min-h-11 cursor-pointer font-semibold'>
                                                ارسال مجدد کد
                                            </button>
                                        )}
                                        <button
                                            type='button'
                                            onClick={() => {
                                                setFieldError('');
                                                setStep('info');
                                            }}
                                            className='min-h-11 cursor-pointer font-medium text-gray-500 hover:text-gray-700'
                                        >
                                            ویرایش شماره
                                        </button>
                                    </div>
                                </form>
                            )}

                            {step === 'info' && !info.can_confirm && (
                                <p className='mt-6 text-sm leading-7 text-gray-500'>
                                    {info.status === 'delivered'
                                        ? 'تحویل این سفارش قبلاً تأیید شده است.'
                                        : 'این سفارش در حال حاضر در وضعیت قابل تأیید تحویل نیست.'}
                                </p>
                            )}

                            {step === 'done' && (
                                <div className='mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center'>
                                    <Link href='/dashboard/order' className='bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-3 text-sm font-semibold text-white'>
                                        سفارش‌های من
                                    </Link>
                                    <Link href='/' className='rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50'>
                                        ادامه خرید
                                    </Link>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {step === 'done' && invoice && <InvoiceCard invoice={invoice} />}
            </div>
        </main>
    );
}
