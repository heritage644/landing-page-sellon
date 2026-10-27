import { Fragment } from "react";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import HeroStorefrontPreview from "@/components/hero-storefront-preview";
import { MAIN_WEBSITE_URL } from "@/lib/site-links";

const headlineLines = [
  { text: "Your products deserve", tone: "orange" },
  { text: "a store of their own.", tone: "dark" },
] as const;

export default function HeroSection() {
  return (
    <section className="hero-section product-hero" id="top" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-inner page-container">
        <div className="hero-copy">
          <p className="hero-intro-label">INTRODUCING SELLONIT</p>
          <h1 className="hero-title" id="hero-title">
            {headlineLines.map((line) => {
              const words = line.text.split(" ");
              return (
                <span className={`hero-title-line hero-title-line-${line.tone}`} key={line.text}>
                  {words.map((word, index) => (
                    <Fragment key={`${line.text}-${word}`}>
                      <span className="hero-word-mask"><span className="hero-title-word" data-hero-word>{word}</span></span>
                      {index < words.length - 1 ? " " : null}
                    </Fragment>
                  ))}
                </span>
              );
            })}
          </h1>
          <p className="hero-subtitle">
            Sellonit is being built to connect suppliers, retailers, and growing businesses through one platform. Product catalogues, storefronts, and business tools are developing in phases.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={MAIN_WEBSITE_URL}>
              <span>Get Started</span><ArrowUpRight size={18} weight="bold" aria-hidden="true" />
            </a>
            <Link className="button button-secondary" href="/how-it-works">
              <span>See how it works</span><ArrowRight size={17} weight="regular" aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-reassurance">
            <span className="reassurance-item">Business account setup is available; commerce tools are releasing in phases.</span>
          </div>
        </div>

        <div className="hero-visual" data-hero-visual>
          <HeroStorefrontPreview />
        </div>
      </div>
      <div className="hero-footer-note page-container" aria-hidden="true">
        <span className="hero-note-line" />
        <span>YOUR NEXT CHAPTER STARTS HERE</span>
        <span className="hero-note-line" />
      </div>
    </section>
  );
}
