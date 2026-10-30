'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import TomanIcon from '@/components/icons/TomanIcon';
import Button from '@/components/ui/atoms/Button/Button';
import EmptyState from '@/components/ui/molecules/EmptyState/EmptyState';
import DashboardListSkeleton from '@/components/ui/organisms/SkeletonOrganisms/DashboardListSkeleton/DashboardListSkeleton';
import priceFormatter from '@/helpers/formatter';
import { formatJalali } from '@/utils/date.util';
import { useEffect, useState } from 'react';

interface OrderItem {
    ProductID: string;
    VariantID: string;
    Quantity: number;
    ProductName: string;
    VariantAttributes: {
        key: string;
        value: string;
        label: string;
        meta: string;
    }[];
    PriceAtTime: number;
}

interface Payment {
    id: string;
    user_id: string;
    order_id: string;
    amount: number;
    gateway: string;
    status: string;
    gateway_transaction_id: string;
    tracking_code?: string;
    masked_card_number?: string;
    description: string;
    created_at: string;
    updated_at: string;
}

interface Order {
    _id: string;
    user_id: string;
    items: OrderItem[];
    shipping_address: {
        id: string;
        title: string;
        province: string;
        city: string;
        street: string;
        postcode: string;
    };
    subtotal_amount: number;
    shipping_amount: number;
    final_amount: number;
    shipping: {
        id: string;
        name: string;
        description: string;
        cost: number;
        is_active: boolean;
    };
    status: string;
    /** کد رهگیری مرسوله؛ وقتی سفارش «ارسال شده» می‌شود ثبت و پیامک می‌شود */
    tracking_code?: string;
    payments: Payment[];
    created_at: string;
    updated_at: string;
}

const paymentStatusMap: Record<string, { label: string; color: string }> = {
    pending: { label: 'در انتظار پرداخت', color: 'bg-yellow-100 text-yellow-700' },
    successful: { label: 'موفق', color: 'bg-green-100 text-green-700' },
    failed: { label: 'ناموفق', color: 'bg-red-100 text-red-700' },
    refunded: { label: 'بازگشت وجه', color: 'bg-orange-100 text-orange-700' }
};

const statusMap: Record<string, { label: string; color: string; description: string }> = {
    pending_payment: {
        label: 'در انتظار پرداخت',
        color: 'bg-yellow-100 text-yellow-700',
        description: 'سفارش ثبت شده اما هنوز پرداخت نشده است'
    },
    processing: {
        label: 'در حال پردازش',
        color: 'bg-blue-100 text-blue-700',
        description: 'پرداخت انجام شده و سفارش در حال آماده‌سازی است'
    },
    shipped: {
        label: 'ارسال شده',
        color: 'bg-indigo-100 text-indigo-700',
        description: 'بسته تحویل شرکت حمل و نقل داده شده است'
    },
    delivered: {
        label: 'تحویل داده شده',
        color: 'bg-green-100 text-green-700',
        description: 'بسته با موفقیت به دست شما رسیده است'
    },
    cancelled: {
        label: 'لغو شده',
        color: 'bg-red-100 text-red-700',
        description: 'سفارش لغو شده است'
    },
    refunded: {
        label: 'مرجوع شده',
        color: 'bg-orange-100 text-orange-700',
        description: 'کالا مرجوع شده و هزینه بازگشت داده شده است'
    }
};

