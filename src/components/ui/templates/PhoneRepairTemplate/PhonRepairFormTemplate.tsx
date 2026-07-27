'use client';

import { fetcher, mediaUploader } from '@/api';
import ApiKeys from '@/api/keys';
import phoneRepairValidationSchema from '@/config/schema/phone-repair';
import Brand from '@/config/types/brand.types';
import ROUTES from '@/constants/routes/routes.constant';
import { useToast } from '@/hooks/useToast';
import { useModalStore } from '@/state/stores/modal';
import { useSessionStore } from '@/state/stores/auth';
import v1 from '@public/images/phone-sales/vector-top-to-right.png';
import starImg from '@public/images/phone-repair/star.png';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Button from '../../atoms/Button/Button';
import Dropzone from '../../atoms/Dropzone/Dropzone';
import SelectInput from '../../atoms/SelectInput ';
import TextArea from '../../atoms/TextArea/TextArea';
import Fieldset from '../../molecules/Fieldset/Fieldset';
import Container from '../../organisms/Container/Container';
import { Modal } from '../../organisms/Modal/CModal';
import PhoneRepairFormWrapper from '../../organisms/PhoneRepair/PhoneRepairFormWrapper';
import { ProductProps } from '../../organisms/ProductsOrganisms/product.types';

const LOGIN_MODAL_KEY = 'phone-repair-login-modal';

