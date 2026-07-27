import { SingleProductItem } from '@/models/product.model';

// type SpecificationItem = {
//     title: string;
//     value: string;
// };

// type SpecificationGroup = {
//     [category: string]: SpecificationItem[];
// };

// type Specifications = SpecificationGroup[];
type ProductSpecificationsOrganismsProps = {
    specifications: SingleProductItem['specifications'];
};

const ProductSpecificationsOrganisms = ({ specifications }: ProductSpecificationsOrganismsProps) => {
    return (
        <div className='mt-4 rounded-md bg-white p-6' id='specifications'>
            <h3 className='mb-4 font-semibold'>مشخصات</h3>

            <div className='w-full space-y-10'>
                {specifications.map((item, idx) => {
                    return (
                        <div key={idx} className='flex flex-col gap-10 md:flex-row md:items-start lg:gap-20'>
                            <div
                                className={`flex gap-2 pb-4 ${
                                    idx !== 0 ? 'pt-4' : ''
                                } relative text-gray-700 before:absolute before:right-0 before:bottom-0 before:-z-0 before:block before:h-[1px] before:w-full before:bg-linear-to-l before:from-gray-200 before:to-white before:to-75% before:content-[""] md:before:z-10`}
                            >
                                <span className='text-sm font-medium text-gray-500 md:min-w-[220px] lg:min-w-[320px]'>
                                    {item.name}
                                </span>

                                <span className='text-sm-plus grow text-right font-semibold text-gray-700'>
                                    {item.value}
                                </span>
                            </div>
                        </div>
                    );
                })}
                {/* {Object.entries(specifications[0]).map(([category, items]) => (
                    <div key={category} className='flex flex-col gap-10 md:flex-row md:items-start lg:gap-20'>
                        <h3 className='mb-4 pb-2 text-sm font-semibold text-gray-800 md:basis-28'>{category}</h3>

                        <div className='grow'>
                            {items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`flex gap-2 pb-4 ${
                                        idx !== 0 ? 'pt-4' : ''
                                    } relative text-gray-700 before:absolute before:right-0 before:bottom-0 before:-z-0 before:block before:h-[1px] before:w-full before:bg-linear-to-l before:from-gray-200 before:to-white before:to-75% before:content-[""] md:before:z-10`}
                                >
                                    <span className='text-sm font-medium text-gray-500 md:min-w-[220px] lg:min-w-[320px]'>
                                        {item.title}
                                    </span>

                                    <span className='text-sm-plus grow text-right font-semibold text-gray-700'>
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default ProductSpecificationsOrganisms;

