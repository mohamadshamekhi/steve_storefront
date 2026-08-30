'use client';

import { signInAction } from '@/actions/auth.action';
import ChevronLeft from '@/components/icons/ChevronLeft';
import Input from '@/components/ui/atoms/Input/Input';
import Fieldset from '@/components/ui/molecules/Fieldset/Fieldset';
import AuthFormWrapper from '@/components/ui/organisms/auth/AuthFormWrapper';
import { authPhoneNumberValidationSchema } from '@/config/schema/auth';
import ROUTES from '@/constants/routes/routes.constant';
import { useToast } from '@/hooks/useToast';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import z from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

type authModel = z.infer<typeof authPhoneNumberValidationSchema>;

function SignInPage() {
    const { showToast } = useToast();
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const searchParams = useSearchParams();
    // میدلور با callbackUrl ریدایرکت می‌کند؛ redirect هم برای سازگاری پشتیبانی می‌شود
    const redirect = searchParams.get('callbackUrl') || searchParams.get('redirect');

    const submitHandler = async (data: authModel) => {
        startTransition(async () => {
            try {
                const { success, message } = await signInAction(data);
                if (success) {
                    showToast({
                        title: 'احراز هویت | ورود',
                        message: message,
                        type: 'success'
                    });
                    router.push(
                        `/auth/verify?phone_number=${data.phone_number}${
                            redirect ? `&redirect=${encodeURIComponent(redirect)}` : ''
                        }`
                    );
                } else {
                    showToast({
                        title: 'احراز هویت | ورود',
                        message: message,
                        type: 'error'
                    });
                }
            } catch (error) {
                showToast({
                    title: 'احراز هویت | ورود',
                    message: error instanceof Error ? error.message : 'خطایی رخ داده است',
                    type: 'error'
                });
            }
        });
    };

    const formik = useFormik({
        initialValues: {
            phone_number: ''
        },
        validationSchema: toFormikValidationSchema(authPhoneNumberValidationSchema),
        onSubmit: submitHandler
    });

    return (
        <div>
            <h1 className='sr-only'>استیو موبایل</h1>
            <h2 className='text-h4-bold mb-11 font-bold text-gray-800'>ورود | ثبت نام</h2>
            <p className='text-body1-regular mb-4 text-right'>
                سلام
                <br /> لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p>
            <AuthFormWrapper loading={isPending} onSubmit={formik.handleSubmit}>
                <Fieldset name='phone_number' touched={formik.touched} errors={formik.errors} className='w-full'>
                    <Input
                        name='phone_number'
                        type='tel'
                        maxLength={11}
                        inputMode='numeric'
                        placeholder='شماره تلفن'
                        className={`w-full max-w-full py-2 text-left placeholder:text-right ${
                            formik.touched.phone_number && formik.errors.phone_number ? 'border-red-500' : ''
                        }`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone_number}
                    />
                </Fieldset>
            </AuthFormWrapper>
            <div className='mt-6'>
                <Link href={ROUTES.Landing} className='text-body1-regular flex items-center justify-end'>
                    بازگشت
                    <span className='mr-2'>
                        <ChevronLeft />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default SignInPage;

