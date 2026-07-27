import { ReactElement, ReactNode } from 'react';

export interface AccordionProps {
    defaultActiveKey?: string;
    type?: 'single' | 'multiple';
    children: ReactNode;
    className?: string;
}

export interface AccordionItemProps {
    eventKey: string;
    children: ReactNode;
    className?: string;
}

export interface AccordionHeaderProps {
    eventKey: string;
    children: ReactNode;
    className?: string;
    icon?: ReactElement;
    showIcon?: boolean;
    canToggle?: boolean;
}

export interface AccordionBodyProps {
    eventKey: string;
    children: ReactNode;
    className?: string;
}
