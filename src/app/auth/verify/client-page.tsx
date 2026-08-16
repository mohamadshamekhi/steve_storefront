'use client';
import { signInAction, signInVerifyAction } from '@/actions/auth.action';
import ChevronLeft from '@/components/icons/ChevronLeft';
import Fieldset from '@/components/ui/molecules/Fieldset/Fieldset';
import AuthFormWrapper from '@/components/ui/organisms/auth/AuthFormWrapper';
import { authOTPValidationSchema } from '@/config/schema/auth';
import useOtpCountdown from '@/hooks/useOtpCountdown';
import { useToast } from '@/hooks/useToast';
import { useSessionStore } from '@/state';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useTransition } from 'react';
import OtpInput from 'react-otp-input';
import z from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

type authModel = z.infer<typeof authOTPValidationSchema>;

const VerifyPage = () => {
    const searchParams = useSearchParams();
    const phoneNumber = searchParams.get('phone_number');

    const [isPending, startTransition] = useTransition();
    const { showToast } = useToast();
    const router = useRouter();

    const updateSession = useSessionStore((state) => state.updateSession);

    const { start, isDisabled, formatted } = useOtpCountdown({
        duration: 180,
        storageKey: 'otp-end'
    });

    useEffect(() => {
        if (!isDisabled) {
            start();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleResendOTP = async () => {
        await signInAction({ phone_number: phoneNumber! });
        start();
    };

    const submitHandler = async (data: authModel) => {
        startTransition(async () => {
            try {
                const res = await signInVerifyAction({ phone_number: phoneNumber, ...data });
                if (res.success) {
                    showToast({
                        title: 'احراز هویت | تاییدیه ورود',
                        message: res.message,
                        type: 'success'
                    });
                    await updateSession();
                    router.push('/dashboard');
                } else {
                    showToast({
                        title: 'احراز هویت | تاییدیه ورود',
                        message: res.message,
                        type: 'error'
                    });
                }
            } catch (error) {
                showToast({
                    title: 'احراز هویت | تاییدیه ورود',
                    message: error instanceof Error ? error.message : 'خطایی رخ داده است',
                    type: 'error'
                });
            }
        });
    };

    const formik = useFormik({
        initialValues: {
            code: ''
        },
        validationSchema: toFormikValidationSchema(authOTPValidationSchema),
        onSubmit: submitHandler
    });

    return (
        <div>
            <h1 className='sr-only'>استیو موبایل</h1>
            <h2 className='text-h4-bold mb-5 font-bold text-gray-800 lg:mb-[45px]'>تایید دو مرحله ای</h2>
            <p className='text-body1-regular mb-4'>لطفا کد ارسال شده به شماره{phoneNumber} را وارد کنید.</p>
            <AuthFormWrapper loading={isPending} onSubmit={formik.handleSubmit}>
                <Fieldset name='code' touched={formik.touched} errors={formik.errors} className='w-full'>
                    <OtpInput
                        value={formik.values.code}
                        onChange={(val) => formik.setFieldValue('code', val)}
                        numInputs={5}
                        shouldAutoFocus
                        inputStyle={{
                            direction: 'ltr',
                            minWidth: '3rem',
                            height: '3rem',
                            fontSize: '1.5rem',
                            borderRadius: '8px',
                            border: '1px solid #D2D5DA',
                            textAlign: 'center',
                            backgroundColor: '#F6F6FF'
                        }}
                        containerStyle={{
                            direction: 'ltr',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem',
                            marginBottom: '20px'
                        }}
                        renderInput={(props) => <input dir='ltr' {...props} inputMode='numeric' />}
                    />
                </Fieldset>
            </AuthFormWrapper>

            <div className='mt-6 flex items-center justify-between'>
                {isDisabled ? (
                    <p className='mb-6 text-center text-sm font-normal text-gray-500'>ارسال مجدد ( {formatted} )</p>
                ) : (
                    <p
                        onClick={handleResendOTP}
                        className='text-primary-500 mb-6 cursor-pointer text-center text-base font-semibold'
                    >
                        ارسال مجدد
                    </p>
                )}
                <Link href='/auth/sign-in' className='text-body1-regular flex items-center justify-end'>
                    ویرایش شماره
                    <span className='mr-2'>
                        <ChevronLeft />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default VerifyPage;

