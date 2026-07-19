import BigStarIcon from '@/components/icons/phoneSales/BigStarIcon';
import SmallStarIcon from '@/components/icons/phoneSales/SmallStarIcon';
import Container from '../../organisms/Container/Container';
import InfoBox from '../../organisms/InfoBox/InfoBox';

import ElectricIcon from '@/components/icons/phoneSales/ElectricIcon';
import LawIcon from '@/components/icons/phoneSales/LawIcon';
import PaymentIcon from '@/components/icons/phoneSales/PaymentIcon';
import Benefit from '../../organisms/InfoBox/info-box.types';

const benefits: Benefit[] = [
    {
        title: 'فروش سریع و بدون دردسر',
        description:
            'فقط با چند کلیک اطلاعات گوشی‌ت رو وارد کن، قیمت پیشنهادی بگیر و گوشی رو بفروش — بدون نیاز به چانه‌زنی، قرار ملاقات یا معطلی.',
        Icon: ElectricIcon,
        iconClassName: 'text-secondary-500',
        className: 'border-secondary-100'
    },
    {
        title: 'قیمت‌گذاری منصفانه و شفاف',
        description:
            'استیو با تحلیل بازار و وضعیت گوشی شما، بهترین قیمت ممکن رو پیشنهاد می‌ده؛ بدون قیمت‌سازی یا هزینه‌های پنهان.',
        Icon: LawIcon,
        iconClassName: 'text-secondary-500',
        className: 'border-secondary-100'
    },
    {
        title: 'پرداخت فوری و امن',
        description:
            'بعد از تأیید نهایی و بررسی دستگاه، مبلغ فروش در سریع‌ترین زمان ممکن به حساب شما واریز میشه — بدون تاخیر.',
        Icon: PaymentIcon,
        iconClassName: 'text-secondary-500',
        className: 'border-secondary-100'
    }
];

const SalesBenefitTemplate = () => {
    return (
        <Container>
            <div className='relative'>
                <div className='absolute -top-10 -z-1 hidden gap-0 sm:flex lg:-left-20'>
                    <SmallStarIcon />
                    <BigStarIcon />
                </div>
            </div>

            <section className='relative pb-5 md:pb-[50px] lg:pb-[153px]'>
                <h2 className='text-subtitle1-bold mt-[49px] mb-5 text-center sm:mb-[39px] md:mt-[134px] md:mb-[59px] lg:mt-[164px] lg:mb-[79px]'>
                    مزایای فروش گوشی به استیو
                </h2>

                <div className='mx-auto grid max-w-[1226px] grid-cols-1 gap-4 lg:grid-cols-3'>
                    {benefits.map((info, index) => (
                        <InfoBox key={index} info={info} />
                    ))}
                </div>
            </section>
        </Container>
    );
};

export default SalesBenefitTemplate;
