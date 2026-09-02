/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import CSelectProps from './select.types';

// Import makeAnimated directly (not dynamically)
import makeAnimated from 'react-select/animated';

// Dynamically import only the Select component with SSR disabled
const Select = dynamic(() => import('react-select'), { ssr: false });

const customStyles = {
    indicatorSeparator: () => ({
        display: 'none'
    }),
    control: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isDisabled ? '#F9FAFB' : '#FFFFFF',
        borderColor: state.isFocused ? '#5A4FCF' : '#D1D5DB',
        boxShadow: state.isFocused ? '0 0 0 2px #ECEBFF' : 'none',
        borderRadius: '8px',
        transition: 'border-color 0.15s, box-shadow 0.15s',
        '&:hover': {
            borderColor: state.isFocused ? '#5A4FCF' : '#9CA3AF'
        },
        minHeight: '2.625rem'
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

const animatedComponents = makeAnimated();

const CSelect: React.FC<CSelectProps> = ({
    options,
    defaultValue,
    value,
    isSearchable = false,
    isClearable = false,
    isDisabled = false,
    isLoading = false,
    isRtl = true,
    placeholder = 'انتخاب کنید',
    isMulti = false,
    name,
    onChange,
    error = false
}) => {
    const styles = {
        ...customStyles,
        control: (base: any, state: any) => ({
            ...customStyles.control(base, state),
            borderColor: error ? '#EF4444' : state.isFocused ? '#5A4FCF' : '#D1D5DB',
            boxShadow: state.isFocused ? `0 0 0 2px ${error ? '#FEE2E2' : '#ECEBFF'}` : 'none',
            '&:hover': {
                borderColor: error ? '#EF4444' : state.isFocused ? '#5A4FCF' : '#9CA3AF'
            }
        })
    };

    return (
        <Select
            name={name}
            components={animatedComponents}
            isMulti={isMulti}
            placeholder={placeholder}
            className='w-full text-sm'
            defaultValue={defaultValue}
            value={value}
            isSearchable={isSearchable}
            isClearable={isClearable}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isRtl={isRtl}
            options={options}
            hideSelectedOptions={false}
            styles={styles}
            noOptionsMessage={() => 'متأسفانه نتیجه‌ای پیدا نشد!'}
            onChange={onChange as any}
        />
    );
};

export default CSelect;
