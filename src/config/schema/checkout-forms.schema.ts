import { z } from 'zod';
const phoneRegex = /^(?:\+98|0098|98|0)?9\d{9}$/;

export const checkoutFirstStepForm = z.object({
    address: z.string({ required_error: 'وارد کردن آدرس الزامی است' }).min(3, 'فرمت آدرس درست نمیباشد'),
    delivery_surname: z
        .string({ required_error: 'وارد کردن نام ونام خانوادگی گیرنده الزامی است' })
        .min(3, 'فرمت آدرس درست نمیباشد'),
    delivery_tel: z
        .string({ message: 'وارد کردن شماره تماس اجبار میباشد' })
        .min(1, 'تعداد ارقام شماره موبایل کوتاه میباشد.')
        .max(11, 'شماره تماس نمیتواند بیشتر از ۱۱ رقم باشد.')
        .regex(phoneRegex, 'شماره تلفن معتبر نمیباشد')
});

export type Step1Values = z.infer<typeof checkoutFirstStepForm>;

export const checkoutStepForm = z.object({
    discount_code: z.string({ required_error: 'وارد کردن تخفیف الزامی است' })
});

export type StepValues = z.infer<typeof checkoutStepForm>;
