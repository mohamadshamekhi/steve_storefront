/** ارقام فارسی (۰-۹) و عربی (٠-٩) را به ارقام انگلیسی تبدیل می‌کند */
export function toEnglishDigits(value: string): string {
    return value
        .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
        .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660));
}

export function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) return text;

    const sliced = text.slice(0, maxLength);
    const lastSpace = sliced.lastIndexOf(' ');
    // break at the last full word instead of mid-word/mid-sentence, unless
    // that would throw away too much of the budget (e.g. one very long word)
    const cut = lastSpace > maxLength * 0.6 ? sliced.slice(0, lastSpace) : sliced;

    return cut.trim() + '…';
}

