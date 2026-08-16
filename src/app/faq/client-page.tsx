'use client';

import ManualBreadcrumb from '@/components/ui/molecules/Breadcrumbs/ManualBreadcrumb';
import Container from '@/components/ui/organisms/Container/Container';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import { Accordion } from '@/components/ui/organisms/CAccordion/CAccordion';
import ROUTES from '@/constants/routes/routes.constant';
import faqs from '@/config/data/faq.data';

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
