import NotificationTemplate from '../ui/templates/NotificationTemplate/NotificationTemplate';

type Notification = {
    id: number;
    text: string;
    date: string;
};

const notifications: Notification[] = [
    {
        id: 1,
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...',
        date: '۱۴۰۴/۰۴/۰۶'
    },
    {
        id: 2,
        text: 'لورم ایپسوم متن ساختگی برای تست و نمایش اعلان‌ها...',
        date: '۱۴۰۴/۰۴/۰۷'
    },
    {
        id: 3,
        text: 'این یک متن نمونه دیگر برای نمایش اعلان است...',
        date: '۱۴۰۴/۰۴/۰۸'
    },
    {
        id: 4,
        text: 'اعلان چهارم برای تست رندر لیست...',
        date: '۱۴۰۴/۰۴/۰۹'
    },
    {
        id: 5,
        text: 'اعلان چهارم برای تست رندر لیست...',
        date: '۱۴۰۴/۰۴/۱۰'
    },
    {
        id: 6,
        text: 'اعلان چهارم برای تست رندر لیست...',
        date: '۱۴۰۴/۰۴/۱۱'
    },
    {
        id: 7,
        text: 'اعلان چهارم برای تست رندر لیست...',
        date: '۱۴۰۴/۰۴/۱۲'
    },
];

const Notifications = () => {
    return (
        <ul>
            {notifications.map((notification) => (
                <NotificationTemplate key={notification.id} notification={notification} />
            ))}
        </ul>
    );
};

export default Notifications;

