'use client';

import ShopBasketIcon from '@/components/icons/ShopBasketIcon';
import ROUTES from '@/constants/routes/routes.constant';
import { useCartStore } from '@/state';
import Link from 'next/link';

const Cart = () => {
    const itemCount = useCartStore((state) => state.itemCount);

    return (
        <Link
            href={ROUTES.Cart}
            className='bg-primary-100 text-primary-600 relative hidden rounded-[6px] p-[12px] md:inline-block'
        >
            <ShopBasketIcon className='text-primary-600' />
            {itemCount > 0 && (
                <span className='bg-primary-600 absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium text-white'>
                    {itemCount > 99 ? '99+' : itemCount}
                </span>
            )}
        </Link>
    );
};

export default Cart;
