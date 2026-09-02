const CheckIcon = ({ className = '' }: { className?: string }) => (
    <svg
        className={className}
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M20 6 9 17l-5-5'
            stroke='currentColor'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

const ProductTrustList = ({ warranty }: { warranty?: string }) => {
    const items = [
        ...(warranty && warranty !== '-' ? [`گارانتی ${warranty} ماهه شرکتی`] : []),
        'هفت روز ضمانت بازگشت کالا',
        'ضمانت اصل بودن کالا',
        'موجود در انبار استیو (ارسال فوری)'
    ];

    return (
        <ul className='space-y-3'>
            {items.map((label) => (
                <li key={label} className='flex items-center gap-2.5 text-sm text-gray-600'>
                    <span className='bg-primary-50 text-primary-600 flex h-5 w-5 shrink-0 items-center justify-center rounded-full'>
                        <CheckIcon className='h-3 w-3' />
                    </span>
                    <span>{label}</span>
                </li>
            ))}
        </ul>
    );
};

export default ProductTrustList;
