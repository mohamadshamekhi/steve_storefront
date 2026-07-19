'use client';

import cn from '@/config/utilities/cn';
import CheckboxProps from './checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, name, className = '', label = '' }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <div className='relative h-5 w-5'>
                <input
                    name={name}
                    type='checkbox'
                    id={id}
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className='peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#b4a7d6] bg-white transition-colors duration-200 checked:border-transparent checked:bg-[#5e449f] focus:outline-none'
                />
                <span className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-white opacity-0 transition-opacity duration-200 select-none peer-checked:opacity-100'>
                    <svg width='10' height='8' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M8.15495 1.5L3.57161 6.08333L1.48828 4'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </span>
            </div>
            {label && <label htmlFor={id}>{label}</label>}
        </div>
    );
};

export default Checkbox;
