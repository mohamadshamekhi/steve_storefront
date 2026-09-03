'use client';
import { signOutAction } from '@/actions/auth.action';
import GiftIcon from '@/components/icons/dashboard/GiftIcon';
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
        icon: <GiftIcon />,
        label: 'دعوت دوستان',
        href: '/dashboard/referral'
    },
    {
        icon: <LocationIcon />,
        label: 'آدرس ها',
        href: '/dashboard/addresses'
    }
];

interface IProps {
    children: React.ReactNode;
}

interface SidebarProps {
    name?: string;
    phone?: string;
    isActive: (href: string) => boolean;
    onLogout: () => void;
    onNavigate?: () => void;
}

function ProfileCard({ name, phone, onNavigate }: Pick<SidebarProps, 'name' | 'phone' | 'onNavigate'>) {
    return (
        <div className='from-primary-600 to-primary-500 relative overflow-hidden bg-linear-to-br px-5 pt-6 pb-7'>
            <div
                aria-hidden
                className='absolute -top-10 -left-10 size-32 rounded-full bg-white/10'
            />
            <div className='relative flex items-center gap-3'>
                <Image
                    src='/images/_general/placeholder/user.png'
                    alt='تصویر پروفایل'
                    width={56}
                    height={56}
                    className='size-14 shrink-0 rounded-full bg-white/20 object-cover ring-3 ring-white/30'
                />
                <div className='min-w-0 flex-1 text-white'>
                    <p className='truncate text-sm-plus font-bold'>{name ?? 'کاربر استیو'}</p>
                    <p className='mt-1 truncate text-caption1-regular text-white/80'>{phone ?? '—'}</p>
                </div>
            </div>
            <Link
                href='/dashboard/profile'
                onClick={onNavigate}
                className='mt-4 inline-flex items-center gap-1 rounded-lg bg-white/15 px-3 py-1.5 text-caption1-medium text-white transition hover:bg-white/25'
            >
                ویرایش اطلاعات
            </Link>
        </div>
    );
}

function SidebarNav({ isActive, onLogout, onNavigate }: Omit<SidebarProps, 'name' | 'phone'>) {
    return (
        <nav className='p-3'>
            <ul className='space-y-1'>
                {menuItems.map(({ label, icon, href }) => {
                    const active = isActive(href);
                    return (
                        <li key={label}>
                            <Link
                                href={href}
                                onClick={onNavigate}
                                aria-current={active ? 'page' : undefined}
                                className={cn(
                                    'group focus-visible:ring-primary-400/50 relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-500 transition outline-none hover:bg-gray-50 hover:text-gray-800 focus-visible:ring-2',
                                    active && 'bg-primary-50 text-primary-700 font-semibold hover:bg-primary-50 hover:text-primary-700'
                                )}
                            >
                                <span
                                    aria-hidden
                                    className={cn(
                                        'bg-primary-600 absolute top-1/2 right-0 h-5 w-1 -translate-y-1/2 rounded-full transition-opacity',
                                        active ? 'opacity-100' : 'opacity-0'
                                    )}
                                />
                                <span
                                    className={cn(
                                        'flex size-9 shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-500 transition group-hover:text-gray-700',
                                        active && 'border-primary-100 text-primary-600'
                                    )}
                                >
                                    {icon}
                                </span>
                                <span>{label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className='my-2 border-t border-gray-100' />

            <button
                type='button'
                onClick={onLogout}
                className='text-secondary-500 hover:bg-secondary-50 focus-visible:ring-secondary-400/50 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition outline-none focus-visible:ring-2'
            >
                <span className='border-secondary-100 text-secondary-500 flex size-9 shrink-0 items-center justify-center rounded-lg border bg-white'>
                    <LogoutIcon />
                </span>
                <span>خروج از حساب</span>
            </button>
        </nav>
    );
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

    const handleLogout = async () => {
        clearSession();
        await signOutAction();
    };

    const name = sessionStore?.profile?.name;
    const phone = sessionStore?.profile?.phone_number;

    return (
        <Layout>
            <div className='bg-gray-50/70'>
                <Container>
                    <section className='flex gap-6 py-6 lg:gap-8 lg:py-8'>
                        <aside className='hidden w-72.5 shrink-0 lg:block'>
                            <div className='sticky top-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm'>
                                <ProfileCard name={name} phone={phone} />
                                <SidebarNav isActive={isActive} onLogout={handleLogout} />
                            </div>
                        </aside>

                        {isMobile && (
                            <OffCanvas onClose={close} isOpen={isOpen} width='86%' className='z-20 px-0! py-0!'>
                                <div className='pt-12'>
                                    <ProfileCard name={name} phone={phone} onNavigate={close} />
                                    <SidebarNav isActive={isActive} onLogout={handleLogout} onNavigate={close} />
                                </div>
                            </OffCanvas>
                        )}

                        <div className='min-w-0 flex-1'>
                            <div className='rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 lg:p-8'>
                                {children}
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        </Layout>
    );
}

export default DashboardLayout;
