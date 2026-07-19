import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

function InfoIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            width='42'
            height='42'
            viewBox='0 0 42 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect x='3' y='3' width='36' height='36' rx='18' fill='#B4E3F2' />
            <rect x='3' y='3' width='36' height='36' rx='18' stroke='#E1F4FA' strokeWidth='5' />
            <path
                d='M21 17V21M21 25H21.01M31 21C31 26.5228 26.5228 31 21 31C15.4772 31 11 26.5228 11 21C11 15.4772 15.4772 11 21 11C26.5228 11 31 15.4772 31 21Z'
                stroke='#105481'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export default IconWrapper(InfoIcon);
