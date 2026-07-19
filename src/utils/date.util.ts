export function formatJalali(date: Date): string {
    return new Intl.DateTimeFormat('fa-IR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
}

