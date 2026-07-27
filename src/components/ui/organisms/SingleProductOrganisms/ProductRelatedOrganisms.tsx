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
    return (
        <div className='mt-[52px]'>
            <h2 className='flex gap-2 text-xl font-semibold'>
                <PuzzleIcon className='text-secondary-500' />
                <span>کالا مشابه یا برای نیاز تو</span>
            </h2>
            <ProductRelatedSwiper relatedProducts={relatedProducts} />
        </div>
    );
};

export default ProductRelatedOrganisms;

