import React from 'react';
import badgeStyle from './badge.constants';
import BadgeProps from './badge.types';

const Badge: React.FC<BadgeProps> = ({ color = 'blue', className = '', children, ...props }) => {
    const baseClasses = 'text-center text-body3-regular rounded-full py-1 px-3 inline-block w-fit';
    const colorClasses = badgeStyle.color[color] || '';
    const combinedClassName = `${baseClasses} ${colorClasses} ${className}`.trim();

    return (
        <div className={combinedClassName} {...props}>
            <span className='relative top-0.5'>{children}</span>
        </div>
    );
};

export default Badge;
