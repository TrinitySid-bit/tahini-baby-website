import Image from "next/image";
import { CheckoutButton } from "@/components/CheckoutButton";
import { ProductCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/SiteFooter";
import { productList } from "@/lib/products";

const sesameGoss = [
  {
    text: "100% sesame. 0% jar drama.",
    className: "border-green-baby bg-green-baby text-pink-baby rotate-[-1deg]",
  },
  {
    text: "Roughly 300,000+ sesame seeds per bottle.",
    className: "border-green-baby/25 bg-cream text-green-baby rotate-[1deg]",
  },
  {
    text: "Sesame is one of the world's oldest oilseed crops.",
    className: "border-green-baby bg-pink-baby text-green-baby rotate-[-2deg]",
  },
  {
    text: "Tahini means ground sesame.",
    className: "border-green-baby/25 bg-sand-light text-green-baby rotate-[2deg]",
  },
  {
    text: "Stone ground for smooth, nutty magic.",
    className: "border-green-baby bg-cream text-green-baby rotate-[-1deg]",
  },
  {
    text: "Pantry safe. No fridge panic.",
    className: "border-green-baby bg-green-baby text-pink-baby rotate-[1deg]",
  },
  {
    text: "Shake me if I separate.",
    className: "border-green-baby/25 bg-pink-pale text-green-baby rotate-[-2deg]",
  },
  {
    text: "Hummus loves me. Toast loves me. Bowls love me.",
    className: "border-green-baby/25 bg-cream text-green-baby rotate-[2deg]",
  },
  {
    text: "Spoon-free sesame behaviour.",
    className: "border-green-baby bg-pink-baby text-green-baby rotate-[-1deg]",
  },
  {
    text: "Ancient seed. Very modern bottle.",
    className: "border-green-baby bg-green-baby text-pink-baby rotate-[1deg]",
  },
  {
    text: "Halva, hummus, baba ghanoush. Tahini gets around.",
    className: "border-green-baby/25 bg-sand-light text-green-baby rotate-[-2deg]",
  },
  {
    text: "Born for drizzling, dipping, dressing, and late-night toast.",
    className: "border-green-baby/25 bg-cream text-green-baby rotate-[1deg]",
  },
];

const whySqueeze = [
  {
    number: "01",
    title: "No spoon gymnastics.",
    body: "No oily jar lid. No tahini under your nails. Just tahini that behaves.",
  },
  {
    number: "02",
    title: "Bench friendly.",
    body: "Pantry safe, no refrigeration needed, and ready when your bowl needs saving.",
  },
  {
    number: "03",
    title: "Shake. Squeeze. Drizzle.",
    body: "Pure sesame, stone ground and bottled for daily squeezing.",
  },
];

const uses = [
  "Toast with honey, banana, or a pinch of salt.",
  "Bowls, falafel, shawarma, and roast veg.",
  "Hummus, yoghurt, smoothies, and overnight oats.",
  "Dressings, sauces, dips, and anything that needs sesame magic.",
];

const faqs = [
  {
    question: "What is in Tahini Baby?",
    answer:
      "Pure Tahini made with 100% sesame seeds. Contains sesame and may contain traces of tree nuts.",
  },
  {
    question: "Why does it separate?",
    answer:
      "That is natural tahini doing natural tahini things. If separation occurs, shake me.",
  },
  {
    question: "Where is it made?",
    answer:
      "Tahini Baby is Stone Ground in Melbourne, Australia, using a family recipe since the 1960s.",
  },
  {
    question: "How much is shipping?",
    answer: "$5 flat rate shipping Australia-wide.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden bg-pink-baby">
        <div className="section-shell grid min-h-[calc(100vh-70px)] items-center gap-6 pb-10 pt-8 md:grid-cols-[0.78fr_1.22fr] lg:gap-10">
          <div className="relative z-10">
            <p className="eyebrow">Pure Tahini / Stone Ground / 350g</p>
            <h1 className="brand-display mt-5 max-w-lg text-4xl uppercase leading-[1.05] text-green-baby sm:text-5xl lg:text-6xl">
              Tahini.
              <span className="block">But make it</span>
              <span className="block">squeezy.</span>
            </h1>
            <p className="mt-6 max-w-md text-xl font-light leading-8 text-green-baby/80">
              Shake it. Squeeze it. Put it on everything.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CheckoutButton productKey="single" className="w-full sm:w-auto">
                Buy 1 Bottle
              </CheckoutButton>
              <CheckoutButton
                productKey="carton"
                variant="ghost"
                className="w-full sm:w-auto"
              >
                Buy 6-Pack Carton
              </CheckoutButton>
            </div>
            <p className="mt-5 font-condensed text-base uppercase tracking-[0.08em] text-green-baby/60">
              100% sesame / Melbourne, Australia / $5 shipping
            </p>
          </div>

          <div className="relative mx-auto flex min-h-[520px] w-full max-w-xl items-center justify-center overflow-visible md:min-h-[620px]">
            <div className="pointer-events-none absolute bottom-8 left-1/2 h-10 w-56 -translate-x-1/2 rounded-full bg-green-baby/20 blur-xl" />
            <div className="absolute left-0 top-20 z-20 rotate-[-9deg] rounded-[52%_48%_46%_54%/42%_58%_42%_58%] border-2 border-green-baby bg-cream px-5 py-3 font-condensed text-sm uppercase tracking-[0.08em] shadow-hard sm:left-10 sm:text-base">
              Squeeze me
            </div>
            <div className="absolute right-0 top-24 z-20 rotate-[7deg] rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-green-baby px-5 py-3 font-condensed text-sm uppercase tracking-[0.08em] text-pink-baby sm:right-10 sm:text-base">
              Drizzle baby
            </div>
            <div className="absolute bottom-24 left-0 z-20 rotate-[7deg] rounded-[47%_53%_51%_49%/53%_47%_57%_43%] border-2 border-green-baby bg-pink-pale px-5 py-3 font-condensed text-sm uppercase tracking-[0.08em] text-green-baby shadow-hard sm:left-10 sm:text-base">
              Shake me
            </div>
            <div className="absolute bottom-20 right-0 z-20 rotate-[-6deg] rounded-[50%_50%_44%_56%/48%_52%_48%_52%] border-2 border-green-baby bg-cream px-5 py-3 font-condensed text-sm uppercase tracking-[0.08em] text-green-baby sm:right-8 sm:text-base">
              No jar drama
            </div>
            <Image
              src="/images/tahini-baby-hero.png"
              alt="Tahini Baby 350g squeeze bottle"
              width={808}
              height={2832}
              priority
              sizes="(min-width: 1024px) 210px, (min-width: 640px) 190px, 170px"
              className="relative z-10 h-[500px] w-auto rotate-[2deg] drop-shadow-2xl sm:h-[580px] md:h-[640px] lg:h-[680px]"
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="sesame-goss"
        className="border-y-2 border-green-baby bg-sand-light py-5"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div className="flex shrink-0 items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-green-baby" />
            <h2
              id="sesame-goss"
              className="brand-condensed text-xl uppercase text-green-baby"
            >
              Sesame Goss
            </h2>
          </div>
          <div className="overflow-x-auto overflow-y-visible py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="marquee-track flex w-max gap-3 pr-3">
              {sesameGoss.map((fact) => (
                <span
                  key={fact.text}
                  className={`inline-flex min-h-12 max-w-[260px] items-center rounded-[48%_52%_43%_57%/54%_46%_54%_46%] border-2 px-5 py-3 font-condensed text-base uppercase leading-tight tracking-[0.06em] shadow-[3px_3px_0_rgba(31,58,24,0.18)] sm:max-w-none ${fact.className}`}
                >
                  {fact.text}
                </span>
              ))}
              <span aria-hidden="true" className="flex gap-3">
                {sesameGoss.map((fact) => (
                  <span
                    key={`repeat-${fact.text}`}
                    className={`inline-flex min-h-12 max-w-[260px] items-center rounded-[48%_52%_43%_57%/54%_46%_54%_46%] border-2 px-5 py-3 font-condensed text-base uppercase leading-tight tracking-[0.06em] shadow-[3px_3px_0_rgba(31,58,24,0.18)] sm:max-w-none ${fact.className}`}
                  >
                    {fact.text}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-sand-baby">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Why squeeze?</p>
            <h2 className="brand-display mt-4 text-3xl uppercase leading-tight sm:text-5xl">
              Spoon-free, jar-free, drama-free.
            </h2>
          </div>
          <div className="mt-10 divide-y divide-green-baby/15 border-y border-green-baby/15">
            {whySqueeze.map((item) => (
              <article
                key={item.number}
                className="grid gap-4 py-7 sm:grid-cols-[72px_1fr]"
              >
                <p className="font-condensed text-5xl leading-none text-green-baby/20">
                  {item.number}
                </p>
                <div>
                  <h3 className="font-condensed text-3xl uppercase leading-none">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-lg font-light leading-8 text-green-baby/75">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="details" className="bg-cream">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="eyebrow">Product details</p>
            <h2 className="brand-display mt-4 text-3xl uppercase leading-tight sm:text-5xl">
              The good stuff.
            </h2>
            <p className="mt-5 max-w-xl text-lg font-light leading-8 text-green-baby/75">
              Pure sesame, stone ground and bottled for daily squeezing.
              No spoon gymnastics. No oily jar lid.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-7">
            <article className="rounded-[32px] border-2 border-green-baby bg-pink-baby p-7 shadow-hard sm:col-span-4">
              <p className="eyebrow">The good stuff</p>
              <h3 className="mt-4 font-condensed text-5xl uppercase leading-none">
                Pure tahini.
                <span className="block">Zero drama.</span>
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "100% Sesame Seeds",
                  "Stone Ground",
                  "Family recipe since the 1960s",
                ].map((detail) => (
                  <span
                    key={detail}
                    className="rounded-[52%_48%_46%_54%/42%_58%_42%_58%] bg-green-baby px-4 py-2 font-condensed text-base uppercase tracking-[0.06em] text-pink-baby"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </article>
            <article className="rounded-[32px] border-2 border-green-baby/20 bg-sand-light p-6 sm:col-span-3">
              <p className="eyebrow">Bench behaviour</p>
              <div className="mt-5 grid gap-4">
                {[
                  "350g squeeze bottle",
                  "Pantry safe",
                  "No refrigeration needed",
                  "If it separates, shake it like you mean it",
                ].map((detail) => (
                  <p
                    key={detail}
                    className="border-b border-green-baby/15 pb-3 font-condensed text-2xl uppercase leading-none last:border-0 last:pb-0"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </article>
            <article className="rounded-[28px] border-2 border-green-baby/15 bg-cream p-5 sm:col-span-7">
              <p className="eyebrow">Allergen note</p>
              <div className="mt-4 flex flex-wrap gap-3 text-green-baby/75">
                {["Contains sesame", "May contain traces of tree nuts"].map(
                  (detail) => (
                    <span
                      key={detail}
                      className="rounded-full border-2 border-green-baby/20 px-4 py-2 font-condensed text-base uppercase tracking-[0.06em]"
                    >
                      {detail}
                    </span>
                  ),
                )}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="use" className="bg-pink-baby">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">How to use it</p>
              <h2 className="brand-display mt-4 text-3xl uppercase leading-tight sm:text-5xl">
                Drizzle it on whatever looks boring.
              </h2>
            </div>
            <p className="text-lg font-light leading-8 text-green-baby/75">
              Shake it. Squeeze it. Drizzle it. Tahini that behaves on toast,
              bowls, hummus, roast veg, dressings, and anything that needs
              sesame magic.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {uses.map((use) => (
              <article
                key={use}
                className="min-h-40 rounded-lg border-2 border-green-baby bg-cream p-5 transition hover:-translate-y-1 hover:shadow-hard"
              >
                <p className="text-lg font-medium leading-7">{use}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="bg-sand-light">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow">Shop Tahini Baby</p>
              <h2 className="brand-display mt-4 text-3xl uppercase leading-tight sm:text-5xl">
                Pick your squeeze.
              </h2>
              <p className="mt-5 text-lg font-light leading-8 text-green-baby/75">
                One for flirting with the bottle. Six for making it part of
                your personality.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {productList.map((product) => (
                <ProductCard key={product.sku} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Made in Melbourne</p>
            <h2 className="brand-display mt-4 text-3xl uppercase leading-tight sm:text-5xl">
              A family recipe since the sixties.
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-lg font-light leading-8 text-green-baby/75">
              <p>
                Family recipe since the 1960s. Stone Ground in Melbourne,
                Australia. Pure Tahini in a bottle that wants to live on the
                bench.
              </p>
              <p>
                Fancy tahini, zero jar drama. That is the whole squeeze.
              </p>
            </div>
          </div>
          <div className="rounded-lg border-2 border-green-baby bg-pink-baby p-7 shadow-hard">
            <div className="grid gap-5">
              {[
                ["1 ingredient", "Sesame seeds. That is the whole list."],
                ["60+ years", "Same family recipe. Better bottle."],
                ["0 fuss", "Shake, squeeze, drizzle, repeat."],
              ].map(([title, body]) => (
                <div key={title}>
                  <p className="font-condensed text-3xl uppercase leading-none">
                    {title}
                  </p>
                  <p className="mt-1 text-base text-green-baby/70">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-baby">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="eyebrow">FAQ</p>
            <h2 className="brand-display mt-4 text-3xl uppercase leading-tight sm:text-5xl">
              Tiny questions, creamy answers.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-lg border-2 border-green-baby/15 bg-cream p-6"
              >
                <h3 className="font-condensed text-2xl uppercase">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-green-baby/75">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
