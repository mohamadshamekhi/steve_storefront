import Image from 'next/image';

import Brand from '@/config/types/brand.types';
import ROUTES from '@/constants/routes/routes.constant';
import ImageOne from '@public/images/phone-repair/1.png';
import ImageTwo from '@public/images/phone-repair/3.png';
import ManualBreadcrumb from '../ui/molecules/Breadcrumbs/ManualBreadcrumb';
import Container from '../ui/organisms/Container/Container';
import PhonRepairFormTemplate from '../ui/templates/PhoneRepairTemplate/PhonRepairFormTemplate';
import RepairBenefitTemplate from '../ui/templates/PhoneRepairTemplate/RepairBenefitTemplate';

const PhoneRepairPage = ({ brands }: { brands: Brand[] }) => {
    const authImages = [
        {
            src: ImageTwo,
            alt: 'image-two',
            className: 'absolute -right-10 top-40 lg:top-50  max-w-[321px] -z-1'
        },
        {
            src: ImageOne,
            alt: 'image-four',
            className: 'absolute -left-20 top-20 lg:top-50 transform rotate-90 max-w-[321px] -z-1'
        }
    ];

    return (
        <main className='!max-w-screen !overflow-x-hidden'>
            <Container>
                <ManualBreadcrumb
                    items={[
                        { label: 'خانه', href: ROUTES.Landing },
                        {
                            label: 'تعمیر با استیو',
                            href: ROUTES.PhoneRepair,
                            isCurrent: true
                        }
                    ]}
                />
            </Container>
            <div className='relative'>
                <PhonRepairFormTemplate brands={brands} />

                <RepairBenefitTemplate />

                {authImages.map(({ src, alt, className }) => (
                    <Image key={alt} src={src} alt={alt} loading='lazy' className={className} />
                ))}
            </div>
        </main>
    );
};

export default PhoneRepairPage;
