import ROUTES from '@/constants/routes/routes.constant';
import Link from 'next/link';

import OptimizedImage from '@/utils/imageLoader';
import MobileImage1 from '@public/images/landing/offer-products/1.png';
import MobileImag10 from '@public/images/landing/offer-products/10.png';
import MobileImage11 from '@public/images/landing/offer-products/11.png';
import MobileImage12 from '@public/images/landing/offer-products/12.png';
import MobileImage2 from '@public/images/landing/offer-products/2.png';
import MobileImage3 from '@public/images/landing/offer-products/3.png';
import MobileImage4 from '@public/images/landing/offer-products/4.png';
import MobileImage5 from '@public/images/landing/offer-products/5.png';
import MobileImage6 from '@public/images/landing/offer-products/6.png';
import MobileImage7 from '@public/images/landing/offer-products/7.png';
import MobileImage8 from '@public/images/landing/offer-products/8.png';
import MobileImage9 from '@public/images/landing/offer-products/9.png';

const images = [
    MobileImage1,
    MobileImage2,
    MobileImage3,
    MobileImage4,
    MobileImage5,
    MobileImage6,
    MobileImage7,
    MobileImage8,
    MobileImage9,
    MobileImag10,
    MobileImage11,
    MobileImage12
];

const items = images.map((img, i) => ({
    id: i + 1,
    href: ROUTES.Products,
    src: img,
    label: 'گوشی ساده و ارزان'
}));

const OfferProductOrganisms = () => {
    return (
        <section className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6'>
            {items.map((item) => (
                <Link href={item.href} key={item.id} className='overflow-hidden rounded-[3px] bg-white'>
                    <OptimizedImage
                        src={item.src as unknown as string}
                        className='block aspect-[209/92] h-full w-full object-cover'
                        alt={item.label}
                    />
                </Link>
            ))}
        </section>
    );
};

export default OfferProductOrganisms;
