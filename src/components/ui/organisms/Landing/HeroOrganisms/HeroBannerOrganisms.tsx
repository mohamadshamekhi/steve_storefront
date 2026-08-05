'use client';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronRight from '@/components/icons/ChevronRight';
import ShapeIcon from '@/components/icons/ShapeIcon';
import Button from '@/components/ui/atoms/Button/Button';
import SwiperComponent from '@/components/ui/atoms/Swiper/Swiper';
import { Banner } from '@/models/common.model';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';
import { useRef } from 'react';

const HeroBannerOrganisms = ({ fullWidth, banners }: { fullWidth?: boolean | number; banners: Banner[] }) => {
    const prevRef2 = useRef<HTMLButtonElement | null>(null);
    const nextRef2 = useRef<HTMLButtonElement | null>(null);

    const topBanners = banners
        .filter((banner) => banner.location === 'top' && banner.is_active)
        .sort((a, b) => a.sort_order - b.sort_order);

    if (topBanners.length === 0) {
        return null;
    }

    return (
        <div className={`relative h-full rounded-lg ${fullWidth ? 'lg:col-span-12' : 'lg:col-span-8'}`}>
            <SwiperComponent
                className='rounded-lg'
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                    prevEl: prevRef2.current,
                    nextEl: nextRef2.current
                }}
                pagination={{
                    clickable: true,
                    el: '.banner-hero-swiper'
                }}
                onInit={(swiper) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef2.current;
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef2.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {topBanners.map((banner, index) => (
                    <SwiperSlide key={banner.id}>
                        <Link href={banner.link}>
                            <OptimizedImage
                                className={`rounded-lg object-cover ${fullWidth ? 'aspect-[16/9] max-h-[400px] w-full md:max-h-[500px] lg:max-h-[600px]' : 'aspect-[887/562] max-w-[887px]'}`}
                                alt={banner.alt_text}
                                src={banner.image_url}
                                width={fullWidth ? 1920 : 887}
                                height={fullWidth ? 1080 : 562}
                                {...(index === 0 ? { priority: true } : { loading: 'lazy' })}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
                <div className='relative'>
                    <div className='absolute bottom-0 left-1/2 z-20 min-w-[200px] -translate-x-1/2 translate-y-[6px]'>
                        <ShapeIcon className='text-primary-50 h-auto' />
                    </div>

                    <div className='swiper-pagination banner-hero-swiper relative z-10 flex flex-row items-center justify-center px-5 py-3'>
                        {/* Swiper pagination bullets will go here */}
                    </div>
                </div>
                <div className='absolute right-6 bottom-16 z-50 flex items-center gap-2 sm:bottom-6'>
                    <Button
                        ref={prevRef2}
                        variant='light'
                        color='primary'
                        size='sm'
                        className='!rounded-full px-2 py-2'
                    >
                        <ChevronRight className='text-primary-900' />
                    </Button>

                    <Button
                        ref={nextRef2}
                        variant='light'
                        color='primary'
                        size='sm'
                        className='!rounded-full px-2 py-2'
                    >
                        <ChevronLeft className='text-primary-900' />
                    </Button>
                </div>
            </SwiperComponent>
        </div>
    );
};

export default HeroBannerOrganisms;
