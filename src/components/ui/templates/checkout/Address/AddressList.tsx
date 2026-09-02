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
        <div className='space-y-3'>
            <button
                type='button'
                onClick={handleAddAddress}
                className='border-primary-300 bg-primary-50 text-primary-700 hover:bg-primary-100 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed py-3 text-sm font-medium transition-colors'
            >
                <PlusSquareIcon className='h-5 w-5' />
                افزودن آدرس جدید
            </button>

            {addresses.length === 0 ? (
                <p className='py-8 text-center text-sm text-gray-400'>آدرسی ثبت نشده است</p>
            ) : (
                addresses.map((item) => {
                    const isActive = activeAddressId === item.id;
                    const addressText = [item.province, item.city, item.street].filter(Boolean).join(' - ');

                    return (
                        <button
                            type='button'
                            onClick={() => handleSelectAddress(item)}
                            className={`flex w-full items-start gap-3 rounded-xl border p-4 text-right transition-colors ${
                                isActive
                                    ? 'border-primary-500 bg-primary-50'
                                    : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                            key={item.id}
                        >
                            <LocationIcon
                                className={`mt-0.5 shrink-0 ${isActive ? 'text-primary-600' : 'text-gray-400'}`}
                            />
                            <div className='min-w-0 flex-1'>
                                <div className='text-sm font-semibold text-gray-800'>
                                    {item.title || 'آدرس'}
                                </div>
                                <div className='mt-0.5 line-clamp-2 text-xs text-gray-500'>{addressText}</div>
                            </div>
                            {isActive && (
                                <svg
                                    className='text-primary-600 mt-0.5 h-5 w-5 shrink-0'
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
                        </button>
                    );
                })
            )}
        </div>
    );
};

export default AddressList;
