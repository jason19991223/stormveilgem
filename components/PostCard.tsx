import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group rounded-lg border border-tide/10 bg-white/62 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-crystal/15 px-3 py-1 text-xs font-medium text-tide dark:text-crystal">
          {post.category}
        </span>
        {post.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="rounded-full border border-tide/10 px-3 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
            #{tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-xl font-semibold leading-tight text-ink transition group-hover:text-tide dark:text-white dark:group-hover:text-crystal">
          {post.title}
        </h2>
      </Link>
      <p className="mt-3 line-clamp-3 leading-7 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <time dateTime={post.date}>{post.date}</time>
        <Link href={`/blog/${post.slug}`} className="font-medium text-tide dark:text-crystal">
          閱讀文章
        </Link>
      </div>
    </article>
  );
}
