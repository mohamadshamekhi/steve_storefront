import NotificationsIcon from '@/components/icons/NotificationsIcon';

type Notification = {
    id: number;
    text: string;
    date: string;
};

const NotificationTemplate = ({ notification }: { notification: Notification }) => {
    return (
        <li className='flex flex-wrap items-start gap-3 border-b border-gray-300 py-5 last:border-0'>
            <div className='flex grow items-start gap-2'>
                <NotificationsIcon className='text-primary-500' />
                <div className='text-sm text-gray-500'>{notification.text}</div>
            </div>
            <span className='text-prima'>{notification.date}</span>
        </li>
    );
};

export default NotificationTemplate;

