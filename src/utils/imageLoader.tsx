/* eslint-disable jsx-a11y/alt-text */
// components/OptimizedImage.tsx
import Image, { ImageProps, StaticImageData } from 'next/image';

// A no-op loader: returns the URL untouched so the <img> points straight at the
// source. This deliberately BYPASSES the Next image optimizer (`/_next/image`)
// for external URLs — the production container can't always reach the image
// host (storage.c2.liara.space) from server-side, so routing through the
// optimizer 500s in prod even though it works in `next dev`. Local `import`ed
// images still go through the optimizer normally.
const externalLoader = ({ src }: { src: string }) => src;

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'loader'> {
    src: string | StaticImageData;
}

export default function OptimizedImage({ src, ...props }: OptimizedImageProps) {
    if (typeof src === 'object') {
        return <Image src={src} {...props} />;
    }

    const isExternal = src.startsWith('http');

    return <Image src={src} loader={isExternal ? externalLoader : undefined} {...props} />;
}
