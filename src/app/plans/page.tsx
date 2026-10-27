import type { Metadata } from "next";
import { ArrowUpRight, Buildings, Storefront, UsersThree, User } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import MarketingPageFrame from "@/components/marketing-page-frame";

export const metadata: Metadata = {
  title: "Plans | Sellonit",
  description: "Explore the intended Sellonit plan categories for entrepreneurs, retailers, enterprise businesses, and Enterprise Plus.",
};

const plans = [
  { title: "Entrepreneur", audience: "For people running a business around their own products.", description: "Organise products, establish a storefront, and manage your business through the relevant Sellonit features.", icon: User, href: "/entrepreneurs", cta: "Explore Entrepreneur" },
  { title: "Retailer", audience: "For people selling products sourced from suppliers.", description: "Discover available products, build a retail catalogue, and prepare to sell through a storefront.", icon: Storefront, href: "/retailers", cta: "Explore Retailer" },
  { title: "Enterprise", audience: "For businesses managing supplier and retail operations.", description: "Use the supplier, retail, and business-management capabilities available to your organisation.", icon: Buildings, href: "/enterprise", cta: "Explore Enterprise" },
  { title: "Enterprise Plus", audience: "For businesses with broader operational requirements.", description: "Explore the expanded capabilities intended for businesses that need a wider enterprise setup.", icon: UsersThree, href: "/contact", cta: "Contact Us" },
];

const choiceQuestions = [
  "Do you sell your own products, source products from suppliers, or do both?",
  "Do you need a storefront for direct sales to customers?",
  "Do you manage supplier and retail operations across a larger business?",
];

export default function PlansPage() {
  return (
    <MarketingPageFrame currentPath="/plans">
      <section className="route-hero plans-route-hero" aria-labelledby="plans-title">
        <div className="page-container route-hero-content">
          <p className="eyebrow"><span className="eyebrow-dot" /> SELLONIT PLANS</p>
          <h1 id="plans-title">Find the right setup for your business.</h1>
          <p>Your needs depend on what you sell, how you source products, and how you manage your business. Sellonit is designed to support different business types through role-appropriate tools and access.</p>
          <span className="plan-status-note">Plan categories shown for product direction · Feature matrix and pricing are not final.</span>
        </div>
      </section>
      <section className="plans-directory-section section-space" aria-labelledby="plans-directory-title">
        <div className="page-container">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-dot" /> INTENDED PLAN CATEGORIES</p><h2 id="plans-directory-title">A starting point for different kinds of business.</h2><p>No pricing or entitlements are listed until the commercial and technical rules are confirmed.</p></div>
          <div className="plans-directory-grid">{plans.map(({ title, audience, description, icon: Icon, href, cta }, index) => <article className="plan-direction-card" key={title}><div className="plan-direction-top"><span className="plan-direction-icon"><Icon size={20} aria-hidden="true" /></span><span className="plan-direction-index">0{index + 1}</span></div><span className="plan-direction-audience">{audience}</span><h3>{title}</h3><p>{description}</p><Link href={href}>{cta}<ArrowUpRight size={15} aria-hidden="true" /></Link></article>)}</div>
        </div>
      </section>
      <section className="help-choose-section section-space" aria-labelledby="help-choose-title">
        <div className="page-container help-choose-grid"><div><p className="eyebrow"><span className="eyebrow-dot" /> HELP ME CHOOSE</p><h2 id="help-choose-title">Not sure which plan fits your business?</h2><p>Think about how your business works and what you want to do on Sellonit. Recommendations should follow actual eligibility rules, not just a preferred plan name.</p><Link className="button button-secondary" href="/contact">Tell us about your business <ArrowUpRight size={15} aria-hidden="true" /></Link></div><ol>{choiceQuestions.map((question, index) => <li key={question}><span>0{index + 1}</span><p>{question}</p></li>)}</ol></div>
      </section>
      <div className="plans-note page-container"><strong>Product decision:</strong> Enterprise and Enterprise Plus differences should be defined by actual feature access, business limits, support arrangements, and pricing before publication.</div>
    </MarketingPageFrame>
  );
}
