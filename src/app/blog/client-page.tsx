'use client';

import SwiperComponent from '@/components/ui/atoms/Swiper/Swiper';
import BlogCardOrganisms from '@/components/ui/organisms/BlogCard/BlogCardOrganisms';
import Container from '@/components/ui/organisms/Container/Container';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';

import { useEffect, useMemo, useRef, useState } from 'react';

import CalenderIcon from '@/components/icons/blog/CalenderIcon';
import RectangleIcon from '@/components/icons/blog/RectangleIcon';
import ShapeIcon from '@/components/icons/ShapeIcon';
import ManualBreadcrumb from '@/components/ui/molecules/Breadcrumbs/ManualBreadcrumb';
import FilterTabs from '@/components/ui/organisms/Blog/FilterTabs';
import SearchBox from '@/components/ui/organisms/Blog/SearchBox';
import BlogCardSkeleton from '@/components/ui/organisms/SkeletonOrganisms/BlogCardSkeleton/BlogCardSkeleton';
import Blog from '@/config/types/blog.types';
import ROUTES from '@/constants/routes/routes.constant';
import { formatJalali } from '@/utils/date.util';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import useDebounce from '@/hooks/useDebounce';
import useInfiniteScroll from '@/hooks/useInfinitieScroll';
import OptimizedImage from '@/utils/imageLoader';
import { parseAsString, useQueryState } from 'nuqs';

