'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { ScrollTabsProps } from './types';

export function ScrollTabs({
    items,
    className,
    activeClassName = 'text-blue-600 font-semibold',
    scrollOffset = 0
}: ScrollTabsProps) {
    const [activeId, setActiveId] = useState<string | null>(null);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - scrollOffset;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            setActiveId(id);
        }
    };

    return (
        <div className={clsx('sticky top-0 flex gap-5 rounded-md bg-white', className)}>
            {items.map((item) => (
                <button
                    key={item.targetId}
                    onClick={() => handleClick(item.targetId)}
                    className={clsx(
                        'hover:text-primary-600 relative px-2 py-3.5 text-base font-normal text-gray-600 transition-all cursor-pointer',
                        activeId === item.targetId && activeClassName
                    )}
                >
                    {item.label}
                    {activeId === item.targetId && (
                        <span
                            className='bg-primary-600 absolute bottom-0 left-1/2 h-[2px] w-2/3 -translate-x-1/2'
                            style={{
                                borderBottomLeftRadius: '0px',
                                borderBottomRightRadius: '0px',
                                borderTopLeftRadius: '1000px',
                                borderTopRightRadius: '1000px'
                            }}
                        />
                    )}
                </button>
            ))}
        </div>
    );
}