function BoxIcon() {
    return (
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' aria-hidden className='text-gray-400'>
            <path
                d='M3.3 7 12 12l8.7-5M12 21v-9M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'
                className='stroke-current'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

function OrdersTemplate() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [payingOrderId, setPayingOrderId] = useState<string | null>(null);
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const handleCopyTracking = (code: string) => {
        navigator.clipboard
            ?.writeText(code)
            .then(() => {
                setCopiedCode(code);
                setTimeout(() => setCopiedCode((c) => (c === code ? null : c)), 2000);
            })
            .catch(() => {});
    };

    const handlePayOrder = async (orderId: string) => {
        setPayingOrderId(orderId);
        try {
            const response = await fetcher(ApiKeys.START_PAYMENT, 'dashboard', 'POST', {
                requiredAuth: true,
                body: {
                    order_id: orderId
                }
            });

            if (response?.success && response?.data?.payment_url) {
                window.location.href = response.data.payment_url;
            }
        } catch (error) {
            console.error('Payment error:', error);
            setPayingOrderId(null);
        }
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetcher(ApiKeys.GET_ALL_ORDERS, 'dashboard', 'GET', {
                    requiredAuth: true
                });
                if (res?.data?.orders) {
                    setOrders(res.data.orders);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <DashboardListSkeleton title='سفارشات من' />;
    }

    if (orders.length === 0) {
        return <EmptyState title='هنوز سفارشی ثبت نکرده‌اید' subtitle='محصولات فروشگاه را ببینید و اولین سفارش خود را ثبت کنید.' />;
    }

    return (
        <>
            <h1 className='text-gray-850 mb-6 text-base font-bold'>سفارشات من</h1>

            <div className='flex flex-col gap-4'>
                {orders.map((order) => {
                    const statusInfo = statusMap[order.status] ?? {
                        label: order.status,
                        color: 'bg-gray-100 text-gray-700'
                    };

                    return (
                        <div
                            key={order._id}
                            className='overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm'
                        >
                            {/* Header */}
                            <div className='flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 bg-gray-50/60 px-4 py-3 sm:px-5'>
                                <div className='flex items-center gap-2.5'>
                                    <span
                                        className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${statusInfo.color}`}
                                    >
                                        {statusInfo.label}
                                    </span>
                                    <span className='text-xs text-gray-400'>
                                        {formatJalali(new Date(order.created_at))}
                                    </span>
                                </div>
                                <div className='text-xs text-gray-500'>
                                    کد سفارش: <span dir='ltr' className='font-semibold'>{order._id.slice(-8)}</span>
                                </div>
                            </div>

                            <div className='space-y-4 p-4 sm:p-5'>
                                {/* Items */}
                                <div className='flex flex-col gap-3'>
                                    {order.items.map((item, index) => (
                                        <div key={index} className='flex items-start gap-3'>
                                            <span className='grid size-12 shrink-0 place-items-center rounded-xl bg-gray-100'>
                                                <BoxIcon />
                                            </span>
                                            <div className='min-w-0 flex-1'>
                                                <h3 className='line-clamp-1 text-sm font-semibold text-gray-800'>
                                                    {item.ProductName}
                                                </h3>
                                                <div className='mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500'>
                                                    <span>تعداد: {item.Quantity}</span>
                                                    {item.VariantAttributes.map((attr, i) => (
                                                        <span key={i} className='flex items-center gap-1'>
                                                            {attr.key === 'رنگ' ? (
                                                                <>
                                                                    <span
                                                                        className='inline-block size-3 rounded-full border border-gray-200'
                                                                        style={{ backgroundColor: attr.value }}
                                                                    />
                                                                    {attr.label}
                                                                </>
                                                            ) : (
                                                                `${attr.key}: ${attr.label}`
                                                            )}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='flex shrink-0 flex-col items-end text-sm text-gray-700'>
                                                <div className='flex items-center gap-1 font-semibold'>
                                                    {priceFormatter(item.PriceAtTime * item.Quantity)}
                                                    <TomanIcon className='size-4' />
                                                </div>
                                                {item.Quantity > 1 && (
                                                    <span className='text-xs text-gray-400'>
                                                        {priceFormatter(item.PriceAtTime)} × {item.Quantity}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Address & Shipping */}
                                <div className='grid gap-3 sm:grid-cols-2'>
                                    <div className='rounded-xl border border-gray-100 bg-gray-50/70 p-3 text-xs leading-6 text-gray-600'>
                                        <div className='mb-1 font-semibold text-gray-700'>آدرس تحویل</div>
                                        <div>
                                            {order.shipping_address.province}، {order.shipping_address.city}،{' '}
                                            {order.shipping_address.street}
                                        </div>
                                    </div>
                                    <div className='rounded-xl border border-gray-100 bg-gray-50/70 p-3 text-xs leading-6 text-gray-600'>
                                        <div className='mb-1 font-semibold text-gray-700'>روش ارسال</div>
                                        <div>{order.shipping.name}</div>
                                        {order.tracking_code && (
                                            <div className='mt-1 flex flex-wrap items-center gap-1.5'>
                                                <span>کد رهگیری مرسوله:</span>
                                                <span dir='ltr' className='font-mono font-semibold break-all text-gray-800'>
                                                    {order.tracking_code}
                                                </span>
                                                <button
                                                    type='button'
                                                    onClick={() => handleCopyTracking(order.tracking_code!)}
                                                    className='text-primary-500 hover:bg-primary-50 rounded-md px-1.5 py-0.5 font-semibold transition-colors'
                                                >
                                                    {copiedCode === order.tracking_code ? 'کپی شد ✓' : 'کپی'}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Payments */}
                                {order.payments?.length > 0 && (
                                    <div className='rounded-xl border border-gray-100 bg-gray-50/70 p-3 text-xs text-gray-600'>
                                        <div className='mb-2 font-semibold text-gray-700'>پرداخت‌ها</div>
                                        <div className='flex flex-col gap-2'>
                                            {order.payments.map((payment) => {
                                                const paymentStatus = paymentStatusMap[payment.status] ?? {
                                                    label: payment.status,
                                                    color: 'bg-gray-100 text-gray-700'
                                                };
                                                return (
                                                    <div
                                                        key={payment.id}
                                                        className='flex flex-wrap items-center justify-between gap-2 rounded-lg border border-gray-100 bg-white px-3 py-2'
                                                    >
                                                        <div className='flex flex-wrap items-center gap-2'>
                                                            <span
                                                                className={`rounded-md px-2 py-0.5 text-tiny font-semibold ${paymentStatus.color}`}
                                                            >
                                                                {paymentStatus.label}
                                                            </span>
                                                            <span className='text-gray-500'>{payment.gateway}</span>
                                                            {payment.tracking_code && (
                                                                <span className='text-gray-400'>
                                                                    کد پیگیری: {payment.tracking_code}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className='flex items-center gap-2'>
                                                            {payment.masked_card_number && (
                                                                <span className='font-mono text-gray-400' dir='ltr'>
                                                                    {payment.masked_card_number}
                                                                </span>
                                                            )}
                                                            <span className='flex items-center gap-1 font-semibold text-gray-700'>
                                                                {priceFormatter(payment.amount)}
                                                                <TomanIcon className='size-3' />
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Footer - Prices */}
                                <div className='flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between'>
                                    <div className='flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500'>
                                        <span>جمع کل: {priceFormatter(order.subtotal_amount)}</span>
                                        <span>
                                            هزینه ارسال:{' '}
                                            {order.shipping.cost > 0 ? priceFormatter(order.shipping.cost) : 'رایگان'}
                                        </span>
                                    </div>
                                    <div className='flex items-center justify-between gap-3 sm:justify-end'>
                                        <div className='flex items-center gap-1 text-sm font-bold text-gray-900'>
                                            مبلغ نهایی: {priceFormatter(order.final_amount)}
                                            <TomanIcon className='size-4' />
                                        </div>
                                        {order.status === 'pending_payment' && (
                                            <Button
                                                size='sm'
                                                color='primary'
                                                loading={payingOrderId === order._id}
                                                onClick={() => handlePayOrder(order._id)}
                                            >
                                                پرداخت
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default OrdersTemplate;
