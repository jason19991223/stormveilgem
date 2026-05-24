import type { Metadata } from "next";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "飾品展示",
  description: "嵐晶之聲的礦石手作飾品展示，包含手鍊、耳飾與包線吊墜。"
};

export default function JewelryPage() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-[0.24em] text-tide dark:text-crystal">JEWELRY</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink dark:text-white">飾品展示</h1>
        <p className="mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
          以原礦與天然礦石製作的日常飾品。作品會不定期更新，若喜歡某件作品，歡迎透過 Instagram 或蝦皮賣場詢問。
        </p>
        {products.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.name} className="rounded-lg border border-tide/10 bg-white/58 p-5 dark:border-white/10 dark:bg-white/[0.06]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {product.images.map((image) => (
                    <div key={image} className="aspect-square overflow-hidden rounded-md bg-sky-50 dark:bg-white/10">
                      <img
                        src={image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h2 className="mt-5 text-xl font-semibold text-ink dark:text-white">{product.name}</h2>
                <p className="mt-2 text-sm text-tide dark:text-crystal">{product.stone}</p>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{product.tone}</p>
                <p className="mt-5 font-medium text-ink dark:text-white">{product.price}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-dashed border-tide/20 bg-white/42 p-8 text-slate-600 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-300">
            目前尚未上架飾品。之後可在 lib/products.ts 新增作品資料，或改接實拍商品資料來源。
          </div>
        )}
      </div>
    </section>
  );
}
