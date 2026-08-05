import Addresses from '@/components/page/Addresses';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    robots: { index: false, follow: false }
};

const page = () => {
    return <Addresses />;
};

export default page;

