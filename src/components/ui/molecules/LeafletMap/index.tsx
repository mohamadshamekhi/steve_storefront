import dynamic from 'next/dynamic';

export const LeafletMap = dynamic(() => import('./LeafletMap').then((mod) => mod), {
    ssr: false
});
