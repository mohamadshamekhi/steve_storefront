'use client';
import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronRight from '@/components/icons/ChevronRight';
import Link from 'next/link';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import Button from '../../atoms/Button/Button';
import SwiperComponent from '../../atoms/Swiper/Swiper';
import BestSellersOrganisms from '../../organisms/Landing/BestSellersOrganisms/BestSellersOrganisms';

import 'swiper/css';
import 'swiper/css/navigation';

import StarsIcon from '@/components/icons/StarsIcon';
import ROUTES from '@/constants/routes/routes.constant';
import { ProductProps } from '../../organisms/ProductsOrganisms/product.types';

const BestSellersTemplate = ({ products }: { products: ProductProps[] }) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    const updatedBestSellers = products.map((item, index) => ({
        ...item,
        code: index
    }));

    const groupedProducts = [];
    for (let i = 0; i < updatedBestSellers.length; i += 3) {
        groupedProducts.push(updatedBestSellers.slice(i, i + 3));
    }

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

                <h2 className='flex items-center justify-center gap-2 text-center text-base font-bold text-gray-800 md:text-lg lg:text-2xl'>
                    <StarsIcon className='text-secondary-500' />

                    <span>پرفروش ترین کالا ها</span>
                </h2>

                <Link href={ROUTES.Products} className='sm:text-md hidden items-center gap-2 text-sm sm:flex'>
                    <span>مشاهده همه</span>

                    <ChevronLeft className='text-primary-900 w-2' />
                </Link>
            </div>

            <SwiperComponent
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={3}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                breakpoints={{
                    1024: { slidesPerView: 4 },
                    768: { slidesPerView: 2 },
                    0: { slidesPerView: 1 }
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
                {groupedProducts.map((group, idx) => (
                    <SwiperSlide key={idx}>
                        <div className='flex flex-col gap-4'>
                            {group.map((product, innerIdx) => (
                                <BestSellersOrganisms product={product} key={innerIdx} />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperComponent>

            <Link
                href={ROUTES.Products}
                className='sm:text-md mt-6 flex items-center justify-center gap-2 text-sm sm:hidden'
            >
                <span>مشاهده همه</span>

                <ChevronLeft className='text-primary-900 w-2' />
            </Link>
        </section>
    );
};

export default BestSellersTemplate;
