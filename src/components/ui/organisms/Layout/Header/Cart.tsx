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
            aria-label='سبد خرید'
            className='bg-primary-50 text-primary-600 hover:bg-primary-100 relative flex h-11 w-11 items-center justify-center rounded-xl transition-colors'
        >
            <ShopBasketIcon className='text-primary-600' />
            {itemCount > 0 && (
                <span className='bg-secondary-600 absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[11px] font-bold text-white'>
                    {itemCount > 99 ? '99+' : itemCount}
                </span>
            )}
        </Link>
    );
};

export default Cart;
