'use client';

import ROUTES from '@/constants/routes/routes.constant';
import { getPartnerStatusView, partnerToneClasses } from '@/helpers/partner';
import { usePartnerStatus } from '@/hooks/usePartnerStatus';
import Link from 'next/link';
import Button from '../../../atoms/Button/Button';

function PartnerStatusTemplate() {
    const { data, loading } = usePartnerStatus();
    const view = getPartnerStatusView(data);

    const renderAction = () => {
        if (data?.status === 'approved') {
            return (
                <Link href={ROUTES.Dashboard}>
                    <Button size='sm'>ورود به پنل همکار</Button>
                </Link>
            );
        }

        if (view.canApply) {
            return (
                <Link href={`${ROUTES.PartnerSales}?apply=1`}>
                    <Button size='sm'>
                        {data?.status === 'rejected' ? 'اصلاح و ارسال مجدد' : 'ثبت درخواست همکاری'}
                    </Button>
                </Link>
            );
        }

        return null;
    };

    return (
        <div className='mt-10'>
            <h2 className='text-gray-850 mb-4 text-base font-bold'>همکاری در فروش</h2>

            {loading ? (
                <div className='h-24 animate-pulse rounded-lg bg-gray-100' />
            ) : (
                <div
                    className={`flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between ${partnerToneClasses[view.tone]}`}
                >
                    <div>
                        <p className='font-semibold text-gray-800'>{view.title}</p>
                        <p className='mt-1 text-sm leading-7 text-gray-600'>{view.description}</p>
                    </div>
                    <div className='shrink-0'>{renderAction()}</div>
                </div>
            )}
        </div>
    );
}

export default PartnerStatusTemplate;
