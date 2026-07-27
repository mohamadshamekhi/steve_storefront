import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

function SuccessIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            width='42'
            height='42'
            viewBox='0 0 42 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect x='3' y='3' width='36' height='36' rx='18' fill='#BEEBCC' />
            <rect x='3' y='3' width='36' height='36' rx='18' stroke='#E4F7EA' strokeWidth='5' />
            <path
                d='M16.5 21L19.5 24L25.5 18M31 21C31 26.5228 26.5228 31 21 31C15.4772 31 11 26.5228 11 21C11 15.4772 15.4772 11 21 11C26.5228 11 31 15.4772 31 21Z'
                stroke='#00691E'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export default IconWrapper(SuccessIcon);
