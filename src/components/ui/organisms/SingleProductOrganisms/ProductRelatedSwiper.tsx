/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import SwiperComponent from '../../atoms/Swiper/Swiper';
import ProductCardOrganisms from '../../organisms/ProductsOrganisms/ProductCardOrganisms';
import { RelatedProduct } from './ProductRelatedOrganisms';

type ProductRelatedSwiperProps = {
    relatedProducts: RelatedProduct[];
};

const ProductRelatedSwiper = ({ relatedProducts }: ProductRelatedSwiperProps) => {
    return (
        <SwiperComponent
            className='mt-8 mb-12'
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            breakpoints={{
                1400: { slidesPerView: 5 },
                1200: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 }
            }}
        >
            {relatedProducts.map((product: any, index) => (
                <SwiperSlide key={index}>
                    <ProductCardOrganisms product={product} />
                </SwiperSlide>
            ))}
        </SwiperComponent>
    );
};

export default ProductRelatedSwiper;
