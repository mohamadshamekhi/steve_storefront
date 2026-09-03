'use client';

import Image from 'next/image';
import PhonSalesFormTemplate from '../ui/templates/PhoneSalesTemplate/PhonSalesFormTemplate';
import PhoneSalesStepsTemplate from '../ui/templates/PhoneSalesTemplate/PhoneSalesStepsTemplate';

import Brand from '@/config/types/brand.types';
import ROUTES from '@/constants/routes/routes.constant';
import ImageOne from '@public/images/phone-sales/1.png';
import ImageTwo from '@public/images/phone-sales/2.png';
import ManualBreadcrumb from '../ui/molecules/Breadcrumbs/ManualBreadcrumb';
import Container from '../ui/organisms/Container/Container';
import SalesBenefitTemplate from '../ui/templates/PhoneSalesTemplate/SalesBenefitTemplate';

const PhoneSalesPage = ({ brands }: { brands: Brand[] }) => {
    const authImages = [
        {
            src: ImageTwo,
            alt: 'image-two',
            className: 'absolute -right-10 top-40 lg:top-110 transform -rotate-45 max-w-[321px] -z-1'
        },
        {
            src: ImageOne,
            alt: 'image-four',
            className: 'absolute -left-20 top-30 lg:top-80 transform rotate-45 max-w-[321px] -z-1'
        }
    ];

    return (
        <main className='w-full overflow-x-hidden'>
            <Container>
                <h1 className='sr-only'>فروش گوشی موبایل دست دوم به استیو موبایل</h1>
                <ManualBreadcrumb
                    items={[
                        { label: 'خانه', href: ROUTES.Landing },
                        {
                            label: 'فروش به استیو',
                            href: ROUTES.PhoneSales,
                            isCurrent: true
                        }
                    ]}
                />
            </Container>

            <div className='relative'>
                <PhoneSalesStepsTemplate />

                <PhonSalesFormTemplate brands={brands} />

                <SalesBenefitTemplate />

                {authImages.map(({ src, alt, className }) => (
                    <Image key={alt} src={src} alt={alt} className={`blur-sm md:blur-none ${className}`} />
                ))}
            </div>
        </main>
    );
};

export default PhoneSalesPage;
