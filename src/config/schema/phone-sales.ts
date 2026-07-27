import { z } from 'zod';

const phoneSalesValidationSchema = z.object({
    brand_id: z.string({ required_error: 'مدل گوشی اجباری است' }),
    product_id: z.string({ required_error: 'نام محصول اجباری است' }),
    color: z.string({ message: 'رنگ گوشی اجباری است' }),
    battery_health: z.string({ message: 'سلامت باتری گوشی اجباری است' }),
    physical_condition: z.string({ required_error: 'وضعیت ظاهری گوشی اجباری است' }),
    register_status: z.boolean().optional(),
    description: z.string({ required_error: 'توضیحات گوشی اجباری است' })
});


export default phoneSalesValidationSchema;
