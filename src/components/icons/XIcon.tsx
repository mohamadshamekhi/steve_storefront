import IconProps from '@/config/types/icon.types';
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper';

function XIcon({ className, stroke = 'currentColor', strokeWidth = '2' }: IconProps) {
    return (
        <svg
            className={className}
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M13 1L1 13M1 1L13 13'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export default IconWrapper(XIcon);
