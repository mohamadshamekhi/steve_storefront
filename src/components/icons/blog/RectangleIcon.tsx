import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

function RectangleIcon({ className, fill = 'white' }: IconProps) {
    return (
        <svg
            className={className}
            width='170'
            height='49'
            viewBox='0 0 170 49'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M18.4093 42.6997C19.7966 46.021 23.0435 48.1835 26.6428 48.1835H143.931C147.531 48.1835 150.778 46.021 152.165 42.6997L170 -1.90735e-05H0.574219L18.4093 42.6997Z'
                fill={fill}
            />
        </svg>
    );
}

export default IconWrapper(RectangleIcon);
