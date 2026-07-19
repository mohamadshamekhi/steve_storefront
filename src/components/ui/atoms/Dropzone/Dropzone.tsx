'use client';
import TrashIcon from '@/components/icons/TrashIcon';
import UploadIcon from '@/components/icons/UploadIcon';
import cn from '@/config/utilities/cn';
import Image from 'next/image';
import { useCallback, useState } from 'react';

interface DropzoneProps {
    onFileChange?: (file: File | null) => void;
    acceptedTypes?: string[];
    maxSize?: number;
    className?: string;
    placeholder?: string;
}

const Dropzone = ({
    onFileChange,
    acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    maxSize = 5 * 1024 * 1024,
    className = '',
    placeholder = 'عکس گوشی را انتخاب یا بکشید اینجا'
}: DropzoneProps) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const validateFile = (file: File): boolean => {
        if (!acceptedTypes.includes(file.type)) {
            setError('فرمت فایل پشتیبانی نمی‌شود. لطفا یک تصویر انتخاب کنید');
            return false;
        }

        if (file.size > maxSize) {
            setError(`حجم فایل نباید بیشتر از ${maxSize / (1024 * 1024)} مگابایت باشد`);
            return false;
        }

        setError(null);
        return true;
    };

    const handleFile = useCallback(
        (file: File) => {
            if (!validateFile(file)) {
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);

            if (onFileChange) {
                onFileChange(file);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [onFileChange]
    );

    const handleDrop = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);

            const files = e.dataTransfer.files;
            if (files && files.length > 0) {
                handleFile(files[0]);
            }
        },
        [handleFile]
    );

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleFileInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            if (files && files.length > 0) {
                handleFile(files[0]);
            }
        },
        [handleFile]
    );

    const handleDelete = useCallback(() => {
        setPreview(null);
        setError(null);
        if (onFileChange) {
            onFileChange(null);
        }
    }, [onFileChange]);

    const handleClick = () => {
        document.getElementById('file-input')?.click();
    };

    return (
        <div className={cn('relative', className)}>
            {!preview ? (
                <div
                    onClick={handleClick}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={cn(
                        'bg-primary-50 text-body2-regular flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-gray-400 transition-all hover:border-gray-400',
                        isDragging && 'border-primary-500 bg-primary-100',
                        error && 'border-red-300'
                    )}
                >
                    <UploadIcon className='mb-3 h-12 w-12 text-gray-400' />
                    <span className='text-center'>{placeholder}</span>
                    <span className='text-body3-regular mt-2 text-gray-400'>
                        فرمت‌های مجاز: JPG, PNG, WEBP - حداکثر {maxSize / (1024 * 1024)} مگابایت
                    </span>
                    <input
                        id='file-input'
                        type='file'
                        accept={acceptedTypes.join(',')}
                        onChange={handleFileInput}
                        className='hidden'
                    />
                </div>
            ) : (
                <div className='bg-primary-50 relative min-h-[200px] overflow-hidden rounded-lg border-2 border-gray-300'>
                    <div className='relative h-full w-full p-4'>
                        <Image
                            src={preview}
                            alt='Preview'
                            width={400}
                            height={300}
                            className='mx-auto max-h-[300px] w-auto rounded-lg object-contain'
                        />
                    </div>
                    <div className='absolute top-4 left-4 flex gap-2'>
                        <button
                            type='button'
                            onClick={handleDelete}
                            className='flex h-10 w-10 items-center justify-center rounded-lg bg-red-500 text-white transition-all hover:bg-red-600'
                            aria-label='حذف تصویر'
                        >
                            <TrashIcon className='h-5 w-5' stroke='white' />
                        </button>
                        <button
                            type='button'
                            onClick={handleClick}
                            className='bg-primary-500 hover:bg-primary-600 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-all'
                            aria-label='تغییر تصویر'
                        >
                            <UploadIcon className='h-5 w-5' stroke='white' />
                        </button>
                    </div>
                    <input
                        id='file-input'
                        type='file'
                        accept={acceptedTypes.join(',')}
                        onChange={handleFileInput}
                        className='hidden'
                    />
                </div>
            )}
            {error && <p className='text-body3-regular mt-2 text-red-500'>{error}</p>}
        </div>
    );
};

export default Dropzone;

