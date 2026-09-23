import OrderDeliveryTemplate from '@/components/ui/templates/orderDelivery/OrderDeliveryTemplate';
import { Metadata } from 'next/types';

// مقصدِ QR چسبانده‌شده روی بسته (GET /backoffice/order/:id/delivery-qrcode → url)
export const metadata: Metadata = {
    title: 'تأیید تحویل سفارش | استیو موبایل',
    robots: { index: false, follow: false }
};

async function OrderDelivery({ params }: { params: Promise<{ token: string }> }) {
    const { token } = await params;
    return <OrderDeliveryTemplate token={token} />;
}

export default OrderDelivery;
