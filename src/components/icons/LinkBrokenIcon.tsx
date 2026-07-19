import IconProps from '@/config/types/icon.types'
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper'

const LinkBrokenIcon = ({ className, stroke = 'currentColor', fill = '#fff' }: IconProps) => {
    return (
        <svg
            className={className}
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g clipPath='url(#clip0_2195_96504)'>
                <path
                    d='M4.25 7.74999L7.75 4.24999M4.5 2V1M7.5 10V11M2 4.5H1M10 7.5H11M2.45711 2.45711L1.75 1.75M9.54291 9.54285L10.25 10.25M6.00002 8.82838L4.93936 9.88904C4.15831 10.6701 2.89198 10.6701 2.11093 9.88904C1.32988 9.108 1.32988 7.84166 2.11093 7.06062L3.17159 5.99996M8.82844 5.99996L9.8891 4.9393C10.6702 4.15825 10.6702 2.89192 9.8891 2.11087C9.10806 1.32982 7.84173 1.32982 7.06068 2.11087L6.00002 3.17153'
                    stroke={stroke}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </g>
            <defs>
                <clipPath id='clip0_2195_96504'>
                    <rect width='12' height='12' fill={fill} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default IconWrapper(LinkBrokenIcon)

