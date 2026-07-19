'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import StatusOrganisms from '@/components/ui/organisms/dashboard/Order/Status/StatusOrganisms';
import CurrentOrderImage from '@public/images/order/current.svg';
import DeliveredOrderImage from '@public/images/order/delivered.svg';
import RepairesOrderImage from '@public/images/order/repaires.png';
import ReturnedOrderImage from '@public/images/order/returned.svg';
import SecondHandSaleOrderImage from '@public/images/order/second-hand-sale.svg';
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

function SummaryOfActivitiesTemplate() {
    const [orderStatics, setOrderStatics] = useState<OrderStatics>({
        order_processing: 0,
        order_delivered: 0,
        order_refunded: 0
    });
    const [sellStatics, setSellStatics] = useState<SellStatics>({ count: 0 });
    const [repairStatics, setRepairStatics] = useState<RepairStatics>({ count: 0 });

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

    const statusItems = [
        {
            iconSrc: CurrentOrderImage,
            count: orderStatics.order_processing,
            label: 'جاری'
        },
        {
            iconSrc: DeliveredOrderImage,
            count: orderStatics.order_delivered,
            label: 'تحویل داده شده'
        },
        {
            iconSrc: ReturnedOrderImage,
            count: orderStatics.order_refunded,
            label: 'مرجوع شده'
        },
        {
            iconSrc: RepairesOrderImage,
            count: repairStatics.count,
            label: 'تعمیرات'
        },
        {
            iconSrc: SecondHandSaleOrderImage,
            count: sellStatics.count,
            label: 'فروش دست دوم'
        }
    ];

    return (
        <>
            <h1 className='text-gray-850 mb-6 text-base font-bold'>سفارشات من</h1>

            <div className='4xl:grid-cols-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-6'>
                {statusItems.map(({ iconSrc, label, count }) => {
                    return <StatusOrganisms key={label} iconSrc={iconSrc} label={label} count={count} />;
                })}
            </div>
        </>
    );
}

export default SummaryOfActivitiesTemplate;
