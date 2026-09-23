'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { SingleProductItem, ProductDiscount } from '@/models/product.model';

type Variant = SingleProductItem['variants'][0];

type ProductVariantContextType = {
    selectedVariant: Variant;
    setSelectedVariant: (variant: Variant) => void;
    discount: ProductDiscount | null;
};

const ProductVariantContext = createContext<ProductVariantContextType | undefined>(undefined);

export const useProductVariant = () => {
    const context = useContext(ProductVariantContext);
    if (!context) {
        throw new Error('useProductVariant must be used within ProductVariantProvider');
    }
    return context;
};

export const ProductVariantProvider = ({
    children,
    initialVariant,
    variants,
    discount
}: {
    children: ReactNode;
    initialVariant: Variant;
    /** اگر داده شود، `?variant={id}` در URL (مثلاً از QR روی کالا) همان واریانت را پیش‌فرض انتخاب می‌کند */
    variants?: Variant[];
    discount?: ProductDiscount[] | null;
}) => {
    const [selectedVariant, setSelectedVariant] = useState<Variant>(initialVariant);

    // از window خوانده می‌شود نه useSearchParams تا صفحه‌ی ISR محصول dynamic نشود / Suspense نخواهد
    useEffect(() => {
        if (!variants?.length) return;
        const variantId = new URLSearchParams(window.location.search).get('variant');
        const match = variantId ? variants.find((v) => v.id === variantId) : undefined;
        if (match) setSelectedVariant(match);
    }, [variants]);

    // Find discount for the selected variant
    const activeDiscount = discount?.find(
        (d) => d.is_active && (d.variant_id === selectedVariant.id || !d.variant_id)
    ) || null;

    return (
        <ProductVariantContext.Provider value={{ selectedVariant, setSelectedVariant, discount: activeDiscount }}>
            {children}
        </ProductVariantContext.Provider>
    );
};
