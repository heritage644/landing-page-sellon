import { ArrowRight, LinkSimple, Package, Storefront } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import StorefrontBuilderPreview from "@/components/storefront-builder-preview";

const storefrontPoints = [
  { icon: Storefront, title: "A dedicated store", copy: "Present your business and products in one place." },
  { icon: Package, title: "Organised product pages", copy: "Give customers useful product details in a clear format." },
  { icon: LinkSimple, title: "A shareable store link", copy: "Share your storefront through the channels your customers already use." },
];

export default function ShowcaseSection() {
  return (
    <section className="storefront-story-section section-space" id="storefronts" aria-labelledby="storefront-story-title">
      <div className="page-container storefront-story-layout">
        <div className="storefront-story-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> YOUR STOREFRONT</p>
          <h2 id="storefront-story-title">Give customers somewhere to shop.</h2>
          <p>Customers need a convenient way to discover products, understand what you’re selling, and move through the shopping experience.</p>
          <p>Sellonit’s planned storefront tools are intended to help retailers and eligible businesses present products in an organised format. The experience can expand as the relevant shopping and checkout features become available.</p>
          <ul className="storefront-point-list">
            {storefrontPoints.map(({ icon: Icon, title, copy }) => <li key={title}><span><Icon size={18} aria-hidden="true" /></span><div><strong>{title}</strong><p>{copy}</p></div></li>)}
          </ul>
          <Link className="text-link" href="/features#storefronts">Explore storefront tools <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="storefront-story-demo" data-reveal><StorefrontBuilderPreview /></div>
      </div>
      <div className="storefront-roadmap-note page-container"><span className="product-status-dot" /> Storefront creation, customer checkout, and payment capabilities will depend on the relevant release phase.</div>
    </section>
  );
}
