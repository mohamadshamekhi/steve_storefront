interface IProps {
    /** عنوان صفحه که بالای اسکلتون نمایش داده می‌شود */
    title?: string;
    /** تعداد کارت‌های ساختگی */
    count?: number;
}

const DashboardListSkeleton = ({ title, count = 3 }: IProps) => {
    return (
        <>
            {title && <h1 className='text-gray-850 mb-6 text-base font-bold'>{title}</h1>}

            <div className='flex flex-col gap-4'>
                {Array.from({ length: count }).map((_, i) => (
                    <div
                        key={i}
                        className='animate-pulse rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5'
                    >
                        <div className='mb-4 flex items-center justify-between'>
                            <div className='h-5 w-24 rounded-full bg-gray-100' />
                            <div className='h-4 w-20 rounded bg-gray-100' />
                        </div>
                        <div className='h-4 w-2/3 rounded bg-gray-100' />
                        <div className='mt-3 h-16 rounded-xl bg-gray-100' />
                        <div className='mt-4 h-4 w-32 rounded bg-gray-100' />
                    </div>
                ))}
            </div>
        </>
    );
};

export default DashboardListSkeleton;
