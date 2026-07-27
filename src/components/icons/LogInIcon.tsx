import IconProps from '@/config/types/icon.types';
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper';

const LogInIcon = ({ className, stroke = 'currentColor', fill = 'none', strokeWidth = '1.5' }: IconProps) => {
    return (
        <svg
            stroke={stroke}
            className={className}
            width='24'
            height='24'
            viewBox='0 0 20 22'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M4 16C4 16.3513 4 16.527 4.01567 16.6797C4.14575 17.9474 5.0626 18.9946 6.30206 19.2911C6.45134 19.3268 6.6255 19.3501 6.97368 19.3965L13.5656 20.2754C15.442 20.5256 16.3803 20.6507 17.1084 20.3612C17.7478 20.107 18.2803 19.6407 18.6168 19.0406C19 18.3571 19 17.4106 19 15.5175V6.48248C19 4.58944 19 3.64292 18.6168 2.95939C18.2803 2.35927 17.7478 1.89304 17.1084 1.63884C16.3803 1.3493 15.442 1.47439 13.5656 1.72458L6.97368 2.60351C6.62546 2.64994 6.45135 2.67315 6.30206 2.70886C5.0626 3.00536 4.14575 4.05257 4.01567 5.32034C4 5.47304 4 5.6487 4 6M10 7L14 11M14 11L10 15M14 11H1'
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default IconWrapper(LogInIcon);
