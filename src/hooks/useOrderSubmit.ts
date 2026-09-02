'use client';

import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { useToast } from '@/hooks/useToast';
import { useCartStore } from '@/state/stores/cart';
import { useUserPreferencesStore } from '@/state/stores/user-preferences';
import { useState } from 'react';

type SelectedShipping = { id: string; cost: number } | null;

/**
 * Shared "پرداخت و ثبت سفارش" flow — used by both the desktop OrderSummary button
 * and the mobile sticky checkout bar. Validates address + shipping (toast on
 * failure), registers the order, starts the payment gateway, redirects.
 */
export default function useOrderSubmit(selectedShipping: SelectedShipping) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const discountCode = useCartStore((s) => s.discountCode);
    const itemCount = useCartStore((s) => s.itemCount);
    const activeAddressId = useUserPreferencesStore((s) => s.activeAddressId);
    const { showToast } = useToast();

    const submit = async () => {
        if (itemCount === 0) return;

        if (!activeAddressId) {
            showToast({ message: 'لطفاً ابتدا آدرس خود را انتخاب کنید.', type: 'error', duration: 4000 });
            return;
        }
        if (!selectedShipping?.id) {
            showToast({ message: 'لطفاً روش ارسال را انتخاب کنید.', type: 'error', duration: 4000 });
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetcher(ApiKeys.REGISTER_ORDER, 'dashboard', 'POST', {
                requiredAuth: true,
                body: {
                    address_id: activeAddressId,
                    shipping_id: selectedShipping.id,
                    // the discount only ever lived in the cart preview otherwise —
                    // the order (and the amount charged) was registered at full price
                    ...(discountCode && { discount_code: discountCode })
                }
            });

            if (response?.success && response?.data?.order_id) {
                const paymentResponse = await fetcher(ApiKeys.START_PAYMENT, 'dashboard', 'POST', {
                    requiredAuth: true,
                    body: { order_id: response.data.order_id }
                });

                if (paymentResponse?.success && paymentResponse?.data?.payment_url) {
                    window.location.href = paymentResponse.data.payment_url;
                    return;
                }
            }

            showToast({ message: 'مشکلی در ثبت سفارش پیش آمد، دوباره تلاش کنید.', type: 'error', duration: 5000 });
        } catch (error) {
            console.error('Order error:', error);
            showToast({ message: 'خطا در ارتباط با سرور.', type: 'error', duration: 5000 });
        } finally {
            setIsSubmitting(false);
        }
    };

    return { submit, isSubmitting };
}
