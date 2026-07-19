'use client';

import { EmailFormValues, emailSchema } from '@/config/types/footer-form.types';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Fieldset from '../../molecules/Fieldset/Fieldset';

const FooterSubscription = () => {
    const formik = useFormik<EmailFormValues>({
        initialValues: {
            email: ''
        },
        validationSchema: toFormikValidationSchema(emailSchema),
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        }
    });

    return (
        <div>
            <div className='text-md mt-8 mb-4 font-medium text-gray-800'>
                با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </div>

            <form onSubmit={formik.handleSubmit}>
                <Fieldset name='email' touched={formik.touched} errors={formik.errors}>
                    <div className='flex items-center gap-2'>
                        <Input
                            name='email'
                            type='email'
                            placeholder='ایمیل شما'
                            className={`w-full max-w-[283px] grow py-2 ${
                                formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                            }`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <Button type='submit' color='primary' variant='fill'>
                            ثبت
                        </Button>
                    </div>
                </Fieldset>
            </form>
        </div>
    );
};

export default FooterSubscription;
