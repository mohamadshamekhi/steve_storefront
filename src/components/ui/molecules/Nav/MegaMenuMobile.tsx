'use client';

import ChevronLeft from '@/components/icons/ChevronLeft';
import CrossIcon from '@/components/icons/CrossIcon';
import ROUTES from '@/constants/routes/routes.constant';
import useCategories from '@/hooks/useCategories';
import { useMenuStore } from '@/state/stores/menu';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';

const quickLinks = [
    { label: 'مشاهده همه محصولات', href: ROUTES.Products },
    { label: 'شگفت‌انگیزها', href: `${ROUTES.Products}?order_by=most_sold` },
    { label: 'محصولات دست دوم', href: `${ROUTES.Products}?is_second_hand=true` },
    { label: 'فروش همکاری', href: ROUTES.PartnerSales },
    { label: 'تعمیرات موبایل', href: ROUTES.PhoneRepair },
    { label: 'سوالات متداول', href: ROUTES.FAQ }
];

const MegaMenuMobile = () => {
    const { toggle } = useMenuStore();
    const close = () => toggle('mobile');

    const { rootCategories, isLoading } = useCategories();

    return (
        <div className='pb-28'>
            <div className='mb-1 flex items-center justify-between border-b border-gray-100 px-4 py-3'>
                <span className='text-sm font-bold text-gray-800'>دسته‌بندی‌ها</span>
                <button
                    type='button'
                    onClick={close}
                    aria-label='بستن منو'
                    className='bg-primary-50 text-primary-600 flex h-8 w-8 items-center justify-center rounded-full'
                >
                    <CrossIcon />
                </button>
            </div>

            <div>
                <ul className='divide-y divide-gray-100'>
                    {isLoading &&
                        Array.from({ length: 8 }).map((_, i) => (
                            <li key={i} className='flex items-center gap-3 px-4 py-3'>
                                <span className='h-10 w-10 shrink-0 animate-pulse rounded-lg bg-gray-100' />
                                <span className='h-3.5 w-32 animate-pulse rounded bg-gray-100' />
                            </li>
                        ))}

                    {!isLoading &&
                        rootCategories.map((category) => (
                            <li key={category.id}>
                                <Link
                                    href={`${ROUTES.Products}/category/${category.slug}`}
                                    onClick={close}
                                    className='flex items-center gap-3 px-4 py-3 transition-colors active:bg-gray-50'
                                >
                                    <span className='flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100'>
                                        {category.url && (
                                            <OptimizedImage
                                                src={category.url}
                                                alt={category.name}
                                                width={40}
                                                height={40}
                                                loading='lazy'
                                                className='h-full w-full object-cover'
                                            />
                                        )}
                                    </span>
                                    <span className='grow text-sm font-medium text-gray-800'>{category.name}</span>
                                    <ChevronLeft className='h-3 w-3 text-gray-400' />
                                </Link>
                            </li>
                        ))}

                    {!isLoading && rootCategories.length === 0 && (
                        <li className='px-4 py-12 text-center text-sm text-gray-400'>دسته‌بندی‌ای یافت نشد</li>
                    )}
                </ul>

                <div className='mt-2 border-t border-gray-100 pt-2'>
                    {quickLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={close}
                            className='text-primary-600 flex items-center justify-between px-4 py-3 text-sm font-semibold'
                        >
                            <span>{item.label}</span>
                            <ChevronLeft className='h-3 w-3' />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MegaMenuMobile;
