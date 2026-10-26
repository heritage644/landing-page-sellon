import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy | Sellonit",
  description: "Privacy information for the Sellonit landing page preview.",
};

export default function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader currentPage="privacy" />
      <main className="legal-main" id="main">
        <div className="legal-page page-container">
          <p className="eyebrow"><span className="eyebrow-dot" /> SELLONIT</p>
          <h1>Privacy notice</h1>
          <p className="legal-updated">Last updated October 2026</p>
          <div className="legal-content">
            <p className="legal-lead">This notice describes what happens when you use the Sellonit landing page preview.</p>
            <section>
              <h2>Information in this preview</h2>
              <p>The email field on this page checks the format of an address in your browser. It does not send, collect, or store your email address. The page does not create an account or process a payment.</p>
            </section>
            <section>
              <h2>Information collected by a live service</h2>
              <p>A live Sellonit service may need information to create and manage seller accounts, storefronts, orders, and support requests. This preview does not include those account or payment services. A complete privacy notice should explain what information a live service collects, why it uses it, how long it keeps it, and how to contact the service operator.</p>
            </section>
            <section>
              <h2>Updates before launch</h2>
              <p>This is a starter notice for a design preview, not a final legal policy. The Sellonit operator should review and replace it with an accurate notice before collecting personal information.</p>
            </section>
            <Link className="text-link legal-home-link" href="/">Return to Sellonit <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </main>
      <SiteFooter currentPage="privacy" />
    </>
  );
}
