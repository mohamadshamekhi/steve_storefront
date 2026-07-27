/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useId } from 'react';
import Select, { Props as SelectProps } from 'react-select';

type Option = { label: string; value: string };

interface SelectInputProps extends Omit<SelectProps<Option, false>, 'onChange' | 'value' | 'options'> {
    name: string;
    options: Option[];
    value: string;
    error?: boolean;
    onChange: (value: string) => void;
}

const customStyles = {
    indicatorSeparator: () => ({
        display: 'none'
    }),
    control: (base: any, state: any) => ({
        ...base,
        backgroundColor: '#F6F6FF',
        borderColor: state.isFocused ? '#E5E7EB' : '#E5E7EB',
        boxShadow: state.isFocused ? '0 0 0 1px #fff' : 'none',
        borderRadius: '6px',
        '&:hover': {
            borderColor: '#DBEAFE'
        },
        minHeight: '2.5rem'
    }),
    option: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isSelected ? '#ecebff' : state.isFocused ? '#ecebff' : 'white',
        color: state.isSelected ? '#5d47ea' : '#1F2937',
        cursor: 'pointer',
        borderRadius: '6px'
    }),
    singleValue: (base: any) => ({
        ...base,
        color: '#1f2937'
    }),
    menu: (base: any) => ({
        ...base,
        zIndex: 50,
        boxShadow: '0px 4px 8px rgba(31, 41, 55, 0.06), 0px 4px 4px rgba(31, 41, 55, 0.08)',
        padding: '4px',
        borderRadius: '6px'
    }),
    menuList: (base: any) => ({
        ...base,
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '4px'
    }),
    multiValue: (base: any) => ({
        ...base,
        backgroundColor: '#F9FAFB',
        borderRadius: '6px',
        padding: '1px 12px 1px 8px',
        border: '1px solid #E5E7EB',
        cursor: 'pointer'
    }),
    multiValueLabel: (base: any) => ({
        ...base,
        color: '#1F2937',
        fontSize: '13px',
        fontWeight: '500'
    }),
    multiValueRemove: (base: any) => ({
        ...base,
        color: '#9CA3AF',
        ':hover': {
            backgroundColor: '#9CA3AF',
            color: 'white',
            cursor: 'pointer'
        }
    })
};
const SelectInput: React.FC<SelectInputProps> = ({ name, options, value, error, onChange, ...props }) => {
    const selectedOption = options.find((opt) => opt.value === value) || null;

    const id = useId();

    const styles = {
        ...customStyles,
        control: (base: any, state: any) => ({
            ...customStyles.control(base, state),
            borderColor: error ? '#EF4444' : state.isFocused ? '#E5E7EB' : '#E5E7EB',
            '&:hover': {
                borderColor: error ? '#EF4444' : '#DBEAFE'
            }
        })
    };

    return (
        <Select
            instanceId={id}
            name={name}
            value={selectedOption}
            onChange={(option) => onChange((option as Option)?.value || '')}
            options={options}
            classNamePrefix='react-select'
            placeholder='انتخاب کنید'
            isClearable
            {...props}
            className='w-full text-sm'
            hideSelectedOptions={false}
            styles={styles}
            noOptionsMessage={() => 'متأسفانه نتیجه‌ای پیدا نشد!'}
        />
    );
};

export default SelectInput;
