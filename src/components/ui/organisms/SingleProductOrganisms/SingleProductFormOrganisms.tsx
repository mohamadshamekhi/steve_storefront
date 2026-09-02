import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { commentProductFromSchema } from '@/config/schema/comments-product.schema';
import { useSessionStore, useToastStore } from '@/state';
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Button from '../../atoms/Button/Button';
import TextArea from '../../atoms/TextArea/TextArea';
import Fieldset from '../../molecules/Fieldset/Fieldset';

const SingleProductFormOrganisms = ({ productId, rate }: { productId: string; rate: number }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const showToast = useToastStore((state) => state.showToast);
    const { session, status } = useSessionStore((state) => state);
    const isAuthenticated = status === 'authenticated' && session.session !== null;

    const formik = useFormik({
        initialValues: {
            comment: '',
            rate: 0
        },
        validationSchema: toFormikValidationSchema(commentProductFromSchema),
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
                // Send both comment and rating requests in parallel
                const [commentResponse, ratingResponse] = await Promise.all([
                    fetcher(ApiKeys.ADD_COMMENT, 'dashboard', 'POST', {
                        body: {
                            body: values.comment,
                            commentable_type: 'product',
                            commentable_id: productId
                        }
                    }),
                    values.rate > 0
                        ? fetcher(ApiKeys.UPSERT_RATING, 'dashboard', 'POST', {
                              body: {
                                  rating: values.rate,
                                  product_id: productId
                              }
                          })
                        : Promise.resolve({ success: true })
                ]);

                if (commentResponse?.success && ratingResponse?.success) {
                    showToast({
                        message: 'دیدگاه و امتیاز شما با موفقیت ثبت شد.',
                        type: 'success',
                        duration: 5000
                    });
                    resetForm();
                } else {
                    showToast({
                        message: commentResponse?.message || ratingResponse?.message || 'خطا در ثبت دیدگاه',
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
        <div className='col-span-12 rounded-2xl bg-white p-4 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-5 md:col-span-4 lg:col-span-4'>
            <div className='mb-6'>
                <div className='mb-3 flex flex-wrap justify-between gap-2'>
                    <span className='text-sm font-bold text-gray-800'>ثبت امتیاز و دیدگاه</span>
                    <Rating
                        value={rate}
                        readOnly
                        halfFillMode='svg'
                        itemStyles={{
                            itemShapes: Star,
                            activeFillColor: '#FFAE55',
                            inactiveFillColor: '#FFE2BD'
                        }}
                        style={{ width: '85px', direction: 'ltr' }}
                    />
                </div>
                <div className='flex flex-wrap items-center justify-between gap-2'>
                    <span className='text-tiny font-normal'>شما هم درباره این کالا دیدگاه ثبت کنید</span>

                    {/* TODO: uncomment that after added this feature in backend */}
                    <span className='text-tiny text-gray-500'>
                        {/* امتیاز 1256 کاربر */}
                        <span className='mr-2 font-semibold text-gray-800'>{rate}</span>
                    </span>
                </div>
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
            <form onSubmit={formik.handleSubmit} action='#'>
                <div className='mb-6 flex flex-wrap items-center justify-between gap-2'>
                    <span className='text-sm font-medium text-gray-800'>ثبت امتیاز</span>

                    <Fieldset name='rate' touched={formik.touched} errors={formik.errors}>
                        <Rating
                            value={formik.values.rate}
                            onChange={(value: number) => {
                                formik.setFieldValue('rate', value);
                            }}
                            onBlur={() => formik.setFieldTouched('rate', true)}
                            halfFillMode='svg'
                            itemStyles={{
                                itemShapes: Star,
                                activeFillColor: '#FFAE55',
                                inactiveFillColor: '#FFE2BD'
                            }}
                            style={{ width: '85px', direction: 'ltr' }}
                            isDisabled={!isAuthenticated}
                        />
                    </Fieldset>
                </div>

                <Fieldset
                    labelClass='text-gray-800 text-sm font-medium'
                    label='ثبت دیدگاه :'
                    name='comment'
                    touched={formik.touched}
                    errors={formik.errors}
                    className=''
                >
                    <TextArea
                        name='comment'
                        rows={8}
                        placeholder='نظر خود را در مورد این کالا با کاربران دیگر به اشتراک بگذارید..'
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

export default SingleProductFormOrganisms;

