import IconProps from '@/config/types/icon.types';
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper';

const ShapeIcon = ({ className, fill = '#F6F6FF' }: IconProps) => {
    return (
        <svg
            className={className}
            width='245'
            height='82'
            viewBox='0 0 245 82'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g filter='url(#filter0_d_2351_3429)'>
                <path
                    d='M30.2713 46.1443C32.7711 38.8781 39.608 34 47.2922 34H197.708C205.392 34 212.229 38.8781 214.729 46.1443L225 76H20L30.2713 46.1443Z'
                    fill={fill}
                />
            </g>
            <defs>
                <filter
                    id='filter0_d_2351_3429'
                    x='0'
                    y='0'
                    width='245'
                    height='82'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    />
                    <feOffset dy='-14' />
                    <feGaussianBlur stdDeviation='10' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2351_3429' />
                    <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2351_3429' result='shape' />
                </filter>
            </defs>
        </svg>
    );
};

export default IconWrapper(ShapeIcon);
