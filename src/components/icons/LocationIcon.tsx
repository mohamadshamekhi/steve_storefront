import IconProps from '@/config/types/icon.types';
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper';

const LocationIcon = ({ className, stroke = 'currentColor', fill = '#ECEBFF', strokeWidth = '1.87855' }: IconProps) => {
    return (
        <svg
            className={className}
            width='19'
            height='23'
            viewBox='0 0 19 23'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M9.7039 11.8088C11.4018 11.8088 12.7782 10.4324 12.7782 8.73452C12.7782 7.03665 11.4018 5.66025 9.7039 5.66025C8.00603 5.66025 6.62963 7.03665 6.62963 8.73452C6.62963 10.4324 8.00603 11.8088 9.7039 11.8088Z'
                fill={fill}
            />
            <path
                d='M9.7039 21.5439C11.7534 17.4449 17.9019 14.7993 17.9019 9.24689C17.9019 4.71924 14.2315 1.04886 9.7039 1.04886C5.17624 1.04886 1.50586 4.71924 1.50586 9.24689C1.50586 14.7993 7.65439 17.4449 9.7039 21.5439Z'
                fill={fill}
            />
            <path
                d='M9.7039 11.8088C11.4018 11.8088 12.7782 10.4324 12.7782 8.73452C12.7782 7.03665 11.4018 5.66025 9.7039 5.66025C8.00603 5.66025 6.62963 7.03665 6.62963 8.73452C6.62963 10.4324 8.00603 11.8088 9.7039 11.8088Z'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M9.7039 21.5439C11.7534 17.4449 17.9019 14.7993 17.9019 9.24689C17.9019 4.71924 14.2315 1.04886 9.7039 1.04886C5.17624 1.04886 1.50586 4.71924 1.50586 9.24689C1.50586 14.7993 7.65439 17.4449 9.7039 21.5439Z'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default IconWrapper(LocationIcon);
