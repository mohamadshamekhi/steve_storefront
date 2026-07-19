'use client';
import PageTransitionOverlay from '@/components/ui/molecules/PageTransitionOverlay/PageTransitionOverlay';
import { fetcher, onSwrGlobalError, swrOnErrorRetry } from '@steve/api-config';
import { ReactNode } from 'react';
import { SWRConfig } from 'swr';

const ClientPage = ({ components }: { components: ReactNode }) => {
    return (
        <SWRConfig
            value={{
                fetcher,
                onErrorRetry: swrOnErrorRetry,
                onError: onSwrGlobalError,
                focusThrottleInterval: 30000
            }}
        >
            <PageTransitionOverlay />
            {components}
        </SWRConfig>
    );
};

export default ClientPage;
