import IconProps from '@/config/types/icon.types'
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper'

const MoreIcon = ({ className, stroke = 'currentColor', fill = 'none', strokeWidth = '1.38377' }: IconProps) => {
    return (
        <svg
            className={className}
            width='18'
            height='4'
            viewBox='0 0 18 4'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M8.97778 3.15491C9.48727 3.15491 9.90029 2.74188 9.90029 2.23239C9.90029 1.7229 9.48727 1.30988 8.97778 1.30988C8.46829 1.30988 8.05526 1.7229 8.05526 2.23239C8.05526 2.74188 8.46829 3.15491 8.97778 3.15491Z'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M15.4354 3.15491C15.9449 3.15491 16.3579 2.74188 16.3579 2.23239C16.3579 1.7229 15.9449 1.30988 15.4354 1.30988C14.9259 1.30988 14.5129 1.7229 14.5129 2.23239C14.5129 2.74188 14.9259 3.15491 15.4354 3.15491Z'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M2.52017 3.15491C3.02966 3.15491 3.44269 2.74188 3.44269 2.23239C3.44269 1.7229 3.02966 1.30988 2.52017 1.30988C2.01068 1.30988 1.59766 1.7229 1.59766 2.23239C1.59766 2.74188 2.01068 3.15491 2.52017 3.15491Z'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default IconWrapper(MoreIcon)

