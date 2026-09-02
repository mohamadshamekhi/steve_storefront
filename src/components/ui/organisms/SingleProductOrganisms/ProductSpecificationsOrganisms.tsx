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
        <div
            className='rounded-2xl bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-6'
            id='specifications'
        >
            <h3 className='mb-4 text-base font-bold text-gray-800'>مشخصات</h3>

            <div className='w-full divide-y divide-gray-100'>
                {specifications.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            className='flex flex-col gap-1 py-3 text-gray-700 sm:flex-row sm:items-start sm:gap-4 lg:gap-20'
                        >
                            <span className='text-sm font-medium text-gray-500 sm:min-w-50 lg:min-w-80'>
                                {item.name}
                            </span>

                            <span className='text-sm font-semibold text-gray-800'>{item.value}</span>
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

