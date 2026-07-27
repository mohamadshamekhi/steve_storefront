import IconProps from '@/config/types/icon.types'
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper'

const SlashIcon = ({ className, stroke = 'currentColor', fill = '#none', strokeWidth = '1.5' }: IconProps) => {
    return (
        <span className={className}>
            <svg width='8' height='12' viewBox='0 0 8 12' fill={fill} xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M1.5 11L6.5 1'
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </span>
    )
}

export default IconWrapper(SlashIcon)

