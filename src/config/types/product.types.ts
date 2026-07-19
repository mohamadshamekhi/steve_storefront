import { StaticImageData } from 'next/image';

interface ProductProps {
    title?: string;
    price?: string;
    link: string;
    discountPercent?: number;
    src: string | StaticImageData;
    discountedPrice?: string;
    inStock?: number;
    rate?: string;
    colors?: string[];
    time?: number;
    slug?: string;
}

export default ProductProps;
