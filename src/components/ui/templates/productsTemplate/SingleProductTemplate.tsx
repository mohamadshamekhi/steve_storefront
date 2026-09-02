"use client";

import "swiper/css/thumbs";

import { ProductVariantProvider } from "@/contexts/ProductVariantContext";
import { Comment } from "@/models/common.model";
import { SingleProductItem } from "@/models/product.model";
import { Rating, Star } from "@smastrom/react-rating";
import Link from "next/link";
import useElementHeightVar from "@/hooks/useElementHeightVar";
import { ScrollTabs } from "../../molecules/ScrollTabs/ScrollsTabs";
import PriceBox from "../../organisms/SingleProductOrganisms/PriceBox";
import ProductDetailOrganisms from "../../organisms/SingleProductOrganisms/ProductDetailOrganisms";
import ProductGalleryOrganisms from "../../organisms/SingleProductOrganisms/ProductGalleryOrganisms";
import ProductIntroductionOrganisms from "../../organisms/SingleProductOrganisms/ProductIntroductionOrganisms";
import ProductRelatedOrganisms, {
  RelatedProduct,
} from "../../organisms/SingleProductOrganisms/ProductRelatedOrganisms";
import ProductSpecificationsOrganisms from "../../organisms/SingleProductOrganisms/ProductSpecificationsOrganisms";
import ProductTrustList from "../../organisms/SingleProductOrganisms/ProductTrustList";
import SingleProductFormOrganisms from "../../organisms/SingleProductOrganisms/SingleProductFormOrganisms";
import SingleProductListComment from "./SingleProductListComment";

const SingleProductTemplate = ({
  product,
  comments,
  relatedProducts,
}: {
  slug: string;
  product: SingleProductItem;
  comments: Comment[];
  relatedProducts: RelatedProduct[];
}) => {
  const filters = [
    { targetId: "introduction", label: "معرفی" },
    { targetId: "specifications", label: "مشخصات" },
    { targetId: "views", label: "دیدگاه‌ها" },
  ];

  const buyBarRef = useElementHeightVar("--app-bottom-bar", true);

  return (
    <ProductVariantProvider
      initialVariant={product.variants[0]}
      discount={product.discount}
    >
      <div className="space-y-6 pt-5 pb-[calc(var(--app-bottom-nav,0px)+var(--app-bottom-bar,0px)+1rem)] lg:space-y-8 lg:pb-0">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <ProductGalleryOrganisms
            gallery={product?.gallery}
            productName={product?.name}
          />

          <ProductDetailOrganisms
            product={product}
            allAprovedCommentsCount={comments.length}
          />

          <div className="lg:col-span-3">
            <div className="space-y-4 lg:sticky lg:top-4">
              <div className="rounded-2xl bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-6">
                <PriceBox productId={product._id} />

                <div className="mt-8 border-t border-gray-100 pt-6">
                  <ProductTrustList warranty={product.variants[0].warranty} />
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-gray-800">
                    امتیاز کاربران
                  </span>
                  <div className="flex items-center gap-2">
                    {product.rating > 0 && (
                      <span className="text-sm font-bold text-gray-800">
                        {product.rating}
                      </span>
                    )}
                    <Rating
                      value={product.rating}
                      readOnly
                      halfFillMode="svg"
                      itemStyles={{
                        itemShapes: Star,
                        activeFillColor: "#FFAE55",
                        inactiveFillColor: "#FFE2BD",
                      }}
                      style={{ width: "85px", direction: "ltr" }}
                    />
                  </div>
                </div>
                <p className="text-tiny mb-4 text-gray-500">
                  شما هم درباره این کالا دیدگاه ثبت کنید
                </p>
                <Link
                  href="#comments"
                  className="bg-primary-50 text-primary-600 hover:bg-primary-100 block w-full rounded-lg px-6 py-2.5 text-center text-sm font-medium transition-colors"
                >
                  ثبت دیدگاه
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ProductRelatedOrganisms relatedProducts={relatedProducts} />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-9">
            <div className="sticky top-[var(--app-header-h,0px)] z-30 rounded-xl bg-white/95 px-2 shadow-[0_1px_3px_rgba(16,24,40,0.08)] backdrop-blur sm:px-4">
              <ScrollTabs items={filters} scrollOffset={110} />
            </div>

            <ProductIntroductionOrganisms product={product} />

            <ProductSpecificationsOrganisms
              specifications={product.specifications}
            />

            <div
              className="grid grid-cols-12 items-start gap-4"
              id="views"
            >
              <SingleProductFormOrganisms
                productId={product?._id}
                rate={product.rating}
              />
              <SingleProductListComment comments={comments} />
            </div>
          </div>
          <div className="mb-3 hidden lg:col-span-3 lg:block">
            <div className="sticky top-4 w-full rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)]">
              <PriceBox productId={product._id} />

              <div className="mt-8 border-t border-gray-100 pt-6">
                <ProductTrustList warranty={product.variants[0].warranty} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={buyBarRef}
        className="fixed inset-x-0 bottom-[var(--app-bottom-nav,0px)] z-30 px-4 pb-2 lg:hidden"
      >
        <div className="mx-auto max-w-md rounded-[22px] border border-black/5 bg-white/90 px-4 py-2.5 shadow-[0_12px_36px_-8px_rgba(31,41,55,0.22)] backdrop-blur-xl">
          <PriceBox productId={product._id} layout="bar" />
        </div>
      </div>
    </ProductVariantProvider>
  );
};

export default SingleProductTemplate;
