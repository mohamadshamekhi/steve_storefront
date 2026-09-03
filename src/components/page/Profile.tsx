'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { profileSchema, ProfileFormValues } from '@/config/schema/profile.schema';
import { useSessionStore } from '@/state';
import { useModalStore } from '@/state/stores/modal';
import { useFormik } from 'formik';
import Image from 'next/image';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Button from '../ui/atoms/Button/Button';
import Input from '../ui/atoms/Input/Input';
import NumericInput from '../ui/atoms/Input/NumericInput';
import Fieldset from '../ui/molecules/Fieldset/Fieldset';
import { Modal } from '../ui/organisms/Modal/CModal';

const Profile = () => {
    const sessionStore = useSessionStore((state) => state.session);
    const updateProfile = useSessionStore((state) => state.updateProfile);

    const openModal = useModalStore((s) => s.openModal);
    const closeModal = useModalStore((s) => s.closeModal);

    const formik = useFormik<ProfileFormValues>({
        initialValues: {
            name: sessionStore?.profile?.name || '',
            phone_number: sessionStore?.profile?.phone_number || ''
        },
        validationSchema: toFormikValidationSchema(profileSchema),
        onSubmit: async (values, { setSubmitting }) => {
            const userId = sessionStore?.profile?._id;
            if (!userId) return;

            const response = await fetcher(`${ApiKeys.UPDATE_PROFILE}/${userId}/update-profile`, 'dashboard', 'PATCH', {
                body: {
                    name: values.name,
                    user_id: userId,
                    phone_number: values.phone_number
                }
            });

            if (response?.success) {
                updateProfile({ name: values.name, phone_number: values.phone_number });
                closeModal('editProfileModal');
            }

            setSubmitting(false);
        }
    });

    const handleEditClick = () => {
        formik.resetForm({
            values: {
                name: sessionStore?.profile?.name || '',
                phone_number: sessionStore?.profile?.phone_number || ''
            }
        });
        openModal('editProfileModal');
    };

    const handleCloseModal = () => {
        closeModal('editProfileModal');
        formik.resetForm();
    };

    const name = sessionStore?.profile?.name;
    const phone = sessionStore?.profile?.phone_number;

    return (
        <>
            <div className='mb-6 flex items-center justify-between gap-3'>
                <h2 className='text-gray-850 text-base font-bold sm:text-lg'>اطلاعات شخصی</h2>
                <button
                    onClick={handleEditClick}
                    className='border-primary-200 bg-primary-50 text-primary-700 hover:bg-primary-100 inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-semibold transition'
                >
                    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' aria-hidden>
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

            <div className='border-gray-100 bg-gray-50/70 mb-6 flex items-center gap-4 rounded-2xl border p-4 sm:p-5'>
                <Image
                    className='ring-primary-100 size-16 shrink-0 rounded-full bg-white object-cover ring-3 sm:size-20'
                    src='/images/_general/placeholder/user.png'
                    alt={name || 'کاربر'}
                    width='80'
                    height='80'
                />
                <div className='min-w-0'>
                    <p className='text-gray-850 truncate text-base font-bold'>{name || 'نام ثبت نشده'}</p>
                    <p className='mt-1 truncate text-sm text-gray-500'>{phone || '—'}</p>
                </div>
            </div>

            <dl className='border-gray-100 divide-y divide-gray-100 overflow-hidden rounded-2xl border'>
                <div className='flex items-center justify-between gap-3 px-4 py-4'>
                    <dt className='text-sm font-medium text-gray-500'>نام</dt>
                    <dd className='text-gray-850 text-sm font-semibold'>{name || 'ثبت نشده'}</dd>
                </div>
                <div className='flex items-center justify-between gap-3 px-4 py-4'>
                    <dt className='text-sm font-medium text-gray-500'>شماره همراه</dt>
                    <dd className='text-gray-850 text-sm font-semibold'>{phone || 'ثبت نشده'}</dd>
                </div>
            </dl>

            <Modal modalKey='editProfileModal' onClose={handleCloseModal} size='sm'>
                <Modal.Header onClose={handleCloseModal}>ویرایش اطلاعات شخصی</Modal.Header>
                <Modal.Body>
                    <div className='flex flex-col gap-4'>
                        <Fieldset name='name' errors={formik.errors} touched={formik.touched}>
                            <label className='mb-1 block text-sm font-medium text-gray-700'>نام</label>
                            <Input
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='نام'
                                className={`max-w-full! ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                            />
                        </Fieldset>
                        <Fieldset name='phone_number' errors={formik.errors} touched={formik.touched}>
                            <label className='mb-1 block text-sm font-medium text-gray-700'>شماره همراه</label>
                            <NumericInput
                                name='phone_number'
                                value={formik.values.phone_number}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='شماره همراه'
                                maxLength={11}
                                className={`max-w-full! ${formik.touched.phone_number && formik.errors.phone_number ? 'border-red-500' : ''}`}
                            />
                        </Fieldset>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline' onClick={handleCloseModal}>
                        انصراف
                    </Button>
                    <Button onClick={() => formik.handleSubmit()} loading={formik.isSubmitting}>
                        ذخیره
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Profile;
