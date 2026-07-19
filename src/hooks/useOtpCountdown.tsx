import { useCallback, useEffect, useRef, useState } from 'react';

type Options = {
    duration?: number;
    storageKey?: string;
    onExpire?: () => void;
    tickIntervalMs?: number;
};

export default function useOtpCountdown(opts?: Options) {
    const { duration = 120, storageKey = 'otp-countdown-end', onExpire, tickIntervalMs = 500 } = opts ?? {};

    const [remainingSec, setRemainingSec] = useState<number>(() => {
        try {
            const raw = localStorage.getItem(storageKey);
            if (!raw) return 0;
            const end = Number(raw);
            if (!end || Number.isNaN(end)) return 0;
            const diff = Math.ceil((end - Date.now()) / 1000);
            return Math.max(0, diff);
        } catch {
            return 0;
        }
    });

    const intervalRef = useRef<number | null>(null);
    const endTimeRef = useRef<number | null>(null);
    const onExpireRef = useRef(onExpire);
    onExpireRef.current = onExpire;

    const start = useCallback(
        (customDurationSec?: number) => {
            const dur = typeof customDurationSec === 'number' ? customDurationSec : duration;
            const end = Date.now() + dur * 1000;
            endTimeRef.current = end;
            try {
                localStorage.setItem(storageKey, String(end));
            } catch {
                // ignore storage errors
            }
            setRemainingSec(dur);
        },
        [duration, storageKey]
    );

    const reset = useCallback(() => {
        endTimeRef.current = null;
        try {
            localStorage.removeItem(storageKey);
        } catch {}
        setRemainingSec(0);
    }, [storageKey]);

    useEffect(() => {
        try {
            const raw = localStorage.getItem(storageKey);
            if (raw) {
                const end = Number(raw);
                if (end && !Number.isNaN(end)) {
                    endTimeRef.current = end;
                }
            }
        } catch {}

        function tick() {
            const end = endTimeRef.current;
            if (!end) {
                setRemainingSec(0);
                return;
            }
            const diffMs = end - Date.now();
            const sec = Math.max(0, Math.ceil(diffMs / 1000));
            setRemainingSec(sec);
            if (sec <= 0) {
                endTimeRef.current = null;
                try {
                    localStorage.removeItem(storageKey);
                } catch {}
                if (onExpireRef.current) onExpireRef.current();
            }
        }

        tick();

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        intervalRef.current = window.setInterval(tick, tickIntervalMs);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [storageKey, tickIntervalMs]);

    useEffect(() => {
        function onStorage(e: StorageEvent) {
            if (e.key !== storageKey) return;
            if (!e.newValue) {
                endTimeRef.current = null;
                setRemainingSec(0);
                return;
            }
            const end = Number(e.newValue);
            if (!end || Number.isNaN(end)) {
                endTimeRef.current = null;
                setRemainingSec(0);
                return;
            }
            endTimeRef.current = end;
            const diff = Math.max(0, Math.ceil((end - Date.now()) / 1000));
            setRemainingSec(diff);
        }
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, [storageKey]);

    const isDisabled = remainingSec > 0;
    const minutes = Math.floor(remainingSec / 60);
    const seconds = remainingSec % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return {
        start,
        reset,
        isDisabled,
        remainingSec,
        minutes,
        seconds,
        formatted
    } as const;
}

