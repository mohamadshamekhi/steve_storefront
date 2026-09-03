'use client';
import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronRight from '@/components/icons/ChevronRight';
import Link from 'next/link';
import { useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import Button from '../../atoms/Button/Button';
import SwiperComponent from '../../atoms/Swiper/Swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import ProductOrganisms from '../../organisms/ProductCard/ProductOrganisms';

import TicketIcon from '@/components/icons/TicketIcon';
import ROUTES from '@/constants/routes/routes.constant';
import { ProductProps } from '../../organisms/ProductsOrganisms/product.types';

const AuctionTemplate = ({ products }: { products: ProductProps[] }) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <section>
            <div className='mb-10 flex flex-row-reverse flex-wrap items-center justify-between gap-2 sm:flex-row'>
                <div className='flex items-center gap-2'>
                    <Button ref={prevRef} aria-label='مورد قبلی' variant='light' color='primary' size='sm' className='!rounded-full px-2 py-2'>
                        <ChevronRight className='text-primary-900' />
                    </Button>

                    <Button ref={nextRef} aria-label='مورد بعدی' variant='light' color='primary' size='sm' className='!rounded-full px-2 py-2'>
                        <ChevronLeft className='text-primary-900' />
                    </Button>
                </div>
                <h2 className='flex items-center justify-center gap-2 text-center text-base font-semibold md:text-xl'>
                    <TicketIcon className='text-secondary-500' />

                    <span>منتخب محصولات تخفیف و حراج</span>
                </h2>

                <Link href={ROUTES.Products} className='text-body1-regular hidden items-center gap-1 sm:flex'>
                    <span>مشاهده همه</span>

                    <ChevronLeft />
                </Link>
            </div>

            <SwiperComponent
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={7}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                breakpoints={{
                    1200: { slidesPerView: 7 },
                    1024: { slidesPerView: 5 },
                    992: { slidesPerView: 4 },
                    728: { slidesPerView: 3 },
                    0: { slidesPerView: 2 }
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
            >
                {products.map((product, idx) => (
                    <SwiperSlide key={idx}>
                        <ProductOrganisms product={product} withOutTitle={true} />
                    </SwiperSlide>
                ))}
            </SwiperComponent>

            <Link
                href={ROUTES.Products}
                className='mt-6 flex items-center justify-center gap-1 text-sm sm:hidden md:text-lg'
            >
                <span>مشاهده همه</span>

                <ChevronLeft />
            </Link>
        </section>
    );
};

export default AuctionTemplate;
