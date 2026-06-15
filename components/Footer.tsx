import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/blog", label: "文章" },
  { href: "/story", label: "品牌故事" },
  { href: "/jewelry", label: "飾品展示" },
  { href: "/contact", label: "聯絡我們" },
  { href: "/privacy", label: "隱私權政策" }
];

export function Footer() {
  return (
    <footer className="border-t border-tide/10 px-5 py-10 text-sm text-slate-600 dark:border-white/10 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold tracking-[0.12em] text-ink dark:text-white">{siteConfig.name}</p>
            <p className="mt-1">礦石、天然石與手作飾品的日常靈感。</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-tide dark:hover:text-crystal">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-tide/10 pt-5 dark:border-white/10 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} 嵐晶之聲. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-tide dark:hover:text-crystal">
              Instagram @{siteConfig.instagramHandle}
            </a>
            <a href={siteConfig.shopeeUrl} target="_blank" rel="noreferrer" className="hover:text-tide dark:hover:text-crystal">
              蝦皮賣場
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
