'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { addressSchema, AddressFormValues } from '@/config/schema/address.schema';
import { useSessionStore, useUserPreferencesStore } from '@/state';
import { useModalStore } from '@/state/stores/modal';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';
import CSelect from '@/components/ui/atoms/Select/CSelect';
import Fieldset from '@/components/ui/molecules/Fieldset/Fieldset';
import locationData from '../../../../../../public/all-of-cities-and-provinces.json';

type LocationItem = {
    id: number;
    name: string;
    slug: string;
    type: string;
    province_id?: number;
};

const allLocations = locationData as LocationItem[];

const provinces = allLocations
    .filter((l) => l.type === 'province')
    .map((p) => ({ value: String(p.id), label: p.name }));

const AddAddressForm = () => {
    const updateProfile = useSessionStore((state) => state.updateProfile);
    const { setActiveAddress } = useUserPreferencesStore();
    const { closeModal } = useModalStore();

    const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>(null);

    const formik = useFormik<AddressFormValues>({
        initialValues: { title: '', province: '', city: '', street: '', postcode: '' },
        validationSchema: toFormikValidationSchema(addressSchema),
        onSubmit: async (values, { setSubmitting }) => {
            const response = await fetcher(ApiKeys.ADD_ADDRESS, 'dashboard', 'POST', {
                body: values
            });

            if (response?.success) {
                const profileResponse = await fetcher(ApiKeys.ME, 'dashboard', 'POST', {
                    requiredAuth: true
                });

                if (profileResponse?.success && profileResponse?.data?.user) {
                    const updatedAddresses = profileResponse.data.user.addresses || [];
                    updateProfile({ addresses: updatedAddresses });

                    if (updatedAddresses.length > 0) {
                        const newestAddress = updatedAddresses[updatedAddresses.length - 1];
                        setActiveAddress(newestAddress);
                    }
                }

                closeModal('addAddress');
                closeModal('addressList');
            }

            setSubmitting(false);
        }
    });

    const cityOptions = useMemo(() => {
        if (!selectedProvinceId) return [];
        return allLocations
            .filter((l) => l.type === 'city' && String(l.province_id) === selectedProvinceId)
            .map((c) => ({ value: c.name, label: c.name }));
    }, [selectedProvinceId]);

    const handleProvinceChange = (option: { value: string; label: string } | null) => {
        setSelectedProvinceId(option ? option.value : null);
        // `setValues` (not two separate `setFieldValue` calls) so province and
        // city update together in a single validation pass. Two sequential
        // setFieldValue calls each validate against a snapshot of `values`
        // taken *before either update landed*, so the second call's validation
        // could still see the old empty province and briefly flash its error.
        formik.setValues({
            ...formik.values,
            province: option ? option.label : '',
            city: ''
        });
        // `false` skips setFieldTouched's own (redundant) validation pass, which
        // would otherwise run against that same stale, pre-update snapshot.
        formik.setFieldTouched('province', true, false);
    };

    const handleCityChange = (option: { value: string; label: string } | null) => {
        formik.setFieldValue('city', option ? option.value : '');
        formik.setFieldTouched('city', true, false);
    };

    return (
        <div className='flex flex-col gap-4'>
            <Fieldset name='title' errors={formik.errors} touched={formik.touched}>
                <label className='mb-1 block text-sm font-medium text-gray-700'>عنوان آدرس</label>
                <Input
                    name='title'
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='مثلا: خانه، محل کار'
                    className={`max-w-full! ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
                />
            </Fieldset>
            <div className='grid grid-cols-2 gap-4'>
                <Fieldset name='province' errors={formik.errors} touched={formik.touched}>
                    <label className='mb-1 block text-sm font-medium text-gray-700'>استان</label>
                    <CSelect
                        name='province'
                        options={provinces}
                        value={
                            selectedProvinceId
                                ? provinces.find((p) => p.value === selectedProvinceId) ?? null
                                : null
                        }
                        onChange={handleProvinceChange}
                        isSearchable
                        placeholder='انتخاب استان'
                        error={Boolean(formik.touched.province && formik.errors.province)}
                    />
                </Fieldset>
                <Fieldset name='city' errors={formik.errors} touched={formik.touched}>
                    <label className='mb-1 block text-sm font-medium text-gray-700'>شهر</label>
                    <CSelect
                        name='city'
                        options={cityOptions}
                        value={
                            formik.values.city
                                ? cityOptions.find((c) => c.value === formik.values.city) ?? null
                                : null
                        }
                        onChange={handleCityChange}
                        isSearchable
                        isDisabled={!selectedProvinceId}
                        placeholder='انتخاب شهر'
                        error={Boolean(formik.touched.city && formik.errors.city)}
                    />
                </Fieldset>
            </div>
            <Fieldset name='street' errors={formik.errors} touched={formik.touched}>
                <label className='mb-1 block text-sm font-medium text-gray-700'>آدرس کامل</label>
                <Input
                    name='street'
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='خیابان، کوچه، پلاک، واحد'
                    className={`max-w-full! ${formik.touched.street && formik.errors.street ? 'border-red-500' : ''}`}
                />
            </Fieldset>
            <Fieldset name='postcode' errors={formik.errors} touched={formik.touched}>
                <label className='mb-1 block text-sm font-medium text-gray-700'>کد پستی</label>
                <Input
                    name='postcode'
                    value={formik.values.postcode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='کد پستی ۱۰ رقمی'
                    inputMode='numeric'
                    maxLength={10}
                    className={`max-w-full! ${formik.touched.postcode && formik.errors.postcode ? 'border-red-500' : ''}`}
                />
            </Fieldset>

            <div className='mt-2 grid grid-cols-12 gap-2'>
                <Button onClick={() => closeModal('addAddress')} className='col-span-4' variant='outline'>
                    لغو
                </Button>
                <Button className='col-span-8' onClick={() => formik.handleSubmit()} loading={formik.isSubmitting}>
                    ذخیره آدرس
                </Button>
            </div>
        </div>
    );
};

export default AddAddressForm;
