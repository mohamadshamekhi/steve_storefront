'use client';

import ChevronLeft from '@/components/icons/ChevronLeft';
import CrossIcon from '@/components/icons/CrossIcon';
import ROUTES from '@/constants/routes/routes.constant';
import useCategories from '@/hooks/useCategories';
import { useMenuStore } from '@/state/stores/menu';
import Categories from '@/config/types/categories.types';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import cn from '@/config/utilities/cn';

const MegaMenuMobile = () => {
    const { toggle } = useMenuStore();
    const close = () => toggle('mobile');

    const { rootCategories, getChildren, hasChildren, isLoading } = useCategories();
    const [activeParent, setActiveParent] = useState<Categories | null>(null);

    // اولین دسته رو پیش‌فرض انتخاب کن
    useEffect(() => {
        if (!activeParent && rootCategories.length > 0) {
            setActiveParent(rootCategories[0]);
        }
    }, [rootCategories, activeParent]);

    const subCategories = activeParent ? getChildren(activeParent.id) : [];

    return (
        <div className='flex h-full flex-col'>
            {/* هدر */}
            <div className='flex shrink-0 items-center justify-between border-b border-gray-100 px-4 py-3'>
                <span className='text-sm font-bold text-gray-800'>دسته‌بندی کالاها</span>
                <button
                    type='button'
                    onClick={close}
                    aria-label='بستن منو'
                    className='bg-primary-50 text-primary-600 flex h-8 w-8 items-center justify-center rounded-full'
                >
                    <CrossIcon />
                </button>
            </div>

            {/* بدنه دو‌ستونی */}
            <div className='flex min-h-0 flex-1 overflow-hidden'>
                {/* ستون راست — دسته‌های اصلی */}
                <div className='w-25 shrink-0 overflow-y-auto border-l border-gray-100 bg-gray-50'>
                    {isLoading
                        ? Array.from({ length: 9 }).map((_, i) => (
                              <div key={i} className='flex flex-col items-center gap-1.5 px-2 py-3'>
                                  <span className='h-9 w-9 animate-pulse rounded-lg bg-gray-200' />
                                  <span className='h-2.5 w-12 animate-pulse rounded bg-gray-200' />
                              </div>
                          ))
                        : rootCategories.map((cat) => {
                              const isActive = activeParent?.id === cat.id;
                              return (
                                  <button
                                      key={cat.id}
                                      type='button'
                                      onClick={() => setActiveParent(cat)}
                                      className={cn(
                                          'relative flex w-full flex-col items-center gap-1 px-2 py-3 text-center transition-colors',
                                          isActive
                                              ? 'bg-white text-primary-600'
                                              : 'text-gray-600 active:bg-gray-100'
                                      )}
                                  >
                                      {isActive && (
                                          <span className='bg-primary-500 absolute right-0 top-2 bottom-2 w-0.5 rounded-full' />
                                      )}
                                      <span
                                          className={cn(
                                              'flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl',
                                              isActive ? 'bg-primary-50' : 'bg-gray-100'
                                          )}
                                      >
                                          {cat.url ? (
                                              <OptimizedImage
                                                  src={cat.url}
                                                  alt={cat.name}
                                                  width={40}
                                                  height={40}
                                                  loading='lazy'
                                                  className='h-full w-full object-cover'
                                              />
                                          ) : (
                                              <span className='text-lg'>📦</span>
                                          )}
                                      </span>
                                      <span className='line-clamp-2 text-center text-[11px] font-medium leading-tight'>
                                          {cat.name}
                                      </span>
                                  </button>
                              );
                          })}
                </div>

                {/* ستون چپ — زیردسته‌ها */}
                <div className='flex-1 overflow-y-auto bg-white'>
                    {activeParent && (
                        <>
                            {/* لینک همه X */}
                            <Link
                                href={`${ROUTES.Products}/category/${activeParent.slug}`}
                                onClick={close}
                                className='flex items-center justify-between border-b border-gray-100 px-4 py-3'
                            >
                                <ChevronLeft className='text-primary-500 h-3.5 w-3.5' />
                                <span className='text-primary-600 text-sm font-semibold'>
                                    همه محصولات {activeParent.name}
                                </span>
                            </Link>

                            {subCategories.length > 0 ? (
                                <ul className='divide-y divide-gray-50 py-1'>
                                    {subCategories.map((sub) => (
                                        <li key={sub.id}>
                                            {hasChildren(sub.id) ? (
                                                /* زیردسته با فرزند — هدر گروه */
                                                <div>
                                                    <div className='border-secondary-400 flex items-center justify-between border-r-2 px-4 py-2.5 pr-3'>
                                                        <ChevronLeft className='h-3 w-3 text-gray-400' />
                                                        <span className='text-sm font-bold text-gray-800'>
                                                            {sub.name}
                                                        </span>
                                                    </div>
                                                    <ul>
                                                        {getChildren(sub.id).map((leaf) => (
                                                            <li key={leaf.id}>
                                                                <Link
                                                                    href={`${ROUTES.Products}/category/${leaf.slug}`}
                                                                    onClick={close}
                                                                    className='flex items-center justify-end px-4 py-2 text-sm text-gray-600 active:bg-gray-50'
                                                                >
                                                                    {leaf.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                /* زیردسته ساده */
                                                <Link
                                                    href={`${ROUTES.Products}/category/${sub.slug}`}
                                                    onClick={close}
                                                    className='flex items-center justify-between px-4 py-2.5 transition-colors active:bg-gray-50'
                                                >
                                                    <ChevronLeft className='h-3 w-3 text-gray-300' />
                                                    <span className='text-sm text-gray-700'>{sub.name}</span>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className='px-4 py-8 text-center text-xs text-gray-400'>
                                    زیردسته‌ای ندارد
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MegaMenuMobile;
