import IconProps from '@/config/types/icon.types';
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper';

const FooterIcon = ({ className, fill = '#F6F6FF' }: IconProps) => {
    return (
        <svg
            className={className}
            width='205'
            height='47'
            viewBox='0 0 205 47'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M10.5417 34.2895C12.8643 41.8442 19.8433 47 27.747 47H177.253C185.157 47 192.136 41.8442 194.458 34.2895L205 0H0L10.5417 34.2895Z'
                fill={fill}
            />
        </svg>
    );
};

export default IconWrapper(FooterIcon);
