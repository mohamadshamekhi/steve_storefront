import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

const TitleIcon = ({ className, fill = '#F9FAFB' }: IconProps) => {
    return (
        <svg
            className={className}
            width='256'
            height='100'
            viewBox='0 0 256 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M255.944 0V100C255.944 86.8007 255.944 80.2011 251.844 76.1006C247.743 72.0001 241.144 72 227.944 72H66.7412C57.5659 72 52.9779 72.0002 49.4238 69.5957C45.8698 67.1911 44.163 62.9321 40.75 54.415L25.9912 17.585C22.5782 9.06794 20.8715 4.80889 17.3174 2.4043C13.7633 -0.000170469 9.17525 0 0 0H255.944Z'
                fill={fill}
            />
        </svg>
    );
};

export default IconWrapper(TitleIcon);
