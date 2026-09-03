import v1 from '@public/images/phone-sales/vector-top-to-left.png';
import Image from 'next/image';
import Container from '../../organisms/Container/Container';

import ClockIcon from '@/components/icons/RepairIcon/ClockIcon';
import GuardIcon from '@/components/icons/RepairIcon/GuardIcon';
import WalletIcon from '@/components/icons/RepairIcon/WalletIcon';
import starImg from '@public/images/phone-repair/star.png';
import InfoBox from '../../organisms/InfoBox/InfoBox';

const AboutRepairTemplate = () => {
    const phoneRepairBenefits = [
        {
            Icon: ClockIcon,
            title: 'تعمیر سریع و تحویل به موقع',
            description:
                'تیم متخصص استیو گوشی شما را در کوتاه‌ترین زمان ممکن تعمیر و تحویل می‌دهد تا دوباره به سرعت به کار بیفتید.',
            iconClassName: 'text-primary-500',
            className: 'border-gray-100',
            iconProps: {
                fill: '#ECEBFF'
            }
        },
        {
            Icon: GuardIcon,
            title: 'قطعات اصل و با کیفیت',
            description: 'فقط از قطعات اصلی و استاندارد استفاده می‌کنیم تا کیفیت و دوام گوشی حفظ شود.',
            iconClassName: 'text-primary-500',
            className: 'border-gray-100',
            iconProps: {
                fill: '#ECEBFF'
            }
        },
        {
            Icon: WalletIcon,
            title: 'هزینه منصفانه و شفاف',
            description:
                'قیمت تعمیرات به صورت شفاف اعلام می‌شود و بدون هزینه‌های پنهان، بهترین خدمات را با قیمت مناسب دریافت می‌کنید.',
            iconClassName: 'text-primary-500',
            className: 'border-gray-100',
            iconProps: {
                fill: '#ECEBFF'
            }
        }
    ];

    return (
        <div className='relative'>
            <Image
                src={starImg}
                alt='star'
                width={63}
                height={60}
                className='absolute -top-4 right-5 hidden transform object-contain md:block 2xl:-right-10'
            />
            <Image
                src={v1}
                alt='steve'
                width={160}
                height={200}
                loading='lazy'
                className='absolute -top-32 right-0 hidden max-w-[130px] md:block 2xl:-top-4 2xl:-right-[92px]'
            />

            <Container>
                <section className='relative pb-12 md:pb-16 lg:pb-20'>
                    <h2 className='text-subtitle1-bold mt-12 mb-6 text-center md:mt-16 md:mb-10'>
                        مزایای تعمیر گوشی در استیو
                    </h2>

                    <div className='mx-auto grid max-w-[1226px] grid-cols-1 gap-4 lg:grid-cols-3'>
                        {phoneRepairBenefits.map((data, index) => (
                            <InfoBox info={data} key={index} />
                        ))}
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default AboutRepairTemplate;
