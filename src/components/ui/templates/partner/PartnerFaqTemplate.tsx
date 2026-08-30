'use client';

import Container from '../../organisms/Container/Container';
import { Accordion } from '../../organisms/CAccordion/CAccordion';

const faqs = [
    {
        q: 'چه کسب‌وکارهایی می‌توانند همکار شوند؟',
        a: 'فروشگاه‌ها، شرکت‌ها و کسب‌وکارهای فعال در حوزهٔ موبایل و کالای دیجیتال می‌توانند درخواست همکاری ثبت کنند.'
    },
    {
        q: 'برای عضویت هزینه‌ای پرداخت می‌کنم؟',
        a: 'خیر. ثبت درخواست و عضویت در برنامهٔ همکاری فروش استیو موبایل کاملاً رایگان است.'
    },
    {
        q: 'درصد تخفیف همکاری چقدر است؟',
        a: 'بسته به زمینهٔ فعالیت و حجم خرید، درصد تخفیف بین ۰ تا ۹۰ درصد برای حساب شما تعیین می‌شود و در پنل کاربری قابل مشاهده است.'
    },
    {
        q: 'تخفیف چطور اعمال می‌شود؟',
        a: 'پس از تایید، درصد تخفیف شما به‌صورت خودکار روی قیمت هر تنوع (رنگ و ظرفیت) در کاتالوگ همکار اعمال می‌شود و نیازی به وارد کردن کد نیست.'
    },
    {
        q: 'اگر درخواستم رد شود چه کنم؟',
        a: 'دلیل رد در پنل کاربری نمایش داده می‌شود. می‌توانید اطلاعات را اصلاح کنید و دوباره درخواست را ارسال نمایید.'
    },
    {
        q: 'بررسی درخواست چقدر طول می‌کشد؟',
        a: 'معمولاً طی چند روز کاری. نتیجه در پنل کاربری ثبت و به شما اطلاع داده می‌شود.'
    }
];

const PartnerFaqTemplate = () => {
    return (
        <Container>
            <section>
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='text-2xl font-bold text-gray-800 md:text-3xl'>سوال‌های پرتکرار</h2>
                </div>

                <div className='mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-gray-200'>
                    <Accordion type='single'>
                        {faqs.map((faq, index) => (
                            <Accordion.Item eventKey={index.toString()} key={faq.q}>
                                <Accordion.Header eventKey={index.toString()}>
                                    <span className='text-sm font-semibold text-gray-800 md:text-base'>{faq.q}</span>
                                </Accordion.Header>
                                <Accordion.Body eventKey={index.toString()}>
                                    <p className='text-sm leading-8 text-gray-600'>{faq.a}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </section>
        </Container>
    );
};

export default PartnerFaqTemplate;
