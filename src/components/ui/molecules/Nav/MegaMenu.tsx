'use client';

import CellPhoneIcon from '@/components/icons/CellPhoneIcon';
import ChevronLeft from '@/components/icons/ChevronLeft';
import CategoryIcon from '@/components/icons/Menu/CategoryIcon';
import { useMenuStore } from '@/state/stores/menu';
import Link from 'next/link';

const MegaMenu = () => {
    const { isOpen, open, close } = useMenuStore();

    const categories = Array.from({ length: 20 }, () => ({
        label: 'موبایل',
        href: '#',
        icon: <CellPhoneIcon className='ml-2' />
    }));

    const categoriesSubItems = Array.from({ length: 5 }, () => ({
        label: 'برند های  مختلف گوشی',
        href: '#',
        subMenus: Array.from({ length: 9 }, () => ({
            label: 'گوشی سامسونگ',
            href: '#'
        }))
    }));

    return (
        <>
            <div onMouseEnter={() => open('desktop')} onMouseLeave={close} className='group relative'>
                <li className='hover:text-secondary-500 relative py-2.5 transition-all ease-in-out'>
                    <div className='absolute bottom-0 left-0 h-0.5 w-full bg-[radial-gradient(50%_685.69%_at_50%_50%,_#ED1944_0%,_rgba(255,_255,_255,_0)_100%)] opacity-0 group-hover:opacity-100'></div>
                    <div className='group-hover:text-secondary-500! flex cursor-pointer items-center gap-1.5 text-sm lg:text-[16px]'>
                        <span className='group-hover:text-secondary-500! text-gray-600 transition-colors'>
                            <CategoryIcon className='ml-[4px]' />
                        </span>
                        <span>دسته بندی</span>
                    </div>
                </li>
                {isOpen && (
                    <div className='absolute top-full right-0 z-50 h-[600px] max-w-[1300px] bg-white md:w-[750] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1300px]'>
                        <div className='grid h-full grid-cols-12'>
                            <div className='bg-primary-100 col-span-3 h-full'>
                                <ul className='scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-h-[600px] overflow-y-auto text-base font-normal text-gray-600'>
                                    {categories.map((item, i) => {
                                        return (
                                            <li key={i}>
                                                <Link
                                                    href={item.href}
                                                    className='flex items-center px-[34px] py-[17px] transition-all ease-in-out hover:bg-white hover:font-medium hover:text-gray-800'
                                                >
                                                    {item.icon}
                                                    <span>{item.label}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className='scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent col-span-9 h-full max-h-[600px] overflow-y-auto px-6 py-4'>
                                <div className='mb-8'>
                                    <Link href='#' className='text-primary-600 flex items-center'>
                                        <span className='text-sm'>همه محصولات موبایل</span>
                                        <ChevronLeft className='mr-1.5 h-2 w-2' />
                                    </Link>
                                </div>
                                <div className='grid grid-cols-4'>
                                    {categoriesSubItems.map((item, id) => {
                                        return (
                                            <ul
                                                key={id}
                                                // className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
                                            >
                                                <li>
                                                    <Link
                                                        href={item.href}
                                                        className='mb-4 flex items-center text-base font-medium text-gray-800 hover:text-gray-600'
                                                    >
                                                        <span>{item.label}</span>
                                                        <ChevronLeft className='mr-1.5 h-2 w-2' />
                                                    </Link>
                                                    <ul className='space-y-3.5'>
                                                        {item.subMenus.map((subItem, id) => {
                                                            return (
                                                                <li key={id + 10}>
                                                                    <Link
                                                                        href={subItem.href}
                                                                        className='text-xs-plus hover:text-primary-600 font-normal text-gray-500'
                                                                    >
                                                                        {subItem.label}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </li>
                                            </ul>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MegaMenu;
