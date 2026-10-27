import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { MAIN_WEBSITE_URL } from "@/lib/site-links";

export default function FinalCtaSection() {
  return (
    <section className="final-cta-section " id="get-started" 
    aria-labelledby="final-cta-title" data-reveal >
      <div className="cta-glow" aria-hidden="true" />
      <div className="final-cta-inner page-container">
        <div className="final-cta-copy">
          <h2 id="final-cta-title">Give your products a place to grow.</h2>
          <p>Start with a free storefront, add the products you love, and share your link when you are ready.</p>
        </div>
        <div className="final-cta-action">
          <a className="button button-primary signup-submit" href={MAIN_WEBSITE_URL}>
            <span>Get started free</span>
            <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
          </a>
          <p className="signup-help">No card needed to create your store.</p>
        </div>
      </div>
    </section>
  );
}
