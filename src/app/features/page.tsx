import type { Metadata } from "next";
import FeaturesSection from "@/components/home/features-section";
import MarketingPageFrame from "@/components/marketing-page-frame";

export const metadata: Metadata = {
  title: "Features | Sellonit",
  description: "Explore Sellonit’s product direction across business accounts, product catalogues, storefronts, orders, analytics, and fulfilment.",
};

export default function FeaturesPage() {
  return <MarketingPageFrame currentPath="/features"><FeaturesSection /></MarketingPageFrame>;
}
