'use client';

import { SingleProductItem } from '@/models/product.model';
import { ProductVariantProvider } from '@/contexts/ProductVariantContext';
import { ReactNode } from 'react';

type SingleProductClientWrapperProps = {
    product: SingleProductItem;
    children: ReactNode;
};

const SingleProductClientWrapper = ({ product, children }: SingleProductClientWrapperProps) => {
    return <ProductVariantProvider initialVariant={product.variants[0]}>{children}</ProductVariantProvider>;
};

export default SingleProductClientWrapper;
