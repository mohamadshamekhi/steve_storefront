'use client';

import { useState } from 'react';

type CopyStatus = 'idle' | 'copied' | 'error';

export const useCopyToClipboard = () => {
    const [status, setStatus] = useState<CopyStatus>('idle');

    const copyToClipboard = async (text: string): Promise<boolean> => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                setStatus('copied');
                setTimeout(() => setStatus('idle'), 2000);
                return true;
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                const successful = document.execCommand('copy');
                textArea.remove();

                if (successful) {
                    setStatus('copied');
                    setTimeout(() => setStatus('idle'), 2000);
                    return true;
                } else {
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 2000);
                    return false;
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 2000);
            return false;
        }
    };

    return {
        copyToClipboard,
        status,
        isCopied: status === 'copied',
        isError: status === 'error'
    };
};

