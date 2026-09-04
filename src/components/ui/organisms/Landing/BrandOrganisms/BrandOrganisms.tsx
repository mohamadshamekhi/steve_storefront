import { brandDirectory } from '@/config/data/brand-directory.data';
import Brand from '@/config/types/brand.type';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';

// a brand with a dedicated SEO landing page (see brand-directory.data.ts)
// links there; anything else falls back to the plain filtered listing so we
// never link out to a 404
const brandHref = (brand: Brand) =>
    brand.slug && brandDirectory.some((entry) => entry.slug === brand.slug)
        ? `/product/brand/${brand.slug}`
        : `/product?brand_id=${brand.id}`;

const BrandOrganisms = ({ brands }: { brands?: Brand[] }) => {
    return (
        <div className='grid grid-cols-3 gap-2 text-center *:aspect-square sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 lg:gap-[13px] xl:grid-cols-9'>
            {brands &&
                brands.map((brand, index) => (
                    <Link href={brandHref(brand)} key={index} className='flex flex-col items-center'>
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
