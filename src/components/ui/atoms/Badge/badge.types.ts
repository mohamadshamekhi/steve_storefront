import { ReactNode } from 'react';

export type BadgeColor = 'danger' | 'light-blue' | 'blue' | 'green' | 'gray';

interface BadgeProps {
    color?: BadgeColor;
    className?: string;
    children?: ReactNode;
}

export default BadgeProps;
