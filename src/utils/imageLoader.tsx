/* eslint-disable jsx-a11y/alt-text */
// components/OptimizedImage.tsx
import Image, { ImageProps, StaticImageData } from 'next/image';

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

