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
        <div className='overflow-hidden rounded-md bg-white p-4 lg:col-span-12 xl:col-span-3'>
            {primaryGalleryItem && (
                <div className='relative'>
                    <ProductCountDownTimer expiresAt={discount?.expires_at} />
                    <button
                        className='w-full cursor-pointer'
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
                                className='mx-auto block w-full max-w-[400px] rounded-lg object-contain xl:aspect-[320/557] xl:max-w-full'
                            />
                        )}
                        {primaryGalleryItem.type === 'video' && primaryGalleryItem.sources && (
                            <video
                                controls
                                className='mx-auto block w-full max-w-[400px] rounded-lg object-contain xl:aspect-[320/557] xl:max-w-full'
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

            <div className='flex w-full justify-center gap-2'>
                {mappedGallery.slice(0, 4).map((item, index) => (
                    <div key={index}>
                        <div
                            className='h-full max-w-[51px] overflow-hidden rounded-md border border-gray-200'
                            onClick={() => {
                                setOpen(true);
                                setCurrentIndex(index);
                            }}
                        >
                            {item.type === 'image' && item.src ? (
                                <OptimizedImage
                                    src={item.src}
                                    alt={productName ?? `Thumb ${index + 1}`}
                                    className='mx-auto block h-full w-full cursor-pointer rounded-md object-cover'
                                    width={52}
                                    height={52}
                                    loading='lazy'
                                />
                            ) : (
                                <div className='relative mx-auto flex h-[52px] w-[52px] cursor-pointer items-center justify-center overflow-hidden rounded-md object-cover backdrop-blur-lg before:absolute before:z-10 before:h-full before:w-full before:bg-[#fffffff9]'>
                                    {item.type === 'video' && item.sources && (
                                        <OptimizedImage
                                            src={item.sources[0].src}
                                            alt={productName ?? 'Video thumbnail'}
                                            width={52}
                                            height={52}
                                            className='w-full'
                                        />
                                    )}
                                    <PlayIcon className='absolute z-10 text-gray-700' />
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {mappedGallery.length > 3 && (
                    <div
                        onClick={() => {
                            setOpen(true);
                        }}
                        className='relative flex h-[52px] w-[52px] max-w-[51px] cursor-pointer items-center justify-center overflow-hidden rounded-md border border-gray-200 object-cover backdrop-blur-lg before:absolute before:z-10 before:h-full before:w-full before:bg-[#fffffff9]'
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

