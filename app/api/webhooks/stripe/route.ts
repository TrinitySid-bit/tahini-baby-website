import { NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function jsonError(error: string, status: number) {
  return NextResponse.json({ error }, { status });
}

export async function POST(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecretKey || !webhookSecret) {
    return jsonError(
      "Stripe webhook is missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET.",
      500,
    );
  }

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return jsonError("Missing Stripe signature header.", 400);
  }

  const stripe = new Stripe(stripeSecretKey);
  const payload = await request.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Invalid Stripe webhook signature.";

    return jsonError(message, 400);
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true, ignored: event.type });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.ORDER_NOTIFICATION_EMAIL;

  if (!resendApiKey || !notificationEmail) {
    return NextResponse.json({
      received: true,
      skipped: "RESEND_API_KEY or ORDER_NOTIFICATION_EMAIL is not configured.",
    });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const resend = new Resend(resendApiKey);
  const metadata = session.metadata || {};
  const amountTotal = session.amount_total
    ? `$${(session.amount_total / 100).toFixed(2)}`
    : "Not supplied";

  try {
    await resend.emails.send({
      from: "Tahini Baby <orders@tahinibaby.com.au>",
      to: notificationEmail,
      subject: `Tahini Baby order: ${metadata.product || "Checkout complete"}`,
      text: [
        "A Tahini Baby checkout completed.",
        "",
        `Stripe session: ${session.id}`,
        `Customer email: ${session.customer_details?.email || "Not supplied"}`,
        `Product: ${metadata.product || "Not supplied"}`,
        `SKU: ${metadata.sku || "Not supplied"}`,
        `Bottle count: ${metadata.bottle_count || "Not supplied"}`,
        `Amount total: ${amountTotal}`,
      ].join("\n"),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Resend notification failed.";

    return jsonError(message, 500);
  }

  return NextResponse.json({ received: true });
}
