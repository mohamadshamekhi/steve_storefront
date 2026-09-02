'use client';

import MinusIcon from '@/components/icons/MinusIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import TomanIcon from '@/components/icons/TomanIcon';
import TrashIcon from '@/components/icons/TrashIcon';
import Badge from '@/components/ui/atoms/Badge/Badge';
import ROUTES from '@/constants/routes/routes.constant';
import { useCartStore } from '@/state/stores/cart';
import { CartItem as CartItemType } from '@/state/stores/cart/cart.types';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';
import { useState } from 'react';

interface IProps {
    item: CartItemType;
}

const CartItem = ({ item }: IProps) => {
    const { addItem, removeItem } = useCartStore();
    const [isAdding, setIsAdding] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);
    const isLoading = isAdding || isRemoving;

    const colorAttribute = item.VariantAttributes?.find((attr) => attr.key === 'رنگ');

    const handleAdd = async () => {
        setIsAdding(true);
        await addItem({
            product_id: item.product_id,
            variant_id: item.variant_id
        });
        setIsAdding(false);
    };

    const handleRemove = async () => {
        setIsRemoving(true);
        await removeItem({
            product_id: item.product_id,
            variant_id: item.variant_id
        });
        setIsRemoving(false);
    };

    const formatPrice = (price: number) => {
        return price.toLocaleString('fa-IR');
    };

    const totalPrice = item.PriceAtTime * item.Quantity;
    const hasDiscount = item.discount_amount !== undefined && item.discount_amount > 0;
    const totalDiscount = hasDiscount ? (item.discount_amount ?? 0) * item.Quantity : 0;
    const finalPrice = totalPrice - totalDiscount;
    const productLink = `${ROUTES.Products}/${item.slug || item.product_id}`;

    return (
        <div className='flex gap-3 rounded-2xl bg-white p-3 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:gap-4 sm:p-5'>
            <Link href={productLink} className='shrink-0'>
                <OptimizedImage
                    className='aspect-square w-20 rounded-xl border border-gray-100 bg-gray-50 object-cover sm:w-28'
                    src={item.url}
                    alt={item.ProductName}
                    width={112}
                    height={112}
                />
            </Link>

            <div className='flex min-w-0 flex-1 flex-col'>
                <Link href={productLink}>
                    <h3 className='hover:text-primary-700 line-clamp-2 text-sm font-semibold text-gray-800 transition-colors sm:text-base'>
                        {item.ProductName}
                    </h3>
                </Link>

                {(colorAttribute || (item.VariantAttributes && item.VariantAttributes.length > 0)) && (
                    <div className='mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500'>
                        {colorAttribute && (
                            <span className='flex items-center gap-1.5'>
                                <span
                                    className='inline-block h-3 w-3 rounded-full border border-gray-200'
                                    style={{ backgroundColor: colorAttribute.value }}
                                />
                                {colorAttribute.label}
                            </span>
                        )}
                        {item.VariantAttributes?.filter((attr) => attr.key !== 'رنگ').map((attr) => (
                            <span key={attr.key}>
                                {attr.key}: {attr.label}
                            </span>
                        ))}
                    </div>
                )}

                <div className='mt-auto flex flex-wrap items-end justify-between gap-3 pt-4'>
                    <div className='text-left'>
                        {hasDiscount && (
                            <div className='flex items-center gap-1.5'>
                                <span className='text-xs text-gray-400 line-through decoration-gray-300'>
                                    {formatPrice(totalPrice)}
                                </span>
                                <Badge
                                    color='danger'
                                    className='flex! min-w-10! justify-center rounded-[3px]! px-1.5! py-px! text-[11px] leading-4.5!'
                                >
                                    {formatPrice(totalDiscount)}-
                                </Badge>
                            </div>
                        )}

                        {item.Quantity > 1 && (
                            <div className='text-[11px] text-gray-400'>
                                {item.Quantity} عدد × {formatPrice(item.PriceAtTime)}
                            </div>
                        )}

                        <div className='flex items-center gap-1 text-base font-bold text-gray-900'>
                            <span>{formatPrice(hasDiscount ? finalPrice : totalPrice)}</span>
                            <TomanIcon />
                        </div>
                    </div>

                    <div className='inline-flex items-center divide-x divide-gray-200 rounded-lg border border-gray-200'>
                        <button
                            type='button'
                            onClick={handleAdd}
                            disabled={isLoading}
                            aria-label='افزودن یکی'
                            className='text-primary-600 hover:bg-primary-50 flex h-9 w-9 items-center justify-center rounded-r-lg transition-colors disabled:opacity-40'
                        >
                            <PlusIcon />
                        </button>
                        <span className='min-w-9 self-stretch px-1 py-2 text-center text-sm font-semibold'>
                            {item.Quantity}
                        </span>
                        <button
                            type='button'
                            onClick={handleRemove}
                            disabled={isLoading}
                            aria-label={item.Quantity === 1 ? 'حذف از سبد' : 'کاهش یکی'}
                            className='text-secondary-500 hover:bg-secondary-50 flex h-9 w-9 items-center justify-center rounded-l-lg transition-colors disabled:opacity-40'
                        >
                            {item.Quantity === 1 ? <TrashIcon /> : <MinusIcon />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
