'use client';

import { useState } from 'react';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';

import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import MoreIcon from '@/components/icons/MoreIcon';
import PlayIcon from '@/components/icons/PlayIcon';
import { useProductVariant } from '@/contexts/ProductVariantContext';
import { SingleProductItem } from '@/models/product.model';
import OptimizedImage from '@/utils/imageLoader';
import { getMediaType } from '@/utils/mime.util';
import Lightbox from 'yet-another-react-lightbox';
import ProductCountDownTimer from './ProductCountDownTimer';

const ProductGalleryOrganisms = ({ gallery, productName }: { gallery: SingleProductItem['gallery']; productName?: string }) => {
    const { discount } = useProductVariant();
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const mappedGallery = gallery.map((item) => {
        const mediaType = getMediaType(item.url);

        if (mediaType === 'video') {
            return {
                type: 'video' as const,
                sources: [{ src: item.url, type: 'video/mp4' }],
                is_primary: item.is_primary,
                media_id: item.media_id
            };
        }

        return {
            type: 'image' as const,
            src: item.url,
            is_primary: item.is_primary,
            media_id: item.media_id
        };
    });

    const primaryGalleryItem = mappedGallery.find((item) => item.is_primary);

    return (
        <div className='overflow-hidden rounded-2xl bg-white p-4 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-5 lg:col-span-5 lg:sticky lg:top-4 lg:self-start'>
            {primaryGalleryItem && (
                <div className='relative'>
                    <ProductCountDownTimer expiresAt={discount?.expires_at} />
                    <button
                        className='block w-full cursor-zoom-in overflow-hidden rounded-xl bg-linear-to-b from-gray-50 to-gray-100/50'
                        onClick={() => {
                            setOpen(true);
                            setCurrentIndex(1);
                        }}
                    >
                        {primaryGalleryItem.type === 'image' && primaryGalleryItem.src && (
                            <OptimizedImage
                                src={primaryGalleryItem.src}
                                alt={productName ?? `Slide ${primaryGalleryItem.media_id + 1}`}
                                width={600}
                                height={600}
                                priority
                                className='mx-auto block aspect-square w-full max-w-115 object-contain lg:max-w-none'
                            />
                        )}
                        {primaryGalleryItem.type === 'video' && primaryGalleryItem.sources && (
                            <video
                                controls
                                className='mx-auto block aspect-square w-full max-w-115 object-contain lg:max-w-none'
                            >
                                <source
                                    src={primaryGalleryItem.sources[0].src}
                                    type={primaryGalleryItem.sources[0].type}
                                />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </button>
                </div>
            )}

            <div className='mt-4 flex w-full flex-wrap justify-center gap-2.5 lg:justify-start'>
                {mappedGallery.slice(0, 4).map((item, index) => (
                    <div
                        key={index}
                        className='hover:border-primary-400 h-16 w-16 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition-colors'
                        onClick={() => {
                            setOpen(true);
                            setCurrentIndex(index);
                        }}
                    >
                        {item.type === 'image' && item.src ? (
                            <OptimizedImage
                                src={item.src}
                                alt={productName ?? `Thumb ${index + 1}`}
                                className='block h-full w-full cursor-pointer object-cover'
                                width={64}
                                height={64}
                                loading='lazy'
                            />
                        ) : (
                            <div className='relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden backdrop-blur-lg before:absolute before:z-10 before:h-full before:w-full before:bg-[#fffffff9]'>
                                {item.type === 'video' && item.sources && (
                                    <OptimizedImage
                                        src={item.sources[0].src}
                                        alt={productName ?? 'Video thumbnail'}
                                        width={64}
                                        height={64}
                                        className='w-full'
                                    />
                                )}
                                <PlayIcon className='absolute z-10 text-gray-700' />
                            </div>
                        )}
                    </div>
                ))}

                {mappedGallery.length > 3 && (
                    <div
                        onClick={() => {
                            setOpen(true);
                        }}
                        className='relative flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50 backdrop-blur-lg before:absolute before:z-10 before:h-full before:w-full before:bg-[#fffffff9]'
                    >
                        <MoreIcon className='absolute z-10 text-gray-700' />
                    </div>
                )}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={currentIndex}
                slides={mappedGallery}
                plugins={[Thumbnails, Counter, Video]}
            />
        </div>
    );
};

export default ProductGalleryOrganisms;

