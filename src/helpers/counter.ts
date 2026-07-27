type TimeParts = {
    hours: number;
    minutes: number;
    seconds: number;
    textParts: {
        hours: string;
        minutes: string;
        seconds: string;
    };
    fullText: string;
};

export function formatSecondsToTime(secondsInput: number): TimeParts {
    const hours = Math.floor(secondsInput / 3600);
    const minutes = Math.floor((secondsInput % 3600) / 60);
    const seconds = secondsInput % 60;

    const toPersian = (num: number) => num.toString();

    const parts = {
        hours: hours > 0 ? `${toPersian(hours)} ساعت` : '',
        minutes: minutes > 0 ? `${toPersian(minutes)} دقیقه` : '',
        seconds: seconds > 0 || (hours === 0 && minutes === 0) ? `${toPersian(seconds)} ثانیه` : ''
    };

    const textArray = [parts.hours, parts.minutes, parts.seconds].filter(Boolean);
    const fullText = textArray.join(' و ');

    return {
        hours,
        minutes,
        seconds,
        textParts: parts,
        fullText
    };
}
