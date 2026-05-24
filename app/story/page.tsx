import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我",
  description: "關於嵐晶之聲：從原礦與手作開始，讓每件礦石作品延續自己的故事。"
};

export default function StoryPage() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium tracking-[0.24em] text-tide dark:text-crystal">ABOUT ME</p>
          <h1 className="mt-3 text-4xl font-semibold text-ink dark:text-white">關於我</h1>
        </div>
        <div className="space-y-6 text-lg leading-9 text-slate-600 dark:text-slate-300">
          <p className="text-2xl font-semibold leading-9 text-ink dark:text-white">
            原礦 / 手作
          </p>
          <p>
            因為喜歡這些美麗的礦石，而開始走上自學的道路。從認識原礦、練習打磨，到慢慢完成一件作品，過程裡有很多安靜但珍貴的成就感。
          </p>
          <p>
            希望我的每件作品都能有自己的故事。礦石離開了創作者，並不代表故事的完結，而是與新家人一起展開新的開始。
          </p>
          <p>
            我喜歡從原礦開始打磨，因為能親手看見它慢慢呈現光澤與形狀，是很有成就感的事情。
          </p>
          <p>
            這裡會不定期展示自己的作品，也記錄礦石、手作與日常之間的靈感。
          </p>
        </div>
      </div>
    </section>
  );
}
