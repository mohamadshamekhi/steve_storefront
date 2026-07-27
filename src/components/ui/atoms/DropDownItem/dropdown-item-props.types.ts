import { ReactNode } from 'react';

export interface DropDownItemProps {
    className?: string;
    label: string;
    icon?: ReactNode;
    target?: string;
    type?: 'link' | 'button';
    href?: string;
    onClick?: () => void;
}
