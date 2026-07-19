import CirclePlusIcon from '@/components/icons/CirclePlusIcon';
import OfferTextIcon from '@/components/icons/OfferTextIcon';
import BlobIcon from '@/components/icons/product/BlobIcon';
import StarIcon from '@/components/icons/StarIcon';
import TomanIcon from '@/components/icons/TomanIcon';
import UsedIcon from '@/components/icons/UsedIcon';
import ROUTES from '@/constants/routes/routes.constant';
import priceFormatter from '@/helpers/formatter';
import useCountDown from '@/hooks/useCountDown';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';
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

    return (
        <div className='relative h-full overflow-hidden rounded-[8px] bg-white'>
            <div className='relative'>
                {product.time && (
                    <div className='absolute top-0 left-1/2 flex -translate-x-1/2 transform items-center gap-2'>
                        <BlobIcon className='absolute top-0 left-1/2 z-20 -translate-x-1/2 scale-110 transform' />
                        <div className='absolute top-1 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2'>
                            <OfferTextIcon className='scale-105 transform' />

                            <div className='text-subtitle2-regular text-secondary-500 flex flex-row-reverse items-center gap-1 font-semibold!'>
                                <span className='text-secondary-500 flex items-center justify-center text-sm'>
                                    {hours}
                                </span>
                                :
                                <span className='text-secondary-500 flex items-center justify-center text-sm'>
                                    {minutes}
                                </span>
                                :
                                <span className='text-secondary-500 flex items-center justify-center text-sm'>
                                    {seconds}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                <div className='absolute top-1/2 left-[15px] z-10 flex -translate-y-1/2 transform flex-col gap-2'>
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
                {product.is_second_hand && (
                    <div className='text-tiny absolute right-[17px] bottom-0 flex items-center gap-[3px] font-normal'>
                        <UsedIcon />
                        <span>کارکرده</span>
                    </div>
                )}
                <Link href={product.slug ? `${ROUTES.Products}/${product.slug}` : '/'} className='relative block'>
                    <OptimizedImage
                        loading='lazy'
                        src={product?.gallery?.[0]?.url ?? noPic}
                        alt={product.name ? product.name : 'محصول'}
                        width={300}
                        height={400}
                        className='aspect-[3/4] w-full object-cover'
                    />
                    <div className='absolute top-2 left-2'>
                        <span className='text-2xl font-bold text-gray-500/90'>Steve</span>
                    </div>
                </Link>
            </div>

            <div className='px-[15px] pt-4'>
                {product?.name && <h3 className='text-caption1-bold line-clamp-2 min-h-[39px]'>{product?.name}</h3>}

                {product.specifications && product.specifications.length > 0 && (
                    <ul className='mt-[14px] grid grid-cols-3 gap-2'>
                        {product.specifications.slice(0, 3).map((spec) => (
                            <li
                                className='flex flex-col justify-center gap-2 overflow-hidden bg-gray-50 p-2'
                                key={spec.key}
                            >
                                <span className='text-tiny truncate font-normal'>{spec.name}</span>
                                <span className='text-tiny truncate font-semibold'>{spec.value}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className='mt-[9px] mb-1.5 flex items-center justify-between'>
                    <div className='text-xs font-medium text-red-500'>
                        {totalQuantity === 0 && 'ناموجود در انبار'}
                        {totalQuantity > 0 && totalQuantity <= 5 && `${totalQuantity} عدد در انبار باقی مانده`}
                    </div>

                    {product.rating !== undefined && product.rating > 0 && (
                        <div className='text-body3-regular flex items-center gap-2'>
                            <span>{product.rating}</span>
                            <StarIcon className='text-orange-500' />
                        </div>
                    )}
                </div>
                <div className='flex flex-wrap items-center justify-between gap-2'>
                    <Link
                        href={product.slug ? `${ROUTES.Products}/${product.slug}` : '/'}
                        className='bg-primary-500 absolute right-0 bottom-0 flex items-center gap-1 rounded-tl-[17px] rounded-br-[6px] px-3 py-2 text-[13px] text-white'
                    >
                        <CirclePlusIcon className='h-5 w-5 text-white' />
                        <span>افزودن به سبد خرید</span>
                    </Link>

                    <div className='grow pb-[17.68px]'>
                        <div className='flex min-h-4 items-center gap-2'>
                            {hasDiscount && originalPrice && (
                                <del className='text-body2-bold grow text-left text-gray-400'>
                                    {priceFormatter(originalPrice)}
                                </del>
                            )}
                            {hasDiscount && discountPercent && (
                                <Badge
                                    color='danger'
                                    className='!flex !min-w-[40px] justify-center !rounded-[3px] !px-[6px] !py-[1px] !leading-[18px]'
                                >
                                    {discountPercent}%
                                </Badge>
                            )}
                        </div>

                        {product?.variant?.length > 0 && originalPrice && (
                            <div className='text-body1-bold flex items-center justify-baseline gap-1 text-left'>
                                <span className='grow'>
                                    {priceFormatter(hasDiscount && discountedPrice ? discountedPrice : originalPrice)}
                                </span>
                                <TomanIcon />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardOrganisms;

