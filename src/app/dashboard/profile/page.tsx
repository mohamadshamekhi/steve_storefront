import Profile from '@/components/page/Profile';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    robots: { index: false, follow: false }
};

const page = () => {
    return <Profile />;
};

export default page;

