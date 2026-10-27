import type { Metadata } from "next";
import AudiencePage from "@/components/audience-page";
import MarketingPageFrame from "@/components/marketing-page-frame";
import { supplierPageContent } from "@/lib/audience-page-content";

export const metadata: Metadata = {
  title: "For Suppliers | Sellonit",
  description: "Organise product catalogues, wholesale pricing, and availability for retailers through Sellonit’s supplier product direction.",
};

export default function SuppliersPage() {
  return <MarketingPageFrame currentPath="/suppliers"><AudiencePage config={supplierPageContent} /></MarketingPageFrame>;
}
