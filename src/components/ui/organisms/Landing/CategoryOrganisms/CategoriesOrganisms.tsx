import Link from 'next/link';

import Categories from '@/config/types/categories.types';
import ROUTES from '@/constants/routes/routes.constant';
import OptimizedImage from '@/utils/imageLoader';

const CategoryOrganisms = ({ data }: { data: Categories[] }) => {
    return (
        <>
            {data.map((category) => (
                <div key={category.id} className='flex flex-col items-center'>
                    <Link href={`/product?category_id=${category.id}`}>
                        <OptimizedImage
                            className='block aspect-square w-full rounded-md object-cover'
                            width={213}
                            height={169}
                            loading='lazy'
                            src={category.url}
                            alt={category.name}
                        />
                    </Link>
                    <Link
                        href={`${ROUTES.Products}/${category.link}`}
                        className='mt-2 text-sm font-semibold sm:mt-4 sm:text-lg'
                    >
                        {category.name}
                    </Link>
                </div>
            ))}
        </>
    );
};

export default CategoryOrganisms;

