"use client";

import Container from "@/components/ui/organisms/Container/Container";
import Layout from "@/components/ui/organisms/Container/Layout/Layout";

import BookIcon from "@/components/icons/blog/BookIcon";
import CalenderIcon from "@/components/icons/blog/CalenderIcon";
import ChevronLeft from "@/components/icons/ChevronLeft";
import BlogCardOrganisms from "@/components/ui/organisms/BlogCard/BlogCardOrganisms";

import ManualBreadcrumb from "@/components/ui/molecules/Breadcrumbs/ManualBreadcrumb";
import CommentSection from "@/components/ui/organisms/Blog/Comment/CommentSection";
import Blog from "@/config/types/blog.types";
import ROUTES from "@/constants/routes/routes.constant";
import { Comment } from "@/models/common.model";
import { calculateReadingTimeText } from "@/utils/blog.util";
import { formatJalali } from "@/utils/date.util";
import OptimizedImage from "@/utils/imageLoader";
import { SearchProduct } from "@/utils/related-content.util";
import Link from "next/link";

interface IProps {
  article: Blog;
  /** مقاله‌های مرتبط (از قبل انتخاب و مرتب‌شده، بدون خودِ مقاله) */
  blogs: Blog[];
  relatedProducts?: SearchProduct[];
  /** مقاله‌ی آموزشی خرابی/تعمیر است؛ انتهایش دعوت به ثبت درخواست تعمیر می‌آید */
  showRepairCta?: boolean;
  comments: Comment[];
  all_approved_comments_count: number;
}

function ClientPage({
  article,
  blogs,
  relatedProducts = [],
  showRepairCta = false,
  comments,
  all_approved_comments_count,
}: IProps) {
  const renderPost = () => {
    return (
      <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-8 lg:p-10">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <div className="bg-primary-50 text-primary-700 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
            <BookIcon fill="none" className="h-3 w-3" />
            <span>{calculateReadingTimeText(article.body)}</span>
          </div>

          <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            <CalenderIcon fill="none" className="h-3 w-3" />
            <span>{formatJalali(new Date(article.created_at))}</span>
          </div>

          {typeof article.view_count === "number" && (
            <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              <span>{article.view_count.toLocaleString("fa-IR")} بازدید</span>
            </div>
          )}

          <Link href="#comments">
            <div className="hover:bg-primary-50 hover:text-primary-600 flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition">
              <span>{all_approved_comments_count} دیدگاه</span>
              <ChevronLeft className="h-[7px] w-1" />
            </div>
          </Link>
        </div>

        <h1 className="mb-6 text-2xl leading-snug font-bold text-gray-900 lg:text-4xl">
          {article.title ?? ""}
        </h1>

        <div className="mb-8 overflow-hidden rounded-2xl shadow-md">
          <OptimizedImage
            width={1200}
            height={675}
            src={article.media_url}
            alt={article.alt}
            priority
            className="aspect-video h-full w-full object-cover "
          />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: article.body }}
          className="blog-content text-justify"
        ></div>
      </article>
    );
  };

  const renderRepairCta = () => {
    if (!showRepairCta) return null;
    return (
      <section className="from-primary-600 to-primary-500 flex flex-col gap-4 rounded-2xl bg-linear-to-l p-5 text-white shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="text-lg font-bold sm:text-xl">
            گوشی‌ات این مشکل را دارد؟
          </h2>
          <p className="mt-1.5 text-sm leading-7 text-white/85">
            درخواست تعمیر ثبت کن؛ کارشناس‌های استیو بررسی می‌کنند و قبل از
            شروع کار هزینه را اعلام می‌کنند.
          </p>
        </div>
        <Link
          href={ROUTES.PhoneRepair}
          className="text-primary-700 shrink-0 rounded-xl bg-white px-6 py-3 text-center text-sm font-bold shadow-sm transition hover:bg-white/90"
        >
          ثبت درخواست تعمیر
        </Link>
      </section>
    );
  };

  const renderRelatedProducts = () => {
    if (relatedProducts.length === 0) return null;
    return (
      <section>
        <h2 className="mb-5 text-lg font-semibold text-gray-800 md:text-2xl">
          محصولات مرتبط
        </h2>
        <div className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {relatedProducts.map((product) => {
            const image =
              product.gallery?.find((g) => g.is_primary) ?? product.gallery?.[0];
            return (
              <Link
                key={product.id}
                href={`${ROUTES.Products}/${product.slug}`}
                className="flex w-40 shrink-0 snap-start flex-col rounded-2xl bg-white p-3 shadow-sm transition sm:w-auto lg:hover:-translate-y-0.5 lg:hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-50">
                  {image?.url && (
                    <OptimizedImage
                      src={image.url}
                      alt={image.alt?.trim() || product.name}
                      width={240}
                      height={240}
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
                <span className="mt-3 line-clamp-2 text-sm leading-6 font-medium text-gray-800">
                  {product.name}
                </span>
                <span className="text-primary-600 mt-auto pt-2 text-xs font-semibold">
                  مشاهده و خرید
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    );
  };

  const renderRelatedPosts = () => {
    if (blogs.length === 0) return null;
    return (
      <section>
        <div className="mb-8 flex items-center">
          <BookIcon className="fill-secondary-50 text-secondary-500 ml-1.5" />

          <h2 className="text-lg font-semibold text-gray-800 md:text-2xl">
            مقاله‌های مرتبط
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {blogs.slice(0, 4).map((related) => (
            <BlogCardOrganisms key={related.id} article={related} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <Layout>
      <Container>
        <ManualBreadcrumb
          items={[
            { label: "خانه", href: ROUTES.Landing },
            {
              label: "اخبار",
              href: ROUTES.Blog,
            },
            {
              label: article.title,
              isCurrent: true,
            },
          ]}
        />
      </Container>
      <Container>
        <section className="flex flex-col gap-10 lg:gap-16">
          {renderPost()}
          {renderRepairCta()}
          {renderRelatedProducts()}
          {renderRelatedPosts()}
          <CommentSection articleId={article.id} comments={comments} />
        </section>
      </Container>
    </Layout>
  );
}

export default ClientPage;
