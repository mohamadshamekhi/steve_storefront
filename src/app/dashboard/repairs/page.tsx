import RepairsTemplate from '@/components/ui/templates/dashboard/Repairs/RepairsTemplate';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    robots: { index: false, follow: false }
};

const page = () => {
    return <RepairsTemplate />;
};

export default page;
