import CalenderIcon from '@/components/icons/blog/CalenderIcon';
import RectangleIcon from '@/components/icons/blog/RectangleIcon';
import Blog from '@/config/types/blog.types';
import ROUTES from '@/constants/routes/routes.constant';
import { formatJalali } from '@/utils/date.util';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';

const BlogCardOrganisms = ({ article }: { article: Blog }) => {
    return (
        <div className='group'>
            <div className="relative group-hover:before:absolute group-hover:before:z-20 group-hover:before:block group-hover:before:h-full group-hover:before:w-full group-hover:before:rounded-sm group-hover:before:backdrop-blur-sm group-hover:before:content-['']">
                <div className='absolute left-0 flex items-center justify-center'>
                    <RectangleIcon className='h-[30px] w-[165px]' />

                    <div className='absolute flex items-center'>
                        <CalenderIcon className='ml-1.5 h-[13px] w-[13px] fill-gray-50 text-gray-400' />
                        <span className='text-xs-plus font-normal text-gray-700'>
                            {formatJalali(new Date(article.created_at))}
                        </span>
                    </div>
                </div>

                <OptimizedImage
                    className='aspect-[315/185] w-full rounded-sm object-cover'
                    width={315}
                    height={185}
                    src={article.media_url}
                    alt={article.title}
                    loading='lazy'
                />

                <div className='absolute inset-0 z-20 flex items-center justify-center rounded-sm bg-white/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100'>
                    <Link
                        href={`${ROUTES.Blog}/${article.slug}`}
                        className='bg-primary-50 text-primary-600 z-50 rounded px-4 py-2 text-sm font-medium'
                    >
                        مشاهده بیشتر
                    </Link>
                </div>
            </div>

            <Link href={`${ROUTES.Blog}/${article.slug}`} className='text-caption2-bold block py-3'>
                {article.title}
            </Link>

            {typeof article.view_count === 'number' && (
                <span className='text-xs-plus font-normal text-gray-400'>
                    {article.view_count.toLocaleString('fa-IR')} بازدید
                </span>
            )}
        </div>
    );
};

export default BlogCardOrganisms;
