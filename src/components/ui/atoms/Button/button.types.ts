import { ButtonHTMLAttributes, ReactNode } from 'react';
import buttonStyle from './button.constants';

export type ButtonVariant = 'fill' | 'outline' | 'light' | 'text' | 'disabled';
export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'green' | 'black';
export type ButtonSize = keyof typeof buttonStyle.size;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    className?: string;
    children?: ReactNode;
    icon?: ReactNode;
    loading?: boolean;
    iconPosition?: 'start' | 'end';
}

export default ButtonProps;
