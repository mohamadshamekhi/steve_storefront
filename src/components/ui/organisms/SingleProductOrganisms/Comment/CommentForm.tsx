import Button from '@/components/ui/atoms/Button/Button';
import TextArea from '@/components/ui/atoms/TextArea/TextArea';
import Fieldset from '@/components/ui/molecules/Fieldset/Fieldset';
import { commentFromSchema } from '@/config/schema/comments.schema';
import { useFormik } from 'formik';
import Link from 'next/link';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const CommentForm = () => {
    const formik = useFormik({
        initialValues: {
            comment: ''
        },
        validationSchema: toFormikValidationSchema(commentFromSchema),
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        }
    });

    return (
        <div className='col-span-12 rounded-md bg-white p-4 md:col-span-4 lg:col-span-3'>
            <div className='mb-6'>
                <span className='mb-3 text-sm font-semibold'>ثبت دیدگاه</span>
                <p className='text-tiny font-normal'>شما هم درباره این کالا دیدگاه ثبت کنید</p>
            </div>

            <div>
                <form onSubmit={formik.handleSubmit} action='#'>
                    <Fieldset label='ثبت دیدگاه :' name='comment' touched={formik.touched} errors={formik.errors}>
                        <TextArea
                            name='comment'
                            rows={8}
                            placeholder='نظر خود را در مورد این مقاله با کاربران دیگر به اشتراک بگذارید..'
                            className='w-full bg-white placeholder:text-xs placeholder:font-normal placeholder:text-gray-300'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.comment}
                        />
                    </Fieldset>

                    <Button type='submit' className='mt-5 mb-4 w-full text-sm font-normal'>
                        ثبت دیدگاه
                    </Button>
                </form>
            </div>
            <div>
                {/* TODO: check href */}
                <p className='text-tiny text-center font-medium text-gray-800'>
                    ثبت دیدگاه به معنی موافقت با
                    <Link href='#' className='text-primary-500'>
                        قوانین انتشار استیو
                    </Link>
                    است.
                </p>
            </div>
        </div>
    );
};

export default CommentForm;
