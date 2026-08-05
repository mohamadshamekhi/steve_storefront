import Notifications from '@/components/page/Notifications';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    robots: { index: false, follow: false }
};

const page = () => {
    return <Notifications />;
};

export default page;

