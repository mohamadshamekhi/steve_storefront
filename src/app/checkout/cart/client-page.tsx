'use client';

import ManualBreadcrumb from '@/components/ui/molecules/Breadcrumbs/ManualBreadcrumb';
import AddressBox from '@/components/ui/organisms/checkout/AddressBox';
import CartItem from '@/components/ui/organisms/checkout/CartItem';
import ShippingMethodBox from '@/components/ui/organisms/checkout/ShippingMethodBox';
import OrderSummary from '@/components/ui/organisms/checkout/OrderSummary';
import Container from '@/components/ui/organisms/Container/Container';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import { Modal } from '@/components/ui/organisms/Modal/CModal';
import AddAddressForm from '@/components/ui/templates/checkout/Address/AddAddressForm';
import AddressList from '@/components/ui/templates/checkout/Address/AddressList';
import DiscountCode from '@/components/ui/templates/checkout/Address/DiscountCode';
import ROUTES from '@/constants/routes/routes.constant';
import { useCartStore } from '@/state/stores/cart';
import { useModalStore } from '@/state/stores/modal';
import { useEffect, useState } from 'react';

const Checkout = () => {
    const closeModal = useModalStore((s) => s.closeModal);
    const { items, fetchCart } = useCartStore();
    const [selectedShipping, setSelectedShipping] = useState<{ id: string; cost: number } | null>(null);

    // Fetch cart on page load
    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    return (
        <Layout>
            <main>
                <Container>
                    <ManualBreadcrumb
                        items={[
                            { label: 'خانه', href: ROUTES.Landing },
                            {
                                label: 'سبد خرید',
                                href: ROUTES.Cart,
                                isCurrent: true
                            }
                        ]}
                    />

                    {/* Modal 1 */}
                    <Modal modalKey='addressList' onClose={() => closeModal('addressList')} size='sm'>
                        <Modal.Header onClose={() => closeModal('addressList')} className='pb-0!'>
                            لیست آدرس
                        </Modal.Header>

                        <Modal.Body>
                            <AddressList />
                        </Modal.Body>
                    </Modal>

                    {/* Modal 2 - Add Address */}
                    <Modal modalKey='addAddress' onClose={() => closeModal('addAddress')} size='sm'>
                        <Modal.Header onClose={() => closeModal('addAddress')} className='pb-0!'>
                            افزودن آدرس
                        </Modal.Header>

                        <Modal.Body>
                            <AddAddressForm />
                        </Modal.Body>
                    </Modal>

                    {/* Modal 3 - Discount Code */}
                    <Modal modalKey='discountCode' onClose={() => closeModal('discountCode')} size='sm'>
                        <Modal.Header onClose={() => closeModal('discountCode')} className='pb-0!'>
                            کد تخفیف
                        </Modal.Header>

                        <Modal.Body>
                            <DiscountCode />
                        </Modal.Body>
                    </Modal>

                    {/* <Modal modalKey='addressMap' onClose={() => closeModal('addressModal')} size='sm'>
                        <Modal.Header onClose={() => closeModal('addressModal')} className='pb-0!'>
                            Address Map
                        </Modal.Header>

                        <Modal.Body>
                            <Addressee />
                        </Modal.Body>
                    </Modal> */}

                    <section className='flex flex-col gap-8 py-10 lg:flex-row'>
                        <div className='w-full lg:w-8/12'>
                            <AddressBox />

                            <div className='space-y-8'>
                                {items.length === 0 ? (
                                    <div className='rounded-md bg-white p-8 text-center text-gray-500'>
                                        سبد خرید شما خالی است
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <CartItem key={`${item.product_id}-${item.variant_id}`} item={item} />
                                    ))
                                )}
                            </div>
                        </div>
                        <div className='w-full lg:w-4/12'>
                            <div className='sticky top-[40px]'>
                                <ShippingMethodBox
                                    selectedShippingId={selectedShipping?.id ?? null}
                                    onSelect={(id, cost) => setSelectedShipping({ id, cost })}
                                />
                                <OrderSummary selectedShipping={selectedShipping} />
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
        </Layout>
    );
};

export default Checkout;
