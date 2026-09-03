/** کلید localStorage برای نگه‌داری کد دعوت بین بازدید /invite تا تکمیل ثبت‌نام */
export const REF_STORAGE_KEY = 'steve_ref';

/** فقط شکل کدهای معتبر (مثل STV-8K3QP) را می‌پذیرد تا چیزی جز کد ذخیره نشود */
const REF_PATTERN = /^[A-Za-z0-9-]{4,32}$/;

export function isValidRef(value: string | null | undefined): value is string {
    return !!value && REF_PATTERN.test(value);
}

export function getStoredRef(): string | null {
    if (typeof window === 'undefined') return null;
    try {
        const value = window.localStorage.getItem(REF_STORAGE_KEY);
        return isValidRef(value) ? value : null;
    } catch {
        return null;
    }
}

export function setStoredRef(value: string): void {
    if (typeof window === 'undefined' || !isValidRef(value)) return;
    try {
        window.localStorage.setItem(REF_STORAGE_KEY, value);
    } catch {
        /* storage unavailable — ignore */
    }
}

export function clearStoredRef(): void {
    if (typeof window === 'undefined') return;
    try {
        window.localStorage.removeItem(REF_STORAGE_KEY);
    } catch {
        /* ignore */
    }
}
