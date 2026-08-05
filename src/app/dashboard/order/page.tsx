import OrdersTemplate from '@/components/ui/templates/dashboard/Orders/OrdersTemplate';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    robots: { index: false, follow: false }
};

const page = () => {
    return <OrdersTemplate />;
};

export default page;
