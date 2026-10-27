"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight, CaretDown, ChartLineUp, House, Package, Storefront } from "@phosphor-icons/react";
import { ProductVector } from "@/components/product-vectors";
import type { ProductKind } from "@/components/product-vectors";

type PreviewKey = "catalogue" | "storefront" | "activity";

const tabs: { id: PreviewKey; label: string }[] = [
  { id: "catalogue", label: "Product catalogue" },
  { id: "storefront", label: "Storefront" },
  { id: "activity", label: "Business activity" },
];

const sampleProducts: { name: string; type: string; kind: ProductKind; tone: string }[] = [
  { name: "Everyday carryall", type: "Accessories", kind: "bag", tone: "warm" },
  { name: "Daily face serum", type: "Beauty", kind: "skincare", tone: "soft" },
  { name: "Hand-shaped vase", type: "Homeware", kind: "pottery", tone: "clay" },
];

export default function HeroWorkspacePreview() {
  const [activeTab, setActiveTab] = useState<PreviewKey>("catalogue");
  const [activeProduct, setActiveProduct] = useState(0);
  const activeLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? "Product catalogue";

  return (
    <div className="hero-workspace" role="region" aria-label="Interactive Sellonit product preview">
      <div className="workspace-browser-bar" aria-hidden="true">
        <span /><span /><span />
        <div className="workspace-browser-address">workspace.sellonit · preview</div>
      </div>
      <div className="workspace-topbar">
        <div className="workspace-brand-lockup">
          <span className="workspace-brand-mark"><Storefront size={17} weight="bold" aria-hidden="true" /></span>
          <span><strong>Sellonit</strong><small>Business workspace</small></span>
        </div>
        <span className="workspace-demo-tag">Interactive demo</span>
        <div className="workspace-business-switch" aria-hidden="true">
          <span className="workspace-avatar">SM</span><span>Sunday Market</span><CaretDown size={13} aria-hidden="true" />
        </div>
      </div>

      <div className="workspace-body">
        <aside className="workspace-sidebar" aria-label="Preview navigation">
          <span className="workspace-sidebar-caption">YOUR BUSINESS</span>
          <span className={activeTab === "catalogue" ? "workspace-sidebar-item is-current" : "workspace-sidebar-item"}>
            <Package size={16} aria-hidden="true" /> Catalogue
          </span>
          <span className={activeTab === "storefront" ? "workspace-sidebar-item is-current" : "workspace-sidebar-item"}>
            <House size={16} aria-hidden="true" /> Storefront
          </span>
          <span className={activeTab === "activity" ? "workspace-sidebar-item is-current" : "workspace-sidebar-item"}>
            <ChartLineUp size={16} aria-hidden="true" /> Activity
          </span>
          <span className="workspace-sidebar-foot"><span /> Demo workspace</span>
        </aside>

        <div className="workspace-main">
          <div className="workspace-heading-row">
            <div>
              <p className="workspace-overline">SAMPLE BUSINESS · NOT LIVE DATA</p>
              <h2>{activeTab === "catalogue" ? "Your product catalogue" : activeTab === "storefront" ? "Your storefront" : "Business activity"}</h2>
              <p className="workspace-helper">A product preview of tools Sellonit is developing.</p>
            </div>
            <span className="workspace-period">Preview <CaretDown size={13} aria-hidden="true" /></span>
          </div>

          <div className="workspace-tabs" role="group" aria-label="Choose a Sellonit preview">
            {tabs.map((tab) => (
              <button
                type="button"
                aria-pressed={activeTab === tab.id}
                aria-controls="hero-tab-panel"
                className={activeTab === tab.id ? "workspace-tab is-active" : "workspace-tab"}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            id="hero-tab-panel"
            className="workspace-tab-panel"
            aria-live="polite"
            aria-atomic="true"
          >
            {activeTab === "catalogue" ? (
              <div className="workspace-product-grid">
                {sampleProducts.map((product, index) => (
                  <button
                    type="button"
                    className={activeProduct === index ? "workspace-product-card is-selected" : "workspace-product-card"}
                    key={product.name}
                    aria-pressed={activeProduct === index}
                    onClick={() => setActiveProduct(index)}
                  >
                    <ProductVector className={`workspace-product-art tone-${product.tone}`} kind={product.kind} aria-hidden="true" />
                    <span className="workspace-product-meta"><strong>{product.name}</strong><small>{product.type} · product preview</small></span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                ))}
              </div>
            ) : null}
            {activeTab === "storefront" ? (
              <div className="workspace-store-preview">
                <div className="workspace-store-copy">
                  <span className="workspace-store-mark"><Storefront size={17} aria-hidden="true" /> SAMPLE STOREFRONT</span>
                  <strong>Sunday Market</strong>
                  <p>A dedicated place for customers to browse the products you sell.</p>
                  <span className="workspace-store-link">Storefront concept <ArrowUpRight size={14} aria-hidden="true" /></span>
                </div>
                <ProductVector className="workspace-store-product" kind={sampleProducts[activeProduct].kind} aria-hidden="true" />
              </div>
            ) : null}
            {activeTab === "activity" ? (
              <div className="workspace-activity-preview">
                <div className="workspace-activity-title"><span><strong>Activity overview</strong><small>Illustrative dashboard panel</small></span><span className="workspace-sample-pill">SAMPLE</span></div>
                <div className="workspace-activity-stats">
                  <div><span>Products</span><strong>Catalogue</strong><small>Organised in one view</small></div>
                  <div><span>Orders</span><strong>Order tools</strong><small>Planned product area</small></div>
                </div>
                <div className="workspace-activity-chart" aria-hidden="true">
                  {[36, 58, 45, 73, 55, 88, 68].map((height, index) => <span key={index} style={{ "--sample-height": `${height}%` } as CSSProperties} />)}
                </div>
                <p className="workspace-sample-caption">Illustrative graphic only · no Sellonit business metrics shown</p>
              </div>
            ) : null}
          </div>
          <div className="workspace-footer-note"><span className="workspace-footer-dot" />{activeLabel} · product concept preview</div>
        </div>
      </div>
    </div>
  );
}
