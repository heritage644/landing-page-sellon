import type { Metadata } from "next";
import { ArrowUpRight, Compass, Heart, Storefront } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import MarketingPageFrame from "@/components/marketing-page-frame";
import { ProductVector, SupplyFlowVector } from "@/components/product-vectors";

export const metadata: Metadata = {
  title: "About Sellonit | Sellonit",
  description: "Learn why Sellonit is being built for the people who make commerce happen across Nigeria.",
};

export default function AboutPage() {
  return (
    <MarketingPageFrame currentPath="/about">
      <section className="route-hero about-route-hero" aria-labelledby="about-title">
        <div className="page-container route-hero-grid">
          <div className="route-hero-content">
            <p className="eyebrow"><span className="eyebrow-dot" /> ABOUT SELLONIT</p>
            <h1 id="about-title">We’re building for the people who make commerce happen.</h1>
            <p>Businesses across Nigeria sell through social media, messaging apps, referrals, physical shops, and wholesale networks. These channels help businesses reach customers, but running a growing business across them can involve a lot of manual work.</p>
            <p>Sellonit is being built to connect suppliers, retailers, and businesses through a common commerce platform.</p>
            <Link className="button button-primary" href="/contact">Talk to us <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="about-vector-stack" role="group" aria-label="Illustration of Sellonit's commerce community">
            <SupplyFlowVector className="about-supply-vector" />
            <div className="about-product-float"><ProductVector kind="bag" aria-hidden="true" /><span><Storefront size={14} /> Business storefront concept</span></div>
          </div>
        </div>
      </section>
      <section className="about-story-section section-space" id="journey" aria-labelledby="about-story-title">
        <div className="page-container about-story-grid">
          <div><p className="eyebrow"><span className="eyebrow-dot" /> OUR STARTING POINT</p><h2 id="about-story-title">Built around the way Nigerian businesses sell.</h2></div>
          <div className="about-story-copy">
            <p>We want suppliers to have a clearer way to make products available to retailers. We want retailers to have a way to build storefronts and sell products to customers. We want businesses to have better tools for managing their products and understanding their activity.</p>
            <p>Our starting point is the way businesses already work. Sellonit is being built in stages, with the product direction shaped by real business needs as the platform develops.</p>
            <div className="about-values"><span><Heart size={16} aria-hidden="true" /> Built around business needs</span><span><Compass size={16} aria-hidden="true" /> Developing in phases</span></div>
          </div>
        </div>
      </section>
      <section className="about-next-step"><div className="page-container about-next-step-inner"><p>Follow the product as it develops.</p><Link href="/features" className="text-link">Explore Sellonit’s product direction <ArrowUpRight size={15} aria-hidden="true" /></Link></div></section>
    </MarketingPageFrame>
  );
}
