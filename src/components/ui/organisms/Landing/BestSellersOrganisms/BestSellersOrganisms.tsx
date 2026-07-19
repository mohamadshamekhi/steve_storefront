import ROUTES from '@/constants/routes/routes.constant';
import Link from 'next/link';
import { ProductProps } from '../../ProductsOrganisms/product.types';

import OptimizedImage from '@/utils/imageLoader';
import noPic from '../../../../../../public/images/_general/placeholder/no-pic.png';

interface ProductType extends ProductProps {
    slug?: string;
    code: number;
}

const BestSellersOrganisms = ({ product }: { product: ProductType }) => {
    return (
        <div className='flex items-center gap-2 rounded-[3px] bg-white px-[23px] py-[17px]'>
            <OptimizedImage
                alt={product.name ?? 'عکس موجود نیست'}
                width={59}
                height={59}
                src={product.gallery[0].url ?? noPic}
                loading='lazy'
                className='aspect-square object-cover'
            />
            <span className='text-h4-bold text-primary-500 hidden md:block'>{product.code}</span>
            <Link href={product.slug ? `${ROUTES.Products}/${product.slug}` : '/'} className='grow'>
                <h3 className='text-caption2-bold line-clamp-2 text-gray-800'>{product.name}</h3>
            </Link>
        </div>
    );
};

export default BestSellersOrganisms;
