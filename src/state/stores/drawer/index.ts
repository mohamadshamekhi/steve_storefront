import { create } from 'zustand';

interface MenuState {
    isOpen: boolean;
    device: 'desktop' | 'mobile';
    open: (device: 'desktop' | 'mobile') => void;
    close: () => void;
    toggle: (device: 'desktop' | 'mobile') => void;
}

export const useDrawerStore = create<MenuState>((set, get) => ({
    isOpen: false,
    device: 'desktop',
    open: (device) => set({ isOpen: true, device }),
    close: () => set({ isOpen: false }),
    toggle: (device) => {
        const { isOpen } = get();
        set({ isOpen: !isOpen, device });
    }
}));
