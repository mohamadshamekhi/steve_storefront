const ProductCardSkeleton = () => {
    return (
        <div className='h-full animate-pulse overflow-hidden rounded-2xl border border-gray-100 bg-white'>
            <div className='aspect-square w-full bg-gray-200' />

            <div className='p-2.5 sm:p-3'>
                <div className='mb-1.5 h-3 w-3/4 rounded bg-gray-200' />
                <div className='mb-4 h-3 w-1/2 rounded bg-gray-200' />

                <div className='flex items-end justify-between'>
                    <div className='space-y-1.5'>
                        <div className='h-2.5 w-12 rounded bg-gray-200' />
                        <div className='h-4 w-20 rounded bg-gray-200' />
                    </div>
                    <div className='h-9 w-9 rounded-lg bg-gray-200' />
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
