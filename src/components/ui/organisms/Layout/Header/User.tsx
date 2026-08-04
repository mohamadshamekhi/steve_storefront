import { signOutAction } from '@/actions/auth.action';
import LogInIcon from '@/components/icons/LogInIcon';
import DropDownItem from '@/components/ui/atoms/DropDownItem/DropDownItem';
import Dropdown from '@/components/ui/molecules/DropDown/DropDown';
import ROUTES from '@/constants/routes/routes.constant';
import { useSessionStore } from '@/state';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const User = () => {
    const router = useRouter();
    const statusSessionStore = useSessionStore((state) => state.status);
    const sessionStore = useSessionStore((state) => state.session);
    const clearSession = useSessionStore((state) => state.clearSession);

    if (statusSessionStore === 'authenticated')
        return (
            <Dropdown
                className='ml-[16px] h-[46px] '
                label={sessionStore?.profile?.name || "نامشخص"}
                icon={
                    <Image
                        src='/images/_general/placeholder/user.png'
                        alt='user-profile'
                        width={42}
                        height={45}
                        className='ml-2.5 rounded-full border-3 border-transparent transition-colors delay-75 duration-200 hover:border-sky-600'
                    />
                }
            >
                <DropDownItem
                    label='داشبورد'
                    icon={<></>}
                    onClick={() => {
                        router.push('/dashboard');
                    }}
                />

                <DropDownItem
                    onClick={async () => {
                        clearSession();
                        await signOutAction();
                    }}
                    label='خروج'
                    icon={<></>}
                />
            </Dropdown>
        );

    return (
        <div className='hidden md:block'>
            <Link
                className='text-body1-regular ml-[16px] hidden items-center justify-center gap-1.5 rounded-md border border-gray-400 px-[15px] py-[10px] hover:border-gray-800 md:flex'
                href={ROUTES.Login}
            >
                <LogInIcon className='text-gray-700' />
                <span>ورود | ثبت نام</span>
            </Link>
        </div>
    );
};

export default User;
