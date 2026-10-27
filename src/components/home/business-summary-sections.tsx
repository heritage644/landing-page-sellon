import type { CSSProperties } from "react";
import { ArrowUpRight, Buildings, Package, Storefront, UsersThree } from "@phosphor-icons/react/ssr";
import Link from "next/link";

const businessTypes = [
  { title: "Suppliers", description: "You source, make, or distribute products and want to connect with retailers.", href: "/suppliers", icon: Package },
  { title: "Retailers", description: "You want to find products and build a store around what your customers need.", href: "/retailers", icon: Storefront },
  { title: "Entrepreneurs", description: "You’re growing a business and want to organise products and selling activity.", href: "/entrepreneurs", icon: UsersThree },
  { title: "Enterprise businesses", description: "You manage more complex supply, retail, or multi-team operations.", href: "/enterprise", icon: Buildings },
];

export function WhoShouldUseSection() {
  return (
    <section className="who-use-section section-space bg-[#ff8b00]" id="who-its-for" aria-labelledby="who-use-title">
      <div className="page-container">
        <div className="section-heading" data-reveal>
          <h2 id="who-use-title">Whatever your role in selling, there’s a place for you.</h2>
          <p>Sellonit is being built around the people and businesses moving products from supply to customer.</p>
        </div>
        <div className="who-use-grid">
          {businessTypes.map(({ title, description, href, icon: Icon }, index) => (
            <Link className="who-use-card" data-reveal href={href} key={title} style={{ "--reveal-order": index } as CSSProperties}>
              <span className="who-use-icon"><Icon size={22} aria-hidden="true" /></span>
              <span className="who-use-card-index">0{index + 1}</span>
              <strong>{title}</strong>
              <span className="who-use-description">{description}</span>
              <span className="who-use-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
