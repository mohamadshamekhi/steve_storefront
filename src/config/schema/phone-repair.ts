import { z } from 'zod';

const phoneRepairValidationSchema = z.object({
    brand_id: z.string({ required_error: 'برند اجباری است' }).min(1, 'برند اجباری است'),
    product_id: z.string({ required_error: 'محصول اجباری است' }).min(1, 'محصول اجباری است'),
    description: z.string().optional(),
    image: z.any().nullable().optional()
});

export default phoneRepairValidationSchema;
