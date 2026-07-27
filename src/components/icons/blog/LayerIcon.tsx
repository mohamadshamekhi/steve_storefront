import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

function LayerIcon({ className, stroke = 'currentColor', fill = '#FEF2F5', strokeWidth = '1' }: IconProps) {
    return (
        <svg
            className={className}
            width='13'
            height='14'
            viewBox='0 0 13 14'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M1.08398 6.99999L6.30686 4.40184C6.37792 4.36649 6.41344 4.34882 6.45071 4.34186C6.48372 4.3357 6.51759 4.3357 6.55059 4.34186C6.58786 4.34882 6.62339 4.36649 6.69444 4.40184L11.9173 6.99999M1.08398 4.30544L6.30686 1.70729C6.37792 1.67194 6.41344 1.65427 6.45071 1.64731C6.48372 1.64115 6.51759 1.64115 6.55059 1.64731C6.58786 1.65427 6.62339 1.67194 6.69444 1.70729L11.9173 4.30544M1.08398 9.69454L6.30686 12.2927C6.37792 12.328 6.41344 12.3457 6.45071 12.3527C6.48372 12.3588 6.51759 12.3588 6.55059 12.3527C6.58786 12.3457 6.62339 12.328 6.69444 12.2927L11.9173 9.69454L6.69444 7.09639C6.62339 7.06104 6.58786 7.04337 6.55059 7.03641C6.51759 7.03025 6.48372 7.03025 6.45071 7.03641C6.41344 7.04337 6.37792 7.06104 6.30686 7.09639L1.08398 9.69454Z'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

export default IconWrapper(LayerIcon);
