'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import TomanIcon from '@/components/icons/TomanIcon';
import cn from '@/config/utilities/cn';
import { useUserPreferencesStore } from '@/state';
import { useEffect, useState } from 'react';

const SARI_KEYWORDS = ['ساری', 'ساري', 'sari'];
const isSari = (city?: string | null, title?: string | null) =>
    SARI_KEYWORDS.some((k) => city?.trim().includes(k) || title?.trim().toLowerCase().includes(k));

interface ShippingMethod {
    id: string;
    name: string;
    description: string;
    cost: number;
    is_active: boolean;
}

interface ShippingMethodBoxProps {
    selectedShippingId: string | null;
    onSelect: (id: string, cost: number, name: string) => void;
    isLargePackage: boolean;
}

function ShippingMethodBox({ selectedShippingId, onSelect, isLargePackage }: ShippingMethodBoxProps) {
    const [methods, setMethods] = useState<ShippingMethod[]>([]);
    const [loading, setLoading] = useState(true);
    const activeAddress = useUserPreferencesStore((s) => s.activeAddress);
    const userIsSari = isSari(activeAddress?.city, activeAddress?.title);

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
                {(() => {
                    // ساری: همه روش‌ها به‌جز باربری | غیرساری: همه روش‌ها
                    const visibleMethods = userIsSari
                        ? methods.filter((m) => m.cost === 0 && !m.name.includes('باربری'))
                        : !isLargePackage
                        ? methods.filter((m) => !m.name.includes('باربری') && m.cost > 0)
                        : methods.filter((m) => m.cost > 0 || m.name.includes('باربری'));
                    // غیرساری + بسته بزرگ (از فلگ سبد): همه روش‌ها پس کرایه
                    const allPostPay = !userIsSari && isLargePackage;

                    return visibleMethods.map((method) => {
                        const isSelected = selectedShippingId === method.id;
                        const isPostPay = allPostPay || method.name.includes('باربری');

                        return (
                            <label
                                key={method.id}
                                className={cn(
                                    'flex cursor-pointer items-center justify-between rounded-lg border p-3 transition',
                                    isSelected && (method.cost === 0 || isPostPay)
                                        ? 'border-amber-400 bg-amber-50'
                                        : isSelected
                                        ? 'border-primary-500 bg-primary-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                )}
                            >
                                <div className='flex items-center gap-3'>
                                    <input
                                        type='radio'
                                        name='shipping_method'
                                        checked={isSelected}
                                        onChange={() => onSelect(method.id, method.cost, method.name)}
                                        className='accent-primary-500 h-4 w-4'
                                    />
                                    <div className='flex flex-col gap-0.5'>
                                        <span className='text-sm font-medium text-gray-800'>{method.name}</span>
                                        <span className='text-xs text-gray-500'>{method.description}</span>
                                        {method.cost === 0 && userIsSari && (
                                            <span className='text-xs text-emerald-600'>
                                                ویژه ساکنین ساری
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {isPostPay ? (
                                    <span className='flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-600'>
                                        پس کرایه
                                    </span>
                                ) : method.cost === 0 ? (
                                    <span className='flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600'>
                                        <span className='text-base leading-none'>🎁</span>
                                        رایگان
                                    </span>
                                ) : (
                                    <span className='flex items-center text-sm font-medium text-gray-700'>
                                        {formatPrice(method.cost)}
                                        <TomanIcon className='mr-1.5' />
                                    </span>
                                )}
                            </label>
                        );
                    });
                })()}
            </div>
        </div>
    );
}

export default ShippingMethodBox;
