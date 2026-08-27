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
import Link from "next/link";

interface IProps {
  article: Blog;
  blogs: Blog[];
  comments: Comment[];
  all_approved_comments_count: number;
}

function ClientPage({
  article,
  blogs,
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

  const renderRelatedPosts = () => {
    return (
      <section className="pt-7 pb-[27px]">
        <div className="mb-8 flex items-center">
          <BookIcon className="fill-secondary-50 text-secondary-500 ml-1.5" />

          <h2 className="text-lg font-semibold text-gray-800 md:text-2xl">
            اخبار مرتبط
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {blogs.map((article, index) =>
            index <= 3 ? (
              <BlogCardOrganisms key={index} article={article} />
            ) : (
              <></>
            )
          )}
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
              label: "خبر اول",
              isCurrent: true,
            },
          ]}
        />
      </Container>
      <Container>
        <section className="flex flex-col gap-16">
          {renderPost()}
          {renderRelatedPosts()}
          <CommentSection articleId={article.id} comments={comments} />
        </section>
      </Container>
    </Layout>
  );
}

export default ClientPage;
