import ChevronLeft from '@/components/icons/ChevronLeft';
import ROUTES from '@/constants/routes/routes.constant';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';
import React from 'react';
import { ProductProps } from '../../ProductsOrganisms/product.types';

interface RecommendedCategory {
    title: string;
    subtitle: string;
    products: ProductProps[];
    url: string;
    categoryId: string;
}

interface Props {
    recommendedProducts: RecommendedCategory[];
}

const RecommendedProductOrganisms: React.FC<Props> = ({ recommendedProducts }) => {
    return (
        <>
            {recommendedProducts.map((category, catIndex) => (
                <div key={catIndex} className='flex flex-col rounded-[4px] bg-white p-5 lg:p-6'>
                    <h3 className='text-body1-bold'>{category.title}</h3>
                    <div className='text-caption mb-2 text-gray-500'>{category.subtitle}</div>

                    <div className='grid grid-cols-2 gap-2'>
                        {category.products.slice(0, 4).map((product) => {
                            const primaryImage =
                                product.gallery?.find((img) => img.is_primary)?.url || product.gallery?.[0]?.url;

                            return (
                                <div key={product.slug}>
                                    <Link
                                        className='block basis-0.5 rounded-sm border border-gray-100 p-3'
                                        href={product.slug ? `${ROUTES.Products}/${product.slug}` : ROUTES.Products}
                                    >
                                        <OptimizedImage
                                            alt={product.name || 'محصول'}
                                            width={200}
                                            height={230}
                                            src={primaryImage || '/images/placeholder.png'}
                                            loading='lazy'
                                            className='aspect-[2/2.3] w-full object-cover'
                                        />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    <Link
                        href={category.url || ROUTES.Products}
                        aria-label={`مشاهده همه محصولات ${category.title}`}
                        className='text-body1-regular mt-5 flex items-center justify-center gap-2 text-center'
                    >
                        <span className='text-sm md:text-lg'>مشاهده همه</span>

                        <ChevronLeft className='text-primary-900 w-2 text-sm' />
                    </Link>
                </div>
            ))}
        </>
    );
};

export default RecommendedProductOrganisms;
