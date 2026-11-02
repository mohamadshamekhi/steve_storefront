'use client';

import { useProductVariant } from '@/contexts/ProductVariantContext';
import { discountedPrice } from '@/utils/price.util';
import { trackEcommerce } from '@/utils/analytics.util';
import { useEffect, useRef } from 'react';

// view_item, once per product. Deferred by a tick because ?variant= is applied in the provider's effect,
// which runs after this one, so the event reports the variant the visitor actually sees.
export const ProductViewEvent = ({ slug, name }: { slug: string; name: string }) => {
    const { selectedVariant, discount } = useProductVariant();
    const sentSlug = useRef<string | null>(null);
    const price = discountedPrice(selectedVariant?.price ?? 0, discount);

    useEffect(() => {
        if (sentSlug.current === slug) return;
        const timer = setTimeout(() => {
            sentSlug.current = slug;
            trackEcommerce('view_item', [{ slug, name, price, quantity: 1 }]);
        });
        return () => clearTimeout(timer);
    }, [slug, name, price]);

    return null;
};
