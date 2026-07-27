import { useToastStore } from '@/state';

export const useToast = () => {
    const showToast = useToastStore((state) => state.showToast);

    return { showToast };
};
