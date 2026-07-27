import LoadingIcon from '@/components/icons/LoadingIcon';

const LoadingState = ({ title = 'در حال بارگذاری...', subtitle = 'از صبر و شکیبایی شما صمیمانه سپاسگزاریم' }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
            {title && <div>{title}</div>}
            {subtitle && <div>{subtitle}</div>}
            <LoadingIcon className='scale-150' />
        </div>
    );
};

export default LoadingState;

