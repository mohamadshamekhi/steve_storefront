import BigStarIcon from '@/components/icons/phoneSales/BigStarIcon';
import SmallStarIcon from '@/components/icons/phoneSales/SmallStarIcon';
import Image from 'next/image';
import Container from '../../organisms/Container/Container';

import document from '@public/images/phone-sales/document.png';
import line from '@public/images/phone-sales/Line.png';
import money from '@public/images/phone-sales/money.png';
import phone from '@public/images/phone-sales/phone.png';
import v1 from '@public/images/phone-sales/vector-top-to-right.png';

const PhoneSalesStepsTemplate = () => {
    return (
        <Container>
            <section className='relative mx-auto w-full max-w-[1050px] pb-20 md:pb-[110px] lg:pb-[147px]'>
                <div className='absolute top-20 -z-1 flex gap-0 lg:-right-20'>
                    <BigStarIcon />
                    <SmallStarIcon />
                </div>
                <h2 className='text-h4-bold mt-10 mb-[114px] text-center lg:mt-16'>
                    سه سوته گوشیتو به
                    <span className='text-primary-400'> استیو </span>
                    بفروش
                </h2>

                <div className='relative flex items-center justify-center gap-2 sm:gap-0'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <Image src={money} alt='steve' width={70} height={93} />

                        <div className='md:text-md lg:text-subtitle2-bold text-center text-sm font-semibold md:text-nowrap lg:font-bold'>
                            تسویه حساب فوری
                        </div>
                    </div>

                    <div className='relative lg:-top-[10px]'>
                        <Image src={line} alt='steve' width={328} height={10} className='hidden sm:block' />
                    </div>

                    <div className='flex flex-col items-center justify-center text-center'>
                        <Image src={phone} alt='steve' width={70} height={93} />
                        <div className='md:text-md lg:text-subtitle2-bold text-center text-sm font-semibold md:text-nowrap lg:font-bold'>
                            تحویل گوشی به استیو
                        </div>
                    </div>

                    <div className='relative -top-[10px]'>
                        <Image src={line} alt='steve' width={328} height={10} className='hidden sm:block' />
                    </div>

                    <div className='flex flex-col items-center justify-center text-center'>
                        <Image src={document} alt='steve' width={70} height={93} />

                        <div className='md:text-md lg:text-subtitle2-bold text-center text-sm font-semibold md:text-nowrap lg:font-bold'>
                            ثبت درخواست فروش
                        </div>
                    </div>
                </div>
                <Image
                    src={v1}
                    alt='asda'
                    width={191}
                    height={246}
                    className='absolute top-60 left-30 -z-1 hidden lg:z-20 lg:block'
                />
            </section>
        </Container>
    );
};

export default PhoneSalesStepsTemplate;
