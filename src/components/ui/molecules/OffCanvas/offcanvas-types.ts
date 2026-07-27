import { ReactElement, ReactNode } from 'react';

interface IOffcanvasProps {
    titleSection?: ReactElement;
    isOpen: boolean;
    onClose: () => void;
    position?: 'right' | 'left';
    children: ReactNode;
    width?: string;
    overlayColor?: string;
    transitionDuration?: string;
    borderRadius?: string;
    backgroundColor?: string;
    boxShadow?: string;
    className?: string;
}

export default IOffcanvasProps;
