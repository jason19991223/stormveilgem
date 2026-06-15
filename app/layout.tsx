import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "嵐晶之聲｜礦石手作飾品",
    template: "%s｜嵐晶之聲"
  },
  description: siteConfig.description,
  keywords: [
    "嵐晶之聲",
    "礦石",
    "天然石",
    "手作飾品",
    "水晶手鍊",
    "礦石知識",
    "包線吊墜",
    "天然石耳飾"
  ],
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: "嵐晶之聲｜礦石手作飾品",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "嵐晶之聲",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/brand-logo.jpg",
        width: 1600,
        height: 1200,
        alt: "嵐晶之聲 logo"
      }
    ]
  },
  icons: {
    icon: "/brand-logo.jpg",
    apple: "/brand-logo.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{const t=localStorage.getItem('theme');const d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark')}catch(e){}`}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6CRSYSSLZ8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-6CRSYSSLZ8');`}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3807886144987847"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
