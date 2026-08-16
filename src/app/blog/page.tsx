import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import type Blog from '@/config/types/blog.types';
import { pageSeoGenerator, PageSeoModel } from '@/seo';
import { Metadata } from 'next/types';
import ClientPage from './client-page';

interface Props {
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata(): Promise<Metadata> {
    const data: PageSeoModel = {
        title: 'وبلاگ',
        description: 'آخرین مقالات و اخبار تکنولوژی را در وبلاگ استیو موبایل بخوانید',
        tags: 'وبلاگ, مقالات, اخبار تکنولوژی, استیو موبایل',
        canonical: 'https://stevemobile.com/blog',
        og_title: 'وبلاگ استیو موبایل',
        og_url: 'https://stevemobile.com/blog',
        og_description: 'آخرین مقالات و اخبار تکنولوژی را در وبلاگ استیو موبایل بخوانید',
        og_sitename: 'استیو موبایل',
        noindex: false,
        nofollow: false
    };
    return pageSeoGenerator(data, 'وبلاگ');
}

const fetchBlogPosts = async (
    searchParams?: Record<string, string | string[] | undefined>
): Promise<{
    data: {
        articles: Blog[];
    };
}> => {
    const res = await fetcher(ApiKeys.GET_BLOG_POSTS, 'web', 'GET', {
        params: {
            ...searchParams
        }
    });
    return res;
};

const Blog = async ({ searchParams }: Props) => {
    const resolvedParams = searchParams ? await searchParams : {};
    const res = await fetchBlogPosts(resolvedParams);
    const articles = res?.data?.articles;
    return <ClientPage data={articles?.length ? articles : []} />;
};

export default Blog;
