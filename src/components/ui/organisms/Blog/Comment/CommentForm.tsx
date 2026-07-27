import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import Button from '@/components/ui/atoms/Button/Button';
import TextArea from '@/components/ui/atoms/TextArea/TextArea';
import Fieldset from '@/components/ui/molecules/Fieldset/Fieldset';
import { commentFromSchema } from '@/config/schema/comments.schema';
import { useSessionStore, useToastStore } from '@/state';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';

interface CommentFormProps {
    articleId: string;
}

const CommentForm = ({ articleId }: CommentFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const showToast = useToastStore((state) => state.showToast);
    const { session, status } = useSessionStore((state) => state);
    const isAuthenticated = status === 'authenticated' && session.session !== null;

    const formik = useFormik({
        initialValues: {
            comment: ''
        },
        validationSchema: toFormikValidationSchema(commentFromSchema),
        onSubmit: async (values, { resetForm }) => {
            if (!isAuthenticated) {
                showToast({
                    message: 'برای ثبت دیدگاه باید وارد حساب کاربری خود شوید.',
                    type: 'error',
                    duration: 5000
                });
                return;
            }

            setIsSubmitting(true);

            try {
                const response = await fetcher(ApiKeys.ADD_COMMENT, 'dashboard', 'POST', {
                    body: {
                        body: values.comment,
                        commentable_type: 'article',
                        commentable_id: articleId
                    }
                });

                if (response?.success) {
                    showToast({
                        message: 'دیدگاه شما با موفقیت ثبت شد و پس از تایید نمایش داده می‌شود.',
                        type: 'success',
                        duration: 5000
                    });
                    resetForm();
                } else {
                    showToast({
                        message: response?.message || 'خطا در ثبت دیدگاه',
                        type: 'error',
                        duration: 5000
                    });
                }
            } catch {
                showToast({
                    message: 'خطا در ارتباط با سرور',
                    type: 'error',
                    duration: 5000
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    });

    return (
        <div className='col-span-12 rounded-md bg-white p-4 md:col-span-4 lg:col-span-3'>
            <div className='mb-6'>
                <span className='mb-3 text-sm font-semibold'>ثبت دیدگاه</span>
                <p className='text-tiny font-normal'>شما هم درباره این مقاله دیدگاه ثبت کنید</p>
            </div>

            {!isAuthenticated && (
                <div className='mb-4 rounded-md border border-yellow-200 bg-yellow-50 p-3'>
                    <p className='text-center text-sm text-yellow-800'>
                        برای ثبت دیدگاه باید{' '}
                        <Link href='/auth/sign-in' className='text-primary-500 font-semibold underline'>
                            وارد حساب کاربری
                        </Link>{' '}
                        خود شوید.
                    </p>
                </div>
            )}

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
                            disabled={!isAuthenticated}
                        />
                    </Fieldset>

                    <Button
                        type='submit'
                        className='mt-5 mb-4 w-full text-sm font-normal'
                        disabled={isSubmitting || !isAuthenticated}
                    >
                        {isSubmitting ? 'در حال ارسال...' : 'ثبت دیدگاه'}
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
