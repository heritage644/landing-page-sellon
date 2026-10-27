import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import HeroWorkspacePreview from "@/components/hero-workspace-preview";
import { MAIN_WEBSITE_URL } from "@/lib/site-links";

const headlineLines = ["Sell more.", "Manage better.", "Grow your", "business."];

export default function HeroSection() {
  return (
    <section className="hero-section product-hero" id="top" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-inner page-container">
        <div className="hero-copy">
          <p className="hero-kicker"><span className="hero-kicker-icon" aria-hidden="true">✳</span> THE FUTURE OF SELLING IN NIGERIA</p>
          <h1 className="hero-title" id="hero-title">
            {headlineLines.map((line, lineIndex) => (
              <span className={`hero-title-line${lineIndex >= 2 ? " is-accent" : ""}`} key={line}>
                {line.split(" ").map((word) => (
                  <span className="hero-word-mask" key={`${line}-${word}`}>
                    <span className="hero-title-word" data-hero-word>{word}</span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero-subtitle">
            Sellonit is being built to connect suppliers, retailers, and growing businesses through one platform. Explore products, prepare a storefront, and bring order and business activity into clearer view as those tools become available.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={MAIN_WEBSITE_URL}>
              <span>Get Started</span><ArrowUpRight size={18} weight="bold" aria-hidden="true" />
            </a>
            <Link className="button button-secondary" href="/how-it-works">
              <span>Explore Sellonit</span><ArrowRight size={17} weight="regular" aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-reassurance">
            <span className="reassurance-item">Built for the way Nigerian businesses sell.</span>
          </div>
          <div className="hero-role-line" aria-label="Connecting suppliers, retailers, and customers">
            <span>Suppliers</span><i aria-hidden="true" />
            <span>Retailers</span><i aria-hidden="true" />
            <span>Customers</span>
          </div>
        </div>

        <div className="hero-visual" data-hero-visual>
          <HeroWorkspacePreview />
        </div>
      </div>
      <div className="hero-footer-note page-container" aria-hidden="true">
        <span className="hero-note-line" />
        <span>ONE PLATFORM. EVERY PART OF SELLING.</span>
        <span className="hero-note-line" />
      </div>
    </section>
  );
}
