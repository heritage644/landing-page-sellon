import type { CSSProperties } from "react";
import { ArrowUpRight, CheckCircle, ShieldCheck } from "@phosphor-icons/react/ssr";
import { MAIN_WEBSITE_URL } from "@/lib/site-links";

export default function PricingSection() {
  return (
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
          <a className="button button-primary pricing-button" href={MAIN_WEBSITE_URL}>
            <span>Get started free</span>
            <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
          </a>
          <p className="pricing-footnote">No card needed to create your store.</p>
        </article>
      </div>
    </section>
  );
}
