import { CheckoutButton } from "@/components/CheckoutButton";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const isRecommended = product.key === "carton";
  const badge = product.key === "carton" ? product.badge : null;

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[30px] border-2 p-6 transition hover:-translate-y-1 ${
        isRecommended
          ? "border-green-baby bg-pink-baby shadow-hard"
          : "border-green-baby/25 bg-cream shadow-soft"
      }`}
    >
      <div
        className={`absolute -right-10 -top-10 h-36 w-36 rotate-12 rounded-[48%_52%_43%_57%/54%_46%_54%_46%] ${
          isRecommended ? "bg-pink-pale" : "bg-sand-baby"
        }`}
      />
      {badge ? (
        <span className="brand-condensed absolute right-5 top-5 z-10 rotate-3 rounded-[48%_52%_43%_57%/54%_46%_54%_46%] bg-green-baby px-4 py-2 text-xs uppercase text-pink-baby">
          {badge}
        </span>
      ) : null}
      <div className="relative pr-24">
        <p className="brand-condensed text-sm uppercase text-green-baby/55">
          {product.sku}
        </p>
        <h3 className="mt-3 font-condensed text-4xl uppercase leading-none text-green-baby sm:text-5xl">
          {product.shortName}
        </h3>
      </div>
      <p className="relative mt-5 text-xl font-medium leading-7 text-green-baby/80">
        {product.description}
      </p>
      <div className="relative mt-6 grid grid-cols-2 gap-3 border-y border-green-baby/15 py-5">
        <div className="rounded-[20px] bg-sand-light p-4">
          <p className="brand-condensed text-xs uppercase text-green-baby/50">Size</p>
          <p className="mt-1 font-condensed text-2xl uppercase leading-none">
            {product.size}
          </p>
        </div>
        <div className="rounded-[20px] bg-sand-light p-4">
          <p className="brand-condensed text-xs uppercase text-green-baby/50">Price</p>
          <p className="mt-1 font-condensed text-2xl uppercase leading-none">
            {product.price}
          </p>
        </div>
      </div>
      <p className="relative mt-4 font-condensed text-base uppercase tracking-[0.08em] text-green-baby/65">
        $5 flat rate shipping Australia-wide
      </p>
      <CheckoutButton productKey={product.key} className="relative mt-6 w-full">
        {product.key === "single" ? "Buy 1 Bottle" : "Buy 6-Pack Carton"}
      </CheckoutButton>
    </article>
  );
}
