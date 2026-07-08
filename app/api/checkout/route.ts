import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/lib/products";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function missingEnv(names: string[]) {
  return names.filter((name) => !process.env[name]);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const productKey =
    typeof body === "object" && body !== null && "product" in body
      ? (body as { product?: unknown }).product
      : null;
  const product = getProduct(productKey);

  if (!product) {
    return NextResponse.json(
      { error: "Unsupported product. Choose single or carton." },
      { status: 400 },
    );
  }

  const requiredEnv = [
    "STRIPE_SECRET_KEY",
    product.stripePriceEnv,
    "STRIPE_SHIPPING_RATE_ID",
    "NEXT_PUBLIC_SITE_URL",
  ];
  const missing = missingEnv(requiredEnv);

  if (missing.length > 0) {
    return NextResponse.json(
      {
        error: "Checkout is missing required environment variables.",
        missing,
      },
      { status: 500 },
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL as string).replace(/\/$/, "");
  const priceId = process.env[product.stripePriceEnv] as string;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["AU"],
      },
      shipping_options: [
        {
          shipping_rate: process.env.STRIPE_SHIPPING_RATE_ID as string,
        },
      ],
      allow_promotion_codes: true,
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
      metadata: {
        sku: product.sku,
        product: product.name,
        bottle_count: String(product.bottleCount),
      },
      payment_intent_data: {
        metadata: {
          sku: product.sku,
          product: product.name,
          bottle_count: String(product.bottleCount),
        },
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 502 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Stripe checkout failed.";

    return NextResponse.json({ error: message }, { status: 502 });
  }
}
