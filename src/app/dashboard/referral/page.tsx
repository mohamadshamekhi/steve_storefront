import Referral from '@/components/page/Referral';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    robots: { index: false, follow: false }
};

const page = () => {
    return <Referral />;
};

export default page;
