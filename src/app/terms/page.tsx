import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms | Sellonit",
  description: "Terms information for the Sellonit landing page preview.",
};

export default function TermsPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader currentPage="terms" />
      <main className="legal-main" id="main">
        <div className="legal-page page-container">
          <p className="eyebrow"><span className="eyebrow-dot" /> SELLONIT</p>
          <h1>Terms of use</h1>
          <p className="legal-updated">Last updated October 2026</p>
          <div className="legal-content">
            <p className="legal-lead">These starter terms describe the Sellonit landing page preview only.</p>
            <section>
              <h2>Using this preview</h2>
              <p>This page is provided to demonstrate a possible Sellonit storefront and seller workspace. It does not create a seller account, accept an order, process a payment, or submit the email entered into the preview form.</p>
            </section>
            <section>
              <h2>Sample interface and figures</h2>
              <p>Names, products, prices, order details, and activity figures shown in the product previews are examples. They do not describe actual sellers, customers, sales, or platform results.</p>
            </section>
            <section>
              <h2>Terms for a live service</h2>
              <p>A live Sellonit service needs complete terms covering account access, seller responsibilities, product rules, payments, fees, cancellations, and dispute handling. The Sellonit operator should review and publish those terms before launch.</p>
            </section>
            <Link className="text-link legal-home-link" href="/">Return to Sellonit <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </main>
      <SiteFooter currentPage="terms" />
    </>
  );
}
