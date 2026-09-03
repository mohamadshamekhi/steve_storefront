'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import LocationIcon from '@/components/icons/LocationIcon';
import MessageIcon from '@/components/icons/MessageIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';
import NumericInput from '@/components/ui/atoms/Input/NumericInput';
import TextArea from '@/components/ui/atoms/TextArea/TextArea';
import ManualBreadcrumb from '@/components/ui/molecules/Breadcrumbs/ManualBreadcrumb';
import Fieldset from '@/components/ui/molecules/Fieldset/Fieldset';
import Container from '@/components/ui/organisms/Container/Container';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import { contactFromSchema } from '@/config/schema/contact.shema';
import ROUTES from '@/constants/routes/routes.constant';
import { useToast } from '@/hooks/useToast';
import { useFormik } from 'formik';
import Link from 'next/link';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const contactChannels = [
    {
        Icon: LocationIcon,
        label: 'آدرس',
        value: 'ساری، خیابان جمهوری، جنب بانک مسکن، فروشگاه استیو',
        href: null
    },
    {
        Icon: PhoneIcon,
        label: 'شماره تماس',
        value: '09379377797',
        href: 'tel:09379377797'
    },
    {
        Icon: MessageIcon,
        label: 'ایمیل',
        value: 'Pouriazahedi.7797@gmail.com',
        href: 'mailto:Pouriazahedi.7797@gmail.com'
    }
];

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

    const errorClass = (field: 'subject' | 'phone_number' | 'email' | 'description') =>
        formik.touched[field] && formik.errors[field] ? 'border-red-500' : '';

    return (
        <Layout>
            <Container>
                <ManualBreadcrumb
                    items={[
                        { label: 'خانه', href: ROUTES.Landing },
                        { label: 'ارتباط با ما', href: ROUTES.ContactUs, isCurrent: true }
                    ]}
                />

                <section className='space-y-6 py-8 lg:space-y-8 lg:py-12'>
                    <div className='max-w-2xl'>
                        <h1 className='text-2xl font-bold text-gray-900 md:text-3xl'>ارتباط با ما</h1>
                        <p className='mt-3 text-sm leading-7 text-gray-600'>
                            سوال، پیشنهاد یا درخواستی دارید؟ فرم زیر را پر کنید یا از راه‌های ارتباطی مستقیم با
                            کارشناسان استیو موبایل در تماس باشید.
                        </p>
                    </div>

                    <div className='grid gap-6 lg:grid-cols-3 lg:gap-8'>
                        <div className='space-y-6 lg:col-span-2'>
                            <div className='overflow-hidden rounded-2xl border border-gray-100 shadow-sm'>
                                <iframe
                                    title='ساری خیابان جمهوری جنب بانک مسکن فروشگاه استیو'
                                    src='https://neshan.org/maps/iframe/places/_bfX7c0F43Is#c36.564-53.055-19z-0p/36.56448456223691/53.054645031236475'
                                    className='block h-70 w-full sm:h-100'
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading='lazy'
                                />
                            </div>

                            <div
                                id='contactForm'
                                className='rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8'
                            >
                                <div className='mb-6'>
                                    <h2 className='mb-2 text-lg font-bold text-gray-900 sm:text-xl'>
                                        درخواست یا سوالت رو اینجا ثبت کن
                                    </h2>
                                    <p className='text-sm leading-7 text-gray-600'>
                                        بعد از ثبت درخواست منتظر بمانید تا کارشناسان استیو با شما تماس بگیرند.
                                    </p>
                                </div>

                                <form onSubmit={formik.handleSubmit} className='space-y-5'>
                                    <Fieldset
                                        label='موضوع'
                                        name='subject'
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
                                            className={`max-w-full! ${errorClass('subject')}`}
                                        />
                                    </Fieldset>

                                    <div className='grid gap-5 sm:grid-cols-2'>
                                        <Fieldset
                                            label='ایمیل'
                                            name='email'
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
                                                className={`max-w-full! ${errorClass('email')}`}
                                            />
                                        </Fieldset>

                                        <Fieldset
                                            label='شماره تماس'
                                            name='phone_number'
                                            touched={formik.touched}
                                            errors={formik.errors}
                                        >
                                            <NumericInput
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.phone_number}
                                                type='tel'
                                                maxLength={11}
                                                placeholder='09111111111'
                                                name='phone_number'
                                                className={`max-w-full! ${errorClass('phone_number')}`}
                                            />
                                        </Fieldset>
                                    </div>

                                    <Fieldset
                                        label='توضیحات'
                                        name='description'
                                        touched={formik.touched}
                                        errors={formik.errors}
                                        direction='horizontal'
                                        className='[&>div:first-child]:flex [&>div:first-child]:flex-col'
                                    >
                                        <TextArea
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.description}
                                            name='description'
                                            placeholder='توضیحات مورد نظر را وارد کنید'
                                            className='h-45 max-h-45'
                                            error={Boolean(formik.touched.description && formik.errors.description)}
                                        />
                                    </Fieldset>

                                    <Button loading={formik.isSubmitting} className='w-full'>
                                        ارسال درخواست
                                    </Button>
                                </form>
                            </div>
                        </div>

                        <ul className='space-y-4 lg:sticky lg:top-[calc(var(--app-header-h,0px)+1.5rem)] lg:self-start'>
                            {contactChannels.map(({ Icon, label, value, href }) => (
                                <li
                                    key={label}
                                    className='rounded-2xl border border-gray-100 bg-white p-5 shadow-sm'
                                >
                                    <div className='mb-3 flex items-center gap-2'>
                                        <span className='bg-primary-50 flex size-9 items-center justify-center rounded-lg'>
                                            <Icon className='text-primary-600 w-4' />
                                        </span>
                                        <span className='text-sm font-medium text-gray-500'>{label}</span>
                                    </div>
                                    {href ? (
                                        <Link
                                            href={href}
                                            dir='ltr'
                                            className='text-primary-800 block text-right text-sm font-semibold break-all'
                                        >
                                            {value}
                                        </Link>
                                    ) : (
                                        <p className='text-primary-800 text-sm leading-7 font-semibold'>{value}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </Container>
        </Layout>
    );
};

export default ClientPage;
