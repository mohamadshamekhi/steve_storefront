import { create } from 'zustand';

interface AccordionState {
    activeKey: string[];
    type: 'single' | 'multiple';
    setType: (value: 'single' | 'multiple') => void;
    setActiveKey: (key: string) => void;
}

export const useAccordionStore = create<AccordionState>((set) => ({
    activeKey: ['0'],
    type: 'single',
    setType: (value) => set({ type: value }),

    setActiveKey: (key) =>
        set((state) => {
            if (state.type === 'single') return { activeKey: [key] };
            else {
                const isActive = state.activeKey.includes(key);
                return {
                    activeKey: isActive ? state.activeKey.filter((k) => k !== key) : [...state.activeKey, key]
                };
            }
        }),
    resetActiveKey: () => set({ activeKey: [] })
}));
