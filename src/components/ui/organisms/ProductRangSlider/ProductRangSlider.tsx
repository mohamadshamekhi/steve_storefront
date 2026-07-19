import TomanIcon from '@/components/icons/TomanIcon';
import { useState, useEffect } from 'react';
import Input from '../../atoms/Input/Input';
import RangeSlider from '../../molecules/RangeSlider/RangeSlider';

interface ProductRangSliderProps {
    minValue?: string;
    maxValue?: string;
    onChange?: (min: string, max: string) => void;
    rangeMin?: number;
    rangeMax?: number;
}

const ProductRangSlider = ({
    minValue = '',
    maxValue = '',
    onChange,
    rangeMin = 0,
    rangeMax = 500000000
}: ProductRangSliderProps) => {
    const [min, setMin] = useState(minValue);
    const [max, setMax] = useState(maxValue);

    useEffect(() => {
        setMin(minValue);
    }, [minValue]);

    useEffect(() => {
        setMax(maxValue);
    }, [maxValue]);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMin(value);
        if (onChange) {
            onChange(value, max);
        }
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMax(value);
        if (onChange) {
            onChange(min, value);
        }
    };

    const handleSliderChange = (values: number[]) => {
        const [minVal, maxVal] = values;
        setMin(minVal.toString());
        setMax(maxVal.toString());
        if (onChange) {
            onChange(minVal.toString(), maxVal.toString());
        }
    };

    return (
        <div>
            <div className='mb-5'>
                <div className='relative mb-2 w-fit'>
                    <Input
                        name='low'
                        className='bg-gray-100 px-6 text-2xl font-semibold'
                        type='number'
                        value={min}
                        onChange={handleMinChange}
                        placeholder={rangeMin.toString()}
                    />
                    <span className='absolute right-2 top-1/2 -translate-1/2 transform'>از</span>
                    <TomanIcon className='absolute left-5 top-1/2 -translate-1/2 transform' />
                </div>
                <div className='relative w-fit'>
                    <Input
                        name='up'
                        className='bg-gray-100 px-6 text-2xl font-semibold'
                        type='number'
                        value={max}
                        onChange={handleMaxChange}
                        placeholder={rangeMax.toString()}
                    />
                    <span className='absolute right-2 top-1/2 -translate-1/2 transform'>تا</span>
                    <TomanIcon className='absolute left-5 top-1/2 -translate-1/2 transform' />
                </div>
            </div>
            <RangeSlider
                min={rangeMin}
                max={rangeMax}
                value={[Number(min) || rangeMin, Number(max) || rangeMax]}
                onInput={handleSliderChange}
            />
        </div>
    );
};

export default ProductRangSlider;
