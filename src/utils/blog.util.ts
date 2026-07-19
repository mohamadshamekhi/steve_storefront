export function calculateReadingTime(text: string, wordsPerMinute = 180): { minutes: number; seconds: number } {
    const words = text.trim().split(/\s+/).length;

    const totalMinutes = words / wordsPerMinute;

    const minutes = Math.floor(totalMinutes);
    const seconds = Math.round((totalMinutes - minutes) * 60);

    return { minutes, seconds };
}

export function calculateReadingTimeText(text: string, wordsPerMinute = 180): string {
    const { minutes, seconds } = calculateReadingTime(text, wordsPerMinute);
    return `${minutes} دقیقه و ${seconds} ثانیه`;
}

