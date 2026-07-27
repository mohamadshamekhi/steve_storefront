import Brand from '@/config/types/brand.type';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';

const BrandOrganisms = ({ brands }: { brands?: Brand[] }) => {
    return (
        <div className='grid grid-cols-3 gap-2 text-center *:aspect-square sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 lg:gap-[13px] xl:grid-cols-9'>
            {brands &&
                brands.map((brand, index) => (
                    <Link href={`/product?brand_id=${brand.id}`} key={index} className='flex flex-col items-center'>
                        <OptimizedImage
                            className='aspect-square w-full rounded-[3px]'
                            width={137}
                            height={137}
                            src={brand.url}
                            loading='lazy'
                            alt={brand.name}
                        />
                    </Link>
                ))}
        </div>
    );
};

export default BrandOrganisms;
