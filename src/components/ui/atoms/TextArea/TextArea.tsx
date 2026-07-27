import cn from '@/config/utilities/cn';
import React from 'react';
import ITextAreaProps from './text-area.types';

const TextArea: React.FC<ITextAreaProps> = ({ className = '', disabled = false, rows, cols, name, error, ...rest }) => {
    return (
        <textarea
            className={cn(
                'bg-primary-50 placeholder:text-body1-bold resize-none rounded-md border border-gray-300 px-3 py-2 focus:border-gray-500 focus-visible:border-gray-500 active:border-gray-500',
                disabled && 'cursor-not-allowed bg-gray-100 text-gray-500',
                error && 'border-red-500',
                className
            )}
            disabled={disabled}
            rows={rows}
            cols={cols}
            name={name}
            {...rest}
        />
    );
};

export default TextArea;
