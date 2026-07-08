import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <>
      <main className="bg-sand-light">
        <section className="section-shell">
          <Link
            href="/"
            className="brand-condensed text-sm uppercase text-green-baby/65"
          >
            Back to Tahini Baby
          </Link>
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow">Tahini Baby</p>
            <h1 className="brand-display mt-4 text-4xl uppercase leading-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-green-baby/75">{intro}</p>
          </div>
          <div className="mt-10 grid gap-5">
            {sections.map((section) => (
              <section
                key={section.heading}
                className="rounded-lg border-2 border-green-baby/15 bg-cream p-6"
              >
                <h2 className="font-condensed text-2xl uppercase">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-base leading-7 text-green-baby/75">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-[24px] border-2 border-green-baby/15 bg-cream p-6 text-green-baby/75">
            <p className="font-condensed text-2xl uppercase text-green-baby">
              {site.legalName}
            </p>
            <p className="mt-2">ABN {site.abn}</p>
            <p>{site.location}</p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-green-baby">
                {site.email}
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
