"use client";

import Link from "next/link";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import ChevronLeft from "@/components/icons/ChevronLeft";
import ChevronRight from "@/components/icons/ChevronRight";
import Categories from "@/config/types/categories.types";
import ROUTES from "@/constants/routes/routes.constant";
import OptimizedImage from "@/utils/imageLoader";
import Button from "../../atoms/Button/Button";
import SwiperComponent from "../../atoms/Swiper/Swiper";

const CategoriesTemplate = ({ categories }: { categories: Categories[] }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const rootCategories = categories;

  return (
    <section>
      <div className="mb-6 flex flex-row-reverse flex-wrap items-center justify-between gap-2 sm:flex-row">
        <div className="flex items-center gap-2">
          <Button
            ref={prevRef}
            aria-label="مورد قبلی"
            variant="light"
            color="primary"
            size="sm"
            className="!rounded-full px-2 py-2"
          >
            <ChevronRight className="text-primary-900" />
          </Button>

          <Button
            ref={nextRef}
            aria-label="مورد بعدی"
            variant="light"
            color="primary"
            size="sm"
            className="!rounded-full px-2 py-2"
          >
            <ChevronLeft className="text-primary-900" />
          </Button>
        </div>

        <h2 className="text-center text-base font-bold text-gray-800 md:text-lg lg:text-2xl">
          دسته‌بندی‌ها
        </h2>

        <Link
          href={ROUTES.Products}
          className="sm:text-md hidden items-center gap-2 text-sm sm:flex"
        >
          <span>مشاهده همه</span>
          <ChevronLeft className="text-primary-900 w-2" />
        </Link>
      </div>

      <SwiperComponent
        modules={[Navigation]}
        spaceBetween={13}
        slidesPerView={6}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          1024: { slidesPerView: 6 },
          768: { slidesPerView: 4 },
          640: { slidesPerView: 3 },
          0: { slidesPerView: 2.2 },
        }}
        onInit={(swiper) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {rootCategories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="flex flex-col items-center text-center">
              <Link href={`/product?category_id=${category.id}`}>
                <OptimizedImage
                  className="block aspect-square w-full rounded-md object-cover"
                  width={213}
                  height={169}
                  loading="lazy"
                  src={category.url}
                  alt={category.name}
                />
              </Link>
              <Link
                href={`${ROUTES.Products}/category/${category.slug}`}
                className="mt-2 text-sm font-semibold sm:mt-4 sm:text-lg"
              >
                {category.name}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <Link
        href={ROUTES.Products}
        className="sm:text-md mt-6 flex items-center justify-center gap-2 text-sm sm:hidden"
      >
        <span>مشاهده همه</span>
        <ChevronLeft className="text-primary-900 w-2" />
      </Link>
    </section>
  );
};

export default CategoriesTemplate;
