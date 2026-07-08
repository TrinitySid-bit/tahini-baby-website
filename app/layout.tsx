import type { Metadata } from "next";
import {
  Barlow_Semi_Condensed,
  Bebas_Neue,
  Climate_Crisis,
} from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.defaultUrl;
const display = Climate_Crisis({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});
const condensed = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-condensed",
  display: "swap",
});
const body = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tahini Baby | Stone-ground tahini in a squeeze bottle",
    template: "%s | Tahini Baby",
  },
  description:
    "100% sesame seeds. Made in Melbourne. Stone-ground tahini in a no-mess squeeze bottle.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Tahini Baby",
    description:
      "100% sesame seeds. Made in Melbourne. No jar, no mess, just squeeze.",
    url: siteUrl,
    siteName: "Tahini Baby",
    images: [
      {
        url: "/images/tahini-baby-bottle.png",
        width: 340,
        height: 1200,
        alt: "Tahini Baby 350g squeeze bottle",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${condensed.variable} ${body.variable}`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
