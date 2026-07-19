import IconWrapper from '@/components/ui/molecules/IconWrapper/IconWrapper';
import IconProps from '@/config/types/icon.types';

const ElectricIcon = ({ className, stroke = 'currentColor', fill = '#FCD7DF', strokeWidth = '2.45536' }: IconProps) => {
    return (
        <svg
            className={className}
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect width='32' height='32' fill='white' />
            <path
                d='M18.9984 2.66675H11.3243C11.085 2.66675 10.9653 2.66675 10.8597 2.70318C10.7663 2.73541 10.6812 2.78799 10.6106 2.85714C10.5308 2.93533 10.4773 3.04235 10.3702 3.25639L4.77024 14.4564C4.51467 14.9675 4.38688 15.2231 4.41757 15.4309C4.44438 15.6123 4.54472 15.7746 4.69499 15.8797C4.86708 16.0001 5.15282 16.0001 5.72429 16.0001H13.9984L9.99839 29.3334L26.2559 12.4738C26.8043 11.905 27.0786 11.6206 27.0946 11.3773C27.1086 11.166 27.0213 10.9607 26.8596 10.8241C26.6733 10.6667 26.2782 10.6667 25.488 10.6667H15.9984L18.9984 2.66675Z'
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default IconWrapper(ElectricIcon);
