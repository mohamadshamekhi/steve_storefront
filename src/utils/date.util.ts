export function formatJalali(date: Date): string {
    return new Intl.DateTimeFormat('fa-IR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
}


export const JALALI_MONTHS = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند'
];

/** تبدیل تاریخ شمسی به میلادی (الگوریتم jdf). خروجی: [سال، ماه ۱-۱۲، روز] */
export function jalaliToGregorian(jy: number, jm: number, jd: number): [number, number, number] {
    jy += 1595;
    let days =
        -355668 +
        365 * jy +
        Math.floor(jy / 33) * 8 +
        Math.floor(((jy % 33) + 3) / 4) +
        jd +
        (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
    let gy = 400 * Math.floor(days / 146097);
    days %= 146097;
    if (days > 36524) {
        days--;
        gy += 100 * Math.floor(days / 36524);
        days %= 36524;
        if (days >= 365) days++;
    }
    gy += 4 * Math.floor(days / 1461);
    days %= 1461;
    if (days > 365) {
        gy += Math.floor((days - 1) / 365);
        days = (days - 1) % 365;
    }
    let gd = days + 1;
    const isLeap = (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0;
    const monthDays = [0, 31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let gm = 0;
    for (gm = 0; gm < 13 && gd > monthDays[gm]; gm++) gd -= monthDays[gm];
    return [gy, gm, gd];
}

export function isJalaliLeapYear(jy: number): boolean {
    // در سال غیرکبیسه «۳۰ اسفند» همان «۱ فروردین» سال بعد می‌شود
    return jalaliToGregorian(jy, 12, 30).join('-') !== jalaliToGregorian(jy + 1, 1, 1).join('-');
}

export function jalaliMonthLength(jy: number, jm: number): number {
    if (jm <= 6) return 31;
    if (jm <= 11) return 30;
    return isJalaliLeapYear(jy) ? 30 : 29;
}

export function currentJalaliYear(): number {
    const year = new Intl.DateTimeFormat('en-US-u-ca-persian', { year: 'numeric' })
        .formatToParts(new Date())
        .find((p) => p.type === 'year')?.value;
    return Number(year);
}

/** تاریخ شمسی → رشته‌ی میلادی YYYY-MM-DD (فرمتی که بکند برای birth_date می‌خواهد) */
export function jalaliToIsoDate(jy: number, jm: number, jd: number): string {
    const [gy, gm, gd] = jalaliToGregorian(jy, jm, jd);
    return `${gy}-${String(gm).padStart(2, '0')}-${String(gd).padStart(2, '0')}`;
}
