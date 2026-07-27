import { ReactNode } from 'react';

export interface ModalProps {
    modalKey: string;
    children: ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    onClose: () => void;
}

export interface ModalHeaderProps {
    children: ReactNode;
    className?: string;
    onClose: () => void;
}

export interface ModalBodyProps {
    children: ReactNode;
    className?: string;
}

export interface ModalFooterProps {
    children: ReactNode;
    className?: string;
}
