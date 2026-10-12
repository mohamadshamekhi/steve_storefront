"use client";

import ManualBreadcrumb from "@/components/ui/molecules/Breadcrumbs/ManualBreadcrumb";
import AddressBox from "@/components/ui/organisms/checkout/AddressBox";
import CartItem from "@/components/ui/organisms/checkout/CartItem";
import MobileCheckoutBar from "@/components/ui/organisms/checkout/MobileCheckoutBar";
import OrderSummary from "@/components/ui/organisms/checkout/OrderSummary";
import ShippingMethodBox from "@/components/ui/organisms/checkout/ShippingMethodBox";
import Container from "@/components/ui/organisms/Container/Container";
import Layout from "@/components/ui/organisms/Container/Layout/Layout";
import { Modal } from "@/components/ui/organisms/Modal/CModal";
import AddAddressForm from "@/components/ui/templates/checkout/Address/AddAddressForm";
import AddressList from "@/components/ui/templates/checkout/Address/AddressList";
import DiscountCode from "@/components/ui/templates/checkout/Address/DiscountCode";
import ROUTES from "@/constants/routes/routes.constant";
import { useToast } from "@/hooks/useToast";
import { useCartStore } from "@/state/stores/cart";
import { useModalStore } from "@/state/stores/modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Checkout = () => {
  const router = useRouter();
  const closeModal = useModalStore((s) => s.closeModal);
  const { items, fetchCart, isLargePackage } = useCartStore();
  const [selectedShipping, setSelectedShipping] = useState<{
    id: string;
    cost: number;
    name: string;
  } | null>(null);
  console.log(isLargePackage, "isLargePackage");
  const { showToast } = useToast();

  // Fetch cart on page load
  useEffect(() => {
    if (!items.length) {
      showToast({
        title: "اخطار",
        message: "سبد خریدی موجود نمیباشد",
        type: "error",
      });
      return router.push("/");
    }
    fetchCart();
  }, [fetchCart]);

  return (
    <Layout>
      <main>
        <Container>
          <ManualBreadcrumb
            items={[
              { label: "خانه", href: ROUTES.Landing },
              {
                label: "سبد خرید",
                href: ROUTES.Cart,
                isCurrent: true,
              },
            ]}
          />

          {/* Modal 1 */}
          <Modal
            modalKey="addressList"
            onClose={() => closeModal("addressList")}
            size="sm"
          >
            <Modal.Header
              onClose={() => closeModal("addressList")}
              className="pb-0!"
            >
              لیست آدرس
            </Modal.Header>

            <Modal.Body>
              <AddressList />
            </Modal.Body>
          </Modal>

          {/* Modal 2 - Add Address */}
          <Modal
            modalKey="addAddress"
            onClose={() => closeModal("addAddress")}
            size="sm"
          >
            <Modal.Header
              onClose={() => closeModal("addAddress")}
              className="pb-0!"
            >
              افزودن آدرس
            </Modal.Header>

            <Modal.Body>
              <AddAddressForm />
            </Modal.Body>
          </Modal>

          {/* Modal 3 - Discount Code */}
          <Modal
            modalKey="discountCode"
            onClose={() => closeModal("discountCode")}
            size="sm"
          >
            <Modal.Header
              onClose={() => closeModal("discountCode")}
              className="pb-0!"
            >
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

          <section className="flex flex-col gap-5 pt-6 pb-[calc(var(--app-bottom-nav,0px)+var(--app-bottom-bar,0px)+1rem)] lg:flex-row lg:gap-6 lg:py-10">
            <div className="w-full space-y-4 lg:w-8/12">
              <AddressBox />

              {items.length === 0 ? (
                <div className="rounded-2xl bg-white p-8 text-center text-sm text-gray-400 shadow-[0_1px_3px_rgba(16,24,40,0.06)]">
                  سبد خرید شما خالی است
                </div>
              ) : (
                items.map((item) => (
                  <CartItem
                    key={`${item.product_id}-${item.variant_id}`}
                    item={item}
                  />
                ))
              )}
            </div>
            <div className="w-full lg:w-4/12">
              <div className="space-y-4 lg:sticky lg:top-4">
                <ShippingMethodBox
                  selectedShippingId={selectedShipping?.id ?? null}
                  onSelect={(id, cost, name) =>
                    setSelectedShipping({ id, cost, name })
                  }
                  isLargePackage={isLargePackage}
                />
                <OrderSummary
                  selectedShipping={selectedShipping}
                  isLargePackage={isLargePackage}
                />
              </div>
            </div>
          </section>
        </Container>
      </main>

      <MobileCheckoutBar
        selectedShipping={selectedShipping}
        isLargePackage={isLargePackage}
      />
    </Layout>
  );
};

export default Checkout;
