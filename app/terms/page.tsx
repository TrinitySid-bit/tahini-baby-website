import { LegalPage } from "@/components/LegalPage";

export const metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      intro="These simple terms apply when you use this website or buy Tahini Baby online."
      sections={[
        {
          heading: "Products",
          body: [
            "Tahini Baby is a food product containing sesame. Natural separation may occur, shake before use. Product information may be updated from time to time.",
          ],
        },
        {
          heading: "Orders and payment",
          body: [
            "Orders are processed through Stripe Checkout. An order is confirmed once payment has been accepted and a confirmation page or receipt has been issued.",
          ],
        },
        {
          heading: "Availability",
          body: [
            "Launch stock may be limited. If we cannot fulfil an order after payment, we will contact you and arrange a refund or alternative resolution.",
          ],
        },
        {
          heading: "Contact",
          body: ["Questions about these terms can be sent to hello@tahinibaby.com.au."],
        },
      ]}
    />
  );
}
