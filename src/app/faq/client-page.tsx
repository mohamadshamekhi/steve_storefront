'use client';

import ManualBreadcrumb from '@/components/ui/molecules/Breadcrumbs/ManualBreadcrumb';
import Container from '@/components/ui/organisms/Container/Container';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import { Accordion } from '@/components/ui/organisms/CAccordion/CAccordion';
import ROUTES from '@/constants/routes/routes.constant';
import faqs from '@/config/data/faq.data';
import Link from 'next/link';

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
                        <h1 className='text-2xl font-bold text-gray-900 md:text-3xl'>سوالات متداول</h1>
                        <p className='mt-3 text-sm text-gray-500 sm:text-base'>
                            پاسخ به پرسش‌های پرتکرار درباره خرید، فروش، تعمیر و خدمات استیو موبایل
                        </p>
                    </div>

                    <div className='rounded-2xl border border-gray-100 bg-white p-2 shadow-sm sm:p-4'>
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

                    <div className='bg-primary-50 mt-8 flex flex-col items-center gap-3 rounded-2xl p-6 text-center sm:flex-row sm:justify-between sm:text-right'>
                        <div>
                            <p className='font-bold text-gray-900'>پاسخ سوالت را پیدا نکردی؟</p>
                            <p className='mt-1 text-sm text-gray-600'>
                                کارشناسان استیو موبایل آماده‌ی پاسخ‌گویی به شما هستند.
                            </p>
                        </div>
                        <Link
                            href={ROUTES.ContactUs}
                            className='bg-primary-600 hover:bg-primary-700 shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition'
                        >
                            تماس با ما
                        </Link>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default ClientPage;
