import React from 'react';
import InputTextProps from './input.types';

const size = {
    sm: 'py-2 px-3',
    md: 'py-2 px-3.5',
    lg: 'py-2.5 px-3.5'
};

const Input: React.FC<InputTextProps> = ({
    leftIcon,
    rightIcon,
    className,
    name,
    type = 'text',
    disabled,
    inputSize = 'md',
    ...rest
}) => {
    return (
        <>
            {leftIcon && <div className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-500'>{leftIcon}</div>}

            <input
                name={name}
                className={`focus:border-primary-500 focus:ring-primary-100 w-full max-w-[283px] rounded-lg border border-gray-300 transition-colors placeholder:text-gray-400 focus:ring-2 focus:outline-none ${className} ${size[inputSize]} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''} ${disabled ? 'cursor-not-allowed bg-gray-50 text-gray-400' : ''} `}
                type={type}
                disabled={disabled}
                {...rest}
            />

            {rightIcon && <div className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500'>{rightIcon}</div>}
        </>
    );
};

export default Input;