const ClientPage = ({ data: initialData }: { data: Blog[] }) => {
    const loadMoreRef = useRef<HTMLDivElement>(null);

    const [title, setTitle] = useQueryState('title', parseAsString.withDefault(''));
    const debouncedTitle = useDebounce(title, 300);

    const [activeFilter, setActiveFilter] = useState('editor');

    const apiKey = useMemo(
        () => `${ApiKeys.GET_BLOG_POSTS}?title=${debouncedTitle}`,
        [debouncedTitle]
    );

    const { data, isLoadingInitial, isFilterLoading, isLoadingMore, isEmpty, isReachingEnd, loadMore } =
        useInfiniteScroll<Blog>(
            apiKey,
            async ([, params]) => {
                const response = await fetcher(ApiKeys.GET_BLOG_POSTS, 'web', 'GET', {
                    params: {
                        page_number: params.page_number.toString(),
                        page_size: params.page_size.toString(),
                        title: debouncedTitle
                    }
                });
                return {
                    data: response.data.articles,
                    pagination: response.data.pagination
                };
            },
            { pageSize: 12, initialPageIndex: 1 }
        );

    // initialData is the SSR-fetched unfiltered list; only usable as a fallback while
    // the unfiltered key itself is (re)loading, never for a title-filtered request.
    const showInitialFallback = isLoadingInitial && !debouncedTitle;
    const isSkeletonLoading = isLoadingInitial && !showInitialFallback;

    const rawArticles = showInitialFallback ? initialData : isEmpty ? [] : data;
    const articles = useMemo(
        () => [...rawArticles].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()),
        [rawArticles]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoadingMore && !isReachingEnd) {
                    loadMore();
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = loadMoreRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [isLoadingMore, isReachingEnd, loadMore]);

    return (
        <Layout>
            <Container>
                <ManualBreadcrumb
                    items={[
                        { label: 'خانه', href: ROUTES.Landing },
                        {
                            label: 'اخبار',
                            href: ROUTES.Blog,
                            isCurrent: true
                        }
                    ]}
                />
                <h1 className='sr-only'>اخبار و مقالات استیو موبایل</h1>
                <section className='pt-8 pb-20'>
                    <div className='grid grid-cols-12 gap-4 pb-8'>
                        <div className='col-span-12 lg:col-span-6'>
                            <FilterTabs activeFilter={activeFilter} onChange={setActiveFilter} />
                        </div>

                        <div className='col-span-12 lg:col-span-6'>
                            <SearchBox
                                title={title}
                                onInput={(e) => {
                                    setTitle(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>

                    {isSkeletonLoading && (
                        <div className='grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4'>
                            {Array.from({ length: 8 }).map((_, i) => (
                                <BlogCardSkeleton key={i} />
                            ))}
                        </div>
                    )}

                    {!isSkeletonLoading && !isFilterLoading && articles.length === 0 && (
                        <div className='rounded-2xl border border-dashed border-gray-200 py-16 text-center text-sm text-gray-400'>
                            {title ? 'مقاله‌ای با این عنوان پیدا نشد.' : 'هنوز مقاله‌ای منتشر نشده است.'}
                        </div>
                    )}

                    {!isSkeletonLoading && articles.length > 0 && (
                        <div className='grid grid-cols-12 gap-6'>
                        {/* Slider - First Post(s) */}
                        <div className='relative col-span-12 h-[300px] overflow-hidden md:h-[400px] lg:col-span-6'>
                            <SwiperComponent
                                className='h-full rounded-lg'
                                modules={[Navigation, Pagination]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation
                                pagination={{
                                    clickable: true,
                                    el: '.blog-swiper'
                                }}
                            >
                                {articles.slice(0, 5).map((article, i) => (
                                    <SwiperSlide className='rounded-lg' key={i}>
                                        <Link href={`${ROUTES.Blog}/${article.slug}`} className='relative block h-full'>
                                            <div className='absolute left-0 z-10 flex items-center justify-center'>
                                                <RectangleIcon />
                                                <div className='absolute flex items-center'>
                                                    <CalenderIcon className='ml-1.5 fill-gray-50 text-gray-400' />
                                                    <span className='text-xs-plus font-medium text-gray-700'>
                                                        {formatJalali(new Date(article.created_at))}
                                                    </span>
                                                </div>
                                            </div>

                                            <OptimizedImage
                                                className='block aspect-[1.5] h-full w-full rounded-sm object-cover lg:aspect-[315/185]'
                                                width={315}
                                                height={185}
                                                src={article.media_url}
                                                alt={article.title}
                                                {...(i === 0 ? { priority: true } : { loading: 'lazy' })}
                                            />

                                            <div
                                                className='absolute inset-0 z-0'
                                                style={{
                                                    background:
                                                        'linear-gradient(178.51deg, rgba(0, 0, 0, 0) 1.26%, rgba(0, 0, 0, 0.68) 82.07%)'
                                                }}
                                            ></div>

                                            <div
                                                className='pointer-events-none absolute inset-0 z-10'
                                                style={{
                                                    backdropFilter: 'blur(2px)',
                                                    WebkitBackdropFilter: 'blur(2px)',
                                                    maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
                                                    WebkitMaskImage:
                                                        'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
                                                }}
                                            />

                                            <div className='absolute right-0 bottom-3 z-20 w-full p-6 text-lg font-bold text-white md:bottom-0 md:p-7 md:text-[28px]'>
                                                {article.title}
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                                {articles.length > 1 && (
                                    <div className='relative'>
                                        <div className='absolute bottom-[-6px] left-0 z-10 md:left-[-18px]'>
                                            <ShapeIcon className='text-primary-50 h-auto max-w-[200px] md:max-w-none' />
                                        </div>

                                        <div className='swiper-pagination blog-swiper absolute left-0 z-20 flex flex-row items-center justify-center px-5 py-3'>
                                            {/* Swiper pagination bullets will go here */}
                                        </div>
                                    </div>
                                )}
                            </SwiperComponent>
                        </div>

                        <div className='col-span-12 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 lg:col-span-6'>
                            {articles.slice(1, 5).map((article) => (
                                <BlogCardOrganisms key={article.id} article={article} />
                            ))}
                        </div>

                        <div className='col-span-12 mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4'>
                            {articles.slice(5).map((article) => (
                                <BlogCardOrganisms key={article.id} article={article} />
                            ))}
                        </div>
                        </div>
                    )}

                    {!isSkeletonLoading && !isEmpty && !isReachingEnd && (
                        <div ref={loadMoreRef} className='flex items-center justify-center py-8'>
                            {isLoadingMore && (
                                <span className='border-primary-200 border-t-primary-600 h-6 w-6 animate-spin rounded-full border-2' />
                            )}
                        </div>
                    )}

                    {!isSkeletonLoading && !isEmpty && isReachingEnd && articles.length > 0 && (
                        <p className='py-8 text-center text-xs text-gray-400'>همه مقالات نمایش داده شد</p>
                    )}
                </section>
            </Container>
        </Layout>
    );
};

export default ClientPage;
