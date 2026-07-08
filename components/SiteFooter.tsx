import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-green-baby bg-green-baby text-pink-baby">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr] lg:px-12">
        <div>
          <p className="brand-display text-xl uppercase">Tahini Baby</p>
          <p className="mt-4 max-w-md text-base leading-7 text-pink-baby/80">
            Pure Tahini. Stone Ground. Family recipe since the 1960s.
            Melbourne, Australia.
          </p>
          <div className="mt-5 text-sm leading-6 text-pink-baby/70">
            <p>{site.legalName}</p>
            <p>ABN {site.abn}</p>
            <p>{site.location}</p>
          </div>
          <p className="mt-5 font-condensed text-lg uppercase tracking-[0.08em]">
            more squeezes coming later.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="brand-condensed text-sm uppercase text-pink-baby/65">
              Shop
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/#shop" className="hover:text-cream">
                Products
              </Link>
              <Link href="/shipping" className="hover:text-cream">
                Shipping
              </Link>
              <Link href="/refunds" className="hover:text-cream">
                Refunds
              </Link>
            </div>
          </div>
          <div>
            <h3 className="brand-condensed text-sm uppercase text-pink-baby/65">
              Legal
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/privacy" className="hover:text-cream">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-cream">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-cream">
                Contact
              </Link>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="brand-condensed text-sm uppercase text-pink-baby/65">
              Connect
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream"
              >
                {site.instagramHandle}
              </a>
              <Link href="/#use" className="hover:text-cream">
                {site.recipesLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-pink-baby/20 px-5 py-5 text-center text-xs text-pink-baby/70">
        (c) 2026 {site.legalName}. Tahini Baby is made in Melbourne, VIC.
      </div>
    </footer>
  );
}
