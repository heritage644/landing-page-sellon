import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  ChartLineUp,
  Check,
  CheckCircle,
  LockKey,
  Package,
  ShieldCheck,
  ShoppingBag,
  Sparkle,
  Storefront,
  TrendUp,
} from "@phosphor-icons/react/ssr";

const featureCards = [
  {
    title: "A storefront worth sharing",
    description: "Give every product room to shine with a clean shop that feels like your business.",
    icon: Storefront,
    kind: "store",
  },
  {
    title: "A checkout that feels clear",
    description: "Help customers move from browsing to a secure checkout without a long chain of messages.",
    icon: ShieldCheck,
    kind: "checkout",
  },
  {
    title: "Orders in one calm place",
    description: "See new and completed orders together, so you always know what needs your attention.",
    icon: Package,
    kind: "orders",
  },
  {
    title: "Know what is getting noticed",
    description: "Follow store visits and sales, then decide what to feature next with a little more confidence.",
    icon: ChartLineUp,
    kind: "insights",
  },
] as const;

type FeatureKind = (typeof featureCards)[number]["kind"];

export default function FeaturesSection() {
  return (
    <section className="features-section section-space" id="features" aria-labelledby="features-title">
      <div className="page-container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> THE SELLONIT TOOLKIT</p>
          <h2 id="features-title">Everything your store needs to feel ready.</h2>
          <p>Spend less time stitching tools together and more time looking after your products and customers.</p>
        </div>

        <div className="feature-grid">
          {featureCards.map(({ title, description, icon: Icon, kind }, index) => (
            <article
              className={`feature-card feature-card-${kind}`}
              key={kind}
              data-reveal
              data-story
              style={{ "--reveal-order": index } as CSSProperties}
            >
              <div className="feature-copy">
                <span className="feature-icon" aria-hidden="true"><Icon size={22} weight="regular" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <FeatureVisual kind={kind} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ kind }: { kind: FeatureKind }) {
  if (kind === "store") {
    return (
      <div className="feature-visual visual-store" aria-hidden="true">
        <div className="visual-store-top"><span className="visual-brand-dot" /><span className="visual-line visual-line-long" /><span className="visual-line visual-line-short" /></div>
        <div className="visual-store-content">
          <div className="visual-store-copy"><span className="visual-line visual-line-mid" /><span className="visual-line visual-line-short" /><span className="visual-button" /></div>
          <div className="visual-product-art"><ShoppingBag size={37} weight="light" /></div>
        </div>
        <div className="visual-store-foot"><span /><span /><span /></div>
      </div>
    );
  }

  if (kind === "checkout") {
    return (
      <div className="feature-visual visual-checkout" aria-hidden="true">
        <div className="checkout-card">
          <div className="checkout-card-heading"><span className="checkout-lock"><LockKey size={17} weight="regular" /></span><span className="visual-line visual-line-mid" /></div>
          <div className="checkout-product-row"><span className="checkout-thumbnail"><ShoppingBag size={22} weight="light" /></span><span className="visual-line visual-line-long" /><strong>₦28,450</strong></div>
          <div className="checkout-progress"><span /></div>
          <div className="checkout-complete"><CheckCircle size={18} weight="fill" /><span>Order confirmed</span><span className="checkout-sparkle"><Sparkle size={15} weight="fill" /></span></div>
        </div>
      </div>
    );
  }

  if (kind === "orders") {
    return (
      <div className="feature-visual visual-orders" aria-hidden="true">
        <div className="visual-orders-top"><span className="visual-line visual-line-mid" /><span className="orders-filter">This week <ArrowUpRight size={13} /></span></div>
        {["Everyday mini bag", "Market day tote", "Soft form pouch"].map((item, index) => (
          <div className="visual-order-row" key={item}>
            <span className={`visual-order-avatar visual-avatar-${index}`} />
            <span className="visual-order-text"><strong>{item}</strong><span className="visual-line visual-line-short" /></span>
            <span className="visual-order-check"><Check size={12} weight="bold" /></span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="feature-visual visual-insights" aria-hidden="true">
      <div className="visual-insights-top"><span><strong>₦482,750</strong><small>Sample sales</small></span><span className="insights-trend"><TrendUp size={14} /> 6.4%</span></div>
      <div className="visual-chart">
        {[42, 67, 52, 83, 62, 100, 74].map((height, index) => (
          <span className="visual-chart-bar" key={`${height}-${index}`} style={{ "--bar-height": `${height}%`, "--bar-index": index } as CSSProperties} />
        ))}
      </div>
      <div className="visual-chart-labels"><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></div>
    </div>
  );
}
