import Container from '../../organisms/Container/Container';

const steps = [
    {
        title: 'ثبت درخواست همکاری',
        description: 'فرم کوتاه پایین همین صفحه را با نام کسب‌وکار، کد ملی، زمینهٔ فعالیت و شهر تکمیل کنید.'
    },
    {
        title: 'بررسی و تایید',
        description: 'کارشناسان استیو درخواست شما را بررسی می‌کنند و نتیجه در پنل کاربری‌تان ثبت می‌شود.'
    },
    {
        title: 'فعال‌سازی تخفیف اختصاصی',
        description: 'پس از تایید، درصد تخفیف همکاری برای حساب شما فعال می‌شود.'
    },
    {
        title: 'خرید از کاتالوگ همکار',
        description: 'وارد کاتالوگ همکار شوید و محصولات را با قیمت ویژهٔ همکاران سفارش دهید.'
    }
];

const PartnerStepsTemplate = () => {
    return (
        <Container>
            <section className='bg-primary-50/60 rounded-3xl px-6 py-12 md:px-10 md:py-14'>
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='text-2xl font-bold text-gray-800 md:text-3xl'>در چهار قدم همکار شوید</h2>
                    <p className='mt-3 text-sm leading-8 text-gray-600 md:text-base'>
                        از ثبت درخواست تا اولین خرید با قیمت همکاری، بدون کاغذبازی.
                    </p>
                </div>

                <ol className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    {steps.map((step, index) => (
                        <li key={step.title} className='relative rounded-2xl border border-gray-200 bg-white p-5'>
                            <span className='bg-primary-600 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white'>
                                {index + 1}
                            </span>
                            <h3 className='mt-4 font-semibold text-gray-800'>{step.title}</h3>
                            <p className='mt-2 text-sm leading-7 text-gray-600'>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </section>
        </Container>
    );
};

export default PartnerStepsTemplate;
