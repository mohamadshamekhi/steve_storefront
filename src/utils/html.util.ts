import DOMPurify from 'isomorphic-dompurify';

export function sanitizeHtml(dirtyHtml: string): string {
    if (typeof dirtyHtml !== 'string') return '';

    const clean = DOMPurify.sanitize(dirtyHtml, {
        USE_PROFILES: { html: true }, // Safe HTML only (no SVG/MathML)
        ALLOWED_TAGS: [
            'a',
            'b',
            'i',
            'u',
            'strong',
            'em',
            'p',
            'br',
            'ul',
            'ol',
            'li',
            'span',
            'div',
            'img',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'blockquote',
            'code',
            'pre'
        ],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'target', 'rel', 'class'],
        ALLOW_DATA_ATTR: false, // prevent data:* URLs
        FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'style']
    });

    return clean.trim();
}
