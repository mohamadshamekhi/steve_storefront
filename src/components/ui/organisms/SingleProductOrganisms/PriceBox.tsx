"use client";

import { useProductVariant } from "@/contexts/ProductVariantContext";
import Button from "../../atoms/Button/Button";
import Badge from "../../atoms/Badge/Badge";
import TomanIcon from "@/components/icons/TomanIcon";
import MinusIcon from "@/components/icons/MinusIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import priceFormatter from "@/helpers/formatter";
import { useCartStore, useSessionStore } from "@/state";
import { useRouter } from "next/navigation";
import ROUTES from "@/constants/routes/routes.constant";
import Link from "next/link";

type PriceBoxProps = {
  productId?: string;
  /** "box" = the full sidebar card (default). "bar" = compact horizontal row for the mobile sticky buy bar. */
  layout?: "box" | "bar";
};

const PriceBox = ({ productId, layout = "box" }: PriceBoxProps) => {
  const router = useRouter();
  const { selectedVariant, discount } = useProductVariant();
  const {
    addItem,
    removeItem,
    status: cartStatus,
    getItemQuantity,
  } = useCartStore();
  const authStatus = useSessionStore((state) => state.status);

  const quantityInCart =
    productId && selectedVariant?.id
      ? getItemQuantity(productId, selectedVariant.id)
      : 0;

  const originalPrice = selectedVariant?.price || 0;
  const stockQuantity = selectedVariant?.quantity || 0;
  const isLoading = cartStatus === "loading";

  // Calculate discount
  let discountedPrice: number | undefined;
  let discountPercent: number | undefined;

  if (discount?.is_active && discount?.discount_value > 0) {
    if (discount.discount_type === "percentage") {
      discountPercent = discount.discount_value;
      discountedPrice =
        originalPrice - (originalPrice * discount.discount_value) / 100;
    } else if (discount.discount_type === "fixed_amount") {
      discountedPrice = originalPrice - discount.discount_value;
      discountPercent = Math.round(
        (discount.discount_value / originalPrice) * 100
      );
    }
  }

  const currentPrice = discountedPrice ?? originalPrice;
  const hasDiscount = discountPercent !== undefined && discountPercent > 0;

  const handleAddToCart = async () => {
    if (authStatus !== "authenticated") {
      sessionStorage.setItem("redirectAfterLogin", window.location.pathname);
      router.push("/auth/sign-in");
      return;
    }

    if (!productId || !selectedVariant?.id) return;

    await addItem({
      product_id: productId,
      variant_id: selectedVariant.id,
    });
  };

  const handleRemoveFromCart = async () => {
    if (!productId || !selectedVariant?.id) return;

    await removeItem({
      product_id: productId,
      variant_id: selectedVariant.id,
    });
  };

  const priceBlock = (
    <div>
      {hasDiscount && (
        <div className="flex min-h-4 items-center justify-end gap-2">
          <del className="text-body2-bold text-gray-400">
            {priceFormatter(originalPrice.toString())}
          </del>
          <Badge
            color="danger"
            className="flex! min-w-10! justify-center rounded-[3px]! px-1.5! py-px! leading-4.5!"
          >
            {discountPercent}%
          </Badge>
        </div>
      )}
      <div className="text-body1-bold flex items-center justify-end gap-1 text-left">
        <span>{priceFormatter(currentPrice.toString())}</span>
        <TomanIcon />
      </div>
    </div>
  );

  const outOfStock = stockQuantity === 0;

  const stepper = (
    <div className="inline-flex items-center divide-x divide-gray-200 rounded-lg border border-gray-200">
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={isLoading || quantityInCart >= stockQuantity}
        aria-label="افزودن یکی"
        className="text-primary-600 hover:bg-primary-50 flex h-10 w-10 items-center justify-center rounded-r-lg transition-colors disabled:opacity-40"
      >
        <PlusIcon />
      </button>
      <span className="min-w-10 self-stretch px-1 py-2 text-center text-sm font-semibold">
        {quantityInCart}
      </span>
      <button
        type="button"
        onClick={handleRemoveFromCart}
        disabled={isLoading}
        aria-label={quantityInCart === 1 ? "حذف از سبد" : "کاهش یکی"}
        className="text-secondary-500 hover:bg-secondary-50 flex h-10 w-10 items-center justify-center rounded-l-lg transition-colors disabled:opacity-40"
      >
        {quantityInCart === 1 ? <TrashIcon /> : <MinusIcon />}
      </button>
    </div>
  );

  const addButton = (
    <Button
      size="lg"
      className="w-full"
      disabled={outOfStock || isLoading}
      onClick={handleAddToCart}
    >
      {outOfStock ? "ناموجود" : isLoading ? "در حال افزودن..." : "افزودن به سبد"}
    </Button>
  );

  if (layout === "bar") {
    return (
      <div className="flex items-center justify-between gap-3">
        {priceBlock}
        {outOfStock ? (
          <div className="flex-1">{addButton}</div>
        ) : quantityInCart > 0 ? (
          stepper
        ) : (
          <div className="max-w-55 flex-1">{addButton}</div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <span className="font-semibold text-gray-800">قیمت</span>
        {priceBlock}
      </div>

      {stockQuantity > 0 && stockQuantity <= 10 && (
        <div className="mt-6 mb-5 flex items-center gap-1.5 text-sm text-secondary-600">
          <span>🔥</span>
          <span>{stockQuantity} عدد در انبار باقی مانده</span>
        </div>
      )}

      <div className={stockQuantity > 0 && stockQuantity <= 10 ? "" : "mt-6"}>
        {outOfStock || quantityInCart === 0 ? (
          addButton
        ) : (
          <div className="flex items-center justify-between gap-3">
            {stepper}
            <Link
              href={ROUTES.Cart}
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              مشاهده سبد خرید
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default PriceBox;
