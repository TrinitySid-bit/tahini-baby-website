import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <main className="bg-sand-light">
        <section className="section-shell">
          <Link href="/" className="brand-condensed text-sm uppercase text-green-baby/65">
            Back to Tahini Baby
          </Link>
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 className="brand-display mt-4 text-5xl uppercase leading-tight sm:text-6xl">
              Talk tahini.
            </h1>
            <p className="mt-5 text-lg leading-8 text-green-baby/75">
              For orders, wholesale, stockist chats, or general squeeze-related
              questions, reach us here.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-lg border-2 border-green-baby bg-pink-baby p-6 transition hover:-translate-y-1 hover:shadow-hard"
            >
              <p className="font-condensed text-3xl uppercase">Email</p>
              <p className="mt-2 text-lg">{site.email}</p>
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border-2 border-green-baby bg-cream p-6 transition hover:-translate-y-1 hover:shadow-hard"
            >
              <p className="font-condensed text-3xl uppercase">Instagram</p>
              <p className="mt-2 text-lg">{site.instagramHandle}</p>
            </a>
            <div className="rounded-lg border-2 border-green-baby/20 bg-sand-light p-6">
              <p className="font-condensed text-3xl uppercase">Baby Pantry</p>
              <p className="mt-2 text-lg">ABN {site.abn}</p>
              <p className="text-lg">{site.location}</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
