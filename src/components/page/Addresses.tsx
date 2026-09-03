'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { addressSchema, AddressFormValues } from '@/config/schema/address.schema';
import { AddressItem } from '@/models/auth.model';
import { useSessionStore } from '@/state';
import { useModalStore } from '@/state/stores/modal';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import Button from '../ui/atoms/Button/Button';
import Input from '../ui/atoms/Input/Input';
import NumericInput from '../ui/atoms/Input/NumericInput';
import CSelect from '../ui/atoms/Select/CSelect';
import Fieldset from '../ui/molecules/Fieldset/Fieldset';
import { Modal } from '../ui/organisms/Modal/CModal';
import locationData from '../../../public/all-of-cities-and-provinces.json';

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

const Addresses = () => {
    const sessionStore = useSessionStore((state) => state.session);
    const updateProfile = useSessionStore((state) => state.updateProfile);
    const addresses: AddressItem[] = sessionStore?.profile?.addresses ?? [];

    const openModal = useModalStore((s) => s.openModal);
    const closeModal = useModalStore((s) => s.closeModal);

    const [selectedAddress, setSelectedAddress] = useState<AddressItem | null>(null);
    const [isAddMode, setIsAddMode] = useState(false);
    const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>(null);
    const [formInitialValues, setFormInitialValues] = useState<AddressFormValues>({
        title: '', province: '', city: '', street: '', postcode: ''
    });

    const formik = useFormik<AddressFormValues>({
        initialValues: formInitialValues,
        enableReinitialize: true,
        validationSchema: toFormikValidationSchema(addressSchema),
        onSubmit: async (values, { setSubmitting }) => {
            if (isAddMode) {
                const response = await fetcher(ApiKeys.ADD_ADDRESS, 'dashboard', 'POST', {
                    body: values
                });
                if (response?.success && response?.data) {
                    const addressId = response.data.id || response.data._id;
                    const newAddress: AddressItem = { id: addressId, ...values };
                    updateProfile({ addresses: [...addresses, newAddress] });
                    handleCloseModal();
                }
            } else if (selectedAddress) {
                const response = await fetcher(`${ApiKeys.UPDATE_ADDRESS}/${selectedAddress.id}`, 'dashboard', 'POST', {
                    body: values
                });
                if (response?.success) {
                    const updatedAddresses = addresses.map((addr) =>
                        addr.id === selectedAddress.id ? { ...addr, ...values } : addr
                    );
                    updateProfile({ addresses: updatedAddresses });
                    handleCloseModal();
                }
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

    const handleEditClick = (address: AddressItem) => {
        setSelectedAddress(address);
        setIsAddMode(false);
        const matchedProvince = allLocations.find(
            (l) => l.type === 'province' && l.name === address.province
        );
        setSelectedProvinceId(matchedProvince ? String(matchedProvince.id) : null);
        setFormInitialValues({
            title: address.title,
            province: address.province,
            city: address.city,
            street: address.street,
            postcode: address.postcode || ''
        });
        openModal('addressModal');
    };

    const handleAddClick = () => {
        setSelectedAddress(null);
        setIsAddMode(true);
        setSelectedProvinceId(null);
        setFormInitialValues({ title: '', province: '', city: '', street: '', postcode: '' });
        openModal('addressModal');
    };

    const handleCloseModal = () => {
        closeModal('addressModal');
        setSelectedAddress(null);
        setIsAddMode(false);
        setSelectedProvinceId(null);
        setFormInitialValues({ title: '', province: '', city: '', street: '', postcode: '' });
    };

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
        <>
            <div className='mb-6 flex items-center justify-between gap-3'>
                <h2 className='text-gray-850 text-base font-bold sm:text-lg'>آدرس‌های من</h2>
                <Button onClick={handleAddClick} size='sm'>
                    افزودن آدرس جدید
                </Button>
            </div>

            {addresses.length === 0 ? (
                <div className='rounded-2xl border border-dashed border-gray-200 py-10 text-center text-sm text-gray-400'>
                    هنوز آدرسی ثبت نکرده‌اید
                </div>
            ) : (
                <ul className='flex flex-col gap-3'>
                    {addresses.map((address) => (
                        <li
                            key={address.id}
                            className='rounded-2xl border border-gray-100 bg-white p-4 shadow-sm'
                        >
                            <div className='mb-2 flex flex-wrap items-start justify-between gap-2'>
                                <div className='flex items-center gap-2 font-bold text-gray-900'>
                                    <svg width='16' height='16' viewBox='0 0 18 18' fill='none' aria-hidden>
                                        <path
                                            d='M9 9.375A2.25 2.25 0 1 0 9 4.875a2.25 2.25 0 0 0 0 4.5Z'
                                            className='stroke-primary-500'
                                            strokeWidth='1.125'
                                        />
                                        <path
                                            d='M9 16.5c1.5-3 6-4.936 6-9a6 6 0 0 0-12 0c0 4.064 4.5 6 6 9Z'
                                            className='stroke-primary-500'
                                            strokeWidth='1.125'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                    {address.title}
                                </div>
                                <button
                                    onClick={() => handleEditClick(address)}
                                    className='border-primary-200 bg-primary-50 text-primary-700 hover:bg-primary-100 inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition'
                                >
                                    <svg width='13' height='13' viewBox='0 0 24 24' fill='none' aria-hidden>
                                        <path
                                            d='M4 20h4L18.5 9.5a2.121 2.121 0 0 0-3-3L5 17v3Z M13.5 6.5l3 3'
                                            className='stroke-current'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                    ویرایش
                                </button>
                            </div>
                            <p className='text-sm leading-7 text-gray-600'>
                                استان {address.province} – شهر {address.city} – {address.street}
                                {address.postcode && ` – کد پستی: ${address.postcode}`}
                            </p>
                        </li>
                    ))}
                </ul>
            )}

            <Modal modalKey='addressModal' onClose={handleCloseModal} size='sm'>
                <Modal.Header onClose={handleCloseModal}>{isAddMode ? 'افزودن آدرس جدید' : 'ویرایش آدرس'}</Modal.Header>
                <Modal.Body>
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
                            <NumericInput
                                name='postcode'
                                value={formik.values.postcode}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='کد پستی ۱۰ رقمی'
                                maxLength={10}
                                className={`max-w-full! ${formik.touched.postcode && formik.errors.postcode ? 'border-red-500' : ''}`}
                            />
                        </Fieldset>
                        <div className='mt-2 grid grid-cols-12 gap-2'>
                            <Button onClick={handleCloseModal} className='col-span-4' variant='outline'>
                                لغو
                            </Button>
                            <Button
                                className='col-span-8'
                                onClick={() => formik.handleSubmit()}
                                loading={formik.isSubmitting}
                            >
                                ذخیره آدرس
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Addresses;
