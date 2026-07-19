'use client';
import { signOutAction } from '@/actions/auth.action';
import EditIcon from '@/components/icons/dashboard/EditIcon';
import HomeIcon from '@/components/icons/dashboard/HomeIcon';
import LocationIcon from '@/components/icons/dashboard/LocationIcon';
import LogoutIcon from '@/components/icons/dashboard/LogoutIcon';
import OrderIcon from '@/components/icons/dashboard/OrderIcon';
import ProfileIcon from '@/components/icons/dashboard/ProfileIcon';
import RepairIcon from '@/components/icons/dashboard/RepairIcon';
import SellIcon from '@/components/icons/dashboard/SellIcon';
import OffCanvas from '@/components/ui/molecules/OffCanvas/OffCanvas';
import Container from '@/components/ui/organisms/Container/Container';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import cn from '@/config/utilities/cn';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useSessionStore } from '@/state';
import { useDrawerStore } from '@/state/stores/drawer';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
    {
        icon: <HomeIcon />,
        label: 'خلاصه فعالیت ها',
        href: '/dashboard'
    },
    {
        icon: <ProfileIcon />,
        label: 'اطلاعات شخصی من',
        href: '/dashboard/profile'
    },
    {
        icon: <OrderIcon />,
        label: 'سفارش ها',
        href: '/dashboard/order'
    },
    // {
    //     icon: <NotificationIcon />,
    //     label: 'پیام ها',
    //     href: '/dashboard/notification'
    // },
    {
        icon: <RepairIcon />,
        label: 'تعمیرات',
        href: '/dashboard/repairs'
    },
    {
        icon: <SellIcon />,
        label: 'فروش دست دوم',
        href: '/dashboard/sells'
    },
    {
        icon: <LocationIcon />,
        label: 'آدرس ها',
        href: '/dashboard/addresses'
    }
    // {
    //     icon: <LogoutIcon />,
    //     label: 'خروج',
    //     href: '#',
    //     className: 'text-red-850'
    // }
];

interface IProps {
    children: React.ReactNode;
}

function DashboardLayout({ children }: IProps) {
    const { isOpen, close } = useDrawerStore();
    const isMobile = useMediaQuery('lg');
    const sessionStore = useSessionStore((state) => state.session);
    const clearSession = useSessionStore((state) => state.clearSession);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/dashboard') {
            return pathname === '/dashboard';
        }
        return pathname.startsWith(href);
    };

    return (
        <Layout>
            <Container>
                <section className='flex gap-5 pt-[38px] pb-16'>
                    <div className='hidden w-3/12 max-w-[418px] rounded-[5px] bg-white pb-20 shadow-md lg:inline-block'>
                        <div className='p-4 lg:px-[26px] lg:pt-[34px]'>
                            <div className='bg-primary-50 flex justify-between rounded-sm p-3.5'>
                                <div className='flex flex-wrap items-center gap-2'>
                                    <Image
                                        src='/images/_general/placeholder/user.png'
                                        alt='user-profile'
                                        width={60}
                                        height={60}
                                        className='ml-2.5 rounded-full border-3 border-transparent transition-colors delay-75 duration-200 hover:border-sky-600'
                                    />
                                    <div className='flex flex-col text-sm text-[#302F32]'>
                                        <span className='font-bold'>{sessionStore?.profile?.name ?? 'نام کاربری'}</span>
                                        <span className='mt-[14px] font-medium'>
                                            {sessionStore?.profile?.phone_number}
                                        </span>
                                    </div>
                                </div>
                                <Link href='/dashboard/profile' className='self-end'>
                                    <span className='text-primary-500 text-sm font-semibold'>ویرایش</span>
                                </Link>
                            </div>
                        </div>
                        <ul>
                            {menuItems.map(({ label, icon, href }) => {
                                const active = isActive(href);
                                return (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className={cn(
                                                'hover:bg-primary-100 Lafont-normal hover:text-primary-500 flex px-4 py-3.5 text-base text-gray-400 transition ease-in-out hover:font-semibold',
                                                active && 'bg-primary-100 text-primary-500 font-semibold'
                                            )}
                                        >
                                            <span>{icon}</span>
                                            <span className='mr-4'>{label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                            <li
                                onClick={async () => {
                                    clearSession();
                                    await signOutAction();
                                }}
                            >
                                <div
                                    className={cn(
                                        'hover:bg-primary-100 Lafont-normal hover:text-primary-500 flex cursor-pointer px-4 py-3.5 text-base text-gray-400 transition ease-in-out hover:font-semibold',
                                        'text-red-850'
                                    )}
                                >
                                    <span>
                                        <LogoutIcon />
                                    </span>
                                    <span className='mr-4'>خروج</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {isMobile && (
                        <OffCanvas onClose={close} isOpen={isOpen} width='100%' className='z-[20] !px-0 !py-2'>
                            <div className='mt-6 p-4 lg:px-[26px] lg:pt-[34px]'>
                                <div className='bg-primary-50 flex justify-between rounded-sm p-3.5'>
                                    <div className='flex flex-wrap items-center gap-2'>
                                        <Image
                                            src='/images/_general/placeholder/user.png'
                                            alt='user-profile'
                                            width={60}
                                            height={60}
                                            className='ml-2.5 rounded-full border-3 border-transparent transition-colors delay-75 duration-200 hover:border-sky-600'
                                        />
                                        <div className='flex flex-col text-sm text-[#302F32]'>
                                            <span className='font-bold'>
                                                {sessionStore?.profile?.name ?? 'نام کاربری'}
                                            </span>

                                            <span className='mt-[14px] font-medium'>
                                                {sessionStore?.profile?.phone_number}
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        href='/dashboard/profile'
                                        onClick={() => {
                                            close();
                                        }}
                                        className='self-end'
                                    >
                                        <EditIcon />
                                    </Link>
                                </div>
                            </div>
                            <ul>
                                {menuItems.map(({ label, icon, href }) => {
                                    const active = isActive(href);
                                    return (
                                        <li key={label}>
                                            <Link
                                                onClick={() => {
                                                    close();
                                                }}
                                                href={href}
                                                className={cn(
                                                    'hover:bg-primary-100 Lafont-normal hover:text-primary-500 flex px-4 py-3.5 text-base text-gray-400 transition ease-in-out hover:font-semibold',
                                                    active && 'bg-primary-100 text-primary-500 font-semibold'
                                                )}
                                            >
                                                <span>{icon}</span>
                                                <span className='mr-4'>{label}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </OffCanvas>
                    )}

                    <div className='w-full rounded-[5px] bg-white px-8 py-[31px] lg:w-9/12'>{children}</div>
                </section>
            </Container>
        </Layout>
    );
}

export default DashboardLayout;
