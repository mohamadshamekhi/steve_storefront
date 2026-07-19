const ProductCardSkeleton = () => {
    return (
        <div className='relative h-full overflow-hidden rounded-[8px] bg-white animate-pulse'>
            {/* Image */}
            <div className='aspect-[3/4] w-full bg-gray-200' />

            <div className='px-[15px] pt-4 pb-4'>
                {/* Title */}
                <div className='h-4 w-3/4 rounded bg-gray-200 mb-1' />
                <div className='h-4 w-1/2 rounded bg-gray-200 mb-4' />

                {/* Specs */}
                <div className='mt-[14px] grid grid-cols-3 gap-2 mb-4'>
                    {[0, 1, 2].map((i) => (
                        <div key={i} className='h-10 rounded bg-gray-200' />
                    ))}
                </div>

                {/* Price */}
                <div className='mt-2 h-4 w-1/3 rounded bg-gray-200 mb-2' />
                <div className='h-5 w-1/2 rounded bg-gray-200' />
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
