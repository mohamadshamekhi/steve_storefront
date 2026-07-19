'use client';

import TruckIcon from '@/components/icons/checkout/TruckIcon';
import ChevronLeft from '@/components/icons/ChevronLeft';
import { useSessionStore, useUserPreferencesStore } from '@/state';
import { useModalStore } from '@/state/stores/modal';
import { useEffect, useMemo } from 'react';

function AddressBox() {
    const profile = useSessionStore((state) => state.session.profile);
    const addresses = useMemo(() => profile?.addresses || [], [profile?.addresses]);

    const { activeAddress, activeAddressId, setActiveAddress } = useUserPreferencesStore();
    const openModal = useModalStore((s) => s.openModal);

    // Set default address if none selected
    useEffect(() => {
        if (!activeAddressId && addresses.length > 0) {
            setActiveAddress(addresses[0]);
        }
        // Update active address if it was deleted from addresses
        if (activeAddressId && !addresses.find((a) => a.id === activeAddressId)) {
            setActiveAddress(addresses[0] || null);
        }
    }, [addresses, activeAddressId, setActiveAddress]);

    const displayAddress = activeAddress || addresses[0];

    if (!displayAddress) {
        return (
            <div className='border-primary-400 mb-8 flex flex-wrap items-center gap-5 rounded-md border bg-white p-2.5 sm:p-6'>
                <TruckIcon />
                <div className='grow'>
                    <div className='text-primary-600 mb-2.5 text-sm font-medium'>آدرسی ثبت نشده است</div>
                    <button
                        onClick={() => openModal('addressList')}
                        className='text-primary-600 flex items-center text-xs'
                    >
                        <span className='text-nowrap'>افزودن آدرس</span>
                        <span className='text-primary-400 mr-2'>
                            <ChevronLeft />
                        </span>
                    </button>
                </div>
            </div>
        );
    }

    const addressText = [displayAddress.province, displayAddress.city, displayAddress.street, displayAddress.postcode]
        .filter(Boolean)
        .join(' - ');

    return (
        <div className='border-primary-400 mb-8 flex cursor-pointer flex-wrap items-center gap-5 rounded-md border bg-white p-2.5 sm:p-6'>
            <TruckIcon />

            <div className='grow'>
                <div className='text-primary-600 mb-2.5 text-sm font-medium'>
                    ارسال به {displayAddress.title || 'آدرس انتخاب شده'}
                </div>
                <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-center'>
                    <div className='text-xs-plus grow text-gray-800 sm:text-base sm:font-medium'>{addressText}</div>
                    <button
                        onClick={() => openModal('addressList')}
                        className='text-primary-600 flex cursor-pointer items-center text-xs'
                    >
                        <span className='text-nowrap'>تغییر آدرس</span>
                        <span className='text-primary-400 mr-2'>
                            <ChevronLeft />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddressBox;
