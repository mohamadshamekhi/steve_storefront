'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { ScrollTabsProps } from './types';

export function ScrollTabs({
    items,
    className,
    activeClassName = 'text-primary-600 font-semibold',
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
        <div
            className={clsx(
                'no-scrollbar flex gap-1 overflow-x-auto rounded-md bg-white sm:gap-5',
                className
            )}
        >
            {items.map((item) => (
                <button
                    key={item.targetId}
                    onClick={() => handleClick(item.targetId)}
                    className={clsx(
                        'hover:text-primary-600 relative shrink-0 grow cursor-pointer px-2 py-3 text-sm whitespace-nowrap text-gray-600 transition-colors sm:grow-0 sm:text-base',
                        activeId === item.targetId && activeClassName
                    )}
                >
                    {item.label}
                    <span
                        className={clsx(
                            'bg-primary-600 absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-t-full transition-all',
                            activeId === item.targetId ? 'w-2/3' : 'w-0'
                        )}
                    />
                </button>
            ))}
        </div>
    );
}
