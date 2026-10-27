import type { Metadata } from "next";
import { ArrowUpRight, ChatCircleDots, Storefront } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import ContactFormPreview from "@/components/contact-form-preview";
import MarketingPageFrame from "@/components/marketing-page-frame";

export const metadata: Metadata = {
  title: "Contact Sellonit | Sellonit",
  description: "Ask about Sellonit, supplier participation, retailing, or upcoming product features.",
};

export default function ContactPage() {
  return (
    <MarketingPageFrame currentPath="/contact">
      <section className="route-hero contact-route-hero" aria-labelledby="contact-title">
        <div className="page-container route-hero-content">
          <p className="eyebrow"><span className="eyebrow-dot" /> CONTACT SELLONIT</p>
          <h1 id="contact-title">Let’s talk about your business.</h1>
          <p>Have questions about Sellonit, supplier participation, retailing, or upcoming features? Share a little about what you’re looking for.</p>
        </div>
      </section>
      <section className="contact-content-section section-space">
        <div className="page-container contact-layout">
          <div className="contact-aside"><span className="contact-aside-icon"><ChatCircleDots size={21} aria-hidden="true" /></span><h2>Start with what matters to you.</h2><p>Tell us how your business works and what you want to learn about. This contact form is a design preview and will be connected to a confirmed message endpoint before launch.</p><div className="contact-aside-points"><span><Storefront size={16} aria-hidden="true" /> Supplier and retailer participation</span><span><ArrowUpRight size={16} aria-hidden="true" /> Product and feature questions</span></div><Link className="contact-aside-link" href="/about">Learn about Sellonit</Link></div>
          <ContactFormPreview />
        </div>
      </section>
    </MarketingPageFrame>
  );
}
