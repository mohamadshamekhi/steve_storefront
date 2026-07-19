import Backdrop from '@/components/ui/molecules/Backdrop/Backdrop';
import BottomSheet from '@/components/ui/molecules/BottomSheet/BottomSheet';
import CartSyncProvider from '@/hooks/useCartSync';
import { PropsWithChildren } from 'react';
import AdvertiseOrganism from '../../Layout/Advertise/AdvertiseOrganism';
import FooterOrganisms from '../../Layout/FooterOrganisms';
import HeaderOrganism from '../../Layout/Header/HeaderOrganisms';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <CartSyncProvider />
            <BottomSheet />
            <AdvertiseOrganism />
            <HeaderOrganism />
            {children}
            <FooterOrganisms />
            <Backdrop />
        </>
    );
};

export default Layout;
