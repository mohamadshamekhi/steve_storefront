'use client';

import TomanIcon from '@/components/icons/TomanIcon';
import Button from '@/components/ui/atoms/Button/Button';
import useElementHeightVar from '@/hooks/useElementHeightVar';
import useOrderSubmit from '@/hooks/useOrderSubmit';
import { useCartStore } from '@/state/stores/cart';

type Props = {
    selectedShipping: { id: string; cost: number; name: string } | null;
    isLargePackage: boolean;
};

/**
 * Sticky "پرداخت" bar for the cart on mobile, so the CTA + total stay in reach
 * without scrolling past the shipping options and summary. Stacks above the
 * `BottomSheet` nav via the shared `--app-bottom-*` vars (see `useElementHeightVar`).
 */
export default function MobileCheckoutBar({ selectedShipping, isLargePackage }: Props) {
    const ref = useElementHeightVar('--app-bottom-bar', true);
    const itemCount = useCartStore((s) => s.itemCount);
    const finalPrice = useCartStore((s) => s.finalPrice);
    const { submit, isSubmitting } = useOrderSubmit(selectedShipping);

    if (itemCount === 0) return null;

    const total = finalPrice + (isLargePackage ? 0 : (selectedShipping?.cost ?? 0));

    return (
        <div ref={ref} className='fixed inset-x-0 bottom-[var(--app-bottom-nav,0px)] z-30 px-4 pb-2 lg:hidden'>
            <div className='mx-auto flex max-w-md items-center gap-3 rounded-[22px] border border-black/5 bg-white/90 px-3 py-2.5 shadow-[0_12px_36px_-8px_rgba(31,41,55,0.22)] backdrop-blur-xl'>
                <div className='shrink-0 text-right'>
                    <span className='text-[11px] text-gray-500'>قیمت نهایی</span>
                    {isLargePackage && selectedShipping ? (
                        <div className='text-amber-600 text-sm font-bold'>پس کرایه</div>
                    ) : (
                    <div className='text-primary-700 flex items-center gap-1 text-sm font-bold'>
                        <span>{total.toLocaleString('fa-IR')}</span>
                        <TomanIcon />
                    </div>
                    )}
                </div>
                <Button size='lg' className='flex-1' loading={isSubmitting} onClick={submit}>
                    پرداخت و ثبت سفارش
                </Button>
            </div>
        </div>
    );
}
