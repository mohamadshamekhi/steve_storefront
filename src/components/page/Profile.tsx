'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { profileSchema, ProfileFormValues } from '@/config/schema/profile.schema';
import { useSessionStore } from '@/state';
import { useModalStore } from '@/state/stores/modal';
import { useFormik } from 'formik';
import Image from 'next/image';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import EditIcon from '../icons/dashboard/EditIcon';
import Button from '../ui/atoms/Button/Button';
import Input from '../ui/atoms/Input/Input';
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

    return (
        <>
            <div className='mb-4 flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>اطلاعات شخصی</h2>
                <button onClick={handleEditClick} className='flex cursor-pointer items-center gap-0.5'>
                    <EditIcon />
                    <span className='text-sm font-semibold text-[#2596C9]'>ویرایش</span>
                </button>
            </div>

            <ul className='*:border-b *:border-gray-200 *:py-5 *:last:border-0'>
                <li>
                    <Image
                        className='max-w-[60px] rounded-full'
                        src='/images/_general/placeholder/user.png'
                        alt={sessionStore?.profile?.name || 'کاربر'}
                        width='60'
                        height='60'
                    />
                </li>
                <li className='flex items-center gap-3'>
                    <span className='basis-1/5 font-semibold text-gray-400'>نام</span>
                    <span className='font-semibold text-gray-600'>{sessionStore?.profile?.name || 'نام ثبت نشده'}</span>
                </li>
                <li className='flex items-center gap-3'>
                    <span className='basis-1/5 font-semibold text-gray-400'>شماره همراه</span>
                    <span className='font-semibold text-gray-600'>{sessionStore?.profile?.phone_number}</span>
                </li>
            </ul>

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
                            <Input
                                name='phone_number'
                                value={formik.values.phone_number}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='شماره همراه'
                                inputMode='numeric'
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
