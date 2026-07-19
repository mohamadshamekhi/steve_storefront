import { z } from 'zod';

export const contactFromSchema = z.object({
    subject: z.string({ required_error: 'فیلد موضوع الزامی می باشد' }),

    email: z.string({ required_error: 'وارد کردن ایمیل الزامی است' }).email({ message: 'ایمیل وارد شده معتبر نیست' }),

    description: z.string({ required_error: 'توضیحات الزامی می باشد' }),

    phone_number: z
        .string({ message: 'وارد کردن شماره تماس الزامی است' })
        .min(1, 'تعداد ارقام شماره موبایل کوتاه میباشد.')
        .regex(/^(?:\+98|0098|98|0)?9\d{9}$/, 'شماره تلفن معتبر نمیباشد')
});
