# 嵐晶之聲

品牌型部落格網站 MVP，使用 Next.js App Router 與 Tailwind CSS 建立，支援 Markdown 文章、分類、標籤、深色模式、SEO sitemap/robots，並可部署到 Vercel。

## 開發

```bash
npm install
npm run dev
```

## 網站網址

部署到 Vercel 後可設定環境變數：

```bash
NEXT_PUBLIC_SITE_URL=https://你的網域
```

## 文章

文章放在 `content/posts`，每篇 Markdown 需包含 frontmatter。資料夾目前不含預設文章，可自行新增：

```md
---
title: "文章標題"
date: "2026-05-01"
excerpt: "文章摘要"
category: "分類"
tags: ["標籤一", "標籤二"]
featured: true
---
```

## 自有網域

部署到 Vercel 後，在 Project Settings 的 Domains 加入自有網域，依照 Vercel 提示設定 DNS 的 A/CNAME 紀錄，並把 `NEXT_PUBLIC_SITE_URL` 設成正式網址即可。
