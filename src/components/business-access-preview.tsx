"use client";

import { useState } from "react";
import { Buildings, Package, ShieldCheck, Storefront, UserCircle } from "@phosphor-icons/react";

const accessViews = {
  owner: {
    label: "Business owner",
    description: "A business owner may need a broader view of business setup and activity.",
    items: ["Business information", "Product catalogue", "Available reports"],
  },
  supplier: {
    label: "Supplier team",
    description: "Supplier tools are intended to centre on the products and information a supplier manages.",
    items: ["Product details", "Wholesale pricing", "Availability information"],
  },
  retailer: {
    label: "Retail team",
    description: "Retailer access is planned around the selected catalogue and the store the business is building.",
    items: ["Selected products", "Storefront content", "Relevant order activity"],
  },
} as const;

type AccessView = keyof typeof accessViews;

export default function BusinessAccessPreview() {
  const [activeView, setActiveView] = useState<AccessView>("owner");
  const current = accessViews[activeView];

  return (
    <div className="business-access-preview">
      <div className="business-access-header"><span className="business-access-icon"><Buildings size={18} aria-hidden="true" /></span><span><strong>One business. Relevant tools.</strong><small>Illustrative access preview</small></span><span className="catalog-explorer-demo">CONCEPT</span></div>
      <div className="business-access-tabs" role="group" aria-label="Preview business roles">
        {Object.entries(accessViews).map(([key, view]) => (
          <button type="button" key={key} aria-pressed={activeView === key} className={activeView === key ? "business-access-tab is-active" : "business-access-tab"} onClick={() => setActiveView(key as AccessView)}>
            {key === "owner" ? <UserCircle size={15} aria-hidden="true" /> : key === "supplier" ? <Package size={15} aria-hidden="true" /> : <Storefront size={15} aria-hidden="true" />}
            {view.label}
          </button>
        ))}
      </div>
      <div className="business-access-body" aria-live="polite">
        <div className="business-access-person"><span className="business-access-avatar">{activeView === "owner" ? "OY" : activeView === "supplier" ? "ST" : "RT"}</span><span><strong>{current.label}</strong><small>Access depends on assigned permissions.</small></span><ShieldCheck size={19} aria-hidden="true" /></div>
        <p>{current.description}</p>
        <ul>{current.items.map((item) => <li key={item}><span />{item}</li>)}</ul>
        <small className="business-access-footnote">Concept only · roles and permissions will follow confirmed product rules.</small>
      </div>
    </div>
  );
}
