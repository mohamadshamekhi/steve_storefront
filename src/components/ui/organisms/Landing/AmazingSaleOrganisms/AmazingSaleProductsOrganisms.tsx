'use client';
import SwiperComponent from '@/components/ui/atoms/Swiper/Swiper';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import ProductOrganisms from '../../ProductCard/ProductOrganisms';

import { ProductProps } from '../../ProductsOrganisms/product.types';

const AmazingSaleProductsOrganisms = ({ discountProduct }: { discountProduct: ProductProps[] }) => {
    return (
        <div className='col-span-full lg:col-span-8'>
            <div className='px-3 py-5 bg-blend-multiply sm:px-4 sm:py-6 lg:px-[38px]'>
                <SwiperComponent
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    breakpoints={{
                        1024: { slidesPerView: 4 },
                        768: { slidesPerView: 3 },
                        480: { slidesPerView: 2 },
                        0: { slidesPerView: 1.25 }
                    }}
                >
                    {discountProduct &&
                        discountProduct.map((product, idx) => (
                            <SwiperSlide key={idx}>
                                <ProductOrganisms product={product} />
                            </SwiperSlide>
                        ))}
                </SwiperComponent>
            </div>
        </div>
    );
};

export default AmazingSaleProductsOrganisms;
