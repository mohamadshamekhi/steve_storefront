'use client';

import CrossIcon from '@/components/icons/CrossIcon';
import cn from '@/config/utilities/cn';
import { useModalStore } from '@/state/stores/modal';
import Button from '../../atoms/Button/Button';
import { ModalBodyProps, ModalFooterProps, ModalHeaderProps, ModalProps } from './modal.type';

export const Modal: React.FC<ModalProps> & {
    Header: React.FC<ModalHeaderProps>;
    Body: React.FC<ModalBodyProps>;
    Footer: React.FC<ModalFooterProps>;
} = ({ modalKey, children, size = 'md', className = '', onClose }) => {
    const isOpen = useModalStore((state) => state.openModals.includes(modalKey));

    if (!isOpen) return null;

    const sizeClasses = {
        sm: 'max-w-[90vw] sm:max-w-[542px]',
        md: 'max-w-[90vw] md:max-w-[700px]',
        lg: 'max-w-[90vw] lg:max-w-[70vw]',
        xl: 'max-w-[90vw] lg:max-w-[80vw]'
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='fixed inset-0 z-40 cursor-pointer bg-black/40 backdrop-blur-sm' onClick={onClose} />

            <div
                className={cn(
                    'animate-fadeIn relative z-50 w-full overflow-hidden rounded-2xl bg-white shadow-lg',
                    sizeClasses[size],
                    className
                )}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className = '', onClose }) => {
    return (
        <div className={cn('text-md p-3 font-semibold sm:text-xl md:p-6', className)}>
            {onClose && (
                <Button onClick={onClose} className='absolute top-3 left-3 text-5xl' color='black' variant='text'>
                    <CrossIcon className='text-gray-400' />
                </Button>
            )}

            {children}
        </div>
    );
};

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className = '' }) => {
    return <div className={cn('max-h-[600px] overflow-auto p-3 md:p-6 lg:max-h-[750px]', className)}>{children}</div>;
};

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className = '' }) => {
    return <div className={cn('flex justify-end gap-2 p-3 md:p-6', className)}>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
