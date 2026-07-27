'use client';

import MinusIcon from '@/components/icons/MinusIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import TomanIcon from '@/components/icons/TomanIcon';
import TrashIcon from '@/components/icons/TrashIcon';
// import WarrantyIcon from '@/components/icons/checkout/WarrantyIcon';
import Badge from '@/components/ui/atoms/Badge/Badge';
import ROUTES from '@/constants/routes/routes.constant';
import { useCartStore } from '@/state/stores/cart';
import { CartItem as CartItemType } from '@/state/stores/cart/cart.types';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../../atoms/Button/Button';

interface IProps {
    item: CartItemType;
}

const CartItem = ({ item }: IProps) => {
    console.log(item, 'item');
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
        <div className='gap-5 rounded-md bg-white p-2 md:p-4 lg:p-8'>
            <div className='mb-4 flex flex-wrap items-center justify-center gap-5 sm:flex-nowrap sm:justify-normal lg:mb-[45px]'>
                <Link href={productLink}>
                    <OptimizedImage
                        className='aspect-square w-full max-w-[146px] rounded-lg object-cover'
                        src={item.url}
                        alt={item.ProductName}
                        width={146}
                        height={146}
                    />
                </Link>

                <div className='mb-6'>
                    <Link href={productLink}>
                        <h3 className='text-body2-bold md:text-subtitle2-bold mb-4 text-gray-800'>
                            {item.ProductName}
                        </h3>
                    </Link>

                    {colorAttribute && (
                        <div className='mb-4 flex items-center'>
                            <span
                                className='ml-2 inline-block h-4 w-4 rounded-full border border-gray-200'
                                style={{ backgroundColor: colorAttribute.value }}
                            ></span>
                            <span className='text-base font-semibold'>{colorAttribute.label}</span>
                        </div>
                    )}

                    {item.VariantAttributes?.filter((attr) => attr.key !== 'رنگ').map((attr) => (
                        <div key={attr.key} className='mb-2 flex items-center text-sm text-gray-600'>
                            <span className='ml-1'>{attr.key}:</span>
                            <span>{attr.label}</span>
                        </div>
                    ))}

                    {/* Warranty section - for future use
                    <div className='flex items-center'>
                        <span className='ml-2'>
                            <WarrantyIcon />
                        </span>
                        <span className='text-body1-bold text-gray-800'>گارانتی ۱۸ ماهه شرکتی</span>
                    </div>
                    */}
                </div>
            </div>

            <div>
                <div className='flex flex-wrap items-center gap-5 sm:flex-nowrap'>
                    <div className='ml-20 flex items-center justify-between'>
                        <Button
                            variant='light'
                            color='green'
                            className='flex aspect-square justify-center rounded-md p-2!'
                            onClick={handleAdd}
                            disabled={isLoading}
                            loading={isAdding}
                        >
                            {!isAdding && <PlusIcon />}
                        </Button>

                        <div className='text-subtitle1-regular min-w-[50px] grow text-center'>{item.Quantity}</div>

                        <Button
                            variant='light'
                            color='danger'
                            className='flex aspect-square justify-center rounded-md p-2!'
                            onClick={handleRemove}
                            disabled={isLoading}
                            loading={isRemoving}
                        >
                            {!isRemoving &&
                                (item.Quantity === 1 ? (
                                    <TrashIcon className='text-secondary-500' />
                                ) : (
                                    <MinusIcon className='text-secondary-500' />
                                ))}
                        </Button>
                    </div>

                    <div className='grow text-left'>
                        {hasDiscount && (
                            <div className='flex flex-wrap items-center gap-2'>
                                <span className='text-sm text-gray-400 line-through decoration-gray-300'>
                                    {formatPrice(totalPrice)}
                                </span>
                                <Badge
                                    color='danger'
                                    className='!flex !min-w-[40px] justify-center !rounded-[3px] !px-[6px] !py-[1px] !leading-[18px]'
                                >
                                    {formatPrice(totalDiscount)}-
                                </Badge>
                            </div>
                        )}

                        {item.Quantity > 1 && (
                            <div className='flex flex-wrap items-center gap-2'>
                                <span className='text-sm text-gray-400'>
                                    {item.Quantity} عدد × {formatPrice(item.PriceAtTime)}
                                </span>
                            </div>
                        )}

                        <div className='text-subtitle1-bold flex items-center text-gray-800'>
                            <span className='ml-1.5'>{formatPrice(hasDiscount ? finalPrice : totalPrice)}</span>
                            <TomanIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
