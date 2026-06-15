import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "品牌故事",
  description: "認識嵐晶之聲，從原礦、天然礦石與手作飾品開始的日常創作故事。"
};

export default function StoryPage() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium tracking-[0.24em] text-tide dark:text-crystal">ABOUT ME</p>
          <h1 className="mt-3 text-4xl font-semibold text-ink dark:text-white">品牌故事</h1>
        </div>
        <div className="space-y-6 text-lg leading-9 text-slate-600 dark:text-slate-300">
          <p className="text-2xl font-semibold leading-9 text-ink dark:text-white">原礦 / 手作</p>
          <p>因為喜歡這些美麗的礦石，而開始走上自學的道路。</p>
          <p>
            我希望每件作品都能有自己的故事。礦石離開創作者，並不代表故事的完結，而是與新家人的開始。
          </p>
          <p>我喜歡從原礦開始打磨，這樣很有成就感，也讓每件作品保留更真實的手作溫度。</p>
          <p>嵐晶之聲會不定期展示自己的作品，分享礦石、飾品與日常靈感。</p>
        </div>
      </div>
    </section>
  );
}
