'use client';

import CartIcon from '@/components/icons/bottomSheet/CartIcon';
import LoginIcon from '@/components/icons/bottomSheet/LoginIcon';
import MenuIcon from '@/components/icons/bottomSheet/MenuIcon';
import SecondHandIcon from '@/components/icons/bottomSheet/SecondHandIcon';
import ROUTES from '@/constants/routes/routes.constant';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useSessionStore } from '@/state';
import { useDrawerStore } from '@/state/stores/drawer';
import { useMenuStore } from '@/state/stores/menu';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../atoms/Button/Button';

const BottomSheet = () => {
    const isMobile = useMediaQuery('lg');
    const { toggle, isOpen } = useMenuStore();
    const { toggle: TDrawer } = useDrawerStore();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const toggleMenu = () => toggle('mobile');
    const TDrawerMenu = () => TDrawer('mobile');

    const sessionData = useSessionStore((state) => state.session);
    const isAuthenticated = !!sessionData?.session;

    const bottomSheetItems = [
        {
            icon: <MenuIcon />,
            label: 'منو',
            onClick: TDrawerMenu
        },
        // {
        //     icon: <CategoryIcon />,
        //     label: 'دسته بندی',
        //     onClick: toggleMenu
        // },
        {
            icon: <CartIcon />,
            label: 'سبد خرید',
            href: ROUTES.Cart
        },
        {
            icon: <SecondHandIcon />,
            label: 'دست دوم',
            href: `${ROUTES.Products}?is_second_hand=true`
        },
        {
            icon: isAuthenticated ? (
                <Image
                    src='/images/_general/placeholder/user.png'
                    alt='profile'
                    width={24}
                    height={24}
                    className='rounded-full'
                />
            ) : (
                <LoginIcon />
            ),
            label: isAuthenticated ? 'پروفایل' : 'ورود',
            href: isAuthenticated ? ROUTES.Dashboard : ROUTES.Login
        }
    ];

    if (!isMobile) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 w-full bg-white drop-shadow-2xl drop-shadow-black ${
                isOpen ? 'z-[130]' : 'z-40'
            }`}
        >
            <ul className='flex items-center justify-around p-3 text-center font-medium text-gray-700 sm:p-4'>
                {bottomSheetItems.map((item, index) => (
                    <li key={index}>
                        {item.href ? (
                            <Link
                                href={item.href}
                                className='flex flex-col items-center justify-center gap-1 !p-0 text-xs text-gray-700'
                            >
                                <span className='mb-2.5'>{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        ) : item.onClick ? (
                            <Button
                                onClick={item.onClick}
                                variant='text'
                                color='black'
                                className='flex flex-col items-center justify-center gap-1 !p-0 text-xs! font-medium!'
                            >
                                <span className='mb-2.5'>{item.icon}</span>
                                <span>{item.label}</span>
                            </Button>
                        ) : (
                            <span
                                className='flex cursor-default flex-col items-center justify-center gap-1 !p-0 text-xs text-gray-400'
                                title='غیرفعال'
                            >
                                <span className='mb-2.5'>{item.icon}</span>
                                <span>{item.label}</span>
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BottomSheet;
