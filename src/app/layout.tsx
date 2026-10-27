import type { Metadata } from "next";
import localFont from "next/font/local";
import { MotionController } from "@/components/landing-motion";
import "./globals.css";
import "./marketing.css";

const geistSans = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const siteTitle = "Sellonit | A better way for businesses to sell";
const siteDescription = "Sellonit is being built to connect Nigerian suppliers, retailers, and businesses through a clearer commerce experience.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://sellonit.com"),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Sellonit",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    siteName: "Sellonit",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Sellonit is building commerce tools for suppliers, retailers, and Nigerian businesses.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <MotionController />
        {children}
      </body>
    </html>
  );
}
