'use client';

import LinkBrokenIcon from '@/components/icons/LinkBrokenIcon';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

const CopyLinkButton = () => {
    const { copyToClipboard, isCopied } = useCopyToClipboard();

    const handleCopyLink = () => {
        const currentUrl = window.location.href;
        copyToClipboard(currentUrl);
    };

    return (
        <button onClick={handleCopyLink} className='flex items-center transition hover:opacity-70'>
            <LinkBrokenIcon className='text-primary-500 ml-1' />
            <span className='text-tiny text-gray-600'>{isCopied ? 'کپی شد!' : 'کپی کردن لینک'}</span>
        </button>
    );
};

export default CopyLinkButton;
