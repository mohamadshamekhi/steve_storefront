import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

const BlobIcon = ({ className, fill = '#FEF2F5' }: IconProps) => {
    return (
        <svg
            className={className}
            width='178'
            height='30'
            viewBox='0 0 178 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M11.8099 26.479C12.6702 28.5386 14.6837 29.8796 16.9157 29.8796H161.649C163.881 29.8796 165.894 28.5386 166.755 26.479L177.815 1.90735e-06H0.75L11.8099 26.479Z'
                fill={fill}
            />
        </svg>
    );
};

export default IconWrapper(BlobIcon);
