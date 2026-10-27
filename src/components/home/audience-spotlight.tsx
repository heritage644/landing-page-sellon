import { ArrowRight, ArrowUpRight, Check } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import BusinessAccessPreview from "@/components/business-access-preview";
import ProductCatalogExplorer from "@/components/product-catalog-explorer";
import StorefrontBuilderPreview from "@/components/storefront-builder-preview";

type Audience = "retailer" | "supplier" | "entrepreneur";

type AudienceConfig = {
  label: string;
  title: string;
  paragraphs: string[];
  features: { title: string; description: string }[];
  cta: string;
  route: string;
  artworkLabel: string;
};

const content: Record<Audience, AudienceConfig> = {
  retailer: {
    label: "BUILT FOR RETAILERS",
    title: "Start selling products without stocking everything yourself.",
    paragraphs: [
      "You don’t have to manufacture products to build a retail business. Sellonit is being built to help retailers discover products from participating suppliers and choose what to present through their own storefronts.",
      "Focus on your customers, choose suitable selling prices within the applicable rules, and grow your retail brand while working with suppliers for product supply.",
    ],
    features: [
      { title: "Discover products", description: "Explore participating supplier catalogues and find products that suit your market." },
      { title: "Choose your selling price", description: "Set retail prices within the applicable product and business rules." },
      { title: "Build your storefront", description: "Create a dedicated online space where customers can browse the products you sell." },
      { title: "Manage your catalogue", description: "Keep selected products organised in one place." },
      { title: "Track your business", description: "Use dashboard and analytics tools as they become available." },
    ],
    cta: "Explore Retailer Tools",
    route: "/retailers",
    artworkLabel: "Interactive sample product catalogue",
  },
  supplier: {
    label: "BUILT FOR SUPPLIERS",
    title: "Get your products in front of more retailers.",
    paragraphs: [
      "Sellonit is being built to help suppliers maintain product catalogues, define wholesale prices, manage product availability, and connect their products with retailers.",
      "Keep your product information together and prepare for a clearer way to work with retailers as the supplier tools are released.",
    ],
    features: [
      { title: "Manage your catalogue", description: "Organise product names, descriptions, images, SKUs, and relevant details." },
      { title: "Set wholesale prices", description: "Define supplier pricing, subject to your business rules." },
      { title: "Manage inventory", description: "Maintain stock and availability information for retailers to review." },
      { title: "Work with retailers", description: "Make eligible products available to participating retailers." },
      { title: "Monitor activity", description: "Review relevant product, order, and sales information as the dashboard develops." },
    ],
    cta: "Explore Supplier Tools",
    route: "/suppliers",
    artworkLabel: "Interactive sample supplier catalogue",
  },
  entrepreneur: {
    label: "BUILT FOR ENTREPRENEURS",
    title: "Give your business a proper place online.",
    paragraphs: [
      "Whether you sell fashion, beauty products, electronics, food items, or other goods, your business needs a way to present its products and manage daily activity.",
      "Sellonit is being built to help entrepreneurs organise products, create an online storefront, and manage selling activities without assembling every part of the process themselves.",
    ],
    features: [
      { title: "Bring products together", description: "Organise the products you sell in one catalogue." },
      { title: "Create your storefront", description: "Give customers a dedicated place to discover your business and products." },
      { title: "Manage business details", description: "Keep relevant business information and settings together." },
      { title: "Understand your progress", description: "Use available analytics to monitor business activity over time." },
    ],
    cta: "Explore Entrepreneur Tools",
    route: "/entrepreneurs",
    artworkLabel: "Interactive storefront concept",
  },
};

export function AudienceSpotlight({ audience, id }: { audience: Audience; id: string }) {
  const item = content[audience];

  return (
    <section className={`audience-spotlight audience-spotlight-${audience} section-space`} id={id} aria-labelledby={`${id}-title`}>
      <div className="page-container audience-spotlight-layout">
        <div className="audience-spotlight-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" />{item.label}</p>
          <h2 id={`${id}-title`}>{item.title}</h2>
          {item.paragraphs.map((paragraph) => <p className="audience-description" key={paragraph}>{paragraph}</p>)}
          <ul className="audience-feature-list">
            {item.features.map((feature) => (
              <li key={feature.title}><span className="audience-feature-check"><Check size={13} weight="bold" aria-hidden="true" /></span><span><strong>{feature.title}</strong><small>{feature.description}</small></span></li>
            ))}
          </ul>
          <div className="audience-actions">
            <Link className="button button-primary" href={item.route}>{item.cta}<ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="audience-secondary-link" href="/how-it-works">How it works <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
          <p className="product-roadmap-note">The exact tools and workflows depend on product releases and your business eligibility.</p>
        </div>
        <div className="audience-spotlight-visual" data-reveal>
          <div className="audience-visual-caption"><span className="audience-visual-caption-dot" />{item.artworkLabel}</div>
          {audience === "retailer" ? <ProductCatalogExplorer mode="retailer" /> : null}
          {audience === "supplier" ? <ProductCatalogExplorer mode="supplier" /> : null}
          {audience === "entrepreneur" ? <StorefrontBuilderPreview /> : null}
        </div>
      </div>
    </section>
  );
}

export function EnterpriseSpotlight() {
  return (
    <section className="enterprise-spotlight section-space" id="for-enterprise" aria-labelledby="enterprise-spotlight-title">
      <div className="page-container enterprise-spotlight-layout">
        <div className="enterprise-spotlight-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> BUILT FOR ENTERPRISE</p>
          <h2 id="enterprise-spotlight-title">One business may have several sides to manage.</h2>
          <p>Sellonit’s enterprise direction is designed for businesses that supply retailers, sell directly to customers, or operate through multiple teams and business units.</p>
          <p>Supplier, retail, and business-management capabilities are being developed within a shared structure, with access designed to follow each user’s role and permissions.</p>
          <Link className="button button-secondary" href="/enterprise">Explore Enterprise <ArrowRight size={16} aria-hidden="true" /></Link>
          <span className="product-roadmap-note">Plan limits, features, and pricing will be confirmed before publication.</span>
        </div>
        <div className="enterprise-spotlight-visual" data-reveal>
          <BusinessAccessPreview />
        </div>
      </div>
    </section>
  );
}
