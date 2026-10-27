import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Buildings, ChartLineUp, Package, Storefront, UsersThree } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import BusinessAccessPreview from "@/components/business-access-preview";

const businessTypes = [
  { title: "Suppliers", description: "You manufacture, source, or distribute products and want retailers to sell them.", href: "/suppliers", icon: Package },
  { title: "Retailers", description: "You want to source products and build a storefront for your customers.", href: "/retailers", icon: Storefront },
  { title: "Entrepreneurs", description: "You run a business and want to organise products and establish an online presence.", href: "/entrepreneurs", icon: UsersThree },
  { title: "Growing businesses", description: "You need clearer ways to manage products, people, sales activity, and business information.", href: "/features", icon: ChartLineUp },
  { title: "Enterprise businesses", description: "You operate across supply and retail and need tools suited to more complex operations.", href: "/enterprise", icon: Buildings },
];

export function BusinessManagementSection() {
  return (
    <section className="business-management-section section-space" id="business-dashboard" aria-labelledby="business-management-title">
      <div className="page-container business-management-layout">
        <div className="business-management-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> ONE BUSINESS, ONE CLEARER VIEW</p>
          <h2 id="business-management-title">Keep your business organised as it grows.</h2>
          <p>As a business grows, so do the products, orders, people, and decisions. Sellonit’s business workspace is being developed as a central place for the tools and information available to each business.</p>
          <ul className="business-management-points">
            <li><span />Manage business information.</li>
            <li><span />Access the appropriate tools for your role.</li>
            <li><span />Organise products and selling activity.</li>
            <li><span />Review available business and sales information.</li>
            <li><span />Manage authorised access where supported.</li>
          </ul>
          <Link className="button button-secondary" href="/features">Explore the platform <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="business-management-preview" data-reveal>
          <BusinessAccessPreview />
        </div>
      </div>
    </section>
  );
}

export function WhoShouldUseSection() {
  return (
    <section className="who-use-section section-space" id="who-its-for" aria-labelledby="who-use-title">
      <div className="page-container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> FIND YOUR PLACE</p>
          <h2 id="who-use-title">Whatever your role in selling, there’s a place for you.</h2>
          <p>Sellonit is being built around the different businesses and people who move products from supply to customer.</p>
        </div>
        <div className="who-use-grid">
          {businessTypes.map(({ title, description, href, icon: Icon }, index) => (
            <Link className="who-use-card" data-reveal href={href} key={title} style={{ "--reveal-order": index } as CSSProperties}>
              <span className="who-use-icon"><Icon size={20} aria-hidden="true" /></span>
              <span className="who-use-card-index">0{index + 1}</span>
              <strong>{title}</strong>
              <span className="who-use-description">{description}</span>
              <span className="who-use-arrow"><ArrowUpRight size={16} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
        <div className="who-use-plans" data-reveal>
          <div><span className="who-use-plans-label">NOT SURE WHERE TO START?</span><p>Compare the intended plan categories without assuming a feature set or price that hasn’t been confirmed.</p></div>
          <Link href="/plans" className="text-link">Explore plan direction <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
