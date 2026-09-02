'use client';

import CirclePlusIcon from '@/components/icons/CirclePlusIcon';
import OfferTextIcon from '@/components/icons/OfferTextIcon';
import BlobIcon from '@/components/icons/product/BlobIcon';
import StarIcon from '@/components/icons/StarIcon';
import TomanIcon from '@/components/icons/TomanIcon';
import UsedIcon from '@/components/icons/UsedIcon';
import ROUTES from '@/constants/routes/routes.constant';
import priceFormatter from '@/helpers/formatter';
import useCountDown from '@/hooks/useCountDown';
import { useCartStore } from '@/state';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import noPic from '../../../../../public/images/_general/placeholder/no-pic.png';
import Badge from '../../atoms/Badge/Badge';
import { ProductProps } from './product.types';

interface ProductCardOrganismsProps {
    product: ProductProps;
}

const ProductCardOrganisms = ({ product }: ProductCardOrganismsProps) => {
    const { hours, minutes, seconds } = useCountDown({
        time: product.time ?? 0
    });

    const colors = product.variant
        ?.flatMap((v) => v.variant_attribute?.filter((attr) => attr.key === 'رنگ').map((attr) => attr.value))
        .filter((color): color is string => !!color);

    const totalQuantity = product.variant?.reduce((sum, v) => sum + (v.quantity || 0), 0) || 0;

    // cart lives in persisted (localStorage) state — only trust it after mount to
    // avoid a hydration mismatch between the SSR HTML and the client.
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const cartItems = useCartStore((s) => s.items);
    const inCartQty = useMemo(() => {
        if (!mounted || !product.id) return 0;
        return cartItems
            .filter((item) => item.product_id === product.id)
            .reduce((sum, item) => sum + item.Quantity, 0);
    }, [mounted, cartItems, product.id]);

    // Calculate discount price and percentage
    const discountItem = Array.isArray(product.discount) ? product.discount[0] : product.discount;
    const originalPrice = product?.variant?.[0]?.price;

    let discountedPrice: number | undefined;
    let discountPercent: number | undefined;
    let hasDiscount = false;

    if (discountItem?.is_active && originalPrice) {
        const priceNum = typeof originalPrice === 'string' ? parseFloat(originalPrice) : originalPrice;

        // Handle new discount format (array)
        if ('discount_value' in discountItem && discountItem.discount_value > 0) {
            hasDiscount = true;
            if (discountItem.discount_type === 'percentage') {
                discountPercent = discountItem.discount_value;
                discountedPrice = priceNum - (priceNum * discountItem.discount_value) / 100;
            } else if (discountItem.discount_type === 'fixed_amount') {
                discountedPrice = priceNum - discountItem.discount_value;
                discountPercent = Math.round((discountItem.discount_value / priceNum) * 100);
            }
        }
        // Handle old discount format (object)
        else if ('value' in discountItem && discountItem.value > 0) {
            hasDiscount = true;
            if (discountItem.type === 'percentage') {
                discountPercent = discountItem.value;
                discountedPrice = priceNum - (priceNum * discountItem.value) / 100;
            } else if (discountItem.type === 'fixed' || discountItem.type === 'fixed_amount') {
                discountedPrice = priceNum - discountItem.value;
                discountPercent = Math.round((discountItem.value / priceNum) * 100);
            }
        }
    }

    const productHref = product.slug ? `${ROUTES.Products}/${product.slug}` : '/';
    const isOutOfStock = totalQuantity === 0;

    return (
        <div className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-shadow duration-200 hover:border-gray-200 hover:shadow-[0_6px_16px_-6px_rgba(16,24,40,0.15)]'>
            <div className='relative'>
                {product.time && (
                    <div className='absolute top-0 left-1/2 z-20 flex -translate-x-1/2 items-center'>
                        <BlobIcon className='absolute top-0 left-1/2 z-20 -translate-x-1/2 scale-110' />
                        <div className='absolute top-1 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1'>
                            <OfferTextIcon className='hidden scale-105 sm:block' />
                            <div className='text-secondary-500 flex flex-row-reverse items-center gap-0.5 text-xs font-semibold'>
                                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className='absolute top-1/2 left-2.5 z-10 flex -translate-y-1/2 flex-col gap-1.5'>
                    {colors?.slice(0, 3).map((item, index) => (
                        <span
                            key={index}
                            className='h-2 w-2 rounded-full ring-1 ring-black/5'
                            style={{ backgroundColor: item }}
                        />
                    ))}
                    {colors && colors.length > 3 && <span className='text-tiny text-gray-400'>+</span>}
                </div>

                {hasDiscount && discountPercent ? (
                    <Badge
                        color='danger'
                        className='absolute top-2 right-2 z-10 flex! min-w-8.5! justify-center rounded-md! px-1.5! py-0.5! text-[11px] font-bold leading-4! shadow-sm'
                    >
                        {discountPercent}%
                    </Badge>
                ) : null}

                {product.is_second_hand && (
                    <div className='text-tiny absolute right-2 bottom-2 z-10 flex items-center gap-[3px] rounded-md bg-white/85 px-1.5 py-0.5 font-medium backdrop-blur-sm'>
                        <UsedIcon />
                        <span>کارکرده</span>
                    </div>
                )}

                <Link href={productHref} className='relative block overflow-hidden'>
                    <OptimizedImage
                        loading='lazy'
                        src={product?.gallery?.[0]?.url ?? noPic}
                        alt={product.name ? product.name : 'محصول'}
                        width={300}
                        height={300}
                        className={`aspect-square w-full bg-linear-to-b from-gray-50 to-gray-100/50 object-cover transition-transform duration-300 lg:group-hover:scale-105 ${
                            isOutOfStock ? 'opacity-60 grayscale' : ''
                        }`}
                    />
                    <span className='absolute top-2 left-2 text-sm font-bold text-gray-300 sm:text-lg'>Steve</span>

                    {isOutOfStock ? (
                        <span className='absolute inset-0 flex items-center justify-center'>
                            <span className='rounded-full bg-gray-900/70 px-3 py-1 text-xs font-semibold text-white'>
                                ناموجود
                            </span>
                        </span>
                    ) : (
                        <span className='pointer-events-none absolute inset-x-0 bottom-0 hidden justify-center bg-linear-to-t from-black/45 to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:flex'>
                            <span className='rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-gray-800 shadow-sm'>
                                مشاهده محصول
                            </span>
                        </span>
                    )}
                </Link>
            </div>

            <div className='flex flex-1 flex-col p-2.5 sm:p-3'>
                {product?.name && (
                    <Link
                        href={productHref}
                        className='line-clamp-2 min-h-10 text-xs leading-5 font-semibold text-gray-800 transition-colors group-hover:text-primary-700 sm:text-sm'
                    >
                        {product?.name}
                    </Link>
                )}

                <div className='mt-2.5 hidden sm:block sm:min-h-12'>
                    {product.specifications && product.specifications.length > 0 && (
                        <ul className='grid grid-cols-3 gap-2'>
                            {product.specifications.slice(0, 3).map((spec) => (
                                <li
                                    className='flex flex-col gap-1 overflow-hidden rounded bg-gray-50 p-2'
                                    key={spec.key}
                                >
                                    <span className='text-tiny truncate font-normal text-gray-500'>{spec.name}</span>
                                    <span className='text-tiny truncate font-semibold'>{spec.value}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className='mt-2 mb-1 flex min-h-4 items-center justify-between gap-1'>
                    <span className='truncate text-[11px] font-medium text-secondary-600'>
                        {!isOutOfStock &&
                            totalQuantity > 0 &&
                            totalQuantity <= 5 &&
                            `${totalQuantity} عدد باقی مانده`}
                    </span>

                    {product.rating !== undefined && product.rating > 0 && (
                        <span className='flex shrink-0 items-center gap-1 text-[11px] text-gray-600'>
                            {product.rating}
                            <StarIcon className='text-orange-500' />
                        </span>
                    )}
                </div>

                <div className='mt-auto flex items-end justify-between gap-2 pt-1'>
                    <div className='min-w-0'>
                        {hasDiscount && originalPrice && !isOutOfStock && (
                            <del className='block text-left text-[11px] text-gray-400'>
                                {priceFormatter(originalPrice)}
                            </del>
                        )}
                        {product?.variant?.length > 0 && originalPrice && (
                            <div
                                className={`flex items-center gap-1 text-left text-sm font-bold ${
                                    isOutOfStock
                                        ? 'text-gray-400'
                                        : hasDiscount
                                          ? 'text-secondary-600'
                                          : 'text-gray-900'
                                }`}
                            >
                                <span className='truncate'>
                                    {priceFormatter(hasDiscount && discountedPrice ? discountedPrice : originalPrice)}
                                </span>
                                <TomanIcon />
                            </div>
                        )}
                    </div>

                    {!isOutOfStock &&
                        (inCartQty > 0 ? (
                            <Link
                                href={ROUTES.Cart}
                                aria-label={`${inCartQty} عدد در سبد خرید`}
                                className='bg-primary-50 text-primary-700 hover:bg-primary-100 flex h-9 shrink-0 items-center gap-1 rounded-lg px-2 text-[11px] font-bold transition-colors sm:h-10 sm:text-xs'
                            >
                                <svg
                                    className='h-3.5 w-3.5 shrink-0'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M20 6 9 17l-5-5'
                                        stroke='currentColor'
                                        strokeWidth='3'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <span>{inCartQty.toLocaleString('fa-IR')}</span>
                                <span className='hidden sm:inline'>در سبد</span>
                            </Link>
                        ) : (
                            <Link
                                href={productHref}
                                aria-label='افزودن به سبد خرید'
                                className='bg-primary-600 hover:bg-primary-700 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white transition-colors sm:h-10 sm:w-10'
                            >
                                <CirclePlusIcon className='h-5 w-5' />
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCardOrganisms;

