import Script from 'next/script';

// Google Analytics (GA4) page-view + event tracking.
// Reads the Measurement ID from NEXT_PUBLIC_GA_ID - only set in .env.production,
// so local/dev traffic never pollutes real GA reports.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const GoogleAnalytics = () => {
    if (!GA_MEASUREMENT_ID) return null;

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy='lazyOnload' />
            <Script id='google-analytics' strategy='lazyOnload'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}');
                `}
            </Script>
        </>
    );
};
