import Link from 'next/link';

import { Banner } from '@/models/common.model';
import OptimizedImage from '@/utils/imageLoader';

const BannerOrganisms = ({ banners }: { banners: Banner[] }) => {
    const middleBanners = banners
        .filter((banner) => banner.location === 'middle' && banner.is_active)
        .sort((a, b) => a.sort_order - b.sort_order);

    if (middleBanners.length === 0) {
        return null;
    }

    return (
        <section className='grid grid-cols-1 gap-[22px] md:grid-cols-3'>
            {middleBanners.map((banner) => (
                <Link href={banner.link} key={banner.id}>
                    <OptimizedImage
                        width={430}
                        height={233}
                        src={banner.image_url}
                        alt={banner.alt_text}
                        loading='lazy'
                        className='w-full rounded-md'
                    />
                </Link>
            ))}
        </section>
    );
};

export default BannerOrganisms;
