import IconProps from '@/config/types/icon.types';
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper';

const ChevronTop = ({ className, stroke = 'currentColor', strokeWidth = '1.5' }: IconProps) => {
    return (
        <svg
            className={className}
            width='11'
            height='6'
            viewBox='0 0 11 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M9.5 5L5.5 1L1.5 5'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default IconWrapper(ChevronTop);
