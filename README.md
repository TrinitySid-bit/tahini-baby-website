# Tahini Baby Website

Production-ready Next.js launch site for Tahini Baby.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Build locally with:

```bash
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values.

Required for checkout:

- `NEXT_PUBLIC_SITE_URL` - use `http://localhost:3000` locally and the production URL on Vercel.
- `STRIPE_SECRET_KEY`
- `STRIPE_PRICE_SINGLE` - Stripe Price ID for `TB-SINGLE-350G`.
- `STRIPE_PRICE_CARTON` - Stripe Price ID for `TB-CARTON-6X350G`.
- `STRIPE_SHIPPING_RATE_ID` - Stripe Shipping Rate ID for $5 flat rate Australia-wide shipping.

Optional for order notification emails:

- `STRIPE_WEBHOOK_SECRET`
- `RESEND_API_KEY`
- `ORDER_NOTIFICATION_EMAIL`

Missing Stripe or Resend variables do not break `npm run build`. Checkout variables are validated only when `/api/checkout` is called.

## Stripe Setup

Create two Stripe prices:

- Tahini Baby Single Bottle, `1 x 350g`, `$9.99`, SKU `TB-SINGLE-350G`.
- Tahini Baby 6-Pack Carton, `6 x 350g`, `$49.99`, SKU `TB-CARTON-6X350G`.

Create one shipping rate:

- `$5` flat rate, Australia-wide.

Checkout metadata includes:

- `sku`
- `product`
- `bottle_count`

The webhook endpoint is:

```text
/api/webhooks/stripe
```

Listen for `checkout.session.completed`. The webhook verifies Stripe signatures and can send a Resend notification email when the optional Resend variables are present. There is no database in this project, so durable webhook idempotency would need a small database or KV store before relying on it for fulfilment automation.

## Vercel Deployment

1. Push the repo to GitHub.
2. Import it into Vercel as a Next.js project.
3. Add all required checkout environment variables in Vercel Project Settings.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
5. Add the Stripe webhook URL after deployment.

The project uses the Next.js App Router, TypeScript, Tailwind CSS, and simple API routes designed for Vercel.
