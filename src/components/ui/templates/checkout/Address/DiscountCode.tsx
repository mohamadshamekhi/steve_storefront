'use client';

import Button from '@/components/ui/atoms/Button/Button';
import Input from '@/components/ui/atoms/Input/Input';
import { useCartStore } from '@/state/stores/cart';
import { useModalStore } from '@/state/stores/modal';
import { useState } from 'react';

const DiscountCode = () => {
    const closeModal = useModalStore((s) => s.closeModal);
    const { applyDiscount, discountCode: activeDiscountCode } = useCartStore();

    const [discountCode, setDiscountCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Client-side validation
        if (!discountCode.trim()) {
            setError('لطفا کد تخفیف را وارد کنید');
            return;
        }

        setIsLoading(true);

        const result = await applyDiscount(discountCode.trim());

        setIsLoading(false);

        if (result.success) {
            closeModal('discountCode');
        } else {
            setError(result.message || 'کد تخفیف نامعتبر است');
        }
    };

    const handleCancel = () => {
        closeModal('discountCode');
    };

    return (
        <form onSubmit={handleSubmit} className='mt-4'>
            {activeDiscountCode && (
                <p className='bg-primary-50 text-primary-700 mb-3 rounded-md px-3 py-2 text-sm'>
                    کد «{activeDiscountCode}» هم‌اکنون فعال است؛ با ثبت کد جدید جایگزین می‌شود.
                </p>
            )}

            <div className='mb-4'>
                <Input
                    onChange={(e) => {
                        setDiscountCode(e.target.value);
                        setError(null);
                    }}
                    type='text'
                    placeholder='مثلا AKO841%JD'
                    name='discount_code'
                    className='bg-primary-50 max-w-full border border-gray-300'
                    value={discountCode}
                />
                {error && <p className='mt-2 text-sm text-red-500'>{error}</p>}
            </div>

            <div className='mt-6 grid grid-cols-12 gap-2'>
                <Button type='button' className='col-span-4' variant='outline' onClick={handleCancel}>
                    لغو
                </Button>

                <Button type='submit' className='col-span-8' loading={isLoading}>
                    اعمال کد تخفیف
                </Button>
            </div>
        </form>
    );
};

export default DiscountCode;
