'use client';

import { PartnerMeData } from '@/models/partner.model';
import { getPartnershipStatus } from '@/services/partner.service';
import { useSessionStore } from '@/state';
import { useCallback, useEffect, useState } from 'react';

/**
 * وضعیت همکاری فروش کاربر جاری را از GET /partner/me می‌خواند.
 * فقط وقتی کاربر لاگین کرده باشد درخواست می‌زند.
 */
export function usePartnerStatus() {
    const status = useSessionStore((state) => state.status);
    const [data, setData] = useState<PartnerMeData | null>(null);
    const [loading, setLoading] = useState(false);

    const refetch = useCallback(async () => {
        if (status !== 'authenticated') return;

        setLoading(true);
        const res = await getPartnershipStatus();
        if (res.success) {
            setData(res.data ?? null);
        }
        setLoading(false);
    }, [status]);

    useEffect(() => {
        if (status === 'authenticated') {
            refetch();
        } else if (status === 'unauthenticated') {
            setData(null);
        }
    }, [status, refetch]);

    return { data, loading, refetch, isAuthenticated: status === 'authenticated' };
}
