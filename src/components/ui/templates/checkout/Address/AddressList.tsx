'use client';

import LocationIcon from '@/components/icons/LocationIcon';
import PlusSquareIcon from '@/components/icons/PlusSquareIcon';
import { useSessionStore, useUserPreferencesStore } from '@/state';
import { useModalStore } from '@/state/stores/modal';

const AddressList = () => {
    const profile = useSessionStore((state) => state.session.profile);
    const addresses = profile?.addresses || [];

    const { activeAddressId, setActiveAddress } = useUserPreferencesStore();
    const { openModal, closeModal } = useModalStore();

    const handleSelectAddress = (address: (typeof addresses)[0]) => {
        setActiveAddress(address);
        closeModal('addressList');
    };

    const handleAddAddress = () => {
        openModal('addAddress');
    };

    return (
        <div className='space-y-4'>
            <div
                onClick={handleAddAddress}
                className='bg-primary-100 flex cursor-pointer items-center rounded-md p-4 transition-colors hover:bg-primary-200'
            >
                <PlusSquareIcon className='text-primary-900 ml-2' />
                <span>افزودن آدرس</span>
            </div>

            {addresses.length === 0 ? (
                <div className='py-8 text-center text-gray-500'>آدرسی ثبت نشده است</div>
            ) : (
                addresses.map((item) => {
                    const isActive = activeAddressId === item.id;
                    const addressText = [item.province, item.city, item.street].filter(Boolean).join(' - ');

                    return (
                        <div
                            onClick={() => handleSelectAddress(item)}
                            className={`flex cursor-pointer items-center justify-between rounded-md p-4 transition-colors ${
                                isActive ? 'bg-primary-200 border-primary-500 border' : 'bg-primary-100 hover:bg-primary-150'
                            }`}
                            key={item.id}
                        >
                            <div className='flex items-center'>
                                <LocationIcon className='text-primary-900 ml-2' />
                                <div>
                                    <div className='text-sm font-medium text-gray-900'>{item.title}</div>
                                    <span className='text-sm font-normal text-gray-600'>{addressText}</span>
                                </div>
                            </div>
                            {isActive && (
                                <svg
                                    className='text-primary-600 h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M5 13l4 4L19 7'
                                    />
                                </svg>
                            )}
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default AddressList;
