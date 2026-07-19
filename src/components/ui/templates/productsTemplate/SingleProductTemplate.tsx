'use client';

import 'swiper/css/thumbs';

import { ProductVariantProvider } from '@/contexts/ProductVariantContext';
import { Comment } from '@/models/common.model';
import { SingleProductItem } from '@/models/product.model';
import { Rating, Star } from '@smastrom/react-rating';
import Link from 'next/link';
import { ScrollTabs } from '../../molecules/ScrollTabs/ScrollsTabs';
import PriceBox from '../../organisms/SingleProductOrganisms/PriceBox';
import ProductDetailOrganisms from '../../organisms/SingleProductOrganisms/ProductDetailOrganisms';
import ProductGalleryOrganisms from '../../organisms/SingleProductOrganisms/ProductGalleryOrganisms';
import ProductIntroductionOrganisms from '../../organisms/SingleProductOrganisms/ProductIntroductionOrganisms';
import ProductRelatedOrganisms, {
    RelatedProduct
} from '../../organisms/SingleProductOrganisms/ProductRelatedOrganisms';
import ProductSpecificationsOrganisms from '../../organisms/SingleProductOrganisms/ProductSpecificationsOrganisms';
import SingleProductFormOrganisms from '../../organisms/SingleProductOrganisms/SingleProductFormOrganisms';
import SingleProductListComment from './SingleProductListComment';

