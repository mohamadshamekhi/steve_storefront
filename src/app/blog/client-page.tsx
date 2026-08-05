'use client';

import SwiperComponent from '@/components/ui/atoms/Swiper/Swiper';
import BlogCardOrganisms from '@/components/ui/organisms/BlogCard/BlogCardOrganisms';
import Container from '@/components/ui/organisms/Container/Container';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';

import { useCallback, useEffect, useRef, useState } from 'react';

import CalenderIcon from '@/components/icons/blog/CalenderIcon';
import RectangleIcon from '@/components/icons/blog/RectangleIcon';
import ShapeIcon from '@/components/icons/ShapeIcon';
import ManualBreadcrumb from '@/components/ui/molecules/Breadcrumbs/ManualBreadcrumb';
import FilterTabs from '@/components/ui/organisms/Blog/FilterTabs';
import SearchBox from '@/components/ui/organisms/Blog/SearchBox';
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
import OptimizedImage from '@/utils/imageLoader';
import { parseAsString, useQueryState } from 'nuqs';

const ClientPage = ({ data }: { data: Blog[] }) => {
    const [articles, setArticles] = useState<Blog[]>(data ?? []);

    const isFirstRender = useRef(true);
    const [isLoading, setLoading] = useState(false);

    const [title, setTitle] = useQueryState('title', parseAsString.withDefault(''));
    const debouncedTitle = useDebounce(title, 300);

    // TODO : use these when we added pagination with page size and page number and total page
    // const [pageSize, setPageSize] = useQueryState('page_size', parseAsInteger.withDefault(1));
    // const [pageNumber, setPageNumber] = useQueryState('page_number', parseAsInteger.withDefault(10));

    const [activeFilter, setActiveFilter] = useState('editor');

    const refetchBlog = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetcher(ApiKeys.GET_BLOG_POSTS, 'web', 'GET', {
                params: { title: debouncedTitle }
            });
            const articles = res?.data?.articles;
            setArticles(articles?.length ? articles : []);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [debouncedTitle]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        refetchBlog();
    }, [debouncedTitle, refetchBlog]);

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
                <h1 className='sr-only'>اخبار و مقالات استیو شاپ</h1>
                {isLoading ? 'loading...' : ''}
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
                                                    <span className='text-xl font-normal text-gray-700'>
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

                        <div className='col-span-12 grid grid-cols-2 gap-8 lg:col-span-6'>
                            {articles.slice(1, 5).map((article) => (
                                <BlogCardOrganisms key={article.id} article={article} />
                            ))}
                        </div>

                        <div className='col-span-12 mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                            {articles.slice(5).map((article) => (
                                <BlogCardOrganisms key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                </section>
            </Container>
        </Layout>
    );
};

export default ClientPage;
