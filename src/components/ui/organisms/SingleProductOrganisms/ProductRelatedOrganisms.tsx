import PuzzleIcon from '@/components/icons/PuzzleIcon';
import ProductRelatedSwiper from './ProductRelatedSwiper';

export type RelatedProduct = {
    src: string;
    price: string;
    rate: number;
    title: string;
    slug: string;
    colors: string[];
    features: Record<string, string>[];
    inStock?: number;
    isUsed?: boolean;
    discountPercent?: number;
    discountedPrice?: string;
    link?: string;
    time?: number;
};

type ProductRelatedOrganismsProps = {
    relatedProducts: RelatedProduct[];
};

const ProductRelatedOrganisms = ({ relatedProducts }: ProductRelatedOrganismsProps) => {
    if (!relatedProducts || relatedProducts.length === 0) return null;

    return (
        <div className='rounded-2xl bg-white p-4 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-6'>
            <h2 className='flex items-center gap-2 text-base font-bold sm:text-xl'>
                <PuzzleIcon className='text-secondary-500' />
                <span>کالا مشابه یا برای نیاز تو</span>
            </h2>
            <ProductRelatedSwiper relatedProducts={relatedProducts} />
        </div>
    );
};

export default ProductRelatedOrganisms;

