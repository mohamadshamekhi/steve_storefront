'use client';
import ShapeIcon from '@/components/icons/ShapeIcon';
import ROUTES from '@/constants/routes/routes.constant';
import useCountDown from '@/hooks/useCountDown';
import amazingPic from '@public/images/_general/bg/amazing-pic.png';
import Image from 'next/image';
import Link from 'next/link';

const AmazingSaleTimerOrganisms = () => {
    const { hours, minutes, seconds } = useCountDown({
        time: 36000000
    });
    return (
        <div className='col-span-full flex flex-col items-center justify-center gap-3 py-6 md:flex-row lg:col-span-2 lg:flex-col lg:py-4'>
            <Image src={amazingPic} alt='amazing product' width={187} height={198} loading='lazy' />

            <div className='text-subtitle2-regular flex flex-row-reverse items-center gap-2 text-white'>
                <span className='flex aspect-square w-[33px] items-center justify-center rounded-md bg-white text-gray-800'>
                    {hours}
                </span>
                :
                <span className='flex aspect-square w-[33px] items-center justify-center rounded-md bg-white text-gray-800'>
                    {minutes}
                </span>
                :
                <span className='flex aspect-square w-[33px] items-center justify-center rounded-md bg-white text-gray-800'>
                    {seconds}
                </span>
            </div>

            <div className='relative flex justify-center'>
                <ShapeIcon className='pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block' />
                <Link
                    href={ROUTES.Products}
                    className='text-body1-bold relative z-10 flex min-w-25 items-center justify-center px-3 py-1 text-white lg:text-gray-800'
                >
                    مشاهده همه
                </Link>
            </div>
        </div>
    );
};

export default AmazingSaleTimerOrganisms;
