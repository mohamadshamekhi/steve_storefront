/* eslint-disable jsx-a11y/alt-text */
// components/OptimizedImage.tsx
import Image, { ImageProps, StaticImageData } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
    src: string | StaticImageData;
}

/**
 * Wrapper around next/image. External URLs (product/API images from
 * storage.c2.liara.space etc.) now go through the Next image optimizer
 * (`/_next/image`) so they're resized and served as AVIF/WebP with a long
 * immutable cache — see next.config.ts `images.formats` / `minimumCacheTTL`.
 *
 * Pass `unoptimized` on a specific `<OptimizedImage />` if a source host ever
 * can't be reached by the optimizer.
 */
export default function OptimizedImage({ src, ...props }: OptimizedImageProps) {
    return <Image src={src} {...props} />;
}
