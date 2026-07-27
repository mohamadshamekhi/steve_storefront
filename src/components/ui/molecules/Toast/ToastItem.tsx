import ErrorIcon from '@/components/icons/Notification/ErrorIcon';
import InfoIcon from '@/components/icons/Notification/InfoIcon';
import SuccessIcon from '@/components/icons/Notification/SuccessIcon';
import WarningIcon from '@/components/icons/Notification/WarningIcon';
import XIcon from '@/components/icons/XIcon';
import { useCallback, useEffect, useRef } from 'react';
import Button from '../../atoms/Button/Button';

const ICONS = {
    success: <SuccessIcon />,
    error: <ErrorIcon />,
    info: <InfoIcon />,
    warning: <WarningIcon />
};

interface IToastProps {
    id: string;
    title?: string;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
}

function ToastItem({ toast, onClose }: { toast: IToastProps; onClose: (id: string) => void }) {
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const start = useRef<number>(Date.now());
    const remaining = useRef<number>(toast.duration ?? 3000);

    const pause = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            remaining.current -= Date.now() - start.current;
        }
    };

    const resume = useCallback(() => {
        start.current = Date.now();
        timerRef.current = setTimeout(() => {
            onClose(toast.id);
        }, remaining.current);
    }, [onClose, toast.id]);

    useEffect(() => {
        resume();
        return pause;
    }, [resume]);

    return (
        <div className='rounded-md bg-white px-6 py-5 shadow-lg'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <span className='ml-3'>{ICONS[toast.type]}</span>
                    <span className='text-xl font-normal text-gray-800'>{toast.title ? toast.title : ''}</span>
                </div>
                <span onClick={() => onClose(toast.id)}>
                    <XIcon className='h-3 w-3 text-gray-400' />
                </span>
            </div>
            <p className='py-5 pr-16 text-justify'>{toast.message}</p>
            <div className='flex justify-end'>
                <Button onClick={() => onClose(toast.id)} variant='outline' color='black'>
                    بستن
                </Button>
            </div>
        </div>
    );
}

export default ToastItem;
