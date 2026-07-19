'use client';
import ChevronTop from '@/components/icons/ChevronTop';
import { useAccordionStore } from '@/state/stores/accordion';
import { useEffect, useRef, useState } from 'react';
import { AccordionBodyProps, AccordionHeaderProps, AccordionItemProps, AccordionProps } from './cAccordion.types';

export const Accordion: React.FC<AccordionProps> & {
    Item: React.FC<AccordionItemProps>;
    Header: React.FC<AccordionHeaderProps>;
    Body: React.FC<AccordionBodyProps>;
} = ({ defaultActiveKey, type = 'single', children, className }) => {
    const setType = useAccordionStore((state) => state.setType);
    const setActiveKey = useAccordionStore((state) => state.setActiveKey);

    useEffect(() => {
        setType(type);
        if (defaultActiveKey) setActiveKey(defaultActiveKey);
    }, [type, defaultActiveKey, setType, setActiveKey]);

    return <div className={`${className}`}>{children}</div>;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, className }) => {
    return <div className={`${className}`}>{children}</div>;
};

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
    eventKey,
    children,
    className,
    icon,
    showIcon = true,
    canToggle = true
}) => {
    const activeKey = useAccordionStore((state) => state.activeKey);
    const setActiveKey = useAccordionStore((state) => state.setActiveKey);
    const isActive = activeKey.includes(eventKey);
    const handleClick = () => {
        if (canToggle) {
            setActiveKey(eventKey);
        }
    };
    return (
        <button
            type='button'
            onClick={handleClick}
            aria-expanded={isActive}
            aria-controls={`accordion-body-${eventKey}`}
            id={`accordion-header-${eventKey}`}
            className={`relative flex w-full grow items-center justify-between gap-2 bg-white p-4 text-right font-normal text-black ${
                canToggle ? 'cursor-pointer' : 'cursor-default'
            } ${
                !isActive
                    ? `bg-gray-100 before:absolute before:bottom-0 before:-left-1/2 before:block before:h-[1px] before:w-full before:translate-x-1/2 before:bg-gradient-to-r before:from-white before:to-gray-300 before:content-['']`
                    : 'bg-white'
            } ${className}`}
        >
            <div className='grow'>{children}</div>

            {showIcon &&
                (icon ?? (
                    <ChevronTop
                        className={`text-primary-900 transform transition-all delay-150 ${
                            isActive ? 'rotate-0' : 'rotate-180'
                        }`}
                    />
                ))}
        </button>
    );
};

export const AccordionBody: React.FC<AccordionBodyProps> = ({ eventKey, children, className }) => {
    const activeKey = useAccordionStore((state) => state.activeKey);
    const isActive = activeKey.includes(eventKey);
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        const bodyElement = ref.current;
        if (bodyElement) {
            if (isActive) {
                const scrollHeight = bodyElement.scrollHeight;
                setHeight(`${scrollHeight}px`);
            } else {
                setHeight('0px');
            }
        }
    }, [isActive]);

    return (
        <div
            id={`accordion-body-${eventKey}`}
            aria-labelledby={`accordion-header-${eventKey}`}
            role='region'
            className={`relative transform bg-white transition-all delay-150 ${
                isActive
                    ? "h-auto bg-gray-100 before:absolute before:bottom-[6px] before:-left-1/2 before:block before:h-[1px] before:w-full before:translate-x-1/2 before:bg-gradient-to-r before:from-white before:to-gray-300 before:content-['']"
                    : 'h-0'
            } ${className}`}
            ref={ref}
            style={{
                height,
                overflow: 'hidden',
                transition: 'height 300ms ease'
            }}
        >
            <div className='p-4'>{children}</div>
        </div>
    );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
