import { z } from 'zod';

const phoneRegex = /^(?:\+98|0098|98|0)?9\d{9}$/;

export const authPhoneNumberValidationSchema = z.object({
    phone_number: z
        .string({ message: 'وارد کردن شماره تماس اجبار میباشد' })
        .min(1, 'تعداد ارقام شماره موبایل کوتاه میباشد.')
        .max(11, 'شماره تماس نمیتواند بیشتر از ۱۱ رقم باشد.')
        .regex(phoneRegex, 'شماره تلفن معتبر نمیباشد')
});

export const authOTPValidationSchema = z.object({
    code: z
        .string({ message: 'وارد کردن کد الزامی میباشد.' })
        .min(5, 'کد باید دقیقاً ۵ رقم باشد')
        .max(5, 'کد باید دقیقاً ۵ رقم باشد')
        .regex(/^\d{5}$/, 'کد باید فقط شامل ارقام باشد')
});
