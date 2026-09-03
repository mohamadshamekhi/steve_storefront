'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import RepairIcon from '@/components/icons/dashboard/RepairIcon';
import SellIcon from '@/components/icons/dashboard/SellIcon';
import OrderIcon from '@/components/icons/dashboard/OrderIcon';
import StatusOrganisms, { StatusTone } from '@/components/ui/organisms/dashboard/Order/Status/StatusOrganisms';
import type { StaticImageData } from 'next/image';
import { useSessionStore } from '@/state';
import CurrentOrderImage from '@public/images/order/current.svg';
import DeliveredOrderImage from '@public/images/order/delivered.svg';
import RepairesOrderImage from '@public/images/order/repaires.png';
import ReturnedOrderImage from '@public/images/order/returned.svg';
import SecondHandSaleOrderImage from '@public/images/order/second-hand-sale.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface OrderStatics {
    order_processing: number;
    order_delivered: number;
    order_refunded: number;
}

interface SellStatics {
    count: number;
}

interface RepairStatics {
    count: number;
}

const quickActions = [
    { label: 'پیگیری سفارش', href: '/dashboard/order', icon: <OrderIcon /> },
    { label: 'ثبت تعمیر', href: '/phone-repair', icon: <RepairIcon /> },
    { label: 'فروش گوشی', href: '/phone-sales', icon: <SellIcon /> }
];

function SummaryOfActivitiesTemplate() {
    const [orderStatics, setOrderStatics] = useState<OrderStatics>({
        order_processing: 0,
        order_delivered: 0,
        order_refunded: 0
    });
    const [sellStatics, setSellStatics] = useState<SellStatics>({ count: 0 });
    const [repairStatics, setRepairStatics] = useState<RepairStatics>({ count: 0 });

    const name = useSessionStore((state) => state.session?.profile?.name);
    const firstName = name?.trim().split(' ')[0];

    useEffect(() => {
        const fetchStatics = async () => {
            const [orderRes, sellRes, repairRes] = await Promise.all([
                fetcher(ApiKeys.GET_ORDER_STATICS, 'dashboard', 'GET'),
                fetcher(ApiKeys.GET_SELL_STATICS, 'dashboard', 'GET'),
                fetcher(ApiKeys.GET_REPAIR_STATICS, 'dashboard', 'GET')
            ]);

            if (orderRes?.data) {
                setOrderStatics(orderRes.data);
            }
            if (sellRes?.data) {
                setSellStatics(sellRes.data);
            }
            if (repairRes?.data) {
                setRepairStatics(repairRes.data);
            }
        };

        fetchStatics();
    }, []);

    const statusItems: {
        iconSrc: string | StaticImageData;
        count: number;
        label: string;
        href: string;
        tone: StatusTone;
        unit?: string;
    }[] = [
        {
            iconSrc: CurrentOrderImage,
            count: orderStatics.order_processing,
            label: 'سفارش جاری',
            href: '/dashboard/order',
            tone: 'primary',
            unit: 'سفارش'
        },
        {
            iconSrc: DeliveredOrderImage,
            count: orderStatics.order_delivered,
            label: 'تحویل داده شده',
            href: '/dashboard/order',
            tone: 'green',
            unit: 'سفارش'
        },
        {
            iconSrc: ReturnedOrderImage,
            count: orderStatics.order_refunded,
            label: 'مرجوع شده',
            href: '/dashboard/order',
            tone: 'red',
            unit: 'سفارش'
        },
        {
            iconSrc: RepairesOrderImage,
            count: repairStatics.count,
            label: 'تعمیرات',
            href: '/dashboard/repairs',
            tone: 'blue'
        },
        {
            iconSrc: SecondHandSaleOrderImage,
            count: sellStatics.count,
            label: 'فروش دست دوم',
            href: '/dashboard/sells',
            tone: 'amber'
        }
    ];

    return (
        <div className='space-y-8'>
            <div className='from-primary-600 to-primary-500 relative overflow-hidden rounded-2xl bg-linear-to-br p-5 text-white sm:p-6'>
                <div aria-hidden className='absolute -top-12 -left-12 size-40 rounded-full bg-white/10' />
                <div aria-hidden className='absolute -right-10 -bottom-16 size-40 rounded-full bg-white/5' />
                <p className='relative text-lg font-bold sm:text-xl'>
                    سلام{firstName ? ` ${firstName}` : ''} 👋
                </p>
                <p className='relative mt-1.5 text-sm leading-6 text-white/85'>
                    به پنل کاربری استیو موبایل خوش آمدی؛ اینجا وضعیت سفارش‌ها، تعمیرات و فروش‌هایت را دنبال کن.
                </p>

                <div className='relative mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3'>
                    {quickActions.map(({ label, href, icon }) => (
                        <Link
                            key={label}
                            href={href}
                            className='text-caption1-medium flex items-center justify-center gap-2 rounded-xl bg-white/15 px-3 py-2.5 text-white transition last:col-span-2 hover:bg-white/25 sm:justify-start sm:last:col-span-1'
                        >
                            <span className='shrink-0'>{icon}</span>
                            <span className='truncate'>{label}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <h1 className='text-gray-850 mb-4 text-base font-bold'>سفارشات من</h1>

                <div className='grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5'>
                    {statusItems.map(({ iconSrc, label, count, href, tone, unit }) => (
                        <StatusOrganisms
                            key={label}
                            iconSrc={iconSrc}
                            label={label}
                            count={count}
                            href={href}
                            tone={tone}
                            unit={unit}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SummaryOfActivitiesTemplate;