const SingleProductTemplate = ({
    product,
    comments,
    relatedProducts
}: {
    slug: string;
    product: SingleProductItem;
    comments: Comment[];
    relatedProducts: RelatedProduct[];
}) => {
    console.log(product, 'single product');
    const filters = [
        { targetId: 'introduction', label: 'معرفی' },
        { targetId: 'specifications', label: 'مشخصات' },
        { targetId: 'views', label: 'دیدگاه‌ها' }
    ];

    return (
        <ProductVariantProvider initialVariant={product.variants[0]} discount={product.discount}>
            <div>
                <div className='my-5 grid grid-cols-1 gap-3 rounded-md lg:grid-cols-8 xl:grid-cols-12'>
                    <ProductGalleryOrganisms gallery={product?.gallery} productName={product?.name} />

                    <ProductDetailOrganisms product={product} />

                    <div className='lg:col-span-3 xl:col-span-3'>
                        <div className='rounded-md bg-white p-6 pb-2'>
                            <PriceBox productId={product._id} />

                            <ul className='mt-8'>
                                <li className="before:bg-primary-500 border-primary-300 relative border-0 border-r-2 px-5 pb-8 text-sm before:absolute before:-top-2 before:-right-[7px] before:mt-1 before:block before:h-3 before:w-3 before:rounded-full before:content-['']">
                                    <span className='relative -top-2'>گارانتی ۱۸ ماهه شرکتی</span>
                                </li>
                                <li className="before:bg-primary-400 border-primary-300 relative border-0 border-r-2 px-5 pb-8 text-sm before:absolute before:-top-2 before:-right-[7px] before:mt-1 before:block before:h-3 before:w-3 before:rounded-full before:content-['']">
                                    <span className='relative -top-2'> هفت روز ضمانت بازگشت کالا</span>
                                </li>
                                <li className="before:bg-primary-300 border-primary-300 relative border-0 border-r-2 px-5 pb-8 text-sm before:absolute before:-top-2 before:-right-[7px] before:mt-1 before:block before:h-3 before:w-3 before:rounded-full before:content-['']">
                                    <span className='relative -top-2'> ضمانت اصل بودن کالا</span>
                                </li>
                                <li className="before:bg-primary-200 relative px-5 pb-8 text-sm before:absolute before:-top-2 before:-right-[5px] before:mt-1 before:block before:h-3 before:w-3 before:rounded-full before:content-['']">
                                    <span className='relative -top-2'>موجود در انبار استیو ( ارسال فوری )</span>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-6 rounded-md bg-white p-6'>
                            <div className='mb-6'>
                                <div className='mb-3 flex flex-wrap items-center justify-between gap-2'>
                                    <span className='text-sm font-semibold'>امتیاز و دیدگاه کاربران </span>
                                    <Rating
                                        value={product.rating}
                                        readOnly
                                        halfFillMode='svg'
                                        itemStyles={{
                                            itemShapes: Star,
                                            activeFillColor: '#FFAE55',
                                            inactiveFillColor: '#FFE2BD'
                                        }}
                                        style={{ width: '85px', direction: 'ltr' }}
                                    />
                                </div>
                                <div className='flex flex-wrap items-center justify-between gap-2'>
                                    <span className='text-tiny font-normal'>
                                        شما هم درباره این کالا دیدگاه ثبت کنید
                                    </span>

                                    <span className='text-tiny text-gray-500'>
                                        امتیاز 1256 کاربر
                                        <span className='mr-2 font-semibold text-gray-800'>{product.rating}</span>
                                    </span>
                                </div>
                            </div>
                            <Link
                                href='#comments'
                                className='bg-primary-100 hover:bg-primary-700 text-primary-500 hover:text-primary-100 block w-full rounded-md px-6 py-2 text-center'
                            >
                                ثبت دیدگاه
                            </Link>
                        </div>
                    </div>
                </div>

                <ProductRelatedOrganisms relatedProducts={relatedProducts} />

                <div className='grid grid-cols-1 gap-3 lg:grid-cols-12'>
                    <div className='col-span-12 sm:col-span-9'>
                        <div className='sticky top-0 z-30 mb-4 w-full! space-x-7 rounded-md bg-white px-[15px] py-3'>
                            <ScrollTabs items={filters} scrollOffset={80} className='z-10' />
                        </div>

                        <ProductIntroductionOrganisms product={product} />

                        <ProductSpecificationsOrganisms specifications={product.specifications} />

                        <div className='mt-[27px] mb-[73px] grid grid-cols-12 items-start gap-4' id='views'>
                            <SingleProductFormOrganisms productId={product?._id} />
                            <SingleProductListComment comments={comments} />
                        </div>
                    </div>
                    <div className='col-span-12 mb-3 lg:col-span-3'>
                        <div className='sticky top-3 w-full rounded-md bg-white p-6'>
                            <PriceBox productId={product._id} />

                            <ul className='mt-8'>
                                <li className="before:bg-primary-500 border-primary-300 relative border-0 border-r-2 px-5 pb-8 text-sm before:absolute before:-top-2 before:-right-[7px] before:mt-1 before:block before:h-3 before:w-3 before:rounded-full before:content-['']">
                                    <span className='relative -top-2'>گارانتی ۱۸ ماهه شرکتی</span>
                                </li>
                                <li className="before:bg-primary-400 border-primary-300 relative border-0 border-r-2 px-5 pb-8 text-sm before:absolute before:-top-2 before:-right-[7px] before:mt-1 before:block before:h-3 before:w-3 before:rounded-full before:content-['']">
                                    <span className='relative -top-2'> هفت روز ضمانت بازگشت کالا</span>
                                </li>
                                <li className="before:bg-primary-300 border-primary-300 relative border-0 border-r-2 px-5 pb-8 text-sm before:absolute before:-top-2 before:-right-[7px] before:mt-1 before:block before:h-3 before:w-3 before:rounded-full before:content-['']">
                                    <span className='relative -top-2'> ضمانت اصل بودن کالا</span>
                                </li>
                                <li className="before:bg-primary-200 relative px-5 pb-8 text-sm before:absolute before:-top-2 before:-right-[5px] before:mt-1 before:block before:h-3 before:w-3 before:rounded-full before:content-['']">
                                    <span className='relative -top-2'>موجود در انبار استیو ( ارسال فوری )</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ProductVariantProvider>
    );
};

export default SingleProductTemplate;

