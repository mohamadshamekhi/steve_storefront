import { Metadata } from 'next/types';
import { notFound, redirect } from 'next/navigation';

// لیبل‌های QR قدیمی لینک ?token=XXX دارند — به شکل جدید /order/delivery/XXX هدایت می‌شوند
export const metadata: Metadata = {
    robots: { index: false, follow: false }
};

async function LegacyOrderDelivery({ searchParams }: { searchParams: Promise<{ token?: string | string[] }> }) {
    const { token } = await searchParams;
    const value = (Array.isArray(token) ? token[0] : token)?.trim();
    if (!value) notFound();
    redirect(`/order/delivery/${encodeURIComponent(value)}`);
}

export default LegacyOrderDelivery;
