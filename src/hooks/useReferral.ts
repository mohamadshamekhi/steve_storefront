'use client';

import { ReferralLinkData } from '@/models/referral.model';
import { getReferralLink } from '@/services/referral.service';
import { useSessionStore } from '@/state';
import { useCallback, useEffect, useState } from 'react';

/**
 * اطلاعات لینک دعوت و پیشرفت جایزه‌ی کاربر جاری را از GET /referral/me/link می‌خواند.
 * اکانت دعوت در اولین صدازدن به‌صورت lazy روی سرور ساخته می‌شود.
 */
export function useReferral() {
    const status = useSessionStore((state) => state.status);
    const [data, setData] = useState<ReferralLinkData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const refetch = useCallback(async () => {
        if (status !== 'authenticated') return;

        setLoading(true);
        const res = await getReferralLink();
        if (res.success) {
            setData(res.data ?? null);
            setError(null);
        } else {
            setError(res.message);
        }
        setLoading(false);
    }, [status]);

    useEffect(() => {
        if (status === 'authenticated') {
            refetch();
        } else if (status === 'unauthenticated') {
            setData(null);
            setLoading(false);
        }
    }, [status, refetch]);

    return { data, loading, error, refetch };
}
