import { ProductProps } from '@/components/ui/organisms/ProductsOrganisms/product.types';
import Brand from '@/config/types/brand.types';

// Server props are serialized into the page's HTML, so only keep what the
// listing UI renders: the card shows one image and three specs, and brand
// filters never show the long description.
export const slimListingProducts = (products?: ProductProps[] | null): ProductProps[] =>
    products?.map((product) => ({
        ...product,
        gallery: product.gallery?.slice(0, 1),
        specifications: product.specifications?.slice(0, 3)
    })) ?? [];

export const slimBrands = (brands?: Brand[] | null): Brand[] =>
    brands?.map((brand) => ({ ...brand, description: '' })) ?? [];
