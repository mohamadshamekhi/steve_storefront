import { ProductDiscount } from '@/models/product.model';

/** تخفیف فعالی که روی این واریانت اعمال می‌شود (همان منطق ProductVariantContext) */
export const variantDiscount = (variantId: string, discounts?: ProductDiscount[] | null): ProductDiscount | undefined =>
    discounts?.find((d) => d.is_active && (d.variant_id === variantId || !d.variant_id));

/** قیمتی که خریدار واقعاً می‌بیند (تومان) */
export const discountedPrice = (price: number, discount?: ProductDiscount | null): number => {
    if (!discount?.is_active || !price || discount.discount_value <= 0) return price;
    const off =
        discount.discount_type === 'percentage'
            ? (price * discount.discount_value) / 100
            : discount.discount_type === 'fixed_amount'
              ? discount.discount_value
              : 0;
    const result = Math.round(price - off);
    return result >= 0 && result < price ? result : price;
};
