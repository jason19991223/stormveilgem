import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      keywords: [post.category, ...post.tags]
    };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  let post;

  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-crystal/15 px-3 py-1 text-xs font-medium text-tide dark:text-crystal">
            {post.category}
          </span>
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-tide/10 px-3 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
              #{tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-ink dark:text-white md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
          <time dateTime={post.date}>{post.date}</time>
        </p>
        <p className="mt-8 text-xl leading-9 text-slate-600 dark:text-slate-300">
          {post.excerpt}
        </p>
        <div
          className="prose-crystal mt-10 text-slate-700 dark:text-slate-200"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
