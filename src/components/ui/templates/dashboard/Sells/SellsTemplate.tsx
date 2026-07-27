'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import EmptyState from '@/components/ui/molecules/EmptyState/EmptyState';
import { formatJalali } from '@/utils/date.util';
import { useEffect, useState } from 'react';

interface SellItem {
    id: string;
    user_id: {
        name: string;
        phone_number: string;
    };
    brand_name: string;
    product_name: string;
    color: string;
    battery_health: string;
    register_status: string;
    physical_condition: string;
    description: string;
    status: string;
    created_at: string;
    updated_at: string;
}

const statusMap: Record<string, { label: string; color: string }> = {
    new: { label: 'ثبت شده', color: 'bg-blue-100 text-blue-700' },
    pending_shipment: { label: 'در انتظار ارسال', color: 'bg-yellow-100 text-yellow-700' },
    shipped: { label: 'ارسال شده', color: 'bg-indigo-100 text-indigo-700' },
    under_inspection: { label: 'در حال بررسی فنی', color: 'bg-orange-100 text-orange-700' },
    offer_made: { label: 'پیشنهاد قیمت داده شده', color: 'bg-purple-100 text-purple-700' },
    offer_accepted: { label: 'پیشنهاد پذیرفته شد', color: 'bg-emerald-100 text-emerald-700' },
    payment_processed: { label: 'پرداخت انجام شد', color: 'bg-green-100 text-green-700' },
    offer_rejected: { label: 'پیشنهاد رد شد', color: 'bg-red-100 text-red-700' },
    returned_to_customer: { label: 'بازگردانده شده', color: 'bg-gray-100 text-gray-700' },
    canceled: { label: 'لغو شده', color: 'bg-red-100 text-red-700' },
    rejected: { label: 'رد شده', color: 'bg-red-100 text-red-700' }
};

const colorMap: Record<string, string> = {
    red: 'قرمز',
    blue: 'آبی',
    green: 'سبز',
    black: 'مشکی',
    white: 'سفید',
    gold: 'طلایی',
    silver: 'نقره‌ای',
    pink: 'صورتی',
    purple: 'بنفش',
    orange: 'نارنجی',
    yellow: 'زرد',
    brown: 'قهوه‌ای',
    gray: 'خاکستری',
    cyan: 'فیروزه‌ای',
    navy: 'سرمه‌ای',
    beige: 'بژ'
};

function SellsTemplate() {
    const [sells, setSells] = useState<SellItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSells = async () => {
            try {
                const res = await fetcher(ApiKeys.GET_MY_SELLS, 'dashboard', 'GET');
                if (res?.data?.sells) {
                    setSells(res.data.sells);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSells();
    }, []);

    if (loading) {
        return (
            <div className='flex items-center justify-center py-20'>
                <span className='text-gray-400'>در حال بارگذاری...</span>
            </div>
        );
    }

    if (sells.length === 0) {
        return <EmptyState />;
    }

    return (
        <>
            <h1 className='text-gray-850 mb-6 text-base font-bold'>فروش دست دوم من</h1>

            <div className='flex flex-col gap-4'>
                {sells.map((sell) => {
                    const statusInfo = statusMap[sell.status] ?? {
                        label: sell.status,
                        color: 'bg-gray-100 text-gray-700'
                    };

                    return (
                        <div
                            key={sell.id}
                            className='rounded-lg border border-gray-200 p-4'
                        >
                            <div className='mb-2 flex flex-wrap items-center gap-2'>
                                <h3 className='text-sm font-semibold text-gray-800'>
                                    {sell.product_name}
                                </h3>
                                <span
                                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusInfo.color}`}
                                >
                                    {statusInfo.label}
                                </span>
                            </div>

                            <div className='mb-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500'>
                                <span>برند: {sell.brand_name}</span>
                                <span>رنگ: {colorMap[sell.color] ?? sell.color}</span>
                                <span>سلامت باتری: {sell.battery_health}%</span>
                                <span>وضعیت رجیستر: {sell.register_status}</span>
                                <span>وضعیت ظاهری: {sell.physical_condition}</span>
                            </div>

                            {sell.description && (
                                <p className='mb-3 text-sm leading-6 text-gray-600 line-clamp-2'>
                                    {sell.description}
                                </p>
                            )}

                            <div className='text-xs text-gray-400'>
                                {formatJalali(new Date(sell.created_at))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default SellsTemplate;
