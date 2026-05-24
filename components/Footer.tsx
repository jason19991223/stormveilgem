import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-tide/10 px-5 py-10 text-sm text-slate-600 dark:border-white/10 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} 嵐晶之聲. Crafted for quiet brilliance.</p>
        <div className="flex gap-5">
          <Link href="/blog" className="hover:text-tide dark:hover:text-crystal">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-tide dark:hover:text-crystal">
            Contact
          </Link>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-tide dark:hover:text-crystal"
          >
            Instagram
          </a>
          <a
            href={siteConfig.shopeeUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-tide dark:hover:text-crystal"
          >
            蝦皮賣場
          </a>
        </div>
      </div>
    </footer>
  );
}
