import ClockIcon from '@/components/icons/RepairIcon/ClockIcon';
import GuardIcon from '@/components/icons/RepairIcon/GuardIcon';
import WalletIcon from '@/components/icons/RepairIcon/WalletIcon';
import Image from 'next/image';
import Container from '../../organisms/Container/Container';

import starImg from '@public/images/phone-repair/star.png';
import InfoBox from '../../organisms/InfoBox/InfoBox';
const RepairBenefitTemplate = () => {
    const phoneRepairBenefits = [
        {
            Icon: ClockIcon,
            title: 'تعمیر سریع و تحویل به موقع',
            description:
                'تیم متخصص استیو گوشی شما را در کوتاه‌ترین زمان ممکن تعمیر و تحویل می‌دهد تا دوباره به سرعت به کار بیفتید.',
            iconClassName: 'text-secondary-500',
            className: 'border-secondary-100'
        },
        {
            Icon: GuardIcon,
            title: 'قطعات اصل و با کیفیت',
            description: 'فقط از قطعات اصلی و استاندارد استفاده می‌کنیم تا کیفیت و دوام گوشی حفظ شود.',
            iconClassName: 'text-secondary-500',
            className: 'border-secondary-100'
        },
        {
            Icon: WalletIcon,
            title: 'هزینه منصفانه و شفاف',
            description:
                'قیمت تعمیرات به صورت شفاف اعلام می‌شود و بدون هزینه‌های پنهان، بهترین خدمات را با قیمت مناسب دریافت می‌کنید.',
            iconClassName: 'text-secondary-500',
            className: 'border-secondary-100'
        }
    ];

    return (
        <Container>
            <div className='relative'>
                <div className='absolute -top-96 -z-1 hidden gap-0 sm:flex lg:left-12'>
                    <Image src={starImg} alt='star' width={29} height={28} className='transform object-contain' />
                    <Image src={starImg} alt='star' width={63} height={60} />
                </div>
            </div>

            <section className='relative pb-5 md:pb-[135px] lg:pb-[153px]'>
                <h2 className='text-subtitle1-bold mt-[49px] mb-3 text-center sm:mb-[39px] md:mt-[134px] md:mb-[59px] lg:mt-[164px] lg:mb-[79px]'>
                    مزایای تعمیر گوشی در استیو
                </h2>

                <div className='mx-auto grid max-w-[1226px] grid-cols-1 gap-4 lg:grid-cols-3'>
                    {phoneRepairBenefits.map((data, index) => (
                        <InfoBox info={data} key={index} />
                    ))}
                </div>
            </section>
        </Container>
    );
};

export default RepairBenefitTemplate;
