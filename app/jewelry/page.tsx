import type { Metadata } from "next";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "飾品展示",
  description: "嵐晶之聲展示天然礦石手鍊、純銀耳針、手工包線吊墜與日常天然石飾品。"
};

export default function JewelryPage() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-[0.24em] text-tide dark:text-crystal">JEWELRY</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink dark:text-white">飾品展示</h1>
        <p className="mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
          從原礦、天然礦石到日常飾品，每一件作品都保留手作痕跡與自然質地。若想詢問作品細節，歡迎透過 Instagram 或蝦皮賣場聯繫。
        </p>
        {products.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.name} className="rounded-lg border border-tide/10 bg-white/58 p-5 dark:border-white/10 dark:bg-white/[0.06]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {product.images.map((image) => (
                    <div key={image} className="aspect-square overflow-hidden rounded-md bg-sky-50 dark:bg-white/10">
                      <img src={image} alt={product.name} className="h-full w-full object-cover" />
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
            目前還沒有展示作品。之後會陸續加入手鍊、耳飾與包線吊墜。
          </div>
        )}
      </div>
    </section>
  );
}
