'use client';
import ChevronTop from '@/components/icons/ChevronTop';
/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from '@/config/utilities/cn';
import { Children, cloneElement, isValidElement, ReactElement, useEffect, useRef, useState } from 'react';
import Button from '../../atoms/Button/Button';
import { DropdownProps } from './dropdown.type';

const Dropdown = ({ label, children, icon, className = '', caretIcon, isShowIcon = true }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const enhancedChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
            const element = child as ReactElement<any>;
            return cloneElement(element, {
                onClick: (e: React.MouseEvent) => {
                    element.props.onClick?.(e);
                    setIsOpen(false);
                }
            });
        }
        return child;
    });

    return (
        <div ref={dropdownRef} className={cn(`relative inline-block text-left`, className)}>
            <Button
                variant='text'
                color='black'
                type='button'
                className='inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 no-underline! shadow-sm hover:bg-gray-50'
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {icon && <span className={`${label ? 'ml-3' : ''}`}>{icon}</span>}

                {label && <span>{label}</span>}

                {isShowIcon && !caretIcon ? (
                    <ChevronTop className={`mr-2 transition-transform ${isOpen ? '' : 'rotate-180'}`} />
                ) : (
                    caretIcon
                )}
            </Button>

            {isOpen && (
                <div className='ring-opacity-5 absolute left-0 z-50 mt-2 w-48 rounded-md bg-white p-2 shadow-lg ring-1 ring-gray-300'>
                    <div className='py-1'>{enhancedChildren}</div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
