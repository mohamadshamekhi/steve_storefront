import DOMPurify from 'isomorphic-dompurify';

/**
 * CMS descriptions sometimes have build-tool noise pasted into them — e.g. a
 * `<body class="yekanfont_xxx-module__yyy__variable bg-gray-50">` copied out of
 * the deployed page's source. None of these tokens are ever legitimate prose, so
 * strip them (and the orphan punctuation they leave behind) before rendering.
 */
function stripLeakedMarkup(html: string): string {
    return html
        .replace(/\S*(?:__variable|-module__|_[0-9a-f]{6,}-module)\S*/g, '')
        .replace(/\bbody\.\s*/gi, '')
        .replace(/\b[a-z]+\.bg-(?:gray|white|primary|secondary)-\d+\b/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
}

export function sanitizeHtml(dirtyHtml: string): string {
    if (typeof dirtyHtml !== 'string') return '';

    const clean = DOMPurify.sanitize(stripLeakedMarkup(dirtyHtml), {
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
