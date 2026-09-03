"use client";

import LogoIcon from "@/components/icons/LogoIcon";
import BlogIcon from "@/components/icons/Menu/BlogIcon";
import DiamondIcon from "@/components/icons/Menu/DiamondIcon";
import FlashIcon from "@/components/icons/Menu/FlashIcon";
import HandshakeIcon from "@/components/icons/Menu/HandshakeIcon";
import PercentIcon from "@/components/icons/Menu/PercentIcon";
import ToolIcon from "@/components/icons/Menu/ToolIcon";
import MegaMenuMobile from "@/components/ui/molecules/Nav/MegaMenuMobile";
import OffCanvas from "@/components/ui/molecules/OffCanvas/OffCanvas";
import ROUTES from "@/constants/routes/routes.constant";
import useElementHeightVar from "@/hooks/useElementHeightVar";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useMenuStore } from "@/state/stores/menu";
import Link from "next/link";
import { JSX } from "react";
import Cart from "./Cart";
import SearchProducts from "./SearchProducts";
import User from "./User";
import CategoryIcon from "@/components/icons/Menu/CategoryIcon";

interface IMenuItem {
  label: string;
  icon: JSX.Element | null;
  href: string;
}

const MenuItems: IMenuItem[] = [
  {
    label: "محصولات",
    icon: (
      <CategoryIcon className="group-hover:text-secondary-500 text-gray-600" />
    ),
    href: `${ROUTES.Products}`,
  },
  {
    label: "شگفت انگیز",
    icon: (
      <PercentIcon className="group-hover:text-secondary-500 text-gray-600" />
    ),
    href: `${ROUTES.Products}`,
  },
  {
    label: "پرفروش ترین ها",
    icon: (
      <DiamondIcon className="group-hover:text-secondary-500 text-gray-600" />
    ),
    href: `${ROUTES.Products}?order_by=most_sold`,
  },
  {
    label: "مقالات",
    icon: (
      <BlogIcon className="group-hover:text-secondary-500 h-4 w-4 text-gray-600" />
    ),
    href: `${ROUTES.Blog}`,
  },
  {
    label: "تعمیرات",
    icon: <ToolIcon className="group-hover:text-secondary-500 text-gray-600" />,
    href: ROUTES.PhoneRepair,
  },
  {
    label: "فروش به استیو موبایل",
    icon: (
      <FlashIcon className="group-hover:text-secondary-500 text-gray-600" />
    ),
    href: ROUTES.PhoneSales,
  },
  {
    label: "فروش همکاری",
    icon: (
      <HandshakeIcon className="group-hover:text-secondary-500 text-gray-600" />
    ),
    href: ROUTES.PartnerSales,
  },
  {
    label: "درمورد استیو موبایل",
    icon: null,
    href: ROUTES.AboutUs,
  },
  {
    label: "سوالی دارید؟",
    icon: null,
    href: `${ROUTES.ContactUs}#contactForm`,
  },
  {
    label: "سوالات متداول",
    icon: null,
    href: ROUTES.FAQ,
  },
];

const HeaderOrganism = () => {
  const { isOpen, close } = useMenuStore();
  const isMobile = useMediaQuery("lg");
  const headerRef = useElementHeightVar<HTMLElement>("--app-header-h", isMobile);
  return (
    <>
    <header
      ref={headerRef}
      className="sticky top-0 z-40 bg-white pt-3 pb-3 shadow-[0_1px_3px_rgba(16,24,40,0.06)] md:static md:pt-4 md:pb-0 md:shadow-none"
    >
      <div className="mx-auto max-w-[1500px] px-4 md:px-5">
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href={ROUTES.Landing}
            className="shrink-0"
            aria-label="استیو موبایل"
          >
            <LogoIcon className="h-7 w-auto md:h-9" />
            <span className="sr-only">استیو موبایل</span>
          </Link>

          <div className="min-w-0 flex-1">
            <SearchProducts />
          </div>

          <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
            <Cart />
            <User />
          </div>
        </div>

        <ul className="text-body1-regular mt-[16px] hidden space-x-3 text-gray-600 md:flex lg:space-x-6">
          {/* {!isMobile && <MegaMenu />} */}

          {MenuItems.map((item: IMenuItem) => {
            return (
              <li
                key={item.label}
                className="group hover:text-secondary-500 relative py-2.5 transition-all ease-in-out"
              >
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[radial-gradient(50%_685.69%_at_50%_50%,_#ED1944_0%,_rgba(255,_255,_255,_0)_100%)] opacity-0 group-hover:opacity-100"></div>
                <Link
                  href={item.href}
                  className="group-hover:text-secondary-500! flex cursor-pointer items-center gap-1.5 text-sm lg:text-[16px]"
                >
                  <span className="group-hover:text-secondary-500! text-gray-600 transition-colors">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    </header>

    {isMobile && (
      <OffCanvas
        onClose={close}
        isOpen={isOpen}
        width="100%"
        className="px-0! py-2!"
        titleSection={
          <div className="flex items-center gap-2 px-2 py-1!">
            <Link href={ROUTES.Landing} className="shrink-0" aria-label="استیو موبایل">
              <LogoIcon className="h-7 w-auto" />
              <span className="sr-only">استیو موبایل</span>
            </Link>
            <SearchProducts />
          </div>
        }
      >
        <MegaMenuMobile />
      </OffCanvas>
    )}
    </>
  );
};

export default HeaderOrganism;
