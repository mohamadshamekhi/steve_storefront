import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

function FlashIcon({ className, stroke = 'currentColor' }: IconProps) {
    return (
        <svg
            className={className}
            width='16'
            height='16'
            viewBox='0 0 14 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M7.66723 1.33333L1.72953 8.45856C1.49699 8.73761 1.38072 8.87713 1.37894 8.99497C1.3774 9.09741 1.42305 9.19486 1.50273 9.25926C1.59439 9.33333 1.77601 9.33333 2.13925 9.33333H7.00056L6.33389 14.6667L12.2716 7.54143C12.5041 7.26238 12.6204 7.12286 12.6222 7.00502C12.6237 6.90258 12.5781 6.80513 12.4984 6.74073C12.4067 6.66666 12.2251 6.66666 11.8619 6.66666H7.00056L7.66723 1.33333Z'
                stroke={stroke}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export default IconWrapper(FlashIcon);
