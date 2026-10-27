import { ArrowUpRight, Compass } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { MAIN_WEBSITE_URL } from "@/lib/site-links";

export default function FinalCtaSection() {
  return (
    <section className="final-cta-section product-final-cta" id="get-started" aria-labelledby="final-cta-title" data-reveal>
      <div className="cta-glow" aria-hidden="true" />
      <div className="final-cta-inner page-container">
        <div className="final-cta-copy">
          <h2 id="final-cta-title">Your next chapter in selling starts here.</h2>
          <p>We’re building Sellonit for the people who make commerce happen every day. Join us as we create a better way for Nigerian businesses to sell and grow.</p>
        </div>
        <div className="final-cta-action">
          <a className="button button-primary signup-submit" href={MAIN_WEBSITE_URL}>
            <span>Get Started</span><ArrowUpRight size={18} weight="bold" aria-hidden="true" />
          </a>
          <Link className="button button-secondary signup-submit" href="/about#journey">
            <Compass size={17} aria-hidden="true" /><span>Follow Our Journey</span>
          </Link>
          <p className="signup-help">Sellonit is coming.</p>
        </div>
      </div>
    </section>
  );
}
