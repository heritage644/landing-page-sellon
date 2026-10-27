"use client";

import { useState } from "react";
import { ArrowUpRight, BagSimple, Image as ImageIcon, LinkSimple, Storefront } from "@phosphor-icons/react";
import { ProductVector, StorefrontVector } from "@/components/product-vectors";

const views = [
  { id: "brand", label: "Business" },
  { id: "collection", label: "Products" },
  { id: "share", label: "Share" },
] as const;

type ViewKey = (typeof views)[number]["id"];

export default function StorefrontBuilderPreview() {
  const [activeView, setActiveView] = useState<ViewKey>("brand");

  return (
    <div className="storefront-builder-preview">
      <div className="storefront-builder-toolbar">
        <div className="storefront-builder-brand"><span><Storefront size={16} aria-hidden="true" /></span><strong>Storefront concept</strong></div>
        <span className="catalog-explorer-demo">PREVIEW</span>
      </div>
      <div className="storefront-preview-shell">
        <div className="storefront-preview-nav">
          <span className="storefront-preview-wordmark">Kola <b>Living</b></span>
          <div className="storefront-preview-links"><span>Shop</span><span>Our story</span><BagSimple size={16} aria-hidden="true" /></div>
        </div>
        <div className="storefront-builder-content">
          <div className="storefront-builder-copy">
            <span className="storefront-builder-eyebrow">A SAMPLE ONLINE SHOP</span>
            <h3>{activeView === "brand" ? "Thoughtful things for everyday living." : activeView === "collection" ? "A collection customers can browse." : "A store link ready to share."}</h3>
            <p>{activeView === "brand" ? "Give your business and products a dedicated place online." : activeView === "collection" ? "Organise product details, images, and categories in one storefront concept." : "Share your online shop through WhatsApp, Instagram, and the channels your customers already use."}</p>
            <span className="storefront-preview-cta">{activeView === "share" ? <><LinkSimple size={14} /> Share store link</> : <>Explore the collection <ArrowUpRight size={14} /></>}</span>
          </div>
          <div className="storefront-builder-illustration">
            {activeView === "collection" ? <div className="storefront-product-pair"><ProductVector kind="pottery" /><ProductVector kind="skincare" /></div> : activeView === "share" ? <div className="storefront-share-art"><span><LinkSimple size={20} aria-hidden="true" /></span><i /><i /><i /><small>Shareable storefront concept</small></div> : <StorefrontVector className="storefront-vector-art" aria-hidden="true" />}
          </div>
        </div>
      </div>
      <div className="storefront-builder-controls" role="group" aria-label="Choose a storefront preview">
        {views.map((view) => (
          <button type="button" key={view.id} aria-pressed={activeView === view.id} className={activeView === view.id ? "storefront-view-button is-active" : "storefront-view-button"} onClick={() => setActiveView(view.id)}>
            {view.id === "brand" ? <Storefront size={15} aria-hidden="true" /> : view.id === "collection" ? <ImageIcon size={15} aria-hidden="true" /> : <LinkSimple size={15} aria-hidden="true" />}
            {view.label}
          </button>
        ))}
      </div>
      <p className="storefront-preview-note">Illustrative vector artwork · storefront tools are being developed</p>
    </div>
  );
}
