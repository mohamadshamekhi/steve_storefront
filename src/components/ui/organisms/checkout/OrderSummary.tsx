"use client";

import { fetcher } from "@/api";
import ApiKeys from "@/api/keys";
import TicketIcon from "@/components/icons/TicketIcon";
import TomanIcon from "@/components/icons/TomanIcon";
import Badge from "@/components/ui/atoms/Badge/Badge";
import Button from "@/components/ui/atoms/Button/Button";
import { Modal } from "@/components/ui/organisms/Modal/CModal";
import { useCartStore } from "@/state/stores/cart";
import { useUserPreferencesStore } from "@/state/stores/user-preferences";
import { useModalStore } from "@/state/stores/modal";
import { useState } from "react";

interface OrderSummaryProps {
  selectedShipping: { id: string; cost: number } | null;
}

function OrderSummary({ selectedShipping }: OrderSummaryProps) {
  const selectedShippingId = selectedShipping?.id ?? null;
  const shippingCost = selectedShipping?.cost ?? 0;
  const { itemCount, subtotal, finalPrice, discountCode, removeDiscount } =
    useCartStore();
  const { activeAddressId } = useUserPreferencesStore();
  const openModal = useModalStore((s) => s.openModal);
  const closeModal = useModalStore((s) => s.closeModal);

  const [isLoading, setIsLoading] = useState(false);
  const [isRemovingDiscount, setIsRemovingDiscount] = useState(false);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  const formatPrice = (price: number) => {
    return price.toLocaleString("fa-IR");
  };

  const discountAmount = subtotal - finalPrice;
  const hasDiscount = discountAmount > 0;

  const handleSubmitOrder = async () => {
    if (!activeAddressId && !selectedShippingId) {
      setWarningMessage("لطفاً ابتدا آدرس و روش ارسال را انتخاب کنید.");
      openModal("orderWarning");
      return;
    }

    if (!activeAddressId) {
      setWarningMessage("لطفاً ابتدا آدرس خود را انتخاب کنید.");
      openModal("orderWarning");
      return;
    }

    if (!selectedShippingId) {
      setWarningMessage("لطفاً روش ارسال را انتخاب کنید.");
      openModal("orderWarning");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetcher(
        ApiKeys.REGISTER_ORDER,
        "dashboard",
        "POST",
        {
          requiredAuth: true,
          body: {
            address_id: activeAddressId,
            shipping_id: selectedShippingId,
          },
        }
      );

      console.log("Order response:", response);

      if (response?.success && response?.data?.order_id) {
        console.log("Order ID:", response.data.order_id);

        // Start payment gateway
        const paymentResponse = await fetcher(
          ApiKeys.START_PAYMENT,
          "dashboard",
          "POST",
          {
            requiredAuth: true,
            body: {
              order_id: response.data.order_id,
            },
          }
        );

        console.log("Payment response:", paymentResponse);

        // Redirect to payment gateway
        if (paymentResponse?.success && paymentResponse?.data?.payment_url) {
          window.location.href = paymentResponse.data.payment_url;
        }
      }
    } catch (error) {
      console.error("Order error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal
        modalKey="orderWarning"
        onClose={() => closeModal("orderWarning")}
        size="sm"
      >
        <Modal.Header
          onClose={() => closeModal("orderWarning")}
          className="pb-0!"
        >
          اخطار
        </Modal.Header>
        <Modal.Body>
          <p className="text-sm text-gray-700">{warningMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => closeModal("orderWarning")}
            variant="outline"
            color="primary"
          >
            متوجه شدم
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="sticky top-[40px] flex flex-col space-y-6 rounded-md bg-white p-4 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-base font-semibold">
            قیمت کالاها ({itemCount})
          </span>

          <span className="flex items-center text-sm font-normal">
            <span className="text-sm font-medium text-gray-700">
              {formatPrice(subtotal)}
            </span>
            <TomanIcon className="mr-1.5" />
          </span>
        </div>

        {hasDiscount && (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-2">
              <span className="text-body1-bold">تخفیف</span>
              <Badge
                color="danger"
                className="text-tiny relative -top-1.5 !flex justify-center rounded-[3px]! !px-[6px] !py-[1px] !leading-[18px] font-semibold"
              >
                %{Math.round((discountAmount / subtotal) * 100)}
              </Badge>
            </span>

            <span className="flex items-center">
              <span className="text-sm font-medium text-red-500">
                -{formatPrice(discountAmount)}
              </span>
              <TomanIcon className="mr-1.5" />
            </span>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-medium text-gray-700">هزینه ارسال</span>
          <span className="flex items-center">
            {selectedShipping ? (
              <>
                <span className="text-sm font-medium text-gray-700">
                  {formatPrice(shippingCost)}
                </span>
                <TomanIcon className="mr-1.5" />
              </>
            ) : (
              <span className="text-sm text-gray-400">انتخاب نشده</span>
            )}
          </span>
        </div>

        {/* Discount code button / applied-code chip */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          {discountCode ? (
            <div className="bg-primary-50 flex w-full items-center justify-between gap-2 rounded-md px-3 py-2">
              <span className="text-primary-700 flex items-center gap-1.5 text-sm font-medium">
                <TicketIcon className="w-4 shrink-0" />
                کد «{discountCode}» اعمال شد
              </span>
            </div>
          ) : (
            <button
              onClick={() => openModal("discountCode")}
              className="text-primary-600 text-sm font-medium hover:underline"
            >
              افزودن کد تخفیف
            </button>
          )}
        </div>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 lg:mb-8">
          <span className="text-body1-bold">قیمت نهایی ({itemCount})</span>

          <span className="flex items-center">
            <span className="text-subtitle1-bold">
              {formatPrice(finalPrice + shippingCost)}
            </span>
            <TomanIcon className="mr-1.5" />
          </span>
        </div>

        <Button
          disabled={itemCount === 0}
          loading={isLoading}
          onClick={handleSubmitOrder}
        >
          پرداخت و ثبت سفارش
        </Button>
      </div>
    </>
  );
}

export default OrderSummary;
