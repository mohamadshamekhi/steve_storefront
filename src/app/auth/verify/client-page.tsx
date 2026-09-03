'use client';
import { signInAction, signInVerifyAction } from '@/actions/auth.action';
import ChevronLeft from '@/components/icons/ChevronLeft';
import Input from '@/components/ui/atoms/Input/Input';
import Fieldset from '@/components/ui/molecules/Fieldset/Fieldset';
import AuthFormWrapper from '@/components/ui/organisms/auth/AuthFormWrapper';
import { authOTPValidationSchema } from '@/config/schema/auth';
import useOtpCountdown from '@/hooks/useOtpCountdown';
import { useToast } from '@/hooks/useToast';
import { useSessionStore } from '@/state';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import OtpInput from 'react-otp-input';
import { clearStoredRef, getStoredRef, isValidRef, setStoredRef } from '@/utils/referral.util';
import { toEnglishDigits } from '@/utils/string.util';
import z from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

type authModel = z.infer<typeof authOTPValidationSchema>;

const VerifyPage = () => {
    const searchParams = useSearchParams();
    const phoneNumber = searchParams.get('phone_number');
    // send-otp پاسخِ is_new_user را داده و sign-in آن را با ?new=1 پاس کرده
    const isNewUser = searchParams.get('new') === '1';
    const redirectParam = searchParams.get('redirect') || searchParams.get('callbackUrl');
    // فقط مسیرهای داخلی مجاز است (جلوگیری از open redirect)
    const redirect =
        redirectParam && redirectParam.startsWith('/') && !redirectParam.startsWith('//') ? redirectParam : null;

    const [isPending, startTransition] = useTransition();
    const { showToast } = useToast();
    const router = useRouter();

    const updateSession = useSessionStore((state) => state.updateSession);

    // کد دعوت (اختیاری) کنار OTP — فقط برای کاربر جدید، یا وقتی از لینک دعوت آمده.
    const [refCode, setRefCode] = useState('');
    const [hasStoredRef, setHasStoredRef] = useState(false);
    const showRefField = isNewUser || hasStoredRef;

    useEffect(() => {
        const stored = getStoredRef();
        if (stored) {
            setRefCode(stored);
            setHasStoredRef(true);
        }
    }, []);

    /** کدِ مؤثر: مقدار تایپ‌شده اگر معتبر باشد، وگرنه کدِ ذخیره‌شده از لینک دعوت */
    const resolveRef = () => {
        const typed = refCode.trim().toUpperCase();
        if (isValidRef(typed)) {
            setStoredRef(typed);
            return typed;
        }
        return getStoredRef();
    };

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
                const res = await signInVerifyAction({
                    phone_number: phoneNumber,
                    ...data,
                    ref: resolveRef()
                });
                if (res.success) {
                    clearStoredRef();
                    showToast({
                        title: 'احراز هویت | تاییدیه ورود',
                        message: res.message,
                        type: 'success'
                    });
                    await updateSession();
                    router.push(redirect || '/dashboard');
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
        <div className='text-right'>
            <h1 className='sr-only'>استیو موبایل</h1>
            <h2 className='text-xl font-bold text-gray-900'>تأیید شماره موبایل</h2>
            <p className='mt-2 mb-7 text-sm leading-7 text-gray-500'>
                کد ۵ رقمی ارسال‌شده به شماره{' '}
                <span dir='ltr' className='font-semibold text-gray-700'>
                    {phoneNumber}
                </span>{' '}
                را وارد کنید.
            </p>
            <AuthFormWrapper loading={isPending} onSubmit={formik.handleSubmit}>
                <Fieldset name='code' touched={formik.touched} errors={formik.errors} className='w-full'>
                    <OtpInput
                        value={formik.values.code}
                        onChange={(val) => formik.setFieldValue('code', toEnglishDigits(val).replace(/\D/g, ''))}
                        numInputs={5}
                        shouldAutoFocus
                        inputStyle={{
                            direction: 'ltr',
                            minWidth: '2.75rem',
                            height: '3rem',
                            fontSize: '1.375rem',
                            fontWeight: 600,
                            borderRadius: '10px',
                            border: '1px solid #D1D5DB',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            outline: 'none'
                        }}
                        containerStyle={{
                            direction: 'ltr',
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '0.5rem',
                            marginBottom: '4px'
                        }}
                        renderInput={(props) => <input dir='ltr' {...props} inputMode='numeric' />}
                    />
                </Fieldset>

                {showRefField && (
                    <div className='w-full'>
                        <label htmlFor='ref_code' className='mb-1.5 block text-sm font-medium text-gray-700'>
                            کد دعوت <span className='font-normal text-gray-400'>(اختیاری)</span>
                        </label>
                        <Input
                            id='ref_code'
                            name='ref_code'
                            dir='ltr'
                            placeholder='مثلاً STV-8K3QP'
                            autoCapitalize='characters'
                            className='max-w-full! text-left uppercase placeholder:normal-case placeholder:text-gray-400'
                            value={refCode}
                            onChange={(e) => setRefCode(e.target.value)}
                        />
                        {refCode.trim() && !isValidRef(refCode.trim().toUpperCase()) ? (
                            <p className='mt-1 text-xs text-red-500'>فرمت کد دعوت درست نیست.</p>
                        ) : (
                            <p className='mt-1 text-xs text-gray-400'>
                                اگر دوستی کد دعوت به شما داده اینجا وارد کنید تا هر دو تخفیف بگیرید.
                            </p>
                        )}
                    </div>
                )}
            </AuthFormWrapper>

            <div className='mt-6 flex items-center justify-between gap-3'>
                {isDisabled ? (
                    <p className='text-sm text-gray-400'>ارسال مجدد کد تا {formatted}</p>
                ) : (
                    <button
                        type='button'
                        onClick={handleResendOTP}
                        className='text-primary-600 hover:text-primary-700 cursor-pointer text-sm font-semibold transition'
                    >
                        ارسال مجدد کد
                    </button>
                )}
                <Link
                    href='/auth/sign-in'
                    className='inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition hover:text-gray-700'
                >
                    <ChevronLeft />
                    ویرایش شماره
                </Link>
            </div>
        </div>
    );
};

export default VerifyPage;

