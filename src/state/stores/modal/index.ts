import { create } from 'zustand';

interface ModalState {
    openModals: string[];
    openModal: (key: string) => void;
    closeModal: (key: string) => void;
}

export const useModalStore = create<ModalState>((set) => ({
    openModals: [],
    openModal: (key) =>
        set((state) => ({
            openModals: [...state.openModals, key]
        })),
    closeModal: (key) =>
        set((state) => ({
            openModals: state.openModals.filter((k) => k !== key)
        }))
}));
