export function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) return text;

    const sliced = text.slice(0, maxLength);
    const lastSpace = sliced.lastIndexOf(' ');
    // break at the last full word instead of mid-word/mid-sentence, unless
    // that would throw away too much of the budget (e.g. one very long word)
    const cut = lastSpace > maxLength * 0.6 ? sliced.slice(0, lastSpace) : sliced;

    return cut.trim() + '…';
}

