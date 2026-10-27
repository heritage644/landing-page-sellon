import type { CSSProperties } from "react";
import { ArrowUpRight, Buildings, Package, Storefront, UsersThree } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { ProductVector, SupplyFlowVector } from "@/components/product-vectors";

type Role = {
  id: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  graphic: "supplier" | "retailer" | "entrepreneur" | "enterprise";
  icon: typeof Package;
};

const roles: Role[] = [
  {
    id: "suppliers",
    title: "Suppliers",
    description: "Organise your product catalogue and make eligible products available to retailers.",
    link: "/suppliers",
    linkLabel: "Explore Supplier Tools",
    graphic: "supplier",
    icon: Package,
  },
  {
    id: "retailers",
    title: "Retailers",
    description: "Discover products to sell, shape your own catalogue, and build a storefront for customers.",
    link: "/retailers",
    linkLabel: "Explore Retailer Tools",
    graphic: "retailer",
    icon: Storefront,
  },
  {
    id: "entrepreneurs",
    title: "Entrepreneurs",
    description: "Bring your own products online and organise your business in one place.",
    link: "/entrepreneurs",
    linkLabel: "Explore Entrepreneur Tools",
    graphic: "entrepreneur",
    icon: UsersThree,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Explore a business structure designed around more complex supplier and retail operations.",
    link: "/enterprise",
    linkLabel: "Explore Enterprise",
    graphic: "enterprise",
    icon: Buildings,
  },
];

export default function PlatformRolesSection() {
  return (
    <section className="platform-roles-section section-space" id="roles" aria-labelledby="roles-title">
      <div className="page-container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> INTRODUCING SELLONIT</p>
          <h2 id="roles-title">One platform for the people behind every sale.</h2>
          <p>Suppliers can provide products for retailers to sell, retailers can create their own storefronts, and businesses can manage their selling activities from a central workspace as those tools are released.</p>
        </div>
        <div className="role-card-grid">
          {roles.map(({ id, title, description, link, linkLabel, graphic, icon: Icon }, index) => (
            <Link className="role-card" data-reveal href={link} key={id} style={{ "--reveal-order": index } as CSSProperties}>
              <div className="role-card-topline"><span className="role-card-icon"><Icon size={19} aria-hidden="true" /></span><span className="role-card-index">0{index + 1}</span></div>
              <div className={`role-card-visual role-visual-${graphic}`} aria-hidden="true">
                {graphic === "supplier" ? <SupplyFlowVector className="role-supply-vector" /> : null}
                {graphic === "retailer" ? <ProductVector kind="bag" className="role-product-vector" /> : null}
                {graphic === "entrepreneur" ? <ProductVector kind="pottery" className="role-product-vector" /> : null}
                {graphic === "enterprise" ? <ProductVector kind="parcel" className="role-product-vector" /> : null}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="role-card-link">{linkLabel}<ArrowUpRight size={15} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
        <p className="product-status-note"><span className="product-status-dot" /> Sellonit is being developed in phases. Specific tools depend on product releases and business eligibility.</p>
      </div>
    </section>
  );
}
