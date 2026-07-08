import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Order confirmed",
};

export default function SuccessPage() {
  return (
    <>
      <main className="bg-pink-baby">
        <section className="section-shell flex min-h-[70vh] items-center">
          <div className="max-w-2xl">
            <p className="eyebrow">Order confirmed</p>
            <h1 className="brand-display mt-4 text-5xl uppercase leading-tight sm:text-6xl">
              Your squeeze is on its way.
            </h1>
            <p className="mt-6 text-xl font-light leading-8 text-green-baby/75">
              Thank you for ordering Tahini Baby. Stripe will send your receipt,
              and we will get your bottle packed for dispatch.
            </p>
            <Link href="/" className="hard-button mt-8">
              Back home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
