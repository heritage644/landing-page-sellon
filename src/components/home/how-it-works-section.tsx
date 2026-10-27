"use client";

import { useState } from "react";
import { ArrowRight, Circle } from "@phosphor-icons/react";
import Link from "next/link";
import { ProductVector, StorefrontVector } from "@/components/product-vectors";
import type { ProductKind } from "@/components/product-vectors";

const steps: { title: string; description: string; kind: ProductKind; note: string }[] = [
  {
    title: "Supplier catalogues",
    description: "Supplier tools are being developed to organise product information and availability for retailers to review.",
    kind: "parcel",
    note: "Supplier catalogue concept",
  },
  {
    title: "Product discovery",
    description: "Retailer discovery tools are being developed to help businesses review available products and find options for their customers.",
    kind: "bag",
    note: "Product discovery concept",
  },
  {
    title: "Storefront preparation",
    description: "Planned storefront tools will help retailers organise selected products and present them through a dedicated online shop.",
    kind: "shirt",
    note: "Storefront concept",
  },
  {
    title: "Customer shopping",
    description: "Customer-facing browsing and checkout depend on the relevant development phase; this preview does not represent a live shopping flow.",
    kind: "skincare",
    note: "Customer journey concept",
  },
  {
    title: "Order coordination",
    description: "Order-management tools are in development. Automated fulfilment, delivery, and settlement are not represented in this preview.",
    kind: "pottery",
    note: "Order management concept",
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];

  return (
    <section className="  how-it-works-section section-space" id="how-it-works" aria-labelledby="how-it-works-title">
      <div className="page-container ">
        <div className="steps-header flex items-start text-start items-center just-center
         " data-reveal>
          <div className="pl-3 w-full text-start">
            
            <h2 id="how-it-works-title"><span className="heading-orange-paper">From supplier to customer.</span></h2>
          </div>
          <p>Explore the intended journey from product information to a customer-facing store. These steps describe the product direction, not live Sellonit workflows.</p>
        </div>

        <div className="interactive-flow">
          <div className="interactive-flow-steps" role="group" aria-label="Explore the Sellonit commerce process">
            {steps.map((item, index) => (
              <button
                key={item.title}
                className={activeStep === index ? "flow-step is-active" : "flow-step"}
                type="button"
                aria-pressed={activeStep === index}
                onClick={() => setActiveStep(index)}
              >
                <span className="flow-step-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="flow-step-title">{item.title}</span>
                <span className="flow-step-state" aria-hidden="true"><Circle size={activeStep === index ? 16 : 13} weight={activeStep === index ? "fill" : "regular"} /></span>
              </button>
            ))}
          </div>

          <div className="interactive-flow-panel" aria-live="polite" aria-atomic="true">
            <div className="flow-panel-copy">
              <span className="flow-panel-kicker">STEP {String(activeStep + 1).padStart(2, "0")} · PRODUCT CONCEPT</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="flow-panel-note"><span />{step.note}</span>
            </div>
            <div className="flow-panel-art" key={step.kind}>
              {activeStep === 2 ? <StorefrontVector className="flow-store-vector" aria-hidden="true" /> : <ProductVector kind={step.kind} className="flow-product-vector" aria-hidden="true" />}
              <span className="flow-illustration-label">Illustrative vector artwork</span>
            </div>
          </div>
        </div>

        <div className="flow-closing-row">
          <p><strong>Each participant has a role.</strong> Sellonit is being developed to bring the selling process together.</p>
          <Link className="button button-secondary" href="/how-it-works">See the full process <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <p className="product-roadmap-note">Checkout, payments, escrow, settlement, and automated fulfilment are future capabilities, not live in this preview, and depend on confirmed releases and integrations.</p>
      </div>
    </section>
  );
}
