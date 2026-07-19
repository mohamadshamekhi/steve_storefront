import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

const PaymentIcon = ({ className, stroke = 'currentColor', fill = '#FCD7DF', strokeWidth = '2.45536' }: IconProps) => {
    return (
        <svg
            className={className}
            width='30'
            height='25'
            viewBox='0 0 30 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M22.9993 23.0001C22.9993 23.0001 26.9993 21.0935 26.9993 18.2337V14.8973L24.0825 13.855C23.3817 13.604 22.6153 13.604 21.9145 13.855L18.9993 14.8973V18.2337C18.9993 21.0935 22.9993 23.0001 22.9993 23.0001Z'
                fill={fill}
            />
            <path
                d='M28.3327 8.33341H1.66602M28.3327 9.66675V5.93342C28.3327 4.43994 28.3327 3.69321 28.042 3.12278C27.7864 2.62101 27.3784 2.21306 26.8767 1.9574C26.3062 1.66675 25.5595 1.66675 24.066 1.66675H5.93268C4.43921 1.66675 3.69247 1.66675 3.12204 1.9574C2.62028 2.21306 2.21233 2.62101 1.95667 3.12277C1.66602 3.6932 1.66602 4.43994 1.66602 5.93341V16.0667C1.66602 17.5602 1.66602 18.307 1.95666 18.8774C2.21233 19.3792 2.62028 19.7871 3.12204 20.0428C3.69247 20.3334 4.43921 20.3334 5.93268 20.3334H14.3327M22.9993 23.0001C22.9993 23.0001 26.9993 21.0935 26.9993 18.2337V14.8973L24.0825 13.855C23.3817 13.604 22.6153 13.604 21.9145 13.855L18.9993 14.8973V18.2337C18.9993 21.0935 22.9993 23.0001 22.9993 23.0001Z'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default IconWrapper(PaymentIcon);
