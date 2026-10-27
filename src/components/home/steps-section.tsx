import type { CSSProperties } from "react";

const steps = [
  {
    number: "01",
    title: "Create your store",
    description: "Choose a name and set up a storefront that feels like your brand.",
  },
  {
    number: "02",
    title: "Add your products",
    description: "Share photos, prices, and the details customers need before they order.",
  },
  {
    number: "03",
    title: "Share your link",
    description: "Send your store to customers and keep every order in one clear place.",
  },
];

export default function StepsSection() {
  return (
    <section className="steps-section section-space" id="how-it-works" aria-labelledby="steps-title">
      <div className="page-container">
        <div className="steps-header" data-reveal>
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> A SIMPLE START</p>
            <h2 id="steps-title">Three steps to your first storefront.</h2>
          </div>
          <p>You bring the products. Sellonit brings the pieces together.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article
              className="step-card"
              key={step.number}
              data-reveal
              style={{ "--reveal-order": index } as CSSProperties}
            >
              <div className="step-number-row">
                <span className="step-number">{step.number}</span>
                {index < steps.length - 1 ? <span className="step-connector" aria-hidden="true" /> : null}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
