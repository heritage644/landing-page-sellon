import type { Metadata } from "next";
import AudiencePage from "@/components/audience-page";
import MarketingPageFrame from "@/components/marketing-page-frame";
import { retailerPageContent } from "@/lib/audience-page-content";

export const metadata: Metadata = {
  title: "For Retailers | Sellonit",
  description: "Discover products from participating suppliers, build a retail catalogue, and prepare a storefront with Sellonit.",
};

export default function RetailersPage() {
  return <MarketingPageFrame currentPath="/retailers"><AudiencePage config={retailerPageContent} /></MarketingPageFrame>;
}
