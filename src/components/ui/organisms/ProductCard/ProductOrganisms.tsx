import priceFormatter from '@/helpers/formatter';
import useCountDown from '@/hooks/useCountDown';
import Link from 'next/link';
import Badge from '../../atoms/Badge/Badge';
import Button from '../../atoms/Button/Button';

import CirclePlusIcon from '@/components/icons/CirclePlusIcon';
import StarIcon from '@/components/icons/StarIcon';
import TomanIcon from '@/components/icons/TomanIcon';
import UsedIcon from '@/components/icons/UsedIcon';
import cn from '@/config/utilities/cn';
import ROUTES from '@/constants/routes/routes.constant';
import OptimizedImage from '@/utils/imageLoader';
import { ProductProps } from '../ProductsOrganisms/product.types';

const ProductOrganisms = ({
    product,
    cardType = 'default',
    withOutTitle = false,
    showAddToCartButton = false
}: {
    product: ProductProps;
    cardType?: 'default' | 'special';
    withOutTitle?: boolean;
    showAddToCartButton?: boolean;
}) => {
    const { hours, minutes, seconds } = useCountDown({
        time: product.time ? product.time * 1000 : 0
    });

    // Extract colors from variant_attribute
    const colors =
        product.colors ||
        product.variant?.flatMap(
            (v) => v.variant_attribute?.filter((attr) => attr.key === 'رنگ').map((attr) => attr.value) || []
        ) ||
        [];

    // Calculate discount price and percentage
    // discount can be an array or a single object with different structures
    const discountItem = Array.isArray(product.discount) ? product.discount[0] : product.discount;

    // Handle both discount structures: { discount_value, discount_type } and { value, type }
    const discountValue = discountItem ? ('discount_value' in discountItem ? discountItem.discount_value : discountItem.value) : 0;
    const discountType = discountItem ? ('discount_type' in discountItem ? discountItem.discount_type : discountItem.type) : '';

    const hasDiscount = discountItem?.is_active && discountValue > 0;
    const originalPrice = product?.variant[0]?.price;

    let discountedPrice: number | undefined;
    let discountPercent: number | undefined;

    if (hasDiscount && originalPrice) {
        const priceNum = typeof originalPrice === 'string' ? parseFloat(originalPrice) : originalPrice;

        if (discountType === 'percentage') {
            discountPercent = discountValue;
            discountedPrice = priceNum - (priceNum * discountValue) / 100;
        } else if (discountType === 'fixed_amount') {
            discountedPrice = priceNum - discountValue;
            discountPercent = Math.round((discountValue / priceNum) * 100);
        }
    }

    return (
        <div
            dir='rtl'
            className={cn(
                'relative flex h-full flex-col rounded-2xl bg-white shadow-[0_1px_4px_rgba(16,24,40,0.07)]',
                cardType === 'default' ? 'p-3' : 'px-4 pt-5 pb-6 sm:px-6 sm:pt-6.5 sm:pb-8'
            )}
        >
            <div className='relative'>
                {product.is_second_hand && (
                    <div className='absolute top-2 right-2 z-10 flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700'>
                        <UsedIcon />
                        <span>کارکرده</span>
                    </div>
                )}
                {product.time && (
                    <div
                        className={cn(
                            'flex flex-wrap items-center justify-between gap-1',
                            cardType === 'default' ? '' : 'mb-4'
                        )}
                    >
                        <OptimizedImage
                            src={product?.gallery[0]?.url}
                            alt={product.name ? product.name : 'محصول'}
                            width={162}
                            height={20}
                            loading='lazy'
                        />
                        <div className='text-secondary-500 text-subtitle2-bold flex flex-row-reverse items-center gap-2'>
                            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                        </div>
                    </div>
                )}

                <div className='absolute top-1/2 left-0 z-10 flex -translate-y-1/2 transform flex-col gap-2'>
                    {colors &&
                        colors
                            ?.slice(0, 3)
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className='h-2 w-2 rounded-full'
                                    style={{ backgroundColor: item }}
                                ></div>
                            ))}

                    {colors && colors.length > 3 && <div className='bg-transparent text-gray-300'>+</div>}
                </div>
                <Link href={product.slug ? `${ROUTES.Products}/${product.slug}` : '/'}>
                    <OptimizedImage
                        loading='lazy'
                        src={product.gallery[0].url}
                        alt={product.name ? product.name : 'product'}
                        width={cardType === 'default' ? 300 : 383}
                        height={cardType === 'default' ? 300 : 250}
                        className={cn(
                            'mx-auto w-full object-cover',
                            cardType === 'default'
                                ? 'aspect-square max-w-75 leading-[30px]'
                                : 'aspect-[383/250] max-w-[383px]'
                        )}
                    />
                </Link>
            </div>

            {!withOutTitle && product.name && (
                <h3
                    className={cn(
                        'text-caption1-bold line-clamp-2',
                        cardType === 'default' ? '' : 'mt-6 leading-[30px]!'
                    )}
                >
                    {product.name}
                </h3>
            )}

            <div className={cn('flex items-center justify-between gap-1', cardType === 'default' ? 'mt-1' : 'mt-2 mb-5')}>
                <div className='text-[11px] font-semibold'>
                    {product?.variant[0]?.quantity === 0 ? (
                        <span className='text-red-500'>ناموجود</span>
                    ) : product?.variant[0]?.quantity && product?.variant[0]?.quantity <= 5 ? (
                        <span className='text-orange-500'>{product.variant[0].quantity} عدد باقی مانده</span>
                    ) : null}
                </div>

                {(product?.rating || product?.variant[0]?.rate) && (
                    <div className='text-body1-regular flex items-center gap-1'>
                        <span className='text-[12px]'>{product?.rating || product?.variant[0]?.rate}</span>
                        <StarIcon className='text-orange-400' />
                    </div>
                )}
            </div>
            <div className='mt-auto pt-2'>
                {/* discount row */}
                {hasDiscount && originalPrice && (
                    <div className='mb-0.5 flex items-center gap-1.5'>
                        <del className='text-[12px] text-gray-400'>{priceFormatter(originalPrice)}</del>
                        {discountPercent && (
                            <Badge
                                color='danger'
                                className='flex! min-w-9! justify-center rounded-sm! px-1.5! py-0! text-[11px]! leading-4.5!'
                            >
                                {Math.round(discountPercent)}%
                            </Badge>
                        )}
                    </div>
                )}

                {/* price + add button */}
                <div className='flex items-center justify-between gap-2'>
                    <div className='text-body1-bold flex items-center gap-1'>
                        {product?.variant.length > 0 && originalPrice && (
                            <>
                                <span>
                                    {priceFormatter(hasDiscount && discountedPrice ? discountedPrice : originalPrice)}
                                </span>
                                <TomanIcon />
                            </>
                        )}
                    </div>

                    {showAddToCartButton ? (
                        product?.variant?.length === 1 && product?.variant[0].quantity === 1 ? (
                            <Button
                                disabled
                                className='rounded-xl p-2! text-[13px]!'
                                icon={<CirclePlusIcon className='h-5 w-5 text-white' />}
                            >
                                <span>افزودن به سبد</span>
                            </Button>
                        ) : (
                            <Link href={product.slug ? `${ROUTES.Products}/${product.slug}` : '/'}>
                                <Button color='danger' size='sm'>
                                    افزودن به سبد
                                </Button>
                            </Link>
                        )
                    ) : (
                        <Link
                            href={product.slug ? `${ROUTES.Products}/${product.slug}` : '/'}
                            className='flex items-center justify-center rounded-xl bg-secondary-50 p-2 text-secondary-500 transition hover:bg-secondary-100'
                        >
                            <CirclePlusIcon className='h-5 w-5' />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductOrganisms;
