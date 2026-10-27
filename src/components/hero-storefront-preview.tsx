"use client";

import { useState } from "react";
import { ArrowUpRight, LockKey, Package, ShoppingBag, Storefront } from "@phosphor-icons/react";
import { ProductVector } from "@/components/product-vectors";
import type { ProductKind } from "@/components/product-vectors";

const products: { name: string; category: string; kind: ProductKind; description: string }[] = [
  { name: "Everyday carryall", category: "Accessories", kind: "bag", description: "A considered carryall for the rhythm of every day." },
  { name: "Daily face serum", category: "Beauty", kind: "skincare", description: "A sample listing with room for useful product details." },
  { name: "Everyday smartphone", category: "Electronics", kind: "phone", description: "An illustrative product preview, not a live catalogue item." },
];

export default function HeroStorefrontPreview() {
  const [activeProduct, setActiveProduct] = useState(0);
  const product = products[activeProduct];

  return (
    <div className="hero-store-stage" role="region" aria-label="Interactive sample storefront concept">
      <div className="hero-store-backdrop" aria-hidden="true" />
      <div className="store-preview-card">
        <div className="store-browser-bar" aria-hidden="true">
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-dot" />
          <div className="store-address"><LockKey size={12} aria-hidden="true" /> sample storefront · concept</div>
        </div>
        <div className="storefront-page">
          <div className="storefront-nav">
            <div className="sample-store-name">naya <span>studio</span></div>
            <div className="sample-store-links"><span>Shop</span><span>Our story</span></div>
            <span className="sample-bag-icon" aria-hidden="true"><ShoppingBag size={18} /></span>
          </div>
          <div className="hero-product-image">
            <ProductVector key={product.kind} className="hero-product-art" kind={product.kind} aria-hidden="true" />
            <span className="product-image-label">Illustrative product listing</span>
          </div>
          <div className="hero-product-details" aria-live="polite" aria-atomic="true">
            <div>
              <span className="product-kicker">{product.category.toUpperCase()} · SAMPLE</span>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
            <div className="product-buy-column">
              <strong>Product concept</strong>
              <span className="product-buy-button">Preview listing <ArrowUpRight size={14} aria-hidden="true" /></span>
            </div>
          </div>
          <div className="hero-product-picker" role="group" aria-label="Choose a sample product to preview">
            {products.map((item, index) => (
              <button
                className={activeProduct === index ? "hero-product-choice is-active" : "hero-product-choice"}
                key={item.name}
                type="button"
                aria-pressed={activeProduct === index}
                onClick={() => setActiveProduct(index)}
              >
                <ProductVector kind={item.kind} aria-hidden="true" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-order-card">
        <span className="order-confirm-icon"><Package size={18} aria-hidden="true" /></span>
        <div className="hero-order-copy">
          <strong>Commerce tools in development</strong>
          <span>Sample storefront · no live orders</span>
        </div>
        <span className="hero-order-status">DEMO</span>
      </div>

      <div className="hero-store-link-card">
        <span className="store-link-icon"><Storefront size={19} aria-hidden="true" /></span>
        <div><span>Storefront</span><strong>Concept preview</strong></div>
        <ArrowUpRight size={17} aria-hidden="true" />
      </div>
    </div>
  );
}
