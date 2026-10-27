import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import ProductCatalogExplorer from "@/components/product-catalog-explorer";
import StorefrontBuilderPreview from "@/components/storefront-builder-preview";
import BusinessAccessPreview from "@/components/business-access-preview";
import type { ProductKind } from "@/components/product-vectors";
import { ProductVector, SupplyFlowVector } from "@/components/product-vectors";
import { MAIN_WEBSITE_URL } from "@/lib/site-links";

export type AudiencePageConfig = {
  eyebrow: string;
  title: string;
  description: string;
  audience: "retailer" | "supplier" | "entrepreneur" | "enterprise";
  highlight: string;
  introTitle: string;
  introCopy: string[];
  features: { title: string; description: string }[];
  closingTitle: string;
  closingCopy: string;
  cta: string;
  ctaHref?: string;
  visual: "catalogue" | "storefront" | "supply" | "access";
  steps?: string[];
};

export default function AudiencePage({ config }: { config: AudiencePageConfig }) {
  const pageId = `audience-${config.audience}`;

  return (
    <>
      <section className={`audience-page-hero audience-page-hero-${config.audience}`} aria-labelledby={`${pageId}-title`}>
        <div className="page-container audience-page-hero-grid">
          <div className="audience-page-hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />{config.eyebrow}</p>
            <h1 id={`${pageId}-title`}>{config.title}</h1>
            <p>{config.description}</p>
            <div className="audience-page-hero-actions">
              <a className="button button-primary" href={MAIN_WEBSITE_URL}>{config.cta}<ArrowUpRight size={17} aria-hidden="true" /></a>
              <Link className="button button-secondary" href="/how-it-works">See How It Works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <span className="product-status-note"><i />{config.highlight}</span>
          </div>
          <div className="audience-page-hero-visual">{renderVisual(config.visual, config.audience)}</div>
        </div>
      </section>

      <section className="audience-page-intro section-space" aria-labelledby={`${pageId}-intro-title`}>
        <div className="page-container audience-page-intro-grid">
          <div className="audience-page-intro-heading">
            <p className="eyebrow"><span className="eyebrow-dot" /> A BETTER WAY TO ORGANISE THE WORK</p>
            <h2 id={`${pageId}-intro-title`}>{config.introTitle}</h2>
          </div>
          <div className="audience-page-intro-copy">
            {config.introCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      {config.steps?.length ? (
        <section className="audience-page-process section-space" aria-labelledby={`${pageId}-process-title`}>
          <div className="page-container">
            <div className="section-heading"><p className="eyebrow"><span className="eyebrow-dot" /> A PRACTICAL STARTING POINT</p><h2 id={`${pageId}-process-title`}>How it can work for you.</h2><p>Illustrative steps. Exact availability depends on the tools released for your business.</p></div>
            <ol className="audience-process-list">{config.steps.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol>
          </div>
        </section>
      ) : null}

      <section className="audience-page-features section-space" aria-labelledby={`${pageId}-features-title`}>
        <div className="page-container">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-dot" /> TOOLS FOR YOUR ROLE</p><h2 id={`${pageId}-features-title`}>Built around the work you do.</h2><p>These capabilities describe the product direction. Availability will depend on the development phase and your business setup.</p></div>
          <div className="audience-page-feature-grid">{config.features.map((feature, index) => <article className="audience-page-feature" key={feature.title}><span className="audience-page-feature-number">0{index + 1}</span><ArrowUpRight size={18} weight="regular" aria-hidden="true" /><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div>
        </div>
      </section>

      {config.audience === "retailer" ? <section className="audience-demo-section section-space"><div className="page-container"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-dot" /> PRODUCT DISCOVERY</p><h2>Browse a sample range.</h2><p>Filter the illustrative product catalogue and select an item to preview its details.</p></div><ProductCatalogExplorer mode="retailer" /></div></section> : null}
      {config.audience === "supplier" ? <section className="audience-demo-section section-space"><div className="page-container"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-dot" /> CATALOGUE MANAGEMENT</p><h2>Keep product details together.</h2><p>Explore a sample supplier catalogue. It contains no live inventory, prices, or retailer data.</p></div><ProductCatalogExplorer mode="supplier" /></div></section> : null}
      {config.audience === "entrepreneur" ? <section className="audience-demo-section section-space"><div className="page-container"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-dot" /> YOUR ONLINE PRESENCE</p><h2>See a storefront concept take shape.</h2><p>Switch between business details, products, and sharing to explore the storefront direction.</p></div><StorefrontBuilderPreview /></div></section> : null}
      {config.audience === "enterprise" ? <section className="audience-demo-section section-space"><div className="page-container"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-dot" /> BUSINESS ACCESS</p><h2>Tools should follow the work.</h2><p>Illustrative role views only. Final access will follow confirmed account and permission rules.</p></div><BusinessAccessPreview /></div></section> : null}

      <section className="audience-page-closing" aria-labelledby={`${pageId}-closing-title`}>
        <div className="page-container audience-page-closing-inner">
          <div><p className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT STEP</p><h2 id={`${pageId}-closing-title`}>{config.closingTitle}</h2><p>{config.closingCopy}</p></div>
          <div className="audience-page-closing-actions"><a className="button button-primary" href={config.ctaHref ?? MAIN_WEBSITE_URL}>{config.cta}<ArrowUpRight size={17} aria-hidden="true" /></a><Link className="audience-secondary-link" href="/about">About Sellonit <ArrowRight size={15} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </>
  );
}

function renderVisual(visual: AudiencePageConfig["visual"], audience: AudiencePageConfig["audience"]) {
  if (visual === "catalogue") return <ProductCatalogExplorer mode={audience === "supplier" ? "supplier" : "retailer"} />;
  if (visual === "storefront") return <StorefrontBuilderPreview />;
  if (visual === "supply") return <div className="audience-vector-card"><SupplyFlowVector className="audience-page-vector" /><span>Supplier-to-retailer concept</span></div>;
  if (visual === "access") return <BusinessAccessPreview />;
  const kind: ProductKind = audience === "supplier" ? "parcel" : audience === "retailer" ? "bag" : "pottery";
  return <div className="audience-vector-card"><ProductVector kind={kind} className="audience-page-vector" /><span>Illustrative product vector</span></div>;
}
