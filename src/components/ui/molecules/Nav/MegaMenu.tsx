'use client';

import ChevronLeft from '@/components/icons/ChevronLeft';
import CategoryIcon from '@/components/icons/Menu/CategoryIcon';
import ROUTES from '@/constants/routes/routes.constant';
import useCategories from '@/hooks/useCategories';
import { useMenuStore } from '@/state/stores/menu';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';

const MegaMenu = () => {
    const { isOpen, open, close } = useMenuStore();
    const { rootCategories, isLoading } = useCategories();

    return (
        <div onMouseEnter={() => open('desktop')} onMouseLeave={close} className='group relative'>
            <li className='hover:text-secondary-500 relative py-2.5 transition-all ease-in-out'>
                <div className='absolute bottom-0 left-0 h-0.5 w-full bg-[radial-gradient(50%_685.69%_at_50%_50%,_#ED1944_0%,_rgba(255,_255,_255,_0)_100%)] opacity-0 group-hover:opacity-100'></div>
                <div className='group-hover:text-secondary-500! flex cursor-pointer items-center gap-1.5 text-sm lg:text-[16px]'>
                    <span className='group-hover:text-secondary-500! text-gray-600 transition-colors'>
                        <CategoryIcon className='ml-1' />
                    </span>
                    <span>دسته بندی</span>
                </div>
            </li>
            {isOpen && (
                <div className='absolute top-full right-0 z-50 max-h-150 w-[320px] overflow-y-auto rounded-b-xl bg-white shadow-[0_8px_24px_rgba(16,24,40,0.12)]'>
                    <ul className='scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent divide-y divide-gray-50 py-2 text-base font-normal text-gray-600'>
                        {isLoading &&
                            Array.from({ length: 6 }).map((_, i) => (
                                <li key={i} className='flex items-center gap-3 px-6 py-3'>
                                    <span className='h-8 w-8 shrink-0 animate-pulse rounded-lg bg-gray-100' />
                                    <span className='h-3.5 w-28 animate-pulse rounded bg-gray-100' />
                                </li>
                            ))}

                        {!isLoading &&
                            rootCategories.map((category) => (
                                <li key={category.id}>
                                    <Link
                                        href={`${ROUTES.Products}/category/${category.slug}`}
                                        onClick={close}
                                        className='flex items-center justify-between px-6 py-3 transition-all ease-in-out hover:bg-gray-50 hover:font-medium hover:text-gray-800'
                                    >
                                        <span className='flex items-center gap-3'>
                                            <span className='flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100'>
                                                {category.url && (
                                                    <OptimizedImage
                                                        src={category.url}
                                                        alt={category.name}
                                                        width={32}
                                                        height={32}
                                                        loading='lazy'
                                                        className='h-full w-full object-cover'
                                                    />
                                                )}
                                            </span>
                                            <span>{category.name}</span>
                                        </span>
                                        <ChevronLeft className='h-2 w-2 text-gray-400' />
                                    </Link>
                                </li>
                            ))}

                        {!isLoading && rootCategories.length === 0 && (
                            <li className='px-6 py-8 text-center text-sm text-gray-400'>دسته‌بندی‌ای یافت نشد</li>
                        )}
                    </ul>

                    <Link
                        href={ROUTES.Products}
                        onClick={close}
                        className='text-primary-600 flex items-center justify-center border-t border-gray-100 py-3 text-sm font-medium hover:bg-gray-50'
                    >
                        مشاهده همه محصولات
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MegaMenu;
