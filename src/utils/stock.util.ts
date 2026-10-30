/**
 * موجودی واریانت از دید فروشگاه.
 * API جدید فقط `in_stock` و (در صورت کم بودن موجودی) `stock_left` می‌دهد؛ API قدیمی `quantity`.
 * این توابع با هر دو کار می‌کنند تا ترتیب دیپلوی فرانت و بک‌اند مهم نباشد.
 */
export interface VariantStock {
    in_stock?: boolean;
    stock_left?: number;
    quantity?: number;
}

/** حداکثر تعدادی که «فقط N عدد باقی مانده» نشان داده می‌شود */
export const LOW_STOCK_THRESHOLD = 10;

export const isVariantInStock = (v?: VariantStock | null): boolean =>
    !!v && (v.in_stock ?? (v.quantity ?? 0) > 0);

/** تعداد باقی‌مانده فقط وقتی کم است (برای پیام کمبود موجودی)؛ در غیر این صورت undefined */
export const variantStockLeft = (v?: VariantStock | null): number | undefined => {
    if (!v || !isVariantInStock(v)) return undefined;
    if (v.stock_left !== undefined) return v.stock_left;
    if (v.in_stock === undefined && v.quantity && v.quantity <= LOW_STOCK_THRESHOLD) return v.quantity;
    return undefined;
};

/** سقف تعداد قابل افزودن به سبد؛ Infinity یعنی محدودیتی سمت فرانت نیست و سرور بررسی می‌کند */
export const variantMaxQuantity = (v?: VariantStock | null): number => {
    if (!v || !isVariantInStock(v)) return 0;
    if (v.stock_left !== undefined) return v.stock_left;
    if (v.in_stock === undefined) return v.quantity ?? 0;
    return Infinity;
};
