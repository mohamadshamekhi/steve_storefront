'use client';
import SwiperComponent from '@/components/ui/atoms/Swiper/Swiper';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import ProductOrganisms from '../../ProductCard/ProductOrganisms';
import { ProductProps } from '../../ProductsOrganisms/product.types';

const HeroProductOrganisms = ({ products }: { products: ProductProps[] }) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <div className='relative max-h-[562px] overflow-hidden rounded-lg lg:col-span-4'>
            <SwiperComponent
                dir='ltr'
                className='h-full'
                modules={[Navigation, Autoplay, Pagination]}
                direction='vertical'
                spaceBetween={20}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    el: '.product-hero'
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                onInit={(swiper) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        direction: 'horizontal',
                        pagination: false
                    },
                    575: {
                        slidesPerView: 2,
                        direction: 'horizontal',
                        pagination: false
                    },
                    992: {
                        slidesPerView: 2,
                        direction: 'horizontal',
                        pagination: false
                    },
                    1024: { slidesPerView: 1, direction: 'vertical' }
                }}
            >
                {products?.slice(0, 3).map((product, idx) => (
                    <SwiperSlide className='h-full rounded-lg' key={idx}>
                        <ProductOrganisms product={product} cardType='special' showAddToCartButton={true} />
                    </SwiperSlide>
                ))}
            </SwiperComponent>

            <div className='swiper-container product-hero swiper-pagination'>
                {/* pagination bullets will render here */}
            </div>
        </div>
    );
};

export default HeroProductOrganisms;
