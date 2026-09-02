import Image from 'next/image';
import defaultImage from '../../../../../public/images/_general/placeholder/empty-state.png';
import { EmptyStateProps } from './empty-state.types';
import cn from '@/config/utilities/cn';

const EmptyState = ({
    title = 'هنوز محتوایی ثبت نشده',
    subtitle = 'برای شروع، مورد جدیدی اضافه کنید یا اطلاعات بیشتری وارد نمایید.',
    img = defaultImage,
    className = '',
    imgClass = '',
    titleClass = '',
    subtitleClass = '',
    loading = false
}: EmptyStateProps) => {
    if (loading) {
        return (
            <div className={cn('flex animate-pulse flex-col items-center gap-4 py-6', className)}>
                <div className='h-30 w-40 rounded-lg bg-gray-200' />
                <div className='h-4 w-40 rounded bg-gray-200' />
                <div className='h-3 w-56 rounded bg-gray-200' />
            </div>
        );
    }
    return (
        <div className={cn('space-y-4 py-6 text-center', className)}>
            <Image
                loading='lazy'
                className={cn('mx-auto', imgClass)}
                src={img}
                width={200}
                height={150}
                alt='تصویر حالت خالی'
            />
            {title && <h3 className={cn('text-lg font-semibold text-gray-500', titleClass)}>{title}</h3>}
            {subtitle && <p className={cn('text-sm text-gray-400', subtitleClass)}>{subtitle}</p>}
        </div>
    );
};

export default EmptyState;
