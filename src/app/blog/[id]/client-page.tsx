'use client';

import Container from '@/components/ui/organisms/Container/Container';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';

import BookIcon from '@/components/icons/blog/BookIcon';
import CalenderIcon from '@/components/icons/blog/CalenderIcon';
import ChevronLeft from '@/components/icons/ChevronLeft';
import BlogCardOrganisms from '@/components/ui/organisms/BlogCard/BlogCardOrganisms';

import ManualBreadcrumb from '@/components/ui/molecules/Breadcrumbs/ManualBreadcrumb';
import CommentSection from '@/components/ui/organisms/Blog/Comment/CommentSection';
import Blog from '@/config/types/blog.types';
import ROUTES from '@/constants/routes/routes.constant';
import { Comment } from '@/models/common.model';
import { calculateReadingTimeText } from '@/utils/blog.util';
import { formatJalali } from '@/utils/date.util';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';

interface IProps {
    article: Blog;
    blogs: Blog[];
    comments: Comment[];
    all_approved_comments_count: number;
}

function ClientPage({ article, blogs, comments, all_approved_comments_count }: IProps) {
    const renderPost = () => {
        return (
            <div className='max-w-none'>
                <div className='mb-[22px] md:float-right md:mb-0 md:ml-10 md:w-5/12'>
                    <OptimizedImage
                        width={674}
                        height={448}
                        src={article.media_url}
                        alt={article.alt}
                        className='mx-auto aspect-[674/450] h-full w-full rounded-lg md:mx-0'
                    />
                </div>

                <div className='text-justify md:col-span-2'>
                    <div className='mb-7 flex flex-wrap items-center'>
                        <div className='ml-5 flex items-center text-sm font-normal'>
                            <BookIcon fill='none' className='text-primary-700 ml-2.5 h-3 w-3' />

                            <span className='ml-0.5 text-gray-500'>زمان مطالعه</span>

                            <span className='text-gray-700'>{calculateReadingTimeText(article.body)}</span>
                        </div>

                        <div className='ml-2.5 flex items-center text-sm font-normal'>
                            <CalenderIcon fill='none' className='text-primary-700 ml-2.5 h-3 w-3' />

                            <span className='ml-0.5 text-gray-500'>تاریخ انتشار</span>

                            <span className='text-gray-700'>{formatJalali(new Date(article.created_at))}</span>
                        </div>

                        <Link href='#comments'>
                            <div className='hover:text-primary-500 text-xs-plus flex items-center rounded-sm bg-gray-100 px-2.5 py-0.5 font-normal text-gray-600 transition'>
                                <span className='mt-0.5 ml-1'>{all_approved_comments_count} دیدگاه</span>
                                <ChevronLeft className='h-[7px] w-1' />
                            </div>
                        </Link>
                    </div>

                    <h1 className='lg:text-3xl-plus mb-2 text-xl font-semibold'>{article.title ?? ''}</h1>

                    <div dangerouslySetInnerHTML={{ __html: article.body }} className='blog-content'></div>
                </div>
            </div>
        );
    };

    const renderRelatedPosts = () => {
        return (
            <section className='pt-7 pb-[27px]'>
                <div className='mb-8 flex items-center'>
                    <BookIcon className='fill-secondary-50 text-secondary-500 ml-1.5' />

                    <h2 className='text-lg font-semibold text-gray-800 md:text-2xl'>اخبار مرتبط</h2>
                </div>

                <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {blogs.map((article, index) => (
                        <BlogCardOrganisms key={index} article={article} />
                    ))}
                </div>
            </section>
        );
    };

    return (
        <Layout>
            <Container>
                <ManualBreadcrumb
                    items={[
                        { label: 'خانه', href: ROUTES.Landing },
                        {
                            label: 'اخبار',
                            href: ROUTES.Blog
                        },
                        {
                            label: 'خبر اول',
                            isCurrent: true
                        }
                    ]}
                />
            </Container>
            <Container>
                <section className='flex flex-col gap-16'>
                    {renderPost()}
                    {renderRelatedPosts()}
                    <CommentSection articleId={article.id} comments={comments} />
                </section>
            </Container>
        </Layout>
    );
}

export default ClientPage;
