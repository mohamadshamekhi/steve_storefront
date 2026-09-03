import localFont from 'next/font/local';

const YekanFont = localFont({
    src: [
        {
            path: '../../../public/fonts/YekanBakh/YekanBakhLight.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/YekanBakh/YekanBakhRegular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/YekanBakh/YekanBakhMedium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/YekanBakh/YekanBakhBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/YekanBakh/YekanBakhHeavy.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../../../public/fonts/YekanBakh/YekanBakhFat.ttf',
            weight: '800',
            style: 'normal'
        }
    ],
    display: 'swap',
    // Cut CLS while the webfont loads: fall back to the platform Persian/Arabic
    // system fonts (very close metrics to Yekan Bakh) instead of Times.
    fallback: ['Tahoma', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
    adjustFontFallback: false,
    preload: true,
    variable: '--font-YekanBakh'
});

export default YekanFont;
