'use client';

import { useToastStore } from '@/state';
import clsx from 'clsx';
import ToastItem from './ToastItem';

type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

const POSITION_CLASSES: Record<ToastPosition, string> = {
    'top-right': 'top-5 right-5',
    'top-left': 'top-5 left-5',
    'bottom-right': 'bottom-5 right-5',
    'bottom-left': 'bottom-5 left-5'
};

interface IProps {
    position?: ToastPosition;
}

export const ToastContainer = ({ position = 'bottom-right' }: IProps) => {
    const { toasts, removeToast } = useToastStore();
    return (
        <div className={clsx('fixed z-50 flex w-[90%] max-w-sm flex-col gap-3', POSITION_CLASSES[position])}>
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onClose={removeToast} />
            ))}
        </div>
    );
};
