'use client';

import ChevronLeft from '@/components/icons/ChevronLeft';
import MessageAlertSquareIcon from '@/components/icons/MessageAlertSquareIcon';
import StarIcon from '@/components/icons/StarIcon';
import ROUTES from '@/constants/routes/routes.constant';
import { useProductVariant } from '@/contexts/ProductVariantContext';
import { SingleProductItem } from '@/models/product.model';
import { truncateText } from '@/utils/string.util';
import Link from 'next/link';
import ManualBreadcrumb from '../../molecules/Breadcrumbs/ManualBreadcrumb';
import CopyLinkButton from '../../molecules/CopyLinkButton/CopyLinkButton';
import ColorSelector from '../ColorSelector/ColorSelector';

const ProductDetailOrganisms = ({ product }: { product: SingleProductItem }) => {
    const { selectedVariant, setSelectedVariant } = useProductVariant();

    const handleVariantChange = (variant: (typeof product.variants)[0]) => {
        setSelectedVariant(variant);
    };

    return (
        <div className='rounded-md bg-white px-[17px] pb-8 lg:col-span-9 xl:col-span-6'>
            <div className='flex flex-wrap items-center justify-between gap-2'>
                <ManualBreadcrumb
                    labelClassName='text-primary-600 text-sm font-medium'
                    activeLabelClassName='text-primary-600 text-sm font-medium'
                    iconClassName='text-primary-600 text-sm font-medium'
                    className='p-6! pr-0!'
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
            <h2 className='text-md font-semibold lg:text-xl'>{product.name}</h2>

            <p className='text-tiny mt-4 text-gray-500'>{product.en_title}</p>

            <div className='mt-6 mb-7 flex flex-wrap items-center'>
                <div className='ml-2.5 flex items-center text-sm font-normal'>
                    <span className='ml-0.5 font-semibold text-gray-800'>{product.rating}</span>
                    <StarIcon fill='#FFAE55' className='text-warning-400 mr-1.5 h-3 w-3' />
                </div>

                <div className='text-tiny ml-5 flex items-center text-gray-500'>امتیاز ۵۶ کاربر</div>

                <Link href='#comments'>
                    <div className='hover:text-primary-500 text-xs-plus flex items-center rounded-sm bg-gray-100 px-2.5 py-0.5 font-normal text-gray-600 transition'>
                        <span className='mt-0.5 ml-1'>99 دیدگاه</span>
                        <ChevronLeft className='h-[7px] w-1' />
                    </div>
                </Link>
            </div>

            {product.variants.length > 0 && (
                <div>
                    <h2 className='relative mb-5 overflow-hidden font-semibold text-gray-800 before:absolute before:top-1/2 before:right-[55px] before:-z-0 before:block before:h-[2px] before:w-full before:bg-linear-to-l before:from-gray-200 before:to-white before:content-[""] md:before:right-[60px] md:before:z-10'>
                        رنگ ها
                    </h2>
                    <ColorSelector
                        variants={product.variants}
                        selectedVariant={selectedVariant}
                        onVariantChange={handleVariantChange}
                    />
                </div>
            )}

            {product.specifications && product.specifications.length > 0 && (
                <div>
                    <h2 className='relative mb-5 overflow-hidden font-semibold text-gray-800 before:absolute before:top-1/2 before:right-[55px] before:-z-0 before:block before:h-[2px] before:w-full before:bg-linear-to-l before:from-gray-200 before:to-white before:content-[""] md:before:right-[60px] md:before:z-10'>
                        ویژگی ها
                    </h2>

                    <div className='grid grid-cols-1 gap-x-1.5 gap-y-2.5 md:grid-cols-2 lg:grid-cols-3'>
                        {product.specifications.slice(0, 5).map((item, index) => (
                            <div key={`${index}-feature`} className='flex flex-col rounded-md bg-gray-50 p-3'>
                                <span className='mb-[12px] text-sm font-medium text-gray-500'>{item.key}</span>
                                <span className='text-sm-plus font-semibold text-gray-800'>{item.value}</span>
                            </div>
                        ))}
                        <div className='flex flex-col justify-center gap-2 rounded-md bg-gray-50 p-3'>
                            <Link className='text-primary-700 font-medium' href='#specifications'>
                                نمایش همه ...
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <div className='text-tiny mt-6 flex items-start gap-2'>
                <MessageAlertSquareIcon className='mr-3 text-gray-500' />
                <span className='text-gray-600'>
                    امکان برگشت کالا در گروه موبایل با دلیل انصراف از خرید تنها در صورتی مورد قبول است که پلمب کالا باز
                    نشده باشد. تمام گوشی‌های استیو ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت
                    قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.
                </span>
            </div>
        </div>
    );
};

export default ProductDetailOrganisms;

