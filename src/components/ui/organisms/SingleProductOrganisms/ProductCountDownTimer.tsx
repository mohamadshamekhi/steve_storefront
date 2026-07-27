import OfferTextIcon from '@/components/icons/OfferTextIcon';
import BlobIcon from '@/components/icons/product/BlobIcon';
import useCountDown from '@/hooks/useCountDown';

const ProductCountDownTimer = ({ expiresAt }: { expiresAt?: string }) => {
    const calculateRemainingTime = () => {
        if (!expiresAt) return 0;
        const expirationDate = new Date(expiresAt).getTime();
        const now = Date.now();
        const remaining = expirationDate - now;
        return remaining > 0 ? remaining : 0;
    };

    const { hours, minutes, seconds, isFinished } = useCountDown({ time: calculateRemainingTime() });

    if (!expiresAt || isFinished) {
        return null;
    }

    return (
        <div className='absolute -top-4 left-1/2 flex -translate-x-1/2 transform items-center gap-2'>
            <BlobIcon className='absolute top-0 left-1/2 z-20 -translate-x-1/2 scale-110 transform' />
            <div className='absolute top-1 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2'>
                <OfferTextIcon className='scale-105 transform' />
                <div className='text-subtitle2-regular text-secondary-500 flex flex-row-reverse items-center gap-1 font-semibold!'>
                    <span className='text-secondary-500 flex items-center justify-center text-sm'>{hours}</span>:
                    <span className='text-secondary-500 flex items-center justify-center text-sm'>{minutes}</span>:
                    <span className='text-secondary-500 flex items-center justify-center text-sm'>{seconds}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCountDownTimer;

