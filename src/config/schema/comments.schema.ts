import { z } from 'zod';

export const commentFromSchema = z.object({
    comment: z.string({ required_error: 'فیلد توضیحات الزامی است' })
});
