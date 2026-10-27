import type { CSSProperties } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "What is Sellonit?",
    answer: "Sellonit is a Nigerian commerce platform being built to connect suppliers, retailers, and businesses through product catalogues, online storefronts, and business-management tools.",
  },
  {
    question: "Who can use Sellonit?",
    answer: "Suppliers, retailers, entrepreneurs, and eligible enterprise businesses can use the platform according to the features and access available to their business type.",
  },
  {
    question: "Do I need to own products before becoming a retailer?",
    answer: "The retailer model is designed to let users select products from participating suppliers and sell them through their own storefronts, subject to product availability and applicable business rules.",
  },
  {
    question: "Can I sell my own products?",
    answer: "Yes. Entrepreneurs and eligible businesses will be able to manage their own products and storefronts through the relevant Sellonit features as they are released.",
  },
  {
    question: "Can suppliers make products available to retailers?",
    answer: "Connecting supplier catalogues with retailers is part of the product direction. Specific product access will depend on supplier settings, availability, and the features released.",
  },
  {
    question: "Will I have my own online store?",
    answer: "Storefront creation is part of the planned product experience for retailers and eligible businesses. Availability will follow the relevant development phase.",
  },
  {
    question: "Does Sellonit provide analytics?",
    answer: "Business analytics is part of the product direction. Available metrics will depend on business type, permissions, data, and the features released.",
  },
  {
    question: "Can I receive payments through Sellonit?",
    answer: "Payment processing is not part of the current preview. It is a planned commerce capability, and payment methods and flows will depend on confirmed integrations.",
  },
  {
    question: "Does Sellonit provide escrow?",
    answer: "Escrow is not available in the current preview. It remains a future product direction, subject to confirmed payment, settlement, operational, and regulatory requirements.",
  },
  {
    question: "Can I manage multiple businesses?",
    answer: "The account and business structure is designed to support users who may belong to more than one business, subject to access and permissions.",
  },
  {
    question: "Is Sellonit available now?",
    answer: "Account registration, authentication, business setup, and membership foundations form the current account experience. Supplier catalogues, product discovery, storefronts, order management, and analytics are being developed in phases; payment, settlement, and fulfilment capabilities remain future work.",
  },
] as const;

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqSection() {
  return (
    <section className="faq-section section-space" id="faq" aria-labelledby="faq-title">
      <div className="page-container faq-layout">
        <div className="faq-intro" data-reveal>
          <h2 id="faq-title">A few things worth knowing.</h2>
          <p>Understand the product direction, who it is for, and what is still being developed.</p>
          <Link className="text-link" href="/features">Explore product features <span aria-hidden="true">→</span></Link>
        </div>
        <div className="faq-list" data-reveal style={{ "--reveal-order": 1 } as CSSProperties}>
          {faqItems.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary><span>{item.question}</span><span className="faq-toggle" aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
