import type { Metadata } from "next";
import AudiencePage from "@/components/audience-page";
import MarketingPageFrame from "@/components/marketing-page-frame";
import { entrepreneurPageContent } from "@/lib/audience-page-content";

export const metadata: Metadata = {
  title: "For Entrepreneurs | Sellonit",
  description: "Organise products and explore an online storefront concept designed around the way Nigerian businesses sell.",
};

export default function EntrepreneursPage() {
  return <MarketingPageFrame currentPath="/entrepreneurs"><AudiencePage config={entrepreneurPageContent} /></MarketingPageFrame>;
}
