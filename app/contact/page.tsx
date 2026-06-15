import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "聯絡嵐晶之聲，詢問礦石手作飾品、客製作品、日常配戴建議與作品資訊。"
};

export default function ContactPage() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium tracking-[0.24em] text-tide dark:text-crystal">CONTACT</p>
          <h1 className="mt-3 text-4xl font-semibold text-ink dark:text-white">聯絡我們</h1>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            若你想詢問作品、礦石搭配、手作飾品或日常配戴建議，歡迎透過 Email、Instagram 或蝦皮賣場與我聯繫。
          </p>
        </div>
        <div className="rounded-lg border border-tide/10 bg-white/62 p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
          <dl className="space-y-5 text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-sm font-medium text-ink dark:text-white">Email</dt>
              <dd className="mt-1">
                <a className="text-tide dark:text-crystal" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-ink dark:text-white">Instagram</dt>
              <dd className="mt-1">
                <a className="text-tide dark:text-crystal" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
                  @{siteConfig.instagramHandle}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-ink dark:text-white">蝦皮賣場</dt>
              <dd className="mt-1">
                <a className="text-tide dark:text-crystal" href={siteConfig.shopeeUrl} target="_blank" rel="noreferrer">
                  shopee.tw/miniputin
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-ink dark:text-white">回覆時間</dt>
              <dd className="mt-1">不定期查看訊息，通常會於有空時回覆。</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
