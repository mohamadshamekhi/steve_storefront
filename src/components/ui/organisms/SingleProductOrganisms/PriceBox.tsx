'use client';

import { useProductVariant } from '@/contexts/ProductVariantContext';
import Button from '../../atoms/Button/Button';
import Badge from '../../atoms/Badge/Badge';
import TomanIcon from '@/components/icons/TomanIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import TrashIcon from '@/components/icons/TrashIcon';
import priceFormatter from '@/helpers/formatter';
import { useCartStore, useSessionStore } from '@/state';
import { useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes/routes.constant';
import Link from 'next/link';

type PriceBoxProps = {
    productId?: string;
};

const PriceBox = ({ productId }: PriceBoxProps) => {
    const router = useRouter();
    const { selectedVariant, discount } = useProductVariant();
    const { addItem, removeItem, status: cartStatus, getItemQuantity } = useCartStore();
    const authStatus = useSessionStore((state) => state.status);

    const quantityInCart = productId && selectedVariant?.id ? getItemQuantity(productId, selectedVariant.id) : 0;

    const originalPrice = selectedVariant?.price || 0;
    const stockQuantity = selectedVariant?.quantity || 0;
    const isLoading = cartStatus === 'loading';

    // Calculate discount
    let discountedPrice: number | undefined;
    let discountPercent: number | undefined;

    if (discount?.is_active && discount?.discount_value > 0) {
        if (discount.discount_type === 'percentage') {
            discountPercent = discount.discount_value;
            discountedPrice = originalPrice - (originalPrice * discount.discount_value) / 100;
        } else if (discount.discount_type === 'fixed_amount') {
            discountedPrice = originalPrice - discount.discount_value;
            discountPercent = Math.round((discount.discount_value / originalPrice) * 100);
        }
    }

    const currentPrice = discountedPrice ?? originalPrice;
    const hasDiscount = discountPercent !== undefined && discountPercent > 0;

    const handleAddToCart = async () => {
        if (authStatus !== 'authenticated') {
            sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
            router.push('/auth/sign-in');
            return;
        }

        if (!productId || !selectedVariant?.id) return;

        await addItem({
            product_id: productId,
            variant_id: selectedVariant.id
        });
    };

    const handleRemoveFromCart = async () => {
        if (!productId || !selectedVariant?.id) return;

        await removeItem({
            product_id: productId,
            variant_id: selectedVariant.id
        });
    };

    return (
        <>
            <div className='flex flex-wrap justify-between gap-2'>
                <span className='font-semibold text-gray-800'>قیمت</span>
                <div className=''>
                    {hasDiscount && (
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
                    <span className='text-red-500'>ناموجود</span>
                )}
            </div>

            {quantityInCart > 0 ? (
                <div className='flex flex-col gap-2 sm:flex-row sm:flex-nowrap lg:flex-col xl:flex-row'>
                    <Link href={ROUTES.Cart} className='w-full'>
                        <Button size='sm' className='w-full p-2!'>
                            مشاهده سبد خرید
                        </Button>
                    </Link>
                    <div className='flex items-center justify-center gap-2 sm:justify-between'>
                        <Button
                            variant='light'
                            color='green'
                            size='sm'
                            className='flex aspect-square justify-center rounded-md p-1!'
                            onClick={handleAddToCart}
                            disabled={isLoading || quantityInCart >= stockQuantity}
                        >
                            <PlusIcon />
                        </Button>
                        <div className='text-subtitle1-regular min-w-[50px] text-center'>{quantityInCart}</div>
                        <Button
                            variant='light'
                            color='danger'
                            size='sm'
                            className='flex aspect-square justify-center rounded-md p-1!'
                            onClick={handleRemoveFromCart}
                            disabled={isLoading}
                        >
                            <TrashIcon className='text-secondary-500' />
                        </Button>
                    </div>
                </div>
            ) : (
                <Button
                    size='lg'
                    className='w-full'
                    disabled={stockQuantity === 0 || isLoading}
                    onClick={handleAddToCart}
                >
                    {isLoading ? 'در حال افزودن...' : 'افزودن به سبد'}
                </Button>
            )}
        </>
    );
};

export default PriceBox;
