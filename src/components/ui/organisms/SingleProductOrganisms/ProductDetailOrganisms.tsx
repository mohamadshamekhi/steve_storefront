'use client';

import ChevronLeft from '@/components/icons/ChevronLeft';
import MessageAlertSquareIcon from '@/components/icons/MessageAlertSquareIcon';
import StarIcon from '@/components/icons/StarIcon';
import ROUTES from '@/constants/routes/routes.constant';
import { useProductVariant } from '@/contexts/ProductVariantContext';
import { SingleProductItem } from '@/models/product.model';
import { truncateText } from '@/utils/string.util';
import Link from 'next/link';
import { ReactNode } from 'react';
import ManualBreadcrumb from '../../molecules/Breadcrumbs/ManualBreadcrumb';
import CopyLinkButton from '../../molecules/CopyLinkButton/CopyLinkButton';
import ColorSelector from '../ColorSelector/ColorSelector';

const SectionHeading = ({ children }: { children: ReactNode }) => (
    <div className='mb-4 flex items-center gap-3'>
        <h2 className='shrink-0 text-sm font-bold text-gray-800'>{children}</h2>
        <span className='h-px flex-1 bg-linear-to-l from-gray-200 to-transparent' />
    </div>
);

const ProductDetailOrganisms = ({
    product,
    allAprovedCommentsCount
}: {
    product: SingleProductItem;
    allAprovedCommentsCount: number;
}) => {
    const { selectedVariant, setSelectedVariant } = useProductVariant();

    const handleVariantChange = (variant: (typeof product.variants)[0]) => {
        setSelectedVariant(variant);
    };

    return (
        <div className='rounded-2xl bg-white px-4 pb-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:px-5 lg:col-span-4'>
            <div className='flex flex-wrap items-center justify-between gap-2'>
                <ManualBreadcrumb
                    labelClassName='text-primary-600 text-sm font-medium'
                    activeLabelClassName='text-primary-600 text-sm font-medium'
                    iconClassName='text-primary-600 text-sm font-medium'
                    className='py-4! pr-0!'
                    items={[
                        { label: 'خانه', href: ROUTES.Landing },
                        {
                            label: product.category.name,
                            href: ROUTES.Products
                        },
                        {
                            label: truncateText(product.name, 40),
                            isCurrent: true
                        }
                    ]}
                />
                <CopyLinkButton />
            </div>
            <h1 className='text-lg leading-7 font-bold text-gray-900 lg:text-xl lg:leading-8'>{product.name}</h1>

            {product.en_title && <p className='text-tiny mt-2 text-gray-500'>{product.en_title}</p>}

            <div className='mt-4 mb-6 flex flex-wrap items-center gap-2'>
                {product.rating > 0 && (
                    <div className='flex items-center gap-1 text-sm'>
                        <StarIcon fill='#FFAE55' className='text-warning-400 h-4 w-4' />
                        <span className='font-semibold text-gray-800'>{product.rating}</span>
                    </div>
                )}

                <Link
                    href='#comments'
                    className='hover:text-primary-600 text-xs-plus flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 font-medium text-gray-600 transition-colors'
                >
                    <span>{allAprovedCommentsCount} دیدگاه</span>
                    <ChevronLeft className='h-2 w-2' />
                </Link>
            </div>

            {product.variants.length > 0 && (
                <div className='mb-6'>
                    <SectionHeading>رنگ ها</SectionHeading>
                    <ColorSelector
                        variants={product.variants}
                        selectedVariant={selectedVariant}
                        onVariantChange={handleVariantChange}
                    />
                </div>
            )}

            {product.specifications && product.specifications.length > 0 && (
                <div className='mb-6'>
                    <SectionHeading>ویژگی ها</SectionHeading>

                    <div className='grid grid-cols-2 gap-2'>
                        {product.specifications.slice(0, 5).map((item, index) => (
                            <div key={`${index}-feature`} className='flex flex-col rounded-lg bg-gray-50 p-3'>
                                <span className='mb-1.5 text-xs font-medium text-gray-500'>
                                    {item.name || item.key}
                                </span>
                                <span className='text-sm font-semibold text-gray-800'>{item.value}</span>
                            </div>
                        ))}
                        <Link
                            className='text-primary-700 hover:bg-primary-50 border-primary-100 flex items-center justify-center rounded-lg border border-dashed p-3 text-sm font-medium transition-colors'
                            href='#specifications'
                        >
                            نمایش همه مشخصات
                        </Link>
                    </div>
                </div>
            )}
            <div className='flex items-start gap-2 rounded-lg bg-gray-50 p-3'>
                <MessageAlertSquareIcon className='mt-0.5 shrink-0 text-gray-400' />
                <span className='text-tiny leading-5 text-gray-500'>
                    امکان برگشت کالا در گروه موبایل با دلیل انصراف از خرید تنها در صورتی مورد قبول است که پلمب کالا باز
                    نشده باشد. تمام گوشی‌های استیو ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت
                    قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.
                </span>
            </div>
        </div>
    );
};

export default ProductDetailOrganisms;

