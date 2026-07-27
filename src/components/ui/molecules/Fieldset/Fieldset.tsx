import cn from '@/config/utilities/cn';
import React from 'react';
import FieldsetProps from './fieldset.types';

const Fieldset: React.FC<FieldsetProps> = ({
    children,
    name,
    errors,
    touched,
    className,
    hint,
    label,
    labelClass,
    direction = 'vertical'
}) => {
    const showError = touched[name] && errors[name];

    return (
        <div className={cn('flex flex-col gap-1', className)}>
            <div className={direction === 'horizontal' ? 'flex gap-2' : ''}>
                {label && <label className={labelClass}>{label}</label>}
                {children}
            </div>
            <div>{hint}</div>
            {showError && <div className={`text-sm text-red-500`}>{errors[name]}</div>}
        </div>
    );
};

export default Fieldset;

