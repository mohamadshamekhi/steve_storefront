"use client";

import TicketIcon from "@/components/icons/TicketIcon";
import TomanIcon from "@/components/icons/TomanIcon";
import Badge from "@/components/ui/atoms/Badge/Badge";
import Button from "@/components/ui/atoms/Button/Button";
import useOrderSubmit from "@/hooks/useOrderSubmit";
import { useCartStore } from "@/state/stores/cart";
import { useModalStore } from "@/state/stores/modal";

interface OrderSummaryProps {
  selectedShipping: { id: string; cost: number } | null;
}

function OrderSummary({ selectedShipping }: OrderSummaryProps) {
  const shippingCost = selectedShipping?.cost ?? 0;
  const { itemCount, subtotal, finalPrice, discountCode } = useCartStore();
  const openModal = useModalStore((s) => s.openModal);

  const { submit, isSubmitting } = useOrderSubmit(selectedShipping);

  const formatPrice = (price: number) => {
    return price.toLocaleString("fa-IR");
  };

  const discountAmount = subtotal - finalPrice;
  const hasDiscount = discountAmount > 0;

  return (
    <>
      <div className="flex flex-col space-y-4 rounded-2xl bg-white p-4 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-bold text-gray-800">
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
                className="text-tiny relative -top-1.5 flex! justify-center rounded-[3px]! px-1.5! py-px! leading-4.5! font-semibold"
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

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-4">
          <span className="text-sm font-bold text-gray-800">قیمت نهایی ({itemCount})</span>

          <span className="text-primary-700 flex items-center text-lg font-bold">
            <span>{formatPrice(finalPrice + shippingCost)}</span>
            <TomanIcon className="mr-1.5" />
          </span>
        </div>

        {/* on mobile this action lives in the sticky MobileCheckoutBar */}
        <div className="hidden lg:block">
          <Button
            size="lg"
            className="w-full"
            disabled={itemCount === 0}
            loading={isSubmitting}
            onClick={submit}
          >
            پرداخت و ثبت سفارش
          </Button>
        </div>
      </div>
    </>
  );
}

export default OrderSummary;
