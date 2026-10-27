import type { Metadata } from "next";
import { ArrowUpRight, Package, Storefront, UsersThree } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import HowItWorksSection from "@/components/home/how-it-works-section";
import MarketingPageFrame from "@/components/marketing-page-frame";

export const metadata: Metadata = {
  title: "How Sellonit Works | Sellonit",
  description: "See how Sellonit is being built to connect suppliers, retailers, entrepreneurs, and customers through a connected commerce process.",
};

const roles = [
  { title: "For Suppliers", copy: "Organise products, maintain product information, and make eligible items available to retailers.", icon: Package, href: "/suppliers" },
  { title: "For Retailers", copy: "Select products, organise a retail catalogue, and prepare to present products through a storefront.", icon: Storefront, href: "/retailers" },
  { title: "For Entrepreneurs", copy: "Manage your own product range and build an online presence around your business.", icon: UsersThree, href: "/entrepreneurs" },
];

export default function HowItWorksPage() {
  return (
    <MarketingPageFrame currentPath="/how-it-works">
      <section className="route-hero" aria-labelledby="how-page-title">
        <div className="page-container route-hero-content">
          <p className="eyebrow"><span className="eyebrow-dot" /> THE SELLONIT PROCESS</p>
          <h1 id="how-page-title">A clearer way to connect supply and retail.</h1>
          <p>Sellonit is being developed to connect suppliers, retailers, entrepreneurs, and customers through a commerce process built around product catalogues and online storefronts.</p>
          <Link className="button button-primary" href="/retailers">Find Your Role <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
      <HowItWorksSection />
      <section className="process-roles-section section-space" aria-labelledby="process-roles-title">
        <div className="page-container">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-dot" /> EACH PARTICIPANT HAS A ROLE</p><h2 id="process-roles-title">Bringing the selling process together.</h2><p>The product direction connects each participant through shared product information and the relevant commerce workflows.</p></div>
          <div className="process-role-grid">{roles.map(({ title, copy, icon: Icon, href }) => <Link href={href} className="process-role-card" key={title}><span><Icon size={20} aria-hidden="true" /></span><strong>{title}</strong><p>{copy}</p><ArrowUpRight className="process-role-arrow" size={17} aria-hidden="true" /></Link>)}</div>
          <p className="product-roadmap-note">Order management is in development. Checkout, payment, settlement, and automated fulfilment are future capabilities, not currently available in this preview.</p>
        </div>
      </section>
    </MarketingPageFrame>
  );
}
