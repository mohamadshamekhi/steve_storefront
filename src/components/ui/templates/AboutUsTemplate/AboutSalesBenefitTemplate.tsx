import starImg from '@public/images/phone-repair/star.png';
import v1 from '@public/images/phone-sales/vector-top-to-right.png';
import Image from 'next/image';
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
        iconClassName: 'text-primary-500',
        className: 'border-gray-100',
        iconProps: {
            fill: '#ECEBFF'
        }
    },
    {
        title: 'قیمت‌گذاری منصفانه و شفاف',
        description:
            'استیو با تحلیل بازار و وضعیت گوشی شما، بهترین قیمت ممکن رو پیشنهاد می‌ده؛ بدون قیمت‌سازی یا هزینه‌های پنهان.',
        Icon: LawIcon,
        iconClassName: 'text-primary-500',
        className: 'border-gray-100',
        iconProps: {
            fill: '#ECEBFF'
        }
    },
    {
        title: 'پرداخت فوری و امن',
        description:
            'بعد از تأیید نهایی و بررسی دستگاه، مبلغ فروش در سریع‌ترین زمان ممکن به حساب شما واریز میشه — بدون تاخیر.',
        Icon: PaymentIcon,
        iconClassName: 'text-primary-500',
        className: 'border-gray-100',
        iconProps: {
            fill: '#ECEBFF'
        }
    }
];

const AboutSalesBenefitTemplate = () => {
    return (
        <div className='relative'>
            <Image
                src={starImg}
                alt='star'
                width={63}
                height={60}
                loading='lazy'
                className='absolute mr-6 hidden md:inline-block'
            />
            <Image
                src={starImg}
                alt='star'
                width={23}
                height={23}
                loading='lazy'
                className='absolute hidden md:inline-block'
            />

            <Image
                src={v1}
                alt='steve'
                width={160}
                height={200}
                loading='lazy'
                className='absolute -top-36 left-0 hidden max-w-[130px] md:block 2xl:-top-4 2xl:-left-[100px]'
            />
            <Container>
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

            <div className='relative'>
                <Image
                    src={starImg}
                    alt='star'
                    width={63}
                    height={60}
                    loading='lazy'
                    className='absolute left-0 mr-6 hidden sm:inline-block'
                />
                <Image
                    src={starImg}
                    alt='star'
                    width={23}
                    height={23}
                    loading='lazy'
                    className='absolute top-4 left-16 hidden sm:inline-block'
                />
            </div>
        </div>
    );
};

export default AboutSalesBenefitTemplate;
