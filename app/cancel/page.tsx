import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Checkout cancelled",
};

export default function CancelPage() {
  return (
    <>
      <main className="bg-sand-light">
        <section className="section-shell flex min-h-[70vh] items-center">
          <div className="max-w-2xl">
            <p className="eyebrow">Checkout cancelled</p>
            <h1 className="brand-display mt-4 text-5xl uppercase leading-tight sm:text-6xl">
              No squeeze stress.
            </h1>
            <p className="mt-6 text-xl font-light leading-8 text-green-baby/75">
              Your order was not completed. The bottle is still here whenever
              you are ready.
            </p>
            <Link href="/#shop" className="hard-button mt-8">
              Return to shop
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
