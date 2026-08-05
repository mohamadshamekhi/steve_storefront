import SellsTemplate from '@/components/ui/templates/dashboard/Sells/SellsTemplate';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    robots: { index: false, follow: false }
};

const page = () => {
    return <SellsTemplate />;
};

export default page;
