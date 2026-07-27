import { z } from "zod";

export const commentProductFromSchema = z.object({
    comment: z.string({ required_error: 'فیلد توضیحات الزامی است' }),
    rate: z.number().min(1, 'امتیاز را وارد کنید').max(5)
})

