import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

function EllipseIcon({ className, fill = 'currentColor' }: IconProps) {
    return (
        <svg
            className={className}
            width='6'
            height='6'
            viewBox='0 0 6 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle cx='3' cy='3' r='3' fill={fill} />
        </svg>
    );
}

export default IconWrapper(EllipseIcon);
