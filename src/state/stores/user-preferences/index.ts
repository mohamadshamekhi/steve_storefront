import { AddressItem } from '@/models/auth.model';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IUserPreferencesStore {
    activeAddressId: string | null;
    activeAddress: AddressItem | null;

    // Actions
    setActiveAddress: (address: AddressItem | null) => void;
    setActiveAddressById: (addressId: string, addresses: AddressItem[]) => void;
    clearPreferences: () => void;
}

export const useUserPreferencesStore = create<IUserPreferencesStore>()(
    persist(
        (set) => ({
            activeAddressId: null,
            activeAddress: null,

            setActiveAddress: (address) => {
                set({
                    activeAddress: address,
                    activeAddressId: address?.id || null
                });
            },

            setActiveAddressById: (addressId, addresses) => {
                const address = addresses.find((a) => a.id === addressId) || null;
                set({
                    activeAddress: address,
                    activeAddressId: addressId
                });
            },

            clearPreferences: () => {
                set({
                    activeAddressId: null,
                    activeAddress: null
                });
            }
        }),
        {
            name: 'user-preferences-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                activeAddressId: state.activeAddressId,
                activeAddress: state.activeAddress
            })
        }
    )
);
