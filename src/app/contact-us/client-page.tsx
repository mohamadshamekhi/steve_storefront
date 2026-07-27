'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import LocationIcon from '@/components/icons/LocationIcon';
import MessageIcon from '@/components/icons/MessageIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';
import PageTitle from '@/components/ui/atoms/PageTitle/PageTitle';
import TextArea from '@/components/ui/atoms/TextArea/TextArea';
import ManualBreadcrumb from '@/components/ui/molecules/Breadcrumbs/ManualBreadcrumb';
import Fieldset from '@/components/ui/molecules/Fieldset/Fieldset';
import Container from '@/components/ui/organisms/Container/Container';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import { contactFromSchema } from '@/config/schema/contact.shema';
import ROUTES from '@/constants/routes/routes.constant';
import { useToast } from '@/hooks/useToast';
import star from '@public/images/phone-repair/star.png';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const ClientPage = () => {
    const { showToast } = useToast();

    const formik = useFormik({
        initialValues: {
            subject: '',
            phone_number: '',
            email: '',
            description: ''
        },
        validationSchema: toFormikValidationSchema(contactFromSchema),
        onSubmit: async (values) => {
            const res = await fetcher(ApiKeys.POST_CONTACT_US, 'web', 'POST', {
                body: { ...values }
            });
            showToast({
                title: 'تماس با ما',
                message: res.message,
                type: 'success'
            });
            formik.resetForm();
        }
    });

    return (
        <Layout>
            <Container>
                <ManualBreadcrumb
                    items={[
                        { label: 'خانه', href: ROUTES.Landing },
                        {
                            label: 'ارتباط با ما',
                            href: ROUTES.ContactUs,
                            isCurrent: true
                        }
                    ]}
                />
                <section className='grid grid-cols-12 gap-5 pt-16 pb-16'>
                    <div className='relative col-span-12 lg:col-span-9'>
                        <PageTitle title='ارتباط باما' />

                        <div className='mb-6 overflow-hidden rounded-2xl'>
                            <iframe
                                title='ساری خیابان جمهوری جنب بانک مسکن فروشگاه استیو'
                                src='https://neshan.org/maps/iframe/places/_bfX7c0F43Is#c36.564-53.055-19z-0p/36.56448456223691/53.054645031236475'
                                style={{
                                    border: 0,
                                    width: '100%',
                                    height: '490px'
                                }}
                                allowFullScreen={false}
                                aria-hidden='false'
                                loading='lazy'
                            ></iframe>
                        </div>

                        <div className='relative rounded-lg bg-white px-5 py-11 md:px-14' id='contactForm'>
                            <Image
                                src={star}
                                className='absolute top-2 left-2 sm:top-[22.96px] sm:left-[29.08px]'
                                alt='steve'
                                width='48'
                                height='46'
                                loading='lazy'
                            />
                            <div className='mb-9'>
                                <span className='mb-3 block text-2xl font-semibold text-gray-800'>
                                    درخواست یا سوالت رو اینجا ثبت کن
                                </span>
                                <p className='text-base font-normal text-gray-700'>
                                    بعد از ثبت درخواست منتظر بمانید تا کارشناسان استیو با شما تماس بگیرند
                                </p>
                            </div>

                            <form onSubmit={formik.handleSubmit} className=''>
                                <div className='mb-8 grid-cols-2 gap-x-6 gap-y-8 lg:grid'>
                                    <div className='grid gap-x-[17px] gap-y-[32px] lg:col-span-2'>
                                        <Fieldset
                                            label='موضوع'
                                            name='subject'
                                            className='lg:col-span-1'
                                            touched={formik.touched}
                                            errors={formik.errors}
                                        >
                                            <Input
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.subject}
                                                type='text'
                                                placeholder='مثلا در مورد خرید عمده'
                                                name='subject'
                                                className={`bg-primary-50 max-w-full border ${formik.touched.subject && formik.errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                        </Fieldset>
                                    </div>
                                    <div className='grid gap-x-[17px] gap-y-[32px]'>
                                        <Fieldset
                                            label='ایمیل'
                                            name='email'
                                            className='lg:col-span-1'
                                            touched={formik.touched}
                                            errors={formik.errors}
                                        >
                                            <Input
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                                type='text'
                                                placeholder='example@domain.com'
                                                name='email'
                                                className={`bg-primary-50 max-w-full border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                        </Fieldset>
                                    </div>
                                    <div className='grid gap-x-[17px] gap-y-[32px]'>
                                        <Fieldset
                                            label='شماره تماس'
                                            name='phone_number'
                                            className='lg:col-span-1'
                                            touched={formik.touched}
                                            errors={formik.errors}
                                        >
                                            <Input
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.phone_number}
                                                type='text'
                                                placeholder='09111111111'
                                                name='phone_number'
                                                className={`bg-primary-50 max-w-full border ${formik.touched.phone_number && formik.errors.phone_number ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                        </Fieldset>
                                    </div>
                                    <div className='grid gap-x-[17px] gap-y-[32px] lg:col-span-2'>
                                        <Fieldset
                                            label='توضیحات'
                                            name='description'
                                            className='lg:col-span-1 [&>div:first-child]:flex [&>div:first-child]:flex-col'
                                            touched={formik.touched}
                                            errors={formik.errors}
                                            direction='horizontal'
                                        >
                                            <TextArea
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.description}
                                                name='description'
                                                placeholder='توضیحات مورد نظر را وارد کنید'
                                                className='h-[200px] max-h-[200px]'
                                                error={Boolean(formik.touched.description && formik.errors.description)}
                                            />
                                        </Fieldset>
                                    </div>
                                </div>
                                <Button loading={formik.isSubmitting} className='w-full'>
                                    ارسال درخواست
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-3'>
                        <ul className='sticky top-[40px] space-y-3.5'>
                            <li className='border-primary-100 rounded-lg border bg-white p-7'>
                                <div className='mb-5 flex items-center'>
                                    <LocationIcon className='text-primary-500 ml-1.5 w-4' />

                                    <span className='text-sm font-normal text-gray-700'>آدرس</span>
                                </div>

                                <p className='text-primary-800 text-sm leading-10 font-semibold'>
                                    ساری خیابان جمهوری جنب بانک مسکن فروشگاه استیو
                                </p>
                            </li>

                            <li className='border-primary-100 rounded-lg border bg-white p-7'>
                                <div className='mb-5 flex items-center'>
                                    <PhoneIcon className='text-primary-500 ml-1.5 w-4' />

                                    <span className='text-sm font-normal text-gray-700'>شماره تماس</span>
                                </div>
                                <div className='text-primary-800 flex gap-3 text-sm font-semibold'>
                                    <Link href='tel:09379377797'>09379377797</Link>
                                </div>
                            </li>
                            <li className='border-primary-100 rounded-lg border bg-white p-7'>
                                <div className='mb-5 flex items-center'>
                                    <MessageIcon className='text-primary-500 ml-1.5 w-4' fill='#ECEBFF' />

                                    <span className='text-sm font-normal text-gray-700'>ایمیل</span>
                                </div>
                                <span className='text-primary-800 text-sm font-semibold'>
                                    <Link href='mailto:Pouriazahedi.7797@gmail.com'>Pouriazahedi.7797@gmail.com</Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
            </Container>
        </Layout>
    );
};

export default ClientPage;
