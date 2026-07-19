import IconProps from '@/config/types/icon.types';
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper';

const ChevronLeft = ({ className, stroke = 'currentColor', strokeWidth = '1.5' }: IconProps) => {
    return (
        <svg
            className={className}
            width='8'
            height='14'
            viewBox='0 0 8 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M7 13L1 7L7 1'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default IconWrapper(ChevronLeft);
