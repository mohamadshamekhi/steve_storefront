import IconProps from '@/config/types/icon.types';
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper';

const CellPhoneIcon = ({ className, stroke = 'currentColor', fill = 'none', strokeWidth = '1.5' }: IconProps) => {
    return (
        <svg
            className={className}
            width='12'
            height='16'
            viewBox='0 0 12 16'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M5.99992 11.6668H6.00659M3.46659 14.6668H8.53325C9.27999 14.6668 9.65336 14.6668 9.93857 14.5215C10.1895 14.3937 10.3934 14.1897 10.5213 13.9388C10.6666 13.6536 10.6666 13.2802 10.6666 12.5335V3.46683C10.6666 2.72009 10.6666 2.34672 10.5213 2.06151C10.3934 1.81063 10.1895 1.60665 9.93857 1.47882C9.65336 1.3335 9.27999 1.3335 8.53325 1.3335H3.46659C2.71985 1.3335 2.34648 1.3335 2.06126 1.47882C1.81038 1.60665 1.60641 1.81063 1.47858 2.06151C1.33325 2.34672 1.33325 2.72009 1.33325 3.46683V12.5335C1.33325 13.2802 1.33325 13.6536 1.47858 13.9388C1.60641 14.1897 1.81038 14.3937 2.06126 14.5215C2.34648 14.6668 2.71985 14.6668 3.46659 14.6668ZM6.33325 11.6668C6.33325 11.8509 6.18401 12.0002 5.99992 12.0002C5.81582 12.0002 5.66659 11.8509 5.66659 11.6668C5.66659 11.4827 5.81582 11.3335 5.99992 11.3335C6.18401 11.3335 6.33325 11.4827 6.33325 11.6668Z'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default IconWrapper(CellPhoneIcon);
