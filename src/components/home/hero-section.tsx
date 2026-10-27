import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle,
  LockKey,
  ShoppingBag,
  Storefront,
} from "@phosphor-icons/react/ssr";
import { MAIN_WEBSITE_URL } from "@/lib/site-links";

export default function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-inner page-container">
        <div className="hero-copy">
          <h1 className="hero-title flex flex-col gap-5" id="hero-title">
            <div className="w-full ">
              <span className="hero-title-line text-black  ">
              <span className="hero-word-mask"><span className="hero-title-word " data-hero-word>Your</span></span>{" "}
              <span className="hero-word-mask"><span className="hero-title-word" data-hero-word>products</span></span>{" "}
              <span className="hero-word-mask"><span className="hero-title-word" data-hero-word>deserve</span></span>{" "}
              <span className="hero-word-mask"><span className="" data-hero-word>a</span></span>{" "}
              <span className="hero-word-mask"><span className="" data-hero-word>store</span></span>{" "}
            </span>
            </div>
            <span className="hero-title-line text-[#FF8B00] bg-black ">
              
              <span className="hero-word-mask"><span className="hero-title-word" data-hero-word>of</span></span>{" "}
              <span className="hero-word-mask"><span className="hero-title-word" data-hero-word>their</span></span>{" "}
              <span className="hero-word-mask"><span className="hero-title-word" data-hero-word>own.</span></span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Set up a polished storefront, add your products, and manage incoming orders from one simple place.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={MAIN_WEBSITE_URL}>
              <span>Get started free</span>
              <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#how-it-works">
              <span>See how it works</span>
              <ArrowRight size={17} weight="regular" aria-hidden="true" />
            </a>
          </div>
          <div className="hero-reassurance">
            <span className="reassurance-item"><CheckCircle size={17} weight="fill" aria-hidden="true" /> Free to start</span>
            <span className="reassurance-divider" aria-hidden="true" />
            <span className="reassurance-item"><CheckCircle size={17} weight="fill" aria-hidden="true" /> No card needed</span>
          </div>
        </div>

        <div className="hero-visual" data-hero-visual>
          <HeroStorePreview />
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

function HeroStorePreview() {
  return (
    <div className="hero-store-stage">
      <div className="hero-store-backdrop" aria-hidden="true" />
      <div className="store-preview-card">
        <div className="store-browser-bar" aria-hidden="true">
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-dot" />
          <div className="store-address"><LockKey size={12} weight="regular" /> sample storefront preview</div>
        </div>
        <div className="storefront-page">
          <div className="storefront-nav">
            <div className="sample-store-name">naya <span>studio</span></div>
            <div className="sample-store-links"><span>Shop</span><span>Our story</span></div>
            <span className="sample-bag-icon" aria-hidden="true"><ShoppingBag size={18} weight="regular" /></span>
          </div>
          <div className="hero-product-image">
            <span className="hero-photo-shimmer" aria-hidden="true" />
            <Image
              src="/featured-product.jpg"
              alt="Burnt orange leather crossbody bag in the sample Naya Studio storefront"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 42vw"
              className="product-image"
            />
            <span className="product-image-label">Made for everyday</span>
          </div>
          <div className="hero-product-details">
            <div>
              <span className="product-kicker">THE EVERYDAY EDIT</span>
              <h2>Everyday mini bag</h2>
              <p>Hand finished. Made to go everywhere.</p>
            </div>
            <div className="product-buy-column">
              <strong>₦28,450</strong>
              <span className="product-buy-button">Shop now <ArrowUpRight size={14} weight="bold" /></span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-order-card">
        <span className="order-confirm-icon"><Check size={17} weight="bold" aria-hidden="true" /></span>
        <div className="hero-order-copy">
          <strong>Sample order received</strong>
          <span>Everyday mini bag · Just now</span>
        </div>
        <span className="hero-order-price">₦28,450</span>
      </div>

      <div className="hero-store-link-card">
        <span className="store-link-icon"><Storefront size={19} weight="regular" aria-hidden="true" /></span>
        <div><span>Your storefront</span><strong>Ready to share</strong></div>
        <ArrowUpRight size={17} weight="regular" aria-hidden="true" />
      </div>
    </div>
  );
}
