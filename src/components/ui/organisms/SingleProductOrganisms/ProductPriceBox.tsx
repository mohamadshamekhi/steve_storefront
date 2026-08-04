'use client';

import PlusIcon from '@/components/icons/PlusIcon';
import TomanIcon from '@/components/icons/TomanIcon';
import TrashIcon from '@/components/icons/TrashIcon';
import priceFormatter from '@/helpers/formatter';
import { SingleProductItem } from '@/models/product.model';
import { useMemo, useState } from 'react';
import Badge from '../../atoms/Badge/Badge';
import Button from '../../atoms/Button/Button';

type ProductPriceBoxProps = {
    product: SingleProductItem;
    className?: string;
    showQuantityControls?: boolean;
};

const ProductPriceBox = ({ product, className = '', showQuantityControls = false }: ProductPriceBoxProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

    const discountPercent = useMemo(() => {
        return 0;
    }, []);

    const originalPrice = useMemo(() => {
        return selectedVariant?.price || 0;
    }, [selectedVariant]);

    const currentPrice = useMemo(() => {
        return selectedVariant?.price || 0;
    }, [selectedVariant]);

    const stockQuantity = useMemo(() => {
        return selectedVariant?.quantity || 0;
    }, [selectedVariant]);

    return (
        <div className={className}>
            <div className='flex flex-wrap justify-between gap-2'>
                <span className='font-semibold text-gray-800'>قیمت</span>

                <div className=''>
                    {discountPercent > 0 && (
                        <div className='flex min-h-4 items-center gap-2'>
                            <del className='text-body2-bold grow text-left text-gray-400'>
                                {priceFormatter(originalPrice.toString())}
                            </del>

                            <Badge
                                color='danger'
                                className='!flex !min-w-[40px] justify-center !rounded-[3px] !px-[6px] !py-[1px] !leading-[18px]'
                            >
                                {discountPercent}%
                            </Badge>
                        </div>
                    )}

                    <div className='text-body1-bold flex items-center justify-baseline gap-1 text-left'>
                        <span className='grow'>{priceFormatter(currentPrice.toString())}</span>
                        <TomanIcon />
                    </div>
                </div>
            </div>

            <div className='mt-8 mb-6'>
                {stockQuantity > 0 ? (
                    <>🔥{stockQuantity} عدد در انبار باقی مانده</>
                ) : (
                    <span className='text-red-500'></span>
                )}
            </div>

            {showQuantityControls ? (
                <div className='flex flex-wrap justify-between gap-2 sm:flex-nowrap lg:flex-wrap xl:flex-nowrap'>
                    <div className='flex items-center justify-between'>
                        <Button
                            variant='light'
                            color='green'
                            size='sm'
                            className='flex aspect-square justify-center rounded-md p-1!'
                        >
                            <PlusIcon />
                        </Button>

                        <div className='text-subtitle1-regular min-w-[50px] grow text-center'>3</div>

                        <Button
                            variant='light'
                            color='danger'
                            size='sm'
                            className='flex aspect-square justify-center rounded-md p-1!'
                        >
                            <TrashIcon className='text-secondary-500' />
                        </Button>
                    </div>
                    <Button size='sm' className='w-full grow p-2!'>
                        مشاهده سبد خرید
                    </Button>
                </div>
            ) : (
                <Button size='lg' className='w-full' disabled={stockQuantity === 0}>
                    افزودن به سبد
                </Button>
            )}
        </div>
    );
};

export default ProductPriceBox;

