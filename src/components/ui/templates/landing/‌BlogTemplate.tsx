'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';

import BookIcon from '@/components/icons/BookIcon';
import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronRight from '@/components/icons/ChevronRight';

import Button from '@/components/ui/atoms/Button/Button';
import SwiperComponent from '@/components/ui/atoms/Swiper/Swiper';

import Blog from '@/config/types/blog.types';
import ROUTES from '@/constants/routes/routes.constant';
import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperSlide } from 'swiper/react';
import BlogCardOrganisms from '../../organisms/BlogCard/BlogCardOrganisms';

const BlogTemplate = ({ articles }: { articles: Blog[] }) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <section className='pb-6 lg:pb-[154px]'>
            <>
                <div className='mb-6 flex flex-row-reverse flex-wrap items-center justify-between gap-2 sm:flex-row'>
                    <div className='flex items-center gap-2'>
                        <Button
                            ref={prevRef}
                            aria-label='مقاله قبلی'
                            variant='light'
                            color='primary'
                            size='sm'
                            className='!rounded-full px-2 py-2'
                        >
                            <ChevronRight className='text-primary-900' />
                        </Button>

                        <Button
                            ref={nextRef}
                            aria-label='مقاله بعدی'
                            variant='light'
                            color='primary'
                            size='sm'
                            className='!rounded-full px-2 py-2'
                        >
                            <ChevronLeft className='text-primary-900' />
                        </Button>
                    </div>

                    <h2 className='flex items-center justify-center gap-2 text-center text-lg font-semibold sm:text-2xl'>
                        <BookIcon className='text-secondary-500' />

                        <span>خواندنی ها</span>
                    </h2>

                    <Link href={ROUTES.Blog} className='text-body1-regular hidden items-center gap-2 sm:flex'>
                        <span className='text-body1-regular'>مشاهده همه</span>

                        <ChevronLeft className='text-primary-900' />
                    </Link>
                </div>

                <div>
                    <SwiperComponent
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
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
                        {articles?.map((article) => (
                            <SwiperSlide key={article.id}>
                                <BlogCardOrganisms article={article} />
                            </SwiperSlide>
                        ))}
                    </SwiperComponent>

                    <Link
                        href={ROUTES.Blog}
                        className='text-body1-regular mt-6 flex items-center justify-center gap-2 sm:hidden'
                    >
                        <span className='text-sm'>مشاهده همه</span>

                        <ChevronLeft className='text-primary-900' />
                    </Link>
                </div>
            </>
        </section>
    );
};

export default BlogTemplate;
