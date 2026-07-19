import { z } from 'zod';

export const profileSchema = z.object({
    name: z.string({ required_error: 'لطفاً نام خود را وارد کنید' }).min(2, 'نام باید حداقل ۲ کاراکتر باشد'),
    phone_number: z
        .string({ required_error: 'لطفاً شماره همراه را وارد کنید' })
        .regex(/^09\d{9}$/, 'شماره همراه باید ۱۱ رقم و با ۰۹ شروع شود')
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
