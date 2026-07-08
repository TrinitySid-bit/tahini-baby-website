import Link from "next/link";

const navItems = [
  { href: "/#why", label: "Why squeeze?" },
  { href: "/#details", label: "Details" },
  { href: "/#use", label: "Use it" },
  { href: "/#shop", label: "Shop" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-green-baby bg-pink-baby/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="brand-display text-sm uppercase text-green-baby sm:text-base"
          aria-label="Tahini Baby home"
        >
          Tahini Baby
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="brand-condensed text-base uppercase text-green-baby transition hover:text-green-baby/60"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/#shop"
          className="focus-ring rounded-full bg-green-baby px-4 py-2 font-condensed text-sm uppercase tracking-[0.08em] text-pink-baby transition hover:-translate-y-0.5 hover:shadow-hard"
        >
          Order
        </Link>
      </nav>
    </header>
  );
}
