'use client';
import CarIcon from '@/components/icons/CarIcon';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';
import { Radio } from '@/components/ui/atoms/RadioGroup/RadioGroup';
import Fieldset from '@/components/ui/molecules/Fieldset/Fieldset';
import { LeafletMap } from '@/components/ui/molecules/LeafletMap';
import { checkoutFirstStepForm } from '@/config/schema/checkout-forms.schema';
import { useModalStore } from '@/state/stores/modal';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const Addressee = () => {
    const closeModal = useModalStore((s) => s.closeModal);
    const formik = useFormik({
        initialValues: {
            address: '',
            delivery_surname: '',
            delivery_tel: ''
        },
        validationSchema: toFormikValidationSchema(checkoutFirstStepForm),
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        }
    });
    return (
        <div>
            <LeafletMap className='w-full! rounded-lg' center={[35.6892, 51.389]} height='184px' />

            <div className='mt-4 flex items-center gap-2'>
                <CarIcon className='text-primary-600' />
                <span className='font-light text-gray-800'>آمل خ طالب آملی دریای12 پلاک 43</span>
            </div>

            <form onSubmit={formik.handleSubmit} className='mt-4'>
                <Fieldset label='آدرس پستی' name='address' touched={formik.touched} errors={formik.errors}>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type='text'
                        placeholder='آدرس پستی خود را وارد کنید'
                        name='address'
                        className='bg-primary-50 max-w-full border border-gray-300'
                        value={formik.values.address}
                    />
                </Fieldset>

                <Fieldset
                    label='سفارش های این آدرس را چه کسی تحویل می گیرد؟'
                    name='receiver_delivery'
                    touched={formik.touched}
                    errors={formik.errors}
                    className='mt-4'
                >
                    <Radio name='receiver_delivery'>
                        <Radio.Item value='own' id='own' label='خودم'></Radio.Item>
                        <Radio.Item value='other' id='own' label='تحویل به شخص دیگر'></Radio.Item>
                    </Radio>
                </Fieldset>

                <Fieldset
                    label='نام نام خانوادگی تحویل گیرنده'
                    name='delivery_surname'
                    touched={formik.touched}
                    errors={formik.errors}
                    className='mt-4'
                >
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type='text'
                        placeholder='نام نام خانوادگی تحویل گیرنده خود را وارد کنید'
                        name='delivery_surname'
                        className='bg-primary-50 max-w-full border border-gray-300'
                        value={formik.values.delivery_surname}
                    />
                </Fieldset>

                <Fieldset
                    label='شماره تماس'
                    name='delivery_tel'
                    touched={formik.touched}
                    errors={formik.errors}
                    className='mt-4'
                >
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type='tel'
                        placeholder='شماره تماس تحویل گیرنده خود را وارد کنید'
                        name='delivery_tel'
                        className='bg-primary-50 max-w-full border border-gray-300 placeholder:text-right'
                        value={formik.values.delivery_tel}
                    />
                </Fieldset>

                <div className='mt-6 grid grid-cols-12 gap-2'>
                    <Button className='col-span-4' variant='outline' onClick={() => closeModal('addressModal')}>
                        لغو
                    </Button>

                    <Button type='submit' className='col-span-8'>
                        تایید و ادامه
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Addressee;
