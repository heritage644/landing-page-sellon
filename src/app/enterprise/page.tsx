import type { Metadata } from "next";
import AudiencePage from "@/components/audience-page";
import MarketingPageFrame from "@/components/marketing-page-frame";
import { enterprisePageContent } from "@/lib/audience-page-content";

export const metadata: Metadata = {
  title: "Enterprise | Sellonit",
  description: "Explore Sellonit’s product direction for businesses managing more complex supplier, retail, and commerce operations.",
};

export default function EnterprisePage() {
  return <MarketingPageFrame currentPath="/enterprise"><AudiencePage config={enterprisePageContent} /></MarketingPageFrame>;
}
