'use client';

import CartIcon from '@/components/icons/bottomSheet/CartIcon';
import LoginIcon from '@/components/icons/bottomSheet/LoginIcon';
import MenuIcon from '@/components/icons/bottomSheet/MenuIcon';
import SecondHandIcon from '@/components/icons/bottomSheet/SecondHandIcon';
import cn from '@/config/utilities/cn';
import ROUTES from '@/constants/routes/routes.constant';
import useElementHeightVar from '@/hooks/useElementHeightVar';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useSessionStore } from '@/state';
import { useMenuStore } from '@/state/stores/menu';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface BottomItem {
    icon: ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
    active: boolean;
}

const ItemBody = ({ icon, label, active }: { icon: ReactNode; label: string; active: boolean }) => (
    <>
        <span
            className={cn(
                'flex h-9 w-9 items-center justify-center rounded-2xl transition-all duration-200',
                active ? 'bg-primary-50 text-primary-600 scale-105' : 'text-gray-500 group-active:bg-gray-100'
            )}
        >
            {icon}
        </span>
        <span className={cn('max-w-full truncate transition-colors', active && 'text-primary-600 font-semibold')}>
            {label}
        </span>
    </>
);

const iconClass = 'h-[22px] w-[22px]';

const BottomSheet = () => {
    const isMobile = useMediaQuery('lg');
    const pathname = usePathname() ?? '';
    const { isOpen, toggle } = useMenuStore();
    const toggleMenu = () => toggle('mobile');

    const sessionData = useSessionStore((state) => state.session);
    const isAuthenticated = !!sessionData?.session;

    const bottomSheetItems: BottomItem[] = [
        {
            icon: <MenuIcon className={iconClass} />,
            label: 'منو',
            onClick: toggleMenu,
            active: isOpen
        },
        {
            icon: <CartIcon className={iconClass} />,
            label: 'سبد خرید',
            href: ROUTES.Cart,
            active: pathname.startsWith(ROUTES.Cart)
        },
        {
            icon: <SecondHandIcon className={iconClass} />,
            label: 'دست دوم',
            href: `${ROUTES.Products}?is_second_hand=true`,
            active: pathname === ROUTES.Products
        },
        {
            icon: isAuthenticated ? (
                <Image
                    src='/images/_general/placeholder/user.png'
                    alt='profile'
                    width={22}
                    height={22}
                    className='rounded-full'
                />
            ) : (
                <LoginIcon className={iconClass} />
            ),
            label: isAuthenticated ? 'پروفایل' : 'ورود',
            href: isAuthenticated ? ROUTES.Dashboard : ROUTES.Login,
            active: pathname.startsWith(ROUTES.Dashboard) || pathname.startsWith('/auth')
        }
    ];

    // Report the nav's real footprint so a page's own sticky bottom bar (e.g. the
    // single-product buy bar) can stack directly above it. Kept mounted on every
    // mobile route so the user always has nav + dashboard access.
    const insetRef = useElementHeightVar('--app-bottom-nav', isMobile);

    if (!isMobile) return null;

    const itemClass =
        'group flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[11px] leading-none font-medium text-gray-500';

    return (
        <div
            ref={insetRef}
            className={cn(
                'fixed inset-x-0 bottom-0 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)]',
                isOpen ? 'z-[130]' : 'z-40'
            )}
        >
            <ul
                className='mx-auto flex max-w-md items-stretch gap-1 rounded-[22px] border border-black/5 bg-white/85 p-1.5 shadow-[0_12px_36px_-8px_rgba(31,41,55,0.28)] backdrop-blur-xl'
            >
                {bottomSheetItems.map((item, index) => (
                    <li key={index} className='flex flex-1'>
                        {item.href ? (
                            <Link href={item.href} className={itemClass}>
                                <ItemBody icon={item.icon} label={item.label} active={item.active} />
                            </Link>
                        ) : (
                            <button type='button' onClick={item.onClick} className={cn(itemClass, 'cursor-pointer')}>
                                <ItemBody icon={item.icon} label={item.label} active={item.active} />
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BottomSheet;
