'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import TomanIcon from '@/components/icons/TomanIcon';
import cn from '@/config/utilities/cn';
import { useEffect, useState } from 'react';

interface ShippingMethod {
    id: string;
    name: string;
    description: string;
    cost: number;
    is_active: boolean;
}

interface ShippingMethodBoxProps {
    selectedShippingId: string | null;
    onSelect: (id: string, cost: number) => void;
}

function ShippingMethodBox({ selectedShippingId, onSelect }: ShippingMethodBoxProps) {
    const [methods, setMethods] = useState<ShippingMethod[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShipping = async () => {
            try {
                const res = await fetcher(ApiKeys.GET_SHIPPING_METHODS, 'web', 'GET');
                if (res?.data?.shipping) {
                    const activeMethods = res.data.shipping.filter((m: ShippingMethod) => m.is_active);
                    setMethods(activeMethods);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchShipping();
    }, []);

    const formatPrice = (price: number) => {
        return price.toLocaleString('fa-IR');
    };

    if (loading) {
        return (
            <div className='rounded-2xl bg-white p-4 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-5'>
                <span className='text-sm text-gray-400'>در حال بارگذاری روش‌های ارسال...</span>
            </div>
        );
    }

    if (methods.length === 0) {
        return (
            <div className='rounded-2xl bg-white p-4 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-5'>
                <span className='text-sm text-gray-500'>روش ارسالی یافت نشد</span>
            </div>
        );
    }

    return (
        <div className='rounded-2xl bg-white p-4 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-5'>
            <h3 className='mb-4 text-sm font-bold text-gray-800'>انتخاب روش ارسال</h3>

            <div className='flex flex-col gap-3'>
                {methods.map((method) => {
                    const isSelected = selectedShippingId === method.id;

                    return (
                        <label
                            key={method.id}
                            className={cn(
                                'flex cursor-pointer items-center justify-between rounded-lg border p-3 transition',
                                isSelected
                                    ? 'border-primary-500 bg-primary-50'
                                    : 'border-gray-200 hover:border-gray-300'
                            )}
                        >
                            <div className='flex items-center gap-3'>
                                <input
                                    type='radio'
                                    name='shipping_method'
                                    checked={isSelected}
                                    onChange={() => onSelect(method.id, method.cost)}
                                    className='accent-primary-500 h-4 w-4'
                                />
                                <div className='flex flex-col'>
                                    <span className='text-sm font-medium text-gray-800'>{method.name}</span>
                                    <span className='text-xs text-gray-500'>{method.description}</span>
                                </div>
                            </div>

                            <span className='flex items-center text-sm font-medium text-gray-700'>
                                {formatPrice(method.cost)}
                                <TomanIcon className='mr-1.5' />
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

export default ShippingMethodBox;
