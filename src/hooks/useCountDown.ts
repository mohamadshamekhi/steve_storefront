import { useEffect, useState } from 'react';

interface UseCountDownProps {
    time: number;
    interval?: number;
}

const useCountDown = ({ time, interval = 1000 }: UseCountDownProps) => {
    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prev) => {
                if (prev <= 0) return 0;
                const updated = prev - interval;
                return updated <= 0 ? 0 : updated;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [interval]);

    const format = (num: number): string => num.toString().padStart(2, '0');

    const getTimeParts = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return {
            days: format(days),
            hours: format(hours),
            minutes: format(minutes),
            seconds: format(seconds)
        };
    };

    return {
        ...getTimeParts(remainingTime),
        remainingTime,
        isFinished: remainingTime === 0
    };
};

export default useCountDown;
