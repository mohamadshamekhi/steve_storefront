import { ReactNode } from 'react';

export interface DropdownProps {
    label?: string;
    icon?: ReactNode;
    children: ReactNode;
    className?: string;
    caretIcon?: ReactNode;
    isShowIcon?: boolean;
}
