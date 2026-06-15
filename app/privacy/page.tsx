import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "嵐晶之聲的隱私權政策，說明網站如何使用資料、Cookie、Google AdSense 與 Vercel Analytics。"
};

export default function PrivacyPage() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium tracking-[0.24em] text-tide dark:text-crystal">PRIVACY</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink dark:text-white">隱私權政策</h1>
        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">最後更新：2026 年 5 月 26 日</p>

        <div className="mt-10 space-y-8 leading-8 text-slate-600 dark:text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-ink dark:text-white">我們重視你的隱私</h2>
            <p className="mt-3">
              嵐晶之聲（以下稱「本網站」）提供礦石、天然石飾品、手作作品與相關內容。本政策說明你造訪本網站時，我們可能收集、使用與保護資料的方式。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink dark:text-white">我們可能收集的資料</h2>
            <p className="mt-3">
              當你瀏覽本網站時，網站可能透過瀏覽器、Cookie、分析工具或伺服器記錄收集非個人識別資料，例如瀏覽頁面、裝置類型、瀏覽器、來源網址與大略地區。
            </p>
            <p className="mt-3">
              若你主動透過 Email、Instagram 或其他方式聯絡我們，我們可能會收到你的姓名、帳號、電子郵件地址與訊息內容，以便回覆你的詢問。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink dark:text-white">Cookie 與第三方服務</h2>
            <p className="mt-3">
              本網站可能使用 Cookie 或類似技術改善瀏覽體驗、分析網站流量，並支援廣告服務。你可以在瀏覽器設定中封鎖或刪除 Cookie，但部分功能可能因此受到影響。
            </p>
            <p className="mt-3">
              本網站使用 Vercel Analytics 了解匿名流量與頁面瀏覽情形，也可能使用 Google AdSense 顯示廣告。Google 及其合作夥伴可能使用 Cookie 依據你的造訪紀錄顯示個人化或非個人化廣告。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink dark:text-white">Google AdSense</h2>
            <p className="mt-3">
              Google 可能會使用 DoubleClick Cookie 或其他廣告技術，在本網站或其他網站顯示與你興趣相關的廣告。你可以前往 Google 廣告設定管理個人化廣告偏好。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink dark:text-white">外部連結</h2>
            <p className="mt-3">
              本網站可能包含 Instagram、蝦皮賣場或其他第三方網站連結。當你離開本網站後，第三方網站的隱私權政策與資料處理方式不受本政策約束，請自行參閱其相關條款。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink dark:text-white">資料保護與聯絡方式</h2>
            <p className="mt-3">
              我們僅在合理範圍內使用你主動提供的資訊，不會任意出售、交換或出租你的個人資料。若你對本政策或資料使用方式有疑問，歡迎來信：
            </p>
            <p className="mt-3">
              <a className="text-tide dark:text-crystal" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink dark:text-white">政策更新</h2>
            <p className="mt-3">
              本網站可能因服務內容、法律規範或第三方工具調整而更新本政策。更新後的內容會公布於本頁面。
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
