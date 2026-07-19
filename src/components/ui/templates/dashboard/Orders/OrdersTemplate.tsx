'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import TomanIcon from '@/components/icons/TomanIcon';
import Button from '@/components/ui/atoms/Button/Button';
import EmptyState from '@/components/ui/molecules/EmptyState/EmptyState';
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

function OrdersTemplate() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [payingOrderId, setPayingOrderId] = useState<string | null>(null);

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
        return (
            <div className='flex items-center justify-center py-20'>
                <span className='text-gray-400'>در حال بارگذاری...</span>
            </div>
        );
    }

    if (orders.length === 0) {
        return <EmptyState />;
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
                        <div key={order._id} className='rounded-lg border border-gray-200 bg-white p-4'>
                            {/* Header */}
                            <div className='mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4'>
                                <div className='flex items-center gap-3'>
                                    <span
                                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusInfo.color}`}
                                    >
                                        {statusInfo.label}
                                    </span>
                                    <span className='text-xs text-gray-400'>
                                        {formatJalali(new Date(order.created_at))}
                                    </span>
                                </div>
                                <div className='text-xs text-gray-500'>
                                    کد سفارش: <span className='font-medium'>{order._id.slice(-8)}</span>
                                </div>
                            </div>

                            {/* Items */}
                            <div className='mb-4 flex flex-col gap-3'>
                                {order.items.map((item, index) => (
                                    <div key={index} className='flex items-start justify-between gap-3'>
                                        <div className='flex-1'>
                                            <h3 className='text-sm font-medium text-gray-800 line-clamp-1'>
                                                {item.ProductName}
                                            </h3>
                                            <div className='mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-500'>
                                                <span>تعداد: {item.Quantity}</span>
                                                {item.VariantAttributes.map((attr, i) => (
                                                    <span key={i} className='flex items-center gap-1'>
                                                        {attr.key === 'رنگ' ? (
                                                            <>
                                                                <span
                                                                    className='inline-block h-3 w-3 rounded-full border border-gray-200'
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
                                        <div className='flex flex-col items-end text-sm text-gray-700'>
                                            <div className='flex items-center gap-1 font-medium'>
                                                {priceFormatter(item.PriceAtTime * item.Quantity)}
                                                <TomanIcon className='h-4 w-4' />
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
                            <div className='mb-4 rounded-md bg-gray-50 p-3 text-xs text-gray-600'>
                                <div className='mb-1 font-medium text-gray-700'>آدرس تحویل:</div>
                                <div>
                                    {order.shipping_address.province}، {order.shipping_address.city}،{' '}
                                    {order.shipping_address.street}
                                </div>
                                <div className='mt-2 text-gray-500'>
                                    روش ارسال: {order.shipping.name}
                                </div>
                            </div>

                            {/* Payments */}
                            {order.payments?.length > 0 && (
                                <div className='mb-4 rounded-md bg-gray-50 p-3 text-xs text-gray-600'>
                                    <div className='mb-2 font-medium text-gray-700'>پرداخت‌ها:</div>
                                    <div className='flex flex-col gap-2'>
                                        {order.payments.map((payment) => {
                                            const paymentStatus = paymentStatusMap[payment.status] ?? {
                                                label: payment.status,
                                                color: 'bg-gray-100 text-gray-700'
                                            };
                                            return (
                                                <div
                                                    key={payment.id}
                                                    className='flex flex-wrap items-center justify-between gap-2 rounded border border-gray-200 bg-white px-3 py-2'
                                                >
                                                    <div className='flex items-center gap-2'>
                                                        <span
                                                            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${paymentStatus.color}`}
                                                        >
                                                            {paymentStatus.label}
                                                        </span>
                                                        <span className='text-gray-500'>
                                                            {payment.gateway}
                                                        </span>
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
                                                        <span className='flex items-center gap-1 font-medium text-gray-700'>
                                                            {priceFormatter(payment.amount)}
                                                            <TomanIcon className='h-3 w-3' />
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Footer - Prices */}
                            <div className='flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4'>
                                <div className='flex items-center gap-4 text-xs text-gray-500'>
                                    <span>
                                        جمع کل: {priceFormatter(order.subtotal_amount)}
                                    </span>
                                    <span>
                                        هزینه ارسال: {order.shipping.cost > 0 ? priceFormatter(order.shipping.cost) : 'رایگان'}
                                    </span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='flex items-center gap-1 text-sm font-bold text-gray-800'>
                                        مبلغ نهایی: {priceFormatter(order.final_amount)}
                                        <TomanIcon className='h-4 w-4' />
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
                    );
                })}
            </div>
        </>
    );
}

export default OrdersTemplate;