const PhonRepairFormTemplate = ({ brands }: { brands: Brand[] }) => {
    const { showToast } = useToast();
    const { openModal, closeModal } = useModalStore();
    const { status } = useSessionStore();

    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [productsLoading, setProductsLoading] = useState<boolean>(false);
    const [uploadedImage, setUploadedImage] = useState<{ media_id: string; url: string } | null>(null);
    const [dropzoneKey, setDropzoneKey] = useState<number>(0);

    const isAuthenticated = status === 'authenticated';

    useEffect(() => {
        if (status !== 'loading' && !isAuthenticated) {
            openModal(LOGIN_MODAL_KEY);
        }
    }, [status, isAuthenticated, openModal]);

    type InputItem = { id: string; name: string };
    type OutputItem = { value: string; label: string };

    function mapToSelectOptions(items: InputItem[]): OutputItem[] {
        return items.map((item) => ({
            value: item.id,
            label: item.name ?? ''
        }));
    }

    function mapProductsToSelectOptions(products: ProductProps[]): OutputItem[] {
        return products.map((product) => ({
            value: product.id ?? '',
            label: product.name ?? ''
        }));
    }

    const formik = useFormik({
        initialValues: {
            brand_id: '',
            product_id: '',
            description: '',
            image: null as File | null
        },
        validationSchema: toFormikValidationSchema(phoneRepairValidationSchema),
        onSubmit: async (values) => {
            if (!isAuthenticated) {
                openModal(LOGIN_MODAL_KEY);
                return;
            }

            setLoading(true);

            try {
                const { message, success } = await fetcher(ApiKeys.POST_PHONE_REPAIR, 'dashboard', 'POST', {
                    body: {
                        brand_id: values.brand_id,
                        product_id: values.product_id,
                        description: values.description,
                        galleries: uploadedImage ? [uploadedImage] : []
                    }
                });

                if (success) {
                    showToast({
                        title: 'درخواست تعمیر شما با موفقیت ثبت شد',
                        message: message,
                        type: 'success'
                    });
                    formik.resetForm();
                    setProducts([]);
                    setUploadedImage(null);
                    setDropzoneKey((prev) => prev + 1);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    });

    useEffect(() => {
        const fetchProducts = async () => {
            if (!formik.values.brand_id) {
                setProducts([]);
                return;
            }

            setProductsLoading(true);
            try {
                const { data, success } = await fetcher(
                    `${ApiKeys.GET_Products}?brand_id=${formik.values.brand_id}`,
                    'web',
                    'GET'
                );

                if (success && data?.products) {
                    setProducts(data.products);
                } else {
                    setProducts([]);
                }
            } catch (error) {
                console.log(error);
                setProducts([]);
            } finally {
                setProductsLoading(false);
            }
        };

        fetchProducts();
        formik.setFieldValue('product_id', '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.brand_id]);

    const [uploading, setUploading] = useState<boolean>(false);

    const handleFileChange = async (file: File | null) => {
        formik.setFieldValue('image', file);
        if (file) {
            setUploading(true);
            try {
                const result = await mediaUploader({
                    file,
                    domain: 'repair',
                    isPublic: true,
                    convertToWebp: true
                });

                if (result.success && result.data) {
                    setUploadedImage({
                        media_id: result.data.id,
                        url: result.data.url
                    });
                } else {
                    showToast({
                        title: 'خطا در آپلود تصویر',
                        message: result.message || 'مشکلی در آپلود تصویر پیش آمد',
                        type: 'error'
                    });
                    setUploadedImage(null);
                }
            } catch (error) {
                console.log(error);
                showToast({
                    title: 'خطا در آپلود تصویر',
                    message: 'مشکلی در آپلود تصویر پیش آمد',
                    type: 'error'
                });
                setUploadedImage(null);
            } finally {
                setUploading(false);
            }
        } else {
            setUploadedImage(null);
        }
    };

    return (
        <>
            <Modal
                modalKey={LOGIN_MODAL_KEY}
                size='sm'
                onClose={() => closeModal(LOGIN_MODAL_KEY)}
            >
                <Modal.Header onClose={() => closeModal(LOGIN_MODAL_KEY)}>
                    <h3 className='text-lg font-bold text-center'>ورود به حساب کاربری</h3>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <p className='text-gray-600 mb-6'>
                        برای ثبت درخواست تعمیر، ابتدا باید وارد حساب کاربری خود شوید.
                    </p>
                    <Link href={ROUTES.Login}>
                        <Button color='primary' className='w-full'>
                            ورود / ثبت‌نام
                        </Button>
                    </Link>
                </Modal.Body>
            </Modal>

            <Container>
                <section className='relative pt-5 md:pt-[83px]'>
                    <Image src={starImg} alt='steve' width={63} height={60} className='blur-[6px]' loading='lazy' />

                    <div className='absolute -bottom-40 left-10 -z-1 lg:z-20 lg:flex'>
                        <Image
                            src={v1}
                            alt='steve'
                            width={191}
                            height={246}
                            loading='lazy'
                            className='relative -right-2 hidden md:block lg:-right-7'
                        />
                    </div>
                    <div className='border-primary-100 mx-auto max-w-[887px] rounded-lg border bg-white p-4 md:p-6 lg:p-[45px]'>
                        <h2 className='text-subtitle1-bold text-center text-gray-800'>
                            تعمیر تخصصی گوشی با قطعات اصلی و ضمانت معتبر
                        </h2>

                        <PhoneRepairFormWrapper loading={loading || uploading} onSubmit={formik.handleSubmit}>
                            <Fieldset
                                label='برند'
                                name='brand_id'
                                touched={formik.touched}
                                errors={formik.errors}
                                className='mb-8'
                            >
                                <SelectInput
                                    name='brand_id'
                                    options={brands ? mapToSelectOptions(brands) : []}
                                    value={formik.values.brand_id}
                                    error={Boolean(formik.touched.brand_id && formik.errors.brand_id)}
                                    onChange={(val) => formik.setFieldValue('brand_id', val)}
                                    isSearchable={true}
                                />
                            </Fieldset>

                            <Fieldset
                                label='محصول'
                                name='product_id'
                                touched={formik.touched}
                                errors={formik.errors}
                                className='mb-8'
                            >
                                <SelectInput
                                    name='product_id'
                                    options={products ? mapProductsToSelectOptions(products) : []}
                                    value={formik.values.product_id}
                                    error={Boolean(formik.touched.product_id && formik.errors.product_id)}
                                    onChange={(val) => formik.setFieldValue('product_id', val)}
                                    isSearchable={true}
                                    isLoading={productsLoading}
                                    isDisabled={!formik.values.brand_id || productsLoading}
                                />
                            </Fieldset>

                            <Fieldset
                                label='توضیحات'
                                name='description'
                                touched={formik.touched}
                                errors={formik.errors}
                                direction='horizontal'
                                className='lg:col-span-1 [&>div:first-child]:flex [&>div:first-child]:flex-col'
                            >
                                <TextArea
                                    className='bg-primary-50 resize-none rounded-lg border border-gray-300'
                                    placeholder='اطلاعات تکمیلی را وارد کنید'
                                    name='description'
                                    rows={5}
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                />
                            </Fieldset>

                            <Dropzone
                                key={dropzoneKey}
                                className='mt-8'
                                onFileChange={handleFileChange}
                                placeholder='عکس گوشی را انتخاب یا بکشید اینجا'
                            />
                        </PhoneRepairFormWrapper>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default PhonRepairFormTemplate;
