import EmptyState from '../ui/molecules/EmptyState/EmptyState';

const Notifications = () => {
    return (
        <>
            <h1 className='text-gray-850 mb-6 text-base font-bold'>پیام‌ها</h1>
            <EmptyState
                title='پیام جدیدی ندارید'
                subtitle='اطلاع‌رسانی‌های مربوط به سفارش‌ها، تعمیرات و حساب کاربری شما اینجا نمایش داده می‌شود.'
            />
        </>
    );
};

export default Notifications;
