import Image from 'next/image';

interface IProps {
    label: string;
    iconSrc: string;
    count: number;
}
function StatusOrganisms({ label, iconSrc, count }: IProps) {
    return (
        <div key={label} className='flex w-full items-center rounded-sm bg-purple-50 p-4 xl:px-6 xl:py-8'>
            <Image src={iconSrc} alt='current-order' width={39} height={39} />
            <div className='text-gray-850 mr-4 flex grow flex-col'>
                <span className='mb-2 font-medium'>
                    <span className='ml-1.5'>{count}</span>
                    ســفـارش
                </span>
                <span className='font-semibold'>{label}</span>
            </div>
        </div>
    );
}

export default StatusOrganisms;
