import { ArrowRight, Check } from "@phosphor-icons/react/ssr";
import InteractiveShowcase from "@/components/interactive-showcase";
import { MAIN_WEBSITE_URL } from "@/lib/site-links";

export default function ShowcaseSection() {
  return (
    <section className="showcase-section section-space" id="showcase" aria-labelledby="showcase-title">
      <div className="page-container showcase-container">
        <div className="showcase-intro" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> TAKE A CLOSER LOOK</p>
          <h2 id="showcase-title">Your store and your work, side by side.</h2>
          <p>Switch between the customer storefront, order list, and store activity. The sample workspace shows how Sellonit keeps the day to day in view.</p>
          <ul className="showcase-benefits">
            <li><Check size={17} weight="bold" aria-hidden="true" /> A customer ready storefront</li>
            <li><Check size={17} weight="bold" aria-hidden="true" /> Orders with clear next steps</li>
            <li><Check size={17} weight="bold" aria-hidden="true" /> Useful sample sales insights</li>
          </ul>
          <a className="text-link" href={MAIN_WEBSITE_URL}>
            Build your store <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <InteractiveShowcase />
      </div>
    </section>
  );
}
