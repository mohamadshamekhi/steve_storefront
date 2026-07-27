import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

function MagnifierIcon({ className, stroke = 'currentColor', strokeWidth = '1.7' }: IconProps) {
    return (
        <svg
            className={className}
            width='19'
            height='20'
            viewBox='0 0 19 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M18.125 18.5811L14.7709 15.244M17.1667 9.52328C17.1667 13.9992 13.5197 17.6277 9.02083 17.6277C4.52201 17.6277 0.875 13.9992 0.875 9.52328C0.875 5.04735 4.52201 1.4189 9.02083 1.4189C13.5197 1.4189 17.1667 5.04735 17.1667 9.52328Z'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export default IconWrapper(MagnifierIcon);
