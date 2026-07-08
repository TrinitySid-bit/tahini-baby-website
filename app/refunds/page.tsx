import { LegalPage } from "@/components/LegalPage";

export const metadata = {
  title: "Refunds",
};

export default function RefundsPage() {
  return (
    <LegalPage
      title="Refunds"
      intro="We want your Tahini Baby order to arrive as expected."
      sections={[
        {
          heading: "Damaged or incorrect orders",
          body: [
            "If your order arrives damaged or incorrect, email hello@tahinibaby.com.au within 7 days with your order number and photos so we can help.",
          ],
        },
        {
          heading: "Change of mind",
          body: [
            "Because Tahini Baby is a food product, we generally cannot accept returns for change of mind once an order has been dispatched.",
          ],
        },
        {
          heading: "Refund method",
          body: [
            "Approved refunds are processed back to the original payment method. Bank and card processing times may vary.",
          ],
        },
      ]}
    />
  );
}
