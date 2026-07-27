import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

function RectangleIcon({ className, fill = 'white' }: IconProps) {
    return (
        <svg
            className={className}
            width='250'
            height='49'
            viewBox='0 0 250 49'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fill={fill}
                d='M27.0828 43.9423C28.7074 46.5783 31.5825 48.1836 34.6789 48.1836H215.321C218.418 48.1836 221.293 46.5783 222.917 43.9423L250 1.19564e-05H0L27.0828 43.9423Z'
            />
        </svg>
    );
}

export default IconWrapper(RectangleIcon);
