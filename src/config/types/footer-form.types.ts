import { z } from 'zod';

export const emailSchema = z.object({
    email: z.string({ required_error: 'ایمیل اجباری است' }).min(1, 'ایمیل اجباری است').email('ایمیل معتبر نیست')
});

export type EmailFormValues = z.infer<typeof emailSchema>;
