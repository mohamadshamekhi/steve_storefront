import { z } from 'zod';

export const addressSchema = z.object({
    title: z.string({ required_error: 'لطفاً یک عنوان برای آدرس وارد کنید' }).min(1, 'لطفاً یک عنوان برای آدرس وارد کنید'),
    province: z.string({ required_error: 'لطفاً استان خود را انتخاب کنید' }).min(1, 'لطفاً استان خود را انتخاب کنید'),
    city: z.string({ required_error: 'لطفاً شهر خود را انتخاب کنید' }).min(1, 'لطفاً شهر خود را انتخاب کنید'),
    street: z.string({ required_error: 'لطفاً آدرس دقیق را وارد کنید' }).min(5, 'آدرس دقیق باید حداقل ۵ کاراکتر باشد'),
    postcode: z
        .string({ required_error: 'لطفاً کد پستی را وارد کنید' })
        .min(1, 'لطفاً کد پستی را وارد کنید')
        .regex(/^\d{10}$/, 'کد پستی باید دقیقاً ۱۰ رقم باشد')
});

export type AddressFormValues = z.infer<typeof addressSchema>;
