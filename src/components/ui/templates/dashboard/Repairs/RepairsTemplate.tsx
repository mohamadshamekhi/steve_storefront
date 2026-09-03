'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import Button from '@/components/ui/atoms/Button/Button';
import EmptyState from '@/components/ui/molecules/EmptyState/EmptyState';
import DashboardListSkeleton from '@/components/ui/organisms/SkeletonOrganisms/DashboardListSkeleton/DashboardListSkeleton';
import { formatJalali } from '@/utils/date.util';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface RepairGallery {
    media_id: string;
    url: string;
}

interface RepairItem {
    id: string;
    user_id: {
        name: string;
        phone_number: string;
    };
    brand_name: string;
    product_name: string;
    description: string;
    status: string;
    galleries: RepairGallery[];
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

function RepairsTemplate() {
    const [repairs, setRepairs] = useState<RepairItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepairs = async () => {
            try {
                const res = await fetcher(ApiKeys.GET_MY_REPAIRS, 'dashboard', 'GET');
                if (res?.data?.repairs) {
                    setRepairs(res.data.repairs);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepairs();
    }, []);

    if (loading) {
        return <DashboardListSkeleton title='تعمیرات من' count={2} />;
    }

    if (repairs.length === 0) {
        return (
            <div className='flex flex-col items-center'>
                <EmptyState
                    title='هنوز درخواست تعمیری ثبت نکرده‌اید'
                    subtitle='گوشی یا لوازم جانبی خود را برای تعمیر تخصصی به استیو موبایل بسپارید.'
                />
                <Link href='/phone-repair' className='mt-2'>
                    <Button size='sm'>ثبت درخواست تعمیر</Button>
                </Link>
            </div>
        );
    }

    return (
        <>
            <h1 className='text-gray-850 mb-6 text-base font-bold'>تعمیرات من</h1>

            <div className='flex flex-col gap-4'>
                {repairs.map((repair) => {
                    const statusInfo = statusMap[repair.status] ?? {
                        label: repair.status,
                        color: 'bg-gray-100 text-gray-700'
                    };

                    return (
                        <div
                            key={repair.id}
                            className='flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-start sm:justify-between sm:p-5'
                        >
                            <div className='min-w-0 flex-1'>
                                <div className='mb-2 flex flex-wrap items-center gap-2'>
                                    <span className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${statusInfo.color}`}>
                                        {statusInfo.label}
                                    </span>
                                    <span className='text-xs text-gray-400'>
                                        {formatJalali(new Date(repair.created_at))}
                                    </span>
                                </div>

                                <h3 className='text-sm font-semibold text-gray-800'>{repair.product_name}</h3>

                                <div className='mt-1 text-xs text-gray-500'>برند: {repair.brand_name}</div>

                                {repair.description && (
                                    <p className='mt-2 line-clamp-2 text-sm leading-6 text-gray-600'>
                                        {repair.description}
                                    </p>
                                )}
                            </div>

                            {repair.galleries.length > 0 && (
                                <div className='flex shrink-0 gap-2'>
                                    {repair.galleries.slice(0, 3).map((gallery) => (
                                        <OptimizedImage
                                            key={gallery.media_id}
                                            src={gallery.url}
                                            alt='تصویر تعمیر'
                                            width={80}
                                            height={80}
                                            className='size-20 rounded-xl border border-gray-100 object-cover'
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default RepairsTemplate;
