import { z } from 'zod';

export const partnerApplySchema = z.object({
    company_name: z
        .string({ required_error: 'لطفاً نام شرکت را وارد کنید' })
        .trim()
        .min(2, 'نام شرکت باید حداقل ۲ کاراکتر باشد')
        .max(150, 'نام شرکت نمی‌تواند بیشتر از ۱۵۰ کاراکتر باشد'),
    national_id: z
        .string({ required_error: 'لطفاً کد ملی را وارد کنید' })
        .regex(/^\d{10}$/, 'کد ملی باید دقیقاً ۱۰ رقم باشد'),
    business_field: z
        .string({ required_error: 'لطفاً زمینه فعالیت را وارد کنید' })
        .trim()
        .min(2, 'زمینه فعالیت باید حداقل ۲ کاراکتر باشد')
        .max(150, 'زمینه فعالیت نمی‌تواند بیشتر از ۱۵۰ کاراکتر باشد'),
    city: z
        .string({ required_error: 'لطفاً شهر را وارد کنید' })
        .trim()
        .min(2, 'نام شهر باید حداقل ۲ کاراکتر باشد')
        .max(100, 'نام شهر نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد')
});

export type PartnerApplyFormValues = z.infer<typeof partnerApplySchema>;
