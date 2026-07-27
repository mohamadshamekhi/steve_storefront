import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';
import CSelect from '@/components/ui/atoms/Select/CSelect';
import Fieldset from '@/components/ui/molecules/Fieldset/Fieldset';
import { useFormik } from 'formik';

const AddressInformation = () => {
    const formik = useFormik({
        initialValues: {
            phoneNumber: ''
        },
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        }
    });

    const options = [
        {
            label: '1',
            value: '1'
        },
        {
            label: '2',
            value: '2'
        }
    ];

    return (
        <>
            <div className='grid gap-3 md:gap-4 lg:grid-cols-2'>
                <Fieldset
                    label='استان'
                    name='model'
                    touched={formik.touched}
                    errors={formik.errors}
                    className='lg:col-span-1'
                >
                    <CSelect
                        name='model'
                        options={options}
                        isSearchable={true}
                        placeholder='استان خود را انتخاب کنید.'
                    />
                </Fieldset>

                <Fieldset
                    label='شهر'
                    name='model'
                    touched={formik.touched}
                    errors={formik.errors}
                    className='lg:col-span-1'
                >
                    <CSelect name='model' options={options} isSearchable={true} placeholder='شهر خود را انتخاب کنید.' />
                </Fieldset>

                <Fieldset
                    label='آدرس پستی'
                    name='model'
                    touched={formik.touched}
                    errors={formik.errors}
                    className='lg:col-span-2'
                >
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type='text'
                        placeholder='آدرس پستی خود را وارد کنید'
                        name='address'
                        className='bg-primary-50 max-w-full border border-gray-300'
                    />
                </Fieldset>

                <Fieldset
                    label='پلاک'
                    name='pelak'
                    touched={formik.touched}
                    errors={formik.errors}
                    className='lg:col-span-1'
                >
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        type='text'
                        placeholder='پلاک خود را وارد کنید.'
                        name='address'
                        className='bg-primary-50 max-w-full border border-gray-300'
                    />
                </Fieldset>

                <Fieldset
                    label='واحد'
                    name='vahed'
                    touched={formik.touched}
                    errors={formik.errors}
                    className='lg:col-span-1'
                >
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        type='text'
                        placeholder='واحد خود را وارد کنید.'
                        name='address'
                        className='bg-primary-50 max-w-full border border-gray-300'
                    />
                </Fieldset>

                <Fieldset
                    label='کد پستی'
                    name='vahed'
                    touched={formik.touched}
                    errors={formik.errors}
                    className='lg:col-span-2'
                >
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        type='text'
                        placeholder='باید ۱۰ رقم باشد'
                        name='address'
                        className='bg-primary-50 max-w-full border border-gray-300'
                    />
                </Fieldset>
            </div>

            <div className='mt-6 grid grid-cols-12 gap-2'>
                <Button onClick={() => {}} className='col-span-4' variant='outline'>
                    لغو
                </Button>
                <Button className='col-span-8' onClick={() => {}}>
                    تایید و ادامه
                </Button>
            </div>
        </>
    );
};

export default AddressInformation;
