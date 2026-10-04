"use client";

import ChevronLeft from "@/components/icons/ChevronLeft";
import CategoryIcon from "@/components/icons/Menu/CategoryIcon";
import ROUTES from "@/constants/routes/routes.constant";
import useCategories from "@/hooks/useCategories";
import { useMenuStore } from "@/state/stores/menu";
import Categories from "@/config/types/categories.types";
import OptimizedImage from "@/utils/imageLoader";
import cn from "@/config/utilities/cn";
import Link from "next/link";
import { useState, useEffect } from "react";

const MegaMenu = () => {
  const { isOpen, open, close } = useMenuStore();
  const { rootCategories, getChildren, hasChildren, isLoading } =
    useCategories();
  const [hovered, setHovered] = useState<Categories | null>(null);

  useEffect(() => {
    if (!hovered && rootCategories.length > 0) {
      setHovered(rootCategories[0]);
    }
  }, [rootCategories, hovered]);

  const subCategories = hovered ? getChildren(hovered.id) : [];

  return (
    <div
      onMouseEnter={() => open("desktop")}
      onMouseLeave={close}
      className="group relative"
    >
      <li className="hover:text-secondary-500 relative py-2.5 transition-all ease-in-out">
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[radial-gradient(50%_685.69%_at_50%_50%,_#ED1944_0%,_rgba(255,_255,_255,_0)_100%)] opacity-0 group-hover:opacity-100" />
        <div className="group-hover:text-secondary-500! flex cursor-pointer items-center gap-1.5 text-sm lg:text-[16px]">
          <span className="group-hover:text-secondary-500! text-gray-600 transition-colors">
            <CategoryIcon className="ml-1" />
          </span>
          <span>دسته بندی</span>
        </div>
      </li>

      {isOpen && (
        <div
          className="absolute top-full right-0 z-50 flex overflow-hidden rounded-b-xl bg-white shadow-[0_8px_24px_rgba(16,24,40,0.12)]"
          style={{ width: 480, maxHeight: 440 }}
        >
          {/* ستون راست — دسته‌های اصلی */}
          <div
            className="shrink-0 overflow-y-auto border-l border-gray-100 bg-gray-50"
            style={{ width: 180 }}
          >
            {isLoading
              ? Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2.5 px-4 py-3">
                    <span className="h-7 w-7 shrink-0 animate-pulse rounded-lg bg-gray-200" />
                    <span className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                  </div>
                ))
              : rootCategories.map((cat) => {
                  const isActive = hovered?.id === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onMouseEnter={() => setHovered(cat)}
                      className={cn(
                        "relative flex cursor-pointer items-center gap-2.5 px-3 py-2.5 transition-colors",
                        isActive ? "bg-white" : "hover:bg-white/70"
                      )}
                    >
                      {isActive && (
                        <span className="bg-primary-500 absolute right-0 top-2 bottom-2 w-0.5 rounded-full" />
                      )}
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg",
                          isActive ? "bg-primary-50" : "bg-gray-100"
                        )}
                      >
                        {cat.url && (
                          <OptimizedImage
                            src={cat.url}
                            alt={cat.name}
                            width={32}
                            height={32}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        )}
                      </span>
                      <span
                        className={cn(
                          "grow truncate text-sm",
                          isActive
                            ? "text-primary-700 font-semibold"
                            : "text-gray-700"
                        )}
                      >
                        {cat.name}
                      </span>
                      {hasChildren(cat.id) && (
                        <ChevronLeft
                          className={cn(
                            "h-3 w-3 shrink-0",
                            isActive ? "text-primary-400" : "text-gray-300"
                          )}
                        />
                      )}
                    </div>
                  );
                })}

            <Link
              href={ROUTES.Products}
              onClick={close}
              className="text-primary-600 flex items-center justify-center border-t border-gray-100 py-3 text-xs font-medium hover:bg-gray-100"
            >
              مشاهده همه
            </Link>
          </div>

          {/* ستون چپ — زیردسته‌ها */}
          {hovered && (
            <div className="flex-1 overflow-y-auto">
              {/* لینک همه X */}
              <Link
                href={`${ROUTES.Products}/category/${hovered.slug}`}
                onClick={close}
                className="text-primary-600 flex items-center justify-between border-b border-gray-100 px-4 py-3 text-sm font-bold hover:bg-gray-50"
              >
                <span>همه {hovered.name}</span>
                <ChevronLeft className="h-3.5 w-3.5" />
              </Link>

              {subCategories.length > 0 ? (
                <ul className="py-1">
                  {subCategories.map((sub) => (
                    <li key={sub.id}>
                      {hasChildren(sub.id) ? (
                        <div>
                          <div className="border-secondary-400 flex items-center justify-between border-r-2 px-4 py-2 pr-3">
                            <span className="text-sm font-bold text-gray-800">
                              {sub.name}
                            </span>
                            <ChevronLeft className="h-3 w-3 text-gray-400" />
                          </div>
                          {getChildren(sub.id).map((leaf) => (
                            <Link
                              key={leaf.id}
                              href={`${ROUTES.Products}/category/${leaf.slug}`}
                              onClick={close}
                              className="flex items-center justify-end py-1.5 pr-6 text-sm text-gray-600 hover:text-gray-900"
                            >
                              {leaf.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={`${ROUTES.Products}/category/${sub.slug}`}
                          onClick={close}
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {sub.name}
                          <ChevronLeft className="h-3 w-3 text-gray-300" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="py-8 text-center text-xs text-gray-400">
                  زیردسته‌ای ندارد
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
