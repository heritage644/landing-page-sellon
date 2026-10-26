import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChartLineUp,
  Check,
  CheckCircle,
  Coffee,
  Drop,
  House,
  Laptop,
  LockKey,
  Package,
  ShieldCheck,
  ShoppingBag,
  Sparkle,
  Star,
  Storefront,
  TShirt,
  TrendUp,
} from "@phosphor-icons/react/ssr";
import HeroAtmosphere from "@/components/hero-atmosphere";
import InteractiveShowcase from "@/components/interactive-showcase";
import { TaglineReveal } from "@/components/landing-motion";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SignupForm from "@/components/signup-form";

const faqItems = [
  {
    question: "Is Sellonit free to start?",
    answer:
      "Yes. You can create a store and add your products on the free plan. There is no card required to get started.",
  },
  {
    question: "Do I need a website before I begin?",
    answer:
      "No. Sellonit gives you a storefront link you can share with customers, so you can start without building a separate website.",
  },
  {
    question: "Can I add and update products later?",
    answer:
      "Yes. Add new products and update names, photos, descriptions, and prices as your collection changes.",
  },
  {
    question: "How do customers find my store?",
    answer:
      "Share your store link through social media, messages, or the places your customers already spend time.",
  },
  {
    question: "Can I manage orders from my phone?",
    answer:
      "The Sellonit workspace is designed to adapt to mobile screens, so you can review your products and orders away from your desk.",
  },
  {
    question: "What can I sell with Sellonit?",
    answer:
      "Sellonit is made for independent businesses. The products you list should follow the platform terms and any rules that apply to your business.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const featureCards = [
  {
    title: "A storefront worth sharing",
    description:
      "Give every product room to shine with a clean shop that feels like your business.",
    icon: Storefront,
    kind: "store",
  },
  {
    title: "A checkout that feels clear",
    description:
      "Help customers move from browsing to a secure checkout without a long chain of messages.",
    icon: ShieldCheck,
    kind: "checkout",
  },
  {
    title: "Orders in one calm place",
    description:
      "See new and completed orders together, so you always know what needs your attention.",
    icon: Package,
    kind: "orders",
  },
  {
    title: "Know what is getting noticed",
    description:
      "Follow store visits and sales, then decide what to feature next with a little more confidence.",
    icon: ChartLineUp,
    kind: "insights",
  },
];

const categories = [
  { label: "Fashion", icon: TShirt },
  { label: "Beauty", icon: Drop },
  { label: "Home goods", icon: House },
  { label: "Food and drink", icon: Coffee },
  { label: "Digital products", icon: Laptop },
];

const steps = [
  {
    number: "01",
    title: "Create your store",
    description: "Choose a name and set up a storefront that feels like your brand.",
  },
  {
    number: "02",
    title: "Add your products",
    description: "Share photos, prices, and the details customers need before they order.",
  },
  {
    number: "03",
    title: "Share your link",
    description: "Send your store to customers and keep every order in one clear place.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader currentPage="home" />

      <main id="main">
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <HeroAtmosphere />
          <div className="hero-inner page-container">
            <div className="hero-copy">
              <p className="hero-kicker">
                <span className="hero-kicker-icon" aria-hidden="true"><Sparkle size={15} weight="fill" /></span>
                A brighter way to sell online
              </p>
              <h1 className="hero-title" id="hero-title">
                <span className="hero-title-line">They’re waiting</span>
                <span className="hero-title-line">for your store.</span>
              </h1>
              <p className="hero-subtitle">
                Bring your products, your brand, and your orders together in one simple storefront made to help your business grow.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#get-started">
                  <span>Get started free</span>
                  <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
                </a>
                <a className="button button-secondary" href="#how-it-works">
                  <span>See how it works</span>
                  <ArrowRight size={17} weight="regular" aria-hidden="true" />
                </a>
              </div>
              <div className="hero-proof" role="group" aria-label="Rated 4.7 out of 5 by more than 2,300 merchants">
                <span className="hero-rating-stars" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} size={16} weight="fill" />)}
                </span>
                <strong className="hero-rating-score">4.7</strong>
                <span className="hero-proof-divider" aria-hidden="true" />
                <span className="hero-proof-copy"><strong>2,300+ merchants</strong><span>rate Sellonit</span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip page-container" aria-label="Store categories supported by Sellonit" data-reveal>
          <div className="trust-strip-heading">
            <p className="eyebrow">MADE FOR WHAT YOU SELL</p>
            <h2>One home for your next big idea.</h2>
          </div>
          <div className="category-list">
            {categories.map(({ label, icon: Icon }) => (
              <div className="category-item" key={label}>
                <Icon size={19} weight="regular" aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

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

        <section className="tagline-section" aria-label="The Sellonit promise" data-reveal>
          <div className="tagline-mark" aria-hidden="true"><span /><span /><span /></div>
          <p className="eyebrow">MORE SELLING. LESS SETUP.</p>
          <TaglineReveal lines={["Spend less time setting up.", "Spend more time growing." ]} />
          <p className="tagline-support">Sellonit gives your business a clear place to grow, one product and one order at a time.</p>
        </section>

        <section className="steps-section section-space" id="how-it-works" aria-labelledby="steps-title">
          <div className="page-container">
            <div className="steps-header" data-reveal>
              <div>
                <p className="eyebrow"><span className="eyebrow-dot" /> A SIMPLE START</p>
                <h2 id="steps-title">Three steps to your first storefront.</h2>
              </div>
              <p>You bring the products. Sellonit brings the pieces together.</p>
            </div>
            <div className="steps-grid">
              {steps.map((step, index) => (
                <article
                  className="step-card"
                  key={step.number}
                  data-reveal
                  style={{ "--reveal-order": index } as CSSProperties}
                >
                  <div className="step-number-row">
                    <span className="step-number">{step.number}</span>
                    {index < steps.length - 1 ? <span className="step-connector" aria-hidden="true" /> : null}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="showcase-section section-space" id="solutions" aria-labelledby="showcase-title">
          <div className="page-container showcase-container" id="showcase">
            <div className="showcase-intro" data-reveal>
              <p className="eyebrow"><span className="eyebrow-dot" /> TAKE A CLOSER LOOK</p>
              <h2 id="showcase-title">Your store and your work, side by side.</h2>
              <p>Switch between the customer storefront, order list, and store activity. The sample workspace shows how Sellonit keeps the day to day in view.</p>
              <ul className="showcase-benefits">
                <li><Check size={17} weight="bold" aria-hidden="true" /> A customer ready storefront</li>
                <li><Check size={17} weight="bold" aria-hidden="true" /> Orders with clear next steps</li>
                <li><Check size={17} weight="bold" aria-hidden="true" /> Useful sample sales insights</li>
              </ul>
              <a className="text-link" href="#get-started">Build your store <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
            <InteractiveShowcase />
          </div>
        </section>

        <section className="pricing-section section-space" id="pricing" aria-labelledby="pricing-title">
          <div className="page-container pricing-layout">
            <div className="pricing-intro" data-reveal>
              <p className="eyebrow"><span className="eyebrow-dot" /> PRICING THAT STARTS SIMPLE</p>
              <h2 id="pricing-title">Start with the essentials.</h2>
              <p>Open your storefront without an upfront plan fee. Keep your focus on getting your products in front of customers.</p>
              <div className="pricing-note"><ShieldCheck size={20} weight="regular" aria-hidden="true" /><span>No card required to get started.</span></div>
            </div>
            <article className="pricing-card" data-reveal style={{ "--reveal-order": 1 } as CSSProperties}>
              <div className="pricing-card-top">
                <div>
                  <span className="pricing-label">SELLONIT STARTER</span>
                  <h3>Free to begin</h3>
                </div>
                <span className="pricing-badge">Start here</span>
              </div>
              <p className="pricing-description">A simple place to build your first shop and make it yours.</p>
              <ul className="pricing-list">
                <li><CheckCircle size={19} weight="fill" aria-hidden="true" /> Your own shareable storefront</li>
                <li><CheckCircle size={19} weight="fill" aria-hidden="true" /> Product and order tools</li>
                <li><CheckCircle size={19} weight="fill" aria-hidden="true" /> A clear view of store activity</li>
              </ul>
              <a className="button button-primary pricing-button" href="#get-started">
                <span>Get started free</span>
                <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
              </a>
              <p className="pricing-footnote">No card needed to create your store.</p>
            </article>
          </div>
        </section>

        <section className="faq-section section-space" id="faq" aria-labelledby="faq-title">
          <div className="page-container faq-layout">
            <div className="faq-intro" data-reveal>
              <p className="eyebrow"><span className="eyebrow-dot" /> GOOD QUESTIONS</p>
              <h2 id="faq-title">A few things worth knowing.</h2>
              <p>Still deciding? Here are the details sellers usually want first.</p>
            </div>
            <div className="faq-list" data-reveal style={{ "--reveal-order": 1 } as CSSProperties}>
              {faqItems.map((item, index) => (
                <details className="faq-item" key={item.question} open={index === 0}>
                  <summary>
                    <span>{item.question}</span>
                    <span className="faq-toggle" aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta-section" id="get-started" aria-labelledby="final-cta-title" data-reveal>
          <div className="cta-glow" aria-hidden="true" />
          <div className="final-cta-inner page-container">
            <div className="final-cta-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT SALE STARTS HERE</p>
              <h2 id="final-cta-title">Give your products a place to grow.</h2>
              <p>Start with a free storefront, add the products you love, and share your link when you are ready.</p>
            </div>
            <SignupForm />
          </div>
        </section>
      </main>

      <SiteFooter currentPage="home" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

type FeatureVisualProps = {
  kind: string;
};

function FeatureVisual({ kind }: FeatureVisualProps) {
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
