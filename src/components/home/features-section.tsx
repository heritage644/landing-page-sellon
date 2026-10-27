import { ArrowUpRight, Buildings, ChartLineUp, CreditCard, Package, Storefront, UsersThree, Warehouse } from "@phosphor-icons/react/ssr";
import Link from "next/link";

const capabilities = [
  {
    id: "business-accounts",
    title: "Business accounts and access",
    description: "The current account experience covers registration, authentication, business setup, business types, membership, and permissions. Product tools depend on your role and release phase.",
    icon: Buildings,
    status: "Current account experience",
  },
  {
    id: "product-management",
    title: "Product management",
    description: "Organise product details and maintain catalogues for the products your business supplies or sells. Product workflows will follow the business role and rules.",
    icon: Package,
    status: "In development",
  },
  {
    id: "supplier-retailer",
    title: "Supplier and retailer connection",
    description: "Connect supplier product catalogues with retailers who want to sell those products, subject to availability and each supplier’s rules.",
    icon: UsersThree,
    status: "Product direction",
  },
  {
    id: "storefronts",
    title: "Online storefronts",
    description: "Give eligible businesses a dedicated online place to present products and share a consistent experience with customers.",
    icon: Storefront,
    status: "In development",
  },
  {
    id: "orders",
    title: "Orders and payments",
    description: "The wider product plan includes online checkout, payment integrations, order management, and transaction workflows. Available methods depend on releases.",
    icon: CreditCard,
    status: "Planned capabilities",
  },
  {
    id: "business-analytics",
    title: "Business analytics",
    description: "Review available sales, product, and order information through analytics designed around your business type and available data.",
    icon: ChartLineUp,
    status: "In development",
  },
  {
    id: "fulfilment",
    title: "Fulfilment and settlement",
    description: "The wider roadmap includes coordinating fulfilment and supplier, retailer, and payment settlement responsibilities as operational rules and integrations are defined.",
    icon: Warehouse,
    status: "Future direction",
  },
];

export default function FeaturesSection() {
  return (
    <>
      <section className="features-page-hero" aria-labelledby="features-page-title">
        <div className="page-container features-page-hero-content">
          <p className="eyebrow"><span className="eyebrow-dot" /> THE SELLONIT PLATFORM</p>
          <h1 id="features-page-title">The tools behind your selling process.</h1>
          <p>From product catalogues to online storefronts and business analytics, Sellonit is being built to support the different activities involved in selling online.</p>
          <div className="features-hero-links"><Link href="/how-it-works">See how it works <ArrowUpRight size={15} aria-hidden="true" /></Link><span>Capabilities release in phases.</span></div>
        </div>
      </section>
      <section className="features-page-section section-space" id="features" aria-labelledby="features-grid-title">
        <div className="page-container">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-dot" /> PRODUCT CAPABILITIES</p><h2 id="features-grid-title">A connected commerce workspace.</h2><p>Each feature depends on a clear business role, data rules, and the development phase in which it becomes available.</p></div>
          <div className="features-page-grid">
            {capabilities.map(({ id, title, description, icon: Icon, status }, index) => (
              <article className="features-page-card" id={id} key={id}>
                <div className="features-page-card-top"><span className="features-page-icon"><Icon size={20} aria-hidden="true" /></span><span className="features-page-index">0{index + 1}</span></div>
                <span className="features-page-status"><i />{status}</span>
                <h2>{title}</h2>
                <p>{description}</p>
                <span className="features-page-arrow"><ArrowUpRight size={16} aria-hidden="true" /></span>
              </article>
            ))}
          </div>
          <div className="features-roadmap-callout"><span className="features-roadmap-mark">i</span><p>Feature descriptions explain Sellonit’s product direction. They should not be read as a promise that every workflow is currently available.</p><Link href="/contact">Ask a product question <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </>
  );
}
