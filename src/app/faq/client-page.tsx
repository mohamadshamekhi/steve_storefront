'use client';

import ManualBreadcrumb from '@/components/ui/molecules/Breadcrumbs/ManualBreadcrumb';
import Container from '@/components/ui/organisms/Container/Container';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import { Accordion } from '@/components/ui/organisms/CAccordion/CAccordion';
import ROUTES from '@/constants/routes/routes.constant';

const faqs = [
    {
        id: 'faq-1',
        question: 'چطور می‌توانم گوشی سفارش بدهم؟',
        answer: 'برای ثبت سفارش کافی است محصول مورد نظر را از سایت انتخاب کرده و مراحل پرداخت را طی کنید. در صورت نیاز به راهنمایی بیشتر می‌توانید با تیم پشتیبانی ما تماس بگیرید.'
    },
    {
        id: 'faq-2',
        question: 'آیا محصولات دارای گارانتی هستند؟',
        answer: 'بله، تمامی محصولات فروشگاه استیو موبایل دارای گارانتی معتبر می‌باشند. مدت و شرایط گارانتی برای هر محصول در صفحه آن محصول ذکر شده است.'
    },
    {
        id: 'faq-3',
        question: 'نحوه ارسال سفارشات چگونه است؟',
        answer: 'سفارشات از طریق پست پیشتاز و تیپاکس ارسال می‌شوند. زمان تحویل معمولاً ۲ تا ۵ روز کاری پس از ثبت سفارش می‌باشد.'
    },
    {
        id: 'faq-4',
        question: 'آیا امکان بازگشت کالا وجود دارد؟',
        answer: 'در صورتی که کالا معیوب باشد یا با مشخصات اعلام‌شده مطابقت نداشته باشد، تا ۷ روز پس از دریافت امکان مرجوعی وجود دارد.'
    },
    {
        id: 'faq-5',
        question: 'چگونه گوشی خود را برای تعمیر بیاورم؟',
        answer: 'می‌توانید از طریق فرم تعمیرات در سایت درخواست خود را ثبت کنید. کارشناسان ما با شما تماس می‌گیرند تا زمان مراجعه هماهنگ شود.'
    },
    {
        id: 'faq-6',
        question: 'آیا خرید آنلاین امن است؟',
        answer: 'بله، تمامی تراکنش‌های مالی از طریق درگاه‌های پرداخت معتبر و با رمزنگاری SSL انجام می‌شود. اطلاعات شما کاملاً محفوظ است.'
    }
];

const ClientPage = () => {
    return (
        <Layout>
            <Container>
                <ManualBreadcrumb
                    items={[
                        { label: 'خانه', href: ROUTES.Landing },
                        { label: 'سوالات متداول', href: ROUTES.FAQ }
                    ]}
                />

                <div className='mx-auto max-w-3xl py-10'>
                    <div className='mb-10 text-center'>
                        <h1 className='text-2xl font-bold text-gray-800 md:text-3xl'>سوالات متداول</h1>
                        <p className='mt-3 text-gray-500'>
                            پاسخ به پرسش‌های پرتکرار درباره خرید، فروش، تعمیر و خدمات استیو موبایل
                        </p>
                    </div>

                    <Accordion type='single' defaultActiveKey='faq-1'>
                        {faqs.map((faq) => (
                            <Accordion.Item key={faq.id} eventKey={faq.id}>
                                <Accordion.Header eventKey={faq.id}>
                                    <span className='text-sm font-semibold text-gray-800 md:text-base'>
                                        {faq.question}
                                    </span>
                                </Accordion.Header>
                                <Accordion.Body eventKey={faq.id}>
                                    <p className='text-sm leading-7 text-gray-600'>{faq.answer}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </Container>
        </Layout>
    );
};

export default ClientPage;
