import { Banner } from '@/models/common.model';
import OptimizedImage from '@/utils/imageLoader';
import Link from 'next/link';

const RepairBannerOrganisms = ({ banners }: { banners: Banner[] }) => {
    // Filter banners by location 'bottom' and sort by sort_order
    const bottomBanners = banners
        .filter((banner) => banner.location === 'bottom' && banner.is_active)
        .sort((a, b) => a.sort_order - b.sort_order);

    // Return null if no banners available
    if (bottomBanners.length === 0) {
        return null;
    }

    return (
        <section className='grid grid-cols-1 gap-[29px] md:grid-cols-2'>
            {bottomBanners.map((banner) => (
                <Link href={banner.link} key={banner.id}>
                    <OptimizedImage
                        width={653}
                        height={289}
                        src={banner.image_url}
                        alt={banner.alt_text}
                        className='aspect-[653/289] w-full rounded-lg'
                    />
                </Link>
            ))}
        </section>
    );
};

export default RepairBannerOrganisms;
