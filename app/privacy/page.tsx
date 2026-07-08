import { LegalPage } from "@/components/LegalPage";

export const metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      intro="This privacy policy explains how Tahini Baby handles basic customer information."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you place an order, Stripe collects and processes checkout details such as your contact, payment, and delivery information. Tahini Baby may receive order information needed to fulfil your purchase.",
          ],
        },
        {
          heading: "How we use information",
          body: [
            "We use order information to process payments, pack and ship orders, provide customer support, and meet legal record-keeping obligations.",
          ],
        },
        {
          heading: "Third parties",
          body: [
            "We use service providers such as Stripe, Vercel, shipping carriers, and email tools where needed to run the website and fulfil orders.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "For privacy questions, email hello@tahinibaby.com.au.",
          ],
        },
      ]}
    />
  );
}
