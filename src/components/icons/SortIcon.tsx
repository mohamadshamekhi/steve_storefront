import IconProps from '@/config/types/icon.types';
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper';

const SortIcon = ({ className, stroke = 'currentColor', fill = 'none', strokeWidth = '1.5' }: IconProps) => {
    return (
        <svg
            className={className}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M21 10H13M21 6H13M21 14H13M21 18H13M6 20L6 4M6 20L3 17M6 20L9 17M6 4L3 7M6 4L9 7'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default IconWrapper(SortIcon);
