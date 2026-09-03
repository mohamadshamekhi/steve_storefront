'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronRight from '@/components/icons/ChevronRight';
import HeartIcon from '@/components/icons/HeartIcon';
import Brand from '@/config/types/brand.type';
import OptimizedImage from '@/utils/imageLoader';
import Button from '../../atoms/Button/Button';
import SwiperComponent from '../../atoms/Swiper/Swiper';

const BrandTemplate = ({ brands }: { brands: Brand[] }) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <section>
            <div className='mb-6 flex flex-row-reverse flex-wrap items-center justify-between gap-2 sm:flex-row'>
                <div className='flex items-center gap-2'>
                    <Button ref={prevRef} aria-label='مورد قبلی' variant='light' color='primary' size='sm' className='!rounded-full px-2 py-2'>
                        <ChevronRight className='text-primary-900' />
                    </Button>

                    <Button ref={nextRef} aria-label='مورد بعدی' variant='light' color='primary' size='sm' className='!rounded-full px-2 py-2'>
                        <ChevronLeft className='text-primary-900' />
                    </Button>
                </div>

                <h2 className='flex items-center justify-center gap-2 text-center text-base font-bold text-gray-800 md:text-lg lg:text-2xl'>
                    <HeartIcon className='text-secondary-500' />
                    <span>محبوب ترین برند ها</span>
                </h2>

                <div className='hidden sm:block sm:w-[100px]'></div>
            </div>

            <SwiperComponent
                modules={[Navigation]}
                spaceBetween={13}
                slidesPerView={9}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                breakpoints={{
                    1280: { slidesPerView: 9 },
                    1024: { slidesPerView: 8 },
                    768: { slidesPerView: 6 },
                    640: { slidesPerView: 4 },
                    0: { slidesPerView: 3.5 }
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
                {brands?.map((brand, index) => (
                    <SwiperSlide key={index}>
                        <Link href={`/product?brand_id=${brand.id}`} className='flex flex-col items-center'>
                            <OptimizedImage
                                className='aspect-square w-full rounded-[3px]'
                                width={137}
                                height={137}
                                src={brand.url}
                                loading='lazy'
                                alt={brand.name}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </section>
    );
};

export default BrandTemplate;
