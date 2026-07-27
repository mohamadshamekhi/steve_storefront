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
import EditIcon from '../icons/dashboard/EditIcon';
import Button from '../ui/atoms/Button/Button';
import Input from '../ui/atoms/Input/Input';
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
        formik.setFieldValue('province', option ? option.label : '');
        formik.setFieldValue('city', '');
        formik.setFieldTouched('province', true);
    };

    const handleCityChange = (option: { value: string; label: string } | null) => {
        formik.setFieldValue('city', option ? option.value : '');
        formik.setFieldTouched('city', true);
    };

    return (
        <>
            <div className='mb-4 flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>آدرس‌های من</h2>
                <Button onClick={handleAddClick} size='sm'>
                    افزودن آدرس جدید
                </Button>
            </div>

            <ul>
                {addresses.length === 0 ? (
                    <li className='py-5 text-center text-gray-400'>آدرسی ثبت نشده است</li>
                ) : (
                    addresses.map((address, index) => (
                        <li
                            key={address.id}
                            className={`border-b border-gray-200 py-5 ${index === addresses.length - 1 ? 'border-0' : ''}`}
                        >
                            <div className='mb-3 flex flex-wrap items-center justify-between gap-2'>
                                <div className='font-semibold'>{address.title}</div>
                                <button onClick={() => handleEditClick(address)} className='cursor-pointer'>
                                    <EditIcon />
                                </button>
                            </div>
                            <div>
                                استان {address.province} - شهر {address.city} - {address.street}
                                {address.postcode && ` - کد پستی: ${address.postcode}`}
                            </div>
                        </li>
                    ))
                )}
            </ul>

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
