import type { Metadata } from "next";
import localFont from "next/font/local";
import { MotionController } from "@/components/landing-motion";
import "./globals.css";

const geistSans = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const siteTitle = "Sellonit | Your online store, made simple";
const siteDescription = "Create a storefront, add your products, and manage orders in one place with Sellonit.";
const themeInitScript = `(()=>{try{const saved=localStorage.getItem("sellonit-theme");const theme=saved==="dark"||saved==="light"?saved:(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",theme)}catch(_){}})()`;

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
        alt: "Sellonit helps independent sellers build a storefront and manage orders.",
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
    <html lang="en" data-theme="light" suppressHydrationWarning className={geistSans.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <MotionController />
        {children}
      </body>
    </html>
  );
}
