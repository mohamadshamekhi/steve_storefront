'use client';
import React from 'react';
import ReactRangeSliderInput, { ReactRangeSliderInputProps } from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

interface RangeSliderProps extends ReactRangeSliderInputProps {
    className?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
    defaultValue = [10, 50],
    className = '',
    orientation = 'horizontal',
    disabled = false,
    ...rest
}) => {
    return (
        <div className='mb-5'>
            <ReactRangeSliderInput
                defaultValue={defaultValue}
                className={`custom-range-slider ${className}`}
                orientation={orientation}
                disabled={disabled}
                {...rest}
            />

            <div className='relative top-3 flex w-full justify-between'>
                <label className='font-normal text-gray-600'>از</label>
                <label className='font-normal text-gray-600'>تا</label>
            </div>
        </div>
    );
};

export default RangeSlider;
