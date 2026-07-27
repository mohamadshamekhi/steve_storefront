import { InputHTMLAttributes, ReactNode } from 'react';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    inputSize?: 'sm' | 'md' | 'lg';
    name?: string;
}

export default InputTextProps;
