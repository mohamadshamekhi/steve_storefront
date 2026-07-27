'use client';

import { useCartStore } from '@/state/stores/cart';
import { useSessionStore } from '@/state/stores/auth';
import { useEffect } from 'react';

const CART_SYNC_INTERVAL = 5 * 60 * 1000; // 5 minutes

export default function CartSyncProvider() {
    const fetchCart = useCartStore((s) => s.fetchCart);
    const authStatus = useSessionStore((s) => s.status);

    useEffect(() => {
        if (authStatus !== 'authenticated') return;

        const interval = setInterval(() => {
            fetchCart();
        }, CART_SYNC_INTERVAL);

        return () => clearInterval(interval);
    }, [authStatus, fetchCart]);

    return null;
}
