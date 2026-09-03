'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import SubtractIcon from '@/components/icons/phoneSales/SubtractIcon';
import phoneSalesValidationSchema from '@/config/schema/phone-sales';
import Brand from '@/config/types/brand.types';
import ROUTES from '@/constants/routes/routes.constant';
import { useToast } from '@/hooks/useToast';
import { useSessionStore } from '@/state/stores/auth';
import { useModalStore } from '@/state/stores/modal';
import v2 from '@public/images/phone-sales/vector-top-to-left.png';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Button from '../../atoms/Button/Button';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import NumericInput from '../../atoms/Input/NumericInput';
import SelectInput from '../../atoms/SelectInput ';
import TextArea from '../../atoms/TextArea/TextArea';
import Fieldset from '../../molecules/Fieldset/Fieldset';
import Container from '../../organisms/Container/Container';
import { Modal } from '../../organisms/Modal/CModal';
import PhoneSalesFormWrapper from '../../organisms/PhoneSales/PhoneSalesFormWrapper';
import { ProductProps } from '../../organisms/ProductsOrganisms/product.types';

const LOGIN_MODAL_KEY = 'phone-sales-login-modal';

const PhonSalesFormTemplate = ({ brands }: { brands: Brand[] }) => {
    const { showToast } = useToast();
    const { openModal, closeModal } = useModalStore();
    const { status } = useSessionStore();

    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [productsLoading, setProductsLoading] = useState<boolean>(false);

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

    const formik = useFormik({
        initialValues: {
            brand_id: '',
            product_id: '',
            color: '',
            register_status: false,
            physical_condition: '',
            battery_health: '',
            description: ''
        },
        validationSchema: toFormikValidationSchema(phoneSalesValidationSchema),
        onSubmit: async (values) => {
            if (!isAuthenticated) {
                openModal(LOGIN_MODAL_KEY);
                return;
            }

            setLoading(true);

            try {
                const { message, success } = await fetcher(ApiKeys.POST_PHONE_SALES, 'dashboard', 'POST', {
                    body: {
                        ...values,
                        register_status: values.register_status ? 'رجیستر' : 'رجیستر نشده'
                    }
                });

                if (success) {
                    showToast({
                        title: 'درخواست فروش شما با موفقیت ثبت شد',
                        message: message,
                        type: 'success'
                    });
                    formik.resetForm();
                    setProducts([]);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    });

    function mapProductsToSelectOptions(products: ProductProps[]): OutputItem[] {
        return products.map((product) => ({
            value: product.id ?? '',
            label: product.name ?? ''
        }));
    }

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

    return (
        <>
            <Modal modalKey={LOGIN_MODAL_KEY} size='sm' onClose={() => closeModal(LOGIN_MODAL_KEY)}>
                <Modal.Header onClose={() => closeModal(LOGIN_MODAL_KEY)}>
                    <h3 className='text-center text-lg font-bold'>ورود به حساب کاربری</h3>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <p className='mb-6 text-gray-600'>برای ثبت درخواست فروش، ابتدا باید وارد حساب کاربری خود شوید.</p>
                    <Link href={ROUTES.Login}>
                        <Button color='primary' className='w-full'>
                            ورود / ثبت‌نام
                        </Button>
                    </Link>
                </Modal.Body>
            </Modal>

            <Container>
                <section className='relative'>
                    <div className='absolute right-10 -bottom-40 -z-1 lg:z-20 lg:flex'>
                        <SubtractIcon />
                        <Image src={v2} alt='asda' width={191} height={246} className='relative -right-7' />
                    </div>
                    <div className='border-primary-100 mx-auto max-w-[887px] rounded-lg border bg-white p-4 md:p-6 lg:p-[45px]'>
                        <h2 className='text-subtitle1-bold text-center'>درخواست فروش رو اینجا ثبت کن</h2>

                        <div className='text-body1-regular mt-3 mb-9 text-center'>
                            بعد از ثبت درخواست منتظر بمانید تا کارشناسان استیو با شما تماس بگیرند
                        </div>

                        <PhoneSalesFormWrapper onSubmit={formik.handleSubmit} loading={loading}>
                            <div className='block lg:grid lg:grid-cols-2 lg:gap-x-[17px] lg:gap-y-[32px]'>
                                <Fieldset
                                    label='برند'
                                    name='brand_id'
                                    touched={formik.touched}
                                    errors={formik.errors}
                                    className='mb-4 lg:col-span-2 lg:mb-0'
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
                                    className='mb-4 lg:col-span-2 lg:mb-0'
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
                                    className='mb-4 lg:mb-0'
                                    label='رنگ'
                                    name='color'
                                    touched={formik.touched}
                                    errors={formik.errors}
                                >
                                    <SelectInput
                                        name='color'
                                        options={[
                                            { label: 'مشکی', value: 'black' },
                                            { label: 'سفید', value: 'white' },
                                            { label: 'قرمز', value: 'red' },
                                            { label: 'آبی', value: 'blue' },
                                            { label: 'سبز', value: 'green' },
                                            { label: 'زرد', value: 'yellow' },
                                            { label: 'نارنجی', value: 'orange' },
                                            { label: 'بنفش', value: 'purple' },
                                            { label: 'صورتی', value: 'pink' },
                                            { label: 'طلایی', value: 'gold' },
                                            { label: 'نقره‌ای', value: 'silver' },
                                            { label: 'خاکستری', value: 'gray' },
                                            { label: 'قهوه‌ای', value: 'brown' },
                                            { label: 'بژ', value: 'beige' },
                                            { label: 'فیروزه‌ای', value: 'cyan' },
                                            { label: 'سرمه‌ای', value: 'navy' }
                                        ]}
                                        value={formik.values.color}
                                        error={Boolean(formik.touched.color && formik.errors.color)}
                                        onChange={(val) => formik.setFieldValue('color', val)}
                                        isSearchable={true}
                                    />
                                </Fieldset>

                                <Fieldset
                                    label='وضعیت سلامت باطری'
                                    name='battery_health'
                                    touched={formik.touched}
                                    errors={formik.errors}
                                    className='mb-4 lg:mb-0'
                                >
                                    <NumericInput
                                        name='battery_health'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.battery_health}
                                        placeholder='مثلاً ۸۵'
                                        maxLength={3}
                                        className={`w-full max-w-full! ${formik.touched.battery_health && formik.errors.battery_health ? 'border-red-500' : ''}`}
                                    />
                                </Fieldset>

                                <Fieldset
                                    label='وضعیت ظاهری'
                                    name='physical_condition'
                                    touched={formik.touched}
                                    errors={formik.errors}
                                    className='mb-4 lg:mb-0'
                                >
                                    <SelectInput
                                        value={formik.values.physical_condition}
                                        error={Boolean(
                                            formik.touched.physical_condition && formik.errors.physical_condition
                                        )}
                                        onChange={(val) => formik.setFieldValue('physical_condition', val)}
                                        name='physical_condition'
                                        options={[
                                            { label: 'سالم', value: 'سالم' },
                                            { label: 'ناسالم', value: 'ناسالم' }
                                        ]}
                                        isSearchable={true}
                                    />
                                </Fieldset>

                                <Fieldset
                                    label={
                                        <label htmlFor='register_status' className='cursor-pointer'>
                                            وضعیت ریجستر
                                        </label>
                                    }
                                    name='register_status'
                                    touched={formik.touched}
                                    errors={formik.errors}
                                    className='mb-4 flex justify-center lg:mb-0'
                                >
                                    <Checkbox
                                        id='register_status'
                                        name='register_status'
                                        checked={formik.values.register_status}
                                        onChange={(checked) => formik.setFieldValue('register_status', checked)}
                                    />
                                </Fieldset>

                                <Fieldset
                                    className='col-span-2'
                                    label='توضیحات'
                                    name='description'
                                    touched={formik.touched}
                                    errors={formik.errors}
                                >
                                    <TextArea
                                        className='block w-full'
                                        name='description'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.description}
                                        error={Boolean(formik.touched.description && formik.errors.description)}
                                    />
                                </Fieldset>
                            </div>
                        </PhoneSalesFormWrapper>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default PhonSalesFormTemplate;
