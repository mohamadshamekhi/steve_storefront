import IconProps from '@/config/types/icon.types';
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper';

const CirclePlusIcon = ({ className, stroke = 'currentColor', strokeWidth = '1' }: IconProps) => {
    return (
        <svg
            className={className}
            width='14'
            height='13'
            viewBox='0 0 14 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M6.8745 4.49106V9.10316M4.56845 6.79711H9.18055M12.6396 6.79711C12.6396 9.9811 10.0585 12.5622 6.8745 12.5622C3.69051 12.5622 1.10938 9.9811 1.10938 6.79711C1.10938 3.61312 3.69051 1.03198 6.8745 1.03198C10.0585 1.03198 12.6396 3.61312 12.6396 6.79711Z'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default IconWrapper(CirclePlusIcon);
