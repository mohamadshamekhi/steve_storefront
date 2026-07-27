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
                'relative flex h-full flex-col rounded-md bg-white',
                cardType === 'default' ? 'p-3' : 'px-6 pt-[26px] pb-[32px]'
            )}
        >
            <div className='relative'>
                {product.is_second_hand && (
                    <div className='text-tiny absolute right-[17px] bottom-0 flex items-center gap-[3px] font-normal'>
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
                        width={224}
                        height={121}
                        className={cn(
                            'mx-auto w-full object-cover',
                            cardType === 'default'
                                ? 'aspect-square max-w-[300] leading-[30px]'
                                : 'aspect-[383/250] max-w-[383]'
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

            <div className={cn('flex items-center justify-between', cardType === 'default' ? '' : 'mt-2 mb-5')}>
                <div className='text-sm font-semibold text-red-500'>
                    {product?.variant[0]?.quantity === 0 ? 'ناموجود در انبار' : ''}

                    {product?.variant[0]?.quantity && product?.variant[0]?.quantity > 0
                        ? `${product?.variant[0]?.quantity} عدد در انبار باقی مانده`
                        : ''}
                </div>

                {(product?.rating || product?.variant[0]?.rate) && (
                    <div className='text-body1-regular flex items-center gap-2'>
                        <span>{product?.rating || product?.variant[0]?.rate}</span>

                        <StarIcon className='text-orange-500' />
                    </div>
                )}
            </div>
            <div
                className={cn(
                    'mt-auto flex flex-wrap items-center justify-between gap-2',
                    cardType === 'default' ? '' : ''
                )}
            >
                {showAddToCartButton ? (
                    product?.variant?.length === 1 && product?.variant[0].quantity === 1 ? (
                        <Button
                            disabled
                            className='absolute right-0 bottom-0 rounded-tl-[17px] !rounded-tr-none rounded-br-[6px] !rounded-bl-none p-2! text-[13px]!'
                            icon={<CirclePlusIcon className='h-5 w-5 text-white' />}
                        >
                            <span>افزودن به سبد خرید</span>
                        </Button>
                    ) : (
                        <Link href={product.slug ? `${ROUTES.Products}/${product.slug}` : '/'}>
                            <Button color='danger' size='lg'>
                                افزودن به سبد
                            </Button>
                        </Link>
                    )
                ) : (
                    <Link
                        href={product.slug ? `${ROUTES.Products}/${product.slug}` : '/'}
                        className='flex aspect-square justify-center rounded-md bg-red-50 p-2 text-red-600'
                    >
                        <CirclePlusIcon className='text-secondary-500' />
                    </Link>
                )}

                <div className='grow'>
                    <div className='flex items-center gap-2'>
                        {hasDiscount && originalPrice && (
                            <del className='text-body2-bold grow text-left text-gray-400'>
                                {priceFormatter(originalPrice)}{' '}
                            </del>
                        )}
                        {hasDiscount && discountPercent && (
                            <Badge
                                color='danger'
                                className='!flex !min-w-[40px] justify-center !rounded-[3px] !px-[6px] !py-[1px] !leading-[18px]'
                            >
                                {Math.round(discountPercent)}%
                            </Badge>
                        )}
                    </div>

                    <div
                        className={cn(
                            'text-body1-bold flex items-center justify-baseline gap-1 text-left',
                            cardType === 'default' ? '' : 'mt-1'
                        )}
                    >
                        {product?.variant.length > 0 && originalPrice && (
                            <>
                                <span className='grow'>
                                    {priceFormatter(hasDiscount && discountedPrice ? discountedPrice : originalPrice)}
                                </span>

                                <TomanIcon />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOrganisms;
