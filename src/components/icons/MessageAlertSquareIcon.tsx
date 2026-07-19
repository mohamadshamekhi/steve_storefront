import IconProps from '@/config/types/icon.types'
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper'

const MessageAlertSquareIcon = ({
    className,
    stroke = 'currentColor',
    fill = 'none',
    strokeWidth = '1.0625'
}: IconProps) => {
    return (
        <svg
            className={className}
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M8.51068 7.4375V4.95833M8.51068 9.91667H8.51776M4.97339 12.75V14.4043C4.97339 14.7817 4.97339 14.9705 5.05066 15.0674C5.11787 15.1517 5.21978 15.2007 5.3275 15.2006C5.45137 15.2005 5.59855 15.0826 5.89291 14.8468L7.58053 13.495C7.92527 13.2189 8.09765 13.0808 8.28959 12.9827C8.45989 12.8955 8.64116 12.8319 8.82848 12.7934C9.03963 12.75 9.26037 12.75 9.70187 12.75H11.482C12.6707 12.75 13.265 12.75 13.719 12.5184C14.1183 12.3147 14.443 11.9896 14.6465 11.5897C14.8778 11.1352 14.8778 10.5401 14.8778 9.35V5.525C14.8778 4.33489 14.8778 3.73983 14.6465 3.28527C14.443 2.88543 14.1183 2.56034 13.719 2.35661C13.265 2.125 12.6707 2.125 11.482 2.125H5.53936C4.35071 2.125 3.75639 2.125 3.30239 2.35661C2.90304 2.56034 2.57836 2.88543 2.37488 3.28527C2.14355 3.73983 2.14355 4.33489 2.14355 5.525V9.91667C2.14355 10.5754 2.14355 10.9048 2.21587 11.175C2.41212 11.9083 2.9842 12.4811 3.71662 12.6776C3.98651 12.75 4.31547 12.75 4.97339 12.75Z'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default IconWrapper(MessageAlertSquareIcon)

