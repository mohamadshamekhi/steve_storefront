'use client';
import { useMenuStore } from '@/state/stores/menu';
import { useEffect } from 'react';

const Backdrop = ({ top = '181' }: { top?: string }) => {
    const { isOpen, close } = useMenuStore();

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 top-[181px] z-40 bg-black/40 backdrop-blur-sm' style={{ top }} onClick={close} />
    );
};

export default Backdrop;
