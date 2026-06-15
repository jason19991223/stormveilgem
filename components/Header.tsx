"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/blog", label: "文章" },
  { href: "/story", label: "品牌故事" },
  { href: "/jewelry", label: "飾品展示" },
  { href: "/contact", label: "聯絡" }
];

export function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-tide/10 bg-mist/78 backdrop-blur-xl dark:border-white/10 dark:bg-night/72">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-crystal/35 bg-night shadow-sm">
            <img src="/brand-logo.jpg" alt="嵐晶之聲 logo" className="h-full w-full object-cover" />
          </span>
          <span>
            <span className="block text-base font-semibold tracking-[0.16em] text-ink dark:text-white">
              嵐晶之聲
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">礦石手作飾品</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-slate-600 dark:text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-tide dark:hover:text-crystal">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full border border-tide/15 px-3 py-2 text-xs font-medium text-tide transition hover:border-crystal hover:bg-white/70 dark:border-white/15 dark:text-crystal dark:hover:bg-white/10"
          aria-label="切換深色或淺色模式"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
      <nav className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-5 pb-3 text-sm text-slate-600 dark:text-slate-300 md:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
