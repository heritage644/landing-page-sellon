"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, FunnelSimple, Package, Plus } from "@phosphor-icons/react";
import { ProductVector } from "@/components/product-vectors";
import type { ProductKind } from "@/components/product-vectors";

type Mode = "retailer" | "supplier";
type Product = { name: string; category: string; kind: ProductKind; status: string; code: string };

const products: Product[] = [
  { name: "Everyday carryall", category: "Accessories", kind: "bag", status: "Availability varies", code: "SKU-014" },
  { name: "Daily face serum", category: "Beauty", kind: "skincare", status: "Product details", code: "SKU-028" },
  { name: "Hand-shaped vase", category: "Homeware", kind: "pottery", status: "Product details", code: "SKU-043" },
  { name: "Soft cotton shirt", category: "Fashion", kind: "shirt", status: "Availability varies", code: "SKU-051" },
  { name: "Everyday smartphone", category: "Electronics", kind: "phone", status: "Product details", code: "SKU-067" },
];

const categories = ["All products", "Accessories", "Beauty", "Electronics", "Homeware", "Fashion"];

export default function ProductCatalogExplorer({ mode }: { mode: Mode }) {
  const [category, setCategory] = useState("All products");
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const filteredProducts = useMemo(
    () => category === "All products" ? products : products.filter((product) => product.category === category),
    [category],
  );
  const displayedProduct = filteredProducts.find((product) => product.code === selectedProduct.code) ?? filteredProducts[0];
  const heading = mode === "retailer" ? "Explore a sample product range" : "A sample supplier catalogue";
  const caption = mode === "retailer"
    ? "Illustrative listings only. Product availability and rules are determined by participating suppliers."
    : "Illustrative catalogue only. No live supplier or inventory data is shown.";

  return (
    <div className={`catalog-explorer catalog-explorer-${mode}`}>
      <div className="catalog-explorer-topbar">
        <div className="catalog-explorer-brand"><span className="catalog-explorer-mark"><Package size={16} aria-hidden="true" /></span><span><strong>{heading}</strong><small>{mode === "retailer" ? "Product discovery concept" : "Catalogue management concept"}</small></span></div>
        <span className="catalog-explorer-demo">DEMO</span>
      </div>
      <div className="catalog-explorer-toolbar">
        <div className="catalog-filter-label"><FunnelSimple size={14} aria-hidden="true" /> Filter by product type</div>
        <div className="catalog-filter-row" role="group" aria-label="Filter sample products">
          {categories.map((item) => (
            <button type="button" key={item} aria-pressed={category === item} className={category === item ? "catalog-filter is-active" : "catalog-filter"} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="catalog-explorer-layout">
        <div className="catalog-product-list" role="group" aria-label="Sample products">
          {filteredProducts.map((product) => (
            <button type="button" className={displayedProduct.code === product.code ? "catalog-product-row is-selected" : "catalog-product-row"} key={product.code} aria-pressed={displayedProduct.code === product.code} onClick={() => setSelectedProduct(product)}>
              <ProductVector className="catalog-product-thumb" kind={product.kind} aria-hidden="true" />
              <span><strong>{product.name}</strong><small>{product.category}</small></span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </button>
          ))}
          {mode === "supplier" ? <div className="catalog-add-product" aria-hidden="true"><Plus size={15} /> Add a product <span>Concept</span></div> : null}
        </div>
        <div className="catalog-product-detail" aria-live="polite" aria-atomic="true">
          <ProductVector className="catalog-product-large" kind={displayedProduct.kind} aria-hidden="true" />
          <div className="catalog-detail-copy"><span className="catalog-detail-kicker">{mode === "retailer" ? "SUPPLIER LISTING · EXAMPLE" : "PRODUCT INFORMATION · EXAMPLE"}</span><strong>{displayedProduct.name}</strong><span>{displayedProduct.category} · {displayedProduct.code}</span><p>{mode === "retailer" ? "Review the product information and availability rules before deciding whether it fits your customers." : "Organise descriptions, images, SKUs, pricing, and availability details in a product catalogue."}</p><span className="catalog-availability"><i />{displayedProduct.status}</span></div>
        </div>
      </div>
      <p className="catalog-explorer-caption">{caption}</p>
    </div>
  );
}
