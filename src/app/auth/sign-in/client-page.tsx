'use client';

import { signInAction } from '@/actions/auth.action';
import ChevronLeft from '@/components/icons/ChevronLeft';
import NumericInput from '@/components/ui/atoms/Input/NumericInput';
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
                const res = await signInAction(data);
                if (res?.success) {
                    showToast({
                        title: 'احراز هویت | ورود',
                        message: res.message,
                        type: 'success'
                    });
                    const query = new URLSearchParams({ phone_number: data.phone_number });
                    // فقط برای کاربر جدید، صفحهٔ بعد فیلد «کد دعوت» را نشان می‌دهد
                    if (res.data?.is_new_user) query.set('new', '1');
                    if (redirect) query.set('redirect', redirect);
                    router.push(`/auth/verify?${query.toString()}`);
                } else {
                    showToast({
                        title: 'احراز هویت | ورود',
                        message: res?.message,
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
        <div className='text-right'>
            <h1 className='sr-only'>استیو موبایل</h1>
            <h2 className='text-xl font-bold text-gray-900'>ورود یا ثبت‌نام</h2>
            <p className='mt-2 mb-7 text-sm leading-7 text-gray-500'>
                سلام! برای ادامه، شماره موبایل خود را وارد کنید. کد تأیید برایتان پیامک می‌شود.
            </p>
            <AuthFormWrapper loading={isPending} onSubmit={formik.handleSubmit}>
                <Fieldset name='phone_number' touched={formik.touched} errors={formik.errors} className='w-full'>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700'>شماره موبایل</label>
                    <NumericInput
                        name='phone_number'
                        type='tel'
                        maxLength={11}
                        placeholder='09xxxxxxxxx'
                        dir='ltr'
                        className={`max-w-full! text-left placeholder:text-gray-400 ${
                            formik.touched.phone_number && formik.errors.phone_number ? 'border-red-500' : ''
                        }`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone_number}
                    />
                </Fieldset>
            </AuthFormWrapper>
            <div className='mt-6'>
                <Link
                    href={ROUTES.Landing}
                    className='inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition hover:text-gray-700'
                >
                    <ChevronLeft />
                    بازگشت به فروشگاه
                </Link>
            </div>
        </div>
    );
}

export default SignInPage;
