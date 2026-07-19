import React from 'react';
import InputTextProps from './input.types';

const size = {
    sm: 'py-2 px-3',
    md: 'py-1.5 px-3',
    lg: 'py-2.5 px-3'
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
                className={`w-full max-w-[283px] rounded-md border border-gray-300 active:border-[#2563EB] ${className} ${size[inputSize]} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''} ${disabled ? 'cursor-not-allowed border-gray-300' : ''} `}
                type={type}
                disabled={disabled}
                {...rest}
            />

            {rightIcon && <div className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500'>{rightIcon}</div>}
        </>
    );
};

export default Input;
