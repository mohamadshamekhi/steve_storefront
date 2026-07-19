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
        <div className='relative col-span-2 flex flex-col items-center justify-center gap-3 pb-10 md:flex-row lg:flex-col lg:pb-2'>
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

            <div>
                <div className='absolute bottom-2 left-1/2 -translate-1/2 transform lg:bottom-0'>
                    <div className='absolute bottom-0 left-1/2 hidden translate-x-[-50%] translate-y-[6px] lg:flex'>
                        <ShapeIcon />
                    </div>
                    <Link
                        href={ROUTES.Products}
                        className='text-body1-bold absolute bottom-2 left-1/2 flex min-w-[100px] translate-x-[-50%] translate-y-[6px] items-center justify-center text-white lg:text-gray-800'
                    >
                        مشاهده همه
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AmazingSaleTimerOrganisms;
