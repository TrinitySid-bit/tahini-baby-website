import { LegalPage } from "@/components/LegalPage";

export const metadata = {
  title: "Shipping",
};

export default function ShippingPage() {
  return (
    <LegalPage
      title="Shipping"
      intro="Simple shipping for Tahini Baby orders within Australia."
      sections={[
        {
          heading: "Flat rate",
          body: ["Shipping is $5 flat rate Australia-wide for launch orders."],
        },
        {
          heading: "Dispatch",
          body: [
            "Orders are packed from Melbourne. We aim to dispatch orders promptly on business days once payment has been confirmed.",
          ],
        },
        {
          heading: "Delivery",
          body: [
            "Delivery times vary by location and carrier. If your parcel is delayed or arrives damaged, contact hello@tahinibaby.com.au with your order details.",
          ],
        },
      ]}
    />
  );
}
