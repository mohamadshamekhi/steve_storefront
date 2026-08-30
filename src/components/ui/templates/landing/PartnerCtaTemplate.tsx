import HandshakeIcon from '@/components/icons/Menu/HandshakeIcon';
import ROUTES from '@/constants/routes/routes.constant';
import Link from 'next/link';
import Button from '../../atoms/Button/Button';

const PartnerCtaTemplate = () => {
    return (
        <section className='from-primary-50 to-primary-100 flex flex-col items-start gap-6 rounded-xl bg-gradient-to-l p-6 md:flex-row md:items-center md:justify-between md:p-10'>
            <div className='flex items-start gap-4'>
                <span className='bg-primary-600 hidden shrink-0 rounded-lg p-3 text-white sm:inline-flex'>
                    <HandshakeIcon className='h-6 w-6' />
                </span>
                <div>
                    <h2 className='text-lg font-bold text-gray-800 md:text-2xl'>
                        فروشگاه دارید؟ با استیو موبایل همکار شوید
                    </h2>
                    <p className='mt-2 max-w-xl text-sm leading-7 text-gray-600 md:text-base'>
                        کل کاتالوگ موبایل و کالای دیجیتال را با قیمت ویژهٔ همکاران و درصد تخفیف اختصاصی تهیه کنید؛ بدون
                        هزینهٔ عضویت.
                    </p>
                </div>
            </div>

            <Link href={ROUTES.PartnerSales} className='shrink-0'>
                <Button size='lg'>اطلاعات بیشتر و ثبت درخواست</Button>
            </Link>
        </section>
    );
};

export default PartnerCtaTemplate;
