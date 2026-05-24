import type { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "部落格文章",
  description: "嵐晶之聲的礦石知識、手作飾品、日常配戴與設計靈感文章。"
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-[0.24em] text-tide dark:text-crystal">JOURNAL</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink dark:text-white">部落格文章</h1>
        <p className="mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
          分享礦石知識、手作飾品筆記、日常配戴靈感與設計想法。之後新增 Markdown 文章後，會自動顯示在這裡。
        </p>
        {categories.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-tide/15 px-4 py-2 text-sm text-tide dark:border-white/10 dark:text-crystal">
                {category}
              </span>
            ))}
          </div>
        )}
        {posts.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-dashed border-tide/20 bg-white/42 p-8 text-slate-600 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-300">
            目前尚未發布文章。請在 content/posts 新增 Markdown 檔案開始撰寫。
          </div>
        )}
      </div>
    </section>
  );
}
