import ClockIcon from '@/components/icons/checkout/ClockIcon';

const DeliveryTimeBox = () => {
    return (
        <div className='border-primary-400 mb-8 flex flex-wrap items-center gap-2 rounded-md border bg-white p-6'>
            <ClockIcon />

            <div className='mr-4 flex flex-col'>
                <span className='text-primary-600 mb-2.5 text-sm font-medium'>زمان تحویل</span>
                <span className='text-base font-medium text-gray-800'>زمان تقریبی از 12 تیر تا 16 تیر</span>
            </div>
        </div>
    );
};

export default DeliveryTimeBox;
