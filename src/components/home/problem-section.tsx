import type { CSSProperties } from "react";
import { ArrowRight, ChatCircleDots, ClipboardText, Storefront } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { ProductVector } from "@/components/product-vectors";

const problemCards = [
  {
    icon: ClipboardText,
    title: "Your products",
    copy: "Keep product information organised so customers and retailers can find what they need.",
  },
  {
    icon: Storefront,
    title: "Your store",
    copy: "Give customers a dedicated place to browse your products and learn about your business.",
  },
  {
    icon: ChatCircleDots,
    title: "Your business activity",
    copy: "Bring product, order, and business information into clearer view as Sellonit’s tools become available.",
  },
];

export default function ProblemSection() {
  return (
    <section className=" bg-[#3FBFFF] section-space" id="the-problem" aria-labelledby="problem-title">
      <div className="page-container">
        <div className="problem-intro" data-reveal>
          <h2 id="problem-title">Running a business involves more than making sales <span className="text-orange-400">.</span></h2>
          <p className="text-black">Many Nigerian businesses 
            sell through WhatsApp, Instagram, referrals,
             and physical shops. As the business grows,
              keeping everything organised can become harder.</p>
        </div>

        <div className="problem-story-grid">
          <div className="problem-channel-card" data-reveal>
            <div className="problem-channel-heading">
              <span className="problem-channel-icon"><ChatCircleDots size={19} aria-hidden="true" /></span>
              <span><strong>The day-to-day, in many places</strong><small>An illustration of a familiar workflow</small></span>
            </div>
            <div className="problem-chat-stack" aria-label="Illustration of product and order messages across channels">
              <div className="problem-message is-customer"><span>Hi, is this bag available?</span><small>WhatsApp · 10:14</small></div>
              <div className="problem-message is-seller"><span>Let me check the supplier stock.</span><small>Instagram · 10:21</small></div>
              <div className="problem-message is-note"><span>Remember to update the product list</span><small>Notes · later</small></div>
            </div>
            <div className="problem-product-strip">
              <ProductVector kind="bag" className="problem-product-art" aria-hidden="true" />
              <span><strong>One product, several conversations.</strong><small>Product visuals are illustrative.</small></span>
              <ArrowRight size={17} aria-hidden="true" />
            </div>
          </div>

          <div className="problem-copy-block">
            <p>Products sit in chat messages. Customers ask for prices repeatedly. Orders arrive through different channels, and sellers have to keep track of what has been sold and what remains available.</p>
            <p>When retailers depend on suppliers, there is another challenge: finding the right products, understanding the selling price, and managing customer orders.</p>
            <p className="problem-emphasis">Sellonit is being built to help businesses bring these parts of selling into one place.</p>
            <Link href="/how-it-works" className="text-link">See how Sellonit fits together <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>

      </div>
    </section>
  );
}
