import type { CSSProperties } from "react";

const faqItems = [
  {
    question: "Is Sellonit free to start?",
    answer: "Yes. You can create a store and add your products on the free plan. There is no card required to get started.",
  },
  {
    question: "Do I need a website before I begin?",
    answer: "No. Sellonit gives you a storefront link you can share with customers, so you can start without building a separate website.",
  },
  {
    question: "Can I add and update products later?",
    answer: "Yes. Add new products and update names, photos, descriptions, and prices as your collection changes.",
  },
  {
    question: "How do customers find my store?",
    answer: "Share your store link through social media, messages, or the places your customers already spend time.",
  },
  {
    question: "Can I manage orders from my phone?",
    answer: "The Sellonit workspace is designed to adapt to mobile screens, so you can review your products and orders away from your desk.",
  },
  {
    question: "What can I sell with Sellonit?",
    answer: "Sellonit is made for independent businesses. The products you list should follow the platform terms and any rules that apply to your business.",
  },
] as const;

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqSection() {
  return (
    <section className="faq-section section-space" id="faq" aria-labelledby="faq-title">
      <div className="page-container faq-layout">
        <div className="faq-intro" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> GOOD QUESTIONS</p>
          <h2 id="faq-title">A few things worth knowing.</h2>
          <p>Still deciding? Here are the details sellers usually want first.</p>
        </div>
        <div className="faq-list" data-reveal style={{ "--reveal-order": 1 } as CSSProperties}>
          {faqItems.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
