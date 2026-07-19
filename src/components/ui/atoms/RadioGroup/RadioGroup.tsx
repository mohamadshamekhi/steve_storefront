import cn from '@/config/utilities/cn';
import { createContext, ReactNode, useContext } from 'react';

export interface RadioGroupProps {
    defaultValue?: string;
    name: string;
    direction?: 'horizontal' | 'vertical';
    label?: string;
    children: ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export interface RadioItemProps {
    value: string;
    disabled?: boolean;
    label?: string;
    id: string;
    className?: '';
}
const RadioGroupContext = createContext<{
    name?: string;
    defaultValue?: string;
    size?: 'sm' | 'md' | 'lg';
}>({});

export const Radio: React.FC<RadioGroupProps> & {
    Item: React.FC<RadioItemProps>;
} = ({ children, name, className = '', size = 'md', defaultValue = '' }) => {
    return (
        <RadioGroupContext.Provider value={{ name, size, defaultValue }}>
            <div className={cn('flex items-center gap-2', className)}>{children}</div>
        </RadioGroupContext.Provider>
    );
};
const sizeMap = {
    sm: 'scale-75!',
    md: 'scale-125!',
    lg: 'scale-150!'
};
export const RadioItem: React.FC<RadioItemProps> = ({ label, id, value, disabled = false, className = '' }) => {
    const { name, size = 'sm', defaultValue } = useContext(RadioGroupContext);
    const sizeClasses = sizeMap[size];
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <input
                className={`transform", align-middle accent-[#5A4FCF] ${sizeClasses}`}
                type='radio'
                name={name}
                id={id}
                value={value}
                disabled={disabled}
                defaultChecked={value === defaultValue}
            />
            <label className='relative top-[2px]' htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

Radio.Item = RadioItem;
