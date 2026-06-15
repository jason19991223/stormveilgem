import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { getFeaturedPosts } from "@/lib/posts";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <section className="px-5 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="mb-5 text-sm font-medium tracking-[0.28em] text-tide dark:text-crystal">
              MINERAL HANDMADE JEWELRY
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-ink dark:text-white md:text-6xl">
              嵐晶之聲｜礦石手作飾品
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 dark:text-slate-300">
              從原礦與天然礦石開始的日常飾品。手鍊、耳飾、包線吊墜，清透藍色系與溫柔自然感，陪伴每一天的穿搭與心情。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/blog" className="rounded-full bg-tide px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-ink dark:bg-crystal dark:text-night">
                閱讀文章
              </Link>
              <Link href="/jewelry" className="rounded-full border border-tide/20 px-6 py-3 text-sm font-medium text-tide transition hover:bg-white/70 dark:border-white/15 dark:text-crystal dark:hover:bg-white/10">
                查看飾品
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/70 bg-white/48 p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-crystal/30 blur-3xl" />
            <div className="absolute bottom-8 left-8 h-44 w-44 rounded-full bg-tide/10 blur-2xl dark:bg-crystal/10" />
            <div className="relative grid h-full place-items-center">
              <div className="grid aspect-square w-64 place-items-center overflow-hidden rounded-lg border border-crystal/30 bg-night shadow-soft">
                <img src="/brand-logo.jpg" alt="嵐晶之聲 logo" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-tide dark:text-crystal">FEATURED</p>
              <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white">精選文章</h2>
            </div>
            <Link href="/blog" className="text-sm font-medium text-tide dark:text-crystal">
              查看全部文章
            </Link>
          </div>
          {featuredPosts.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-3">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-tide/20 bg-white/42 p-8 text-slate-600 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-300">
              精選文章正在整理中。未來會分享礦石知識、手作紀錄與日常穿搭靈感。
            </div>
          )}
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-tide dark:text-crystal">ABOUT</p>
            <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white">品牌介紹</h2>
          </div>
          <div className="space-y-4 text-lg leading-9 text-slate-600 dark:text-slate-300">
            <p className="text-2xl font-semibold leading-9 text-ink dark:text-white">原礦 / 手作</p>
            <p>
              因為喜歡美麗的礦石，而開始走上自學與創作的道路。希望每件作品都能有自己的故事，離開創作者後，也能與新的家人展開新的日常。
            </p>
            <Link href="/story" className="inline-flex text-sm font-medium text-tide dark:text-crystal">
              閱讀品牌故事
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.2em] text-tide dark:text-crystal">JEWELRY</p>
            <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white">飾品展示</h2>
          </div>
          {products.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-3">
              {products.slice(0, 6).map((product) => (
                <article key={product.name} className="rounded-lg border border-tide/10 bg-white/58 p-5 dark:border-white/10 dark:bg-white/[0.06]">
                  {product.images?.[0] && (
                    <div className="mb-5 aspect-[4/3] overflow-hidden rounded-md bg-sky-50 dark:bg-white/10">
                      <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-ink dark:text-white">{product.name}</h3>
                  <p className="mt-2 text-sm text-tide dark:text-crystal">{product.stone}</p>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{product.tone}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-tide/20 bg-white/42 p-8 text-slate-600 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-300">
              目前還沒有展示作品。
            </div>
          )}
          <Link href="/jewelry" className="mt-8 inline-flex text-sm font-medium text-tide dark:text-crystal">
            查看所有飾品
          </Link>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 rounded-lg border border-tide/10 bg-tide px-6 py-8 text-white shadow-soft dark:border-white/10 dark:bg-white/[0.08] md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-blue-100">SOCIAL & SHOP</p>
            <h2 className="mt-2 text-2xl font-semibold">追蹤作品更新，或到賣場看看更多手作飾品。</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-tide">
              @{siteConfig.instagramHandle}
            </a>
            <a href={siteConfig.shopeeUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/35 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              前往蝦皮賣場
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
