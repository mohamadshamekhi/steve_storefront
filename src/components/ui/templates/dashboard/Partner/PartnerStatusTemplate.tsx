"use client";

import ROUTES from "@/constants/routes/routes.constant";
import {
  getPartnerStatusView,
  partnerToneClasses,
  PartnerViewTone,
} from "@/helpers/partner";
import { usePartnerStatus } from "@/hooks/usePartnerStatus";
import Link from "next/link";
import Button from "../../../atoms/Button/Button";

const toneDot: Record<PartnerViewTone, string> = {
  neutral: "bg-gray-400",
  info: "bg-primary-500",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-secondary-500",
};

function PartnerStatusTemplate() {
  const { data, loading } = usePartnerStatus();
  const view = getPartnerStatusView(data);

  const renderAction = () => {
    if (data?.status === "approved") {
      return (
        <a target={"_blank"} href={"https://backoffice.stevemobile.com/"}>
          <Button size="sm">ورود به پنل همکار</Button>
        </a>
      );
    }

    if (view.canApply) {
      return (
        <Link href={`${ROUTES.PartnerSales}?apply=1`}>
          <Button size="sm">
            {data?.status === "rejected"
              ? "اصلاح و ارسال مجدد"
              : "ثبت درخواست همکاری"}
          </Button>
        </Link>
      );
    }

    return null;
  };

  if (!data?.has_partnership) return <></>;

  const discount =
    data?.status === "approved" && typeof data.discount_percent === "number"
      ? data.discount_percent
      : null;

  return (
    <div className="mt-8">
      <h2 className="text-gray-850 mb-4 text-base font-bold">همکاری در فروش</h2>

      {loading ? (
        <div className="h-28 animate-pulse rounded-2xl bg-gray-100" />
      ) : (
        <div
          className={`flex flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between ${partnerToneClasses[view.tone]}`}
        >
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span
                className={`inline-block size-2 shrink-0 rounded-full ${toneDot[view.tone]}`}
              />
              <p className="font-bold text-gray-900">{view.title}</p>
            </div>
            <p className="mt-1.5 text-sm leading-6 text-gray-600">
              {view.description}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            {discount !== null && (
              <span className="rounded-xl bg-green-600 px-3 py-2 text-sm font-extrabold text-white">
                {discount}٪ تخفیف همکار
              </span>
            )}
            {renderAction()}
          </div>
        </div>
      )}
    </div>
  );
}

export default PartnerStatusTemplate;
