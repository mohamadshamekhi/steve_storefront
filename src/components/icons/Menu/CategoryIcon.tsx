import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

function CategoryIcon({ className, stroke = 'currentColor', strokeWidth = '1.5' }: IconProps) {
    return (
        <svg
            className={className}
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M2 8H14M2 4H14M2 12H14'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export default IconWrapper(CategoryIcon);
