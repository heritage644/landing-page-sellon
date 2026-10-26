"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Check,
  ChartLineUp,
  House,
  Package,
  Storefront,
  TrendUp,
} from "@phosphor-icons/react";

type PreviewTab = "store" | "orders" | "insights";

const tabs: { id: PreviewTab; label: string }[] = [
  { id: "store", label: "Storefront" },
  { id: "orders", label: "Orders" },
  { id: "insights", label: "Insights" },
];

const sampleOrders = [
  { initials: "AO", name: "Amaka Okeke", item: "Everyday mini bag", amount: "₦28,450", state: "Ready to pack" },
  { initials: "TM", name: "Tomi Martins", item: "Soft form pouch", amount: "₦16,800", state: "Paid" },
  { initials: "KI", name: "Kemi Ibe", item: "Market day tote", amount: "₦22,950", state: "Ready to pack" },
];

const chartValues = [38, 58, 46, 78, 61, 88, 70];

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<PreviewTab>("store");

  return (
    <div className="showcase-demo">
      <div className="demo-window-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <div className="demo-window-address">workspace.sellonit</div>
      </div>

      <div className="demo-app-header">
        <div className="demo-app-brand">
          <span className="demo-brand-icon" aria-hidden="true"><Storefront size={18} weight="fill" /></span>
          <div>
            <strong>Sunday Market</strong>
            <span>Sample workspace</span>
          </div>
        </div>
        <div className="demo-app-status"><span className="status-dot" /> Store is live</div>
        <div className="demo-notification" aria-hidden="true">
          <Bell size={18} weight="regular" />
          <span />
        </div>
      </div>

      <div className="demo-app-layout">
        <aside className="demo-sidebar" aria-label="Sample workspace navigation">
          <span className="demo-sidebar-label">Workspace</span>
          <span className={activeTab === "store" ? "demo-sidebar-link is-active" : "demo-sidebar-link"}>
            <House size={17} weight="regular" aria-hidden="true" /> Overview
          </span>
          <span className={activeTab === "store" ? "demo-sidebar-link" : "demo-sidebar-link"}>
            <Storefront size={17} weight="regular" aria-hidden="true" /> Store
          </span>
          <span className={activeTab === "orders" ? "demo-sidebar-link is-active" : "demo-sidebar-link"}>
            <Package size={17} weight="regular" aria-hidden="true" /> Orders
            <span className="sidebar-count">4</span>
          </span>
          <span className={activeTab === "insights" ? "demo-sidebar-link is-active" : "demo-sidebar-link"}>
            <ChartLineUp size={17} weight="regular" aria-hidden="true" /> Insights
          </span>
          <div className="demo-sidebar-bottom">
            <span className="demo-avatar">SM</span>
            <span>Sunday Market</span>
          </div>
        </aside>

        <div className="demo-content">
          <div className="demo-heading-row" data-reveal style={{ "--reveal-order": 0, "--reveal-distance": "10px" } as CSSProperties}>
            <div>
              <p className="eyebrow">YOUR STORE AT A GLANCE</p>
              <h3>Good morning, seller</h3>
            </div>
            <span className="demo-data-label">Sample data</span>
          </div>

          <div className="showcase-tabs" role="group" aria-label="Choose a product preview" data-reveal style={{ "--reveal-order": 1, "--reveal-distance": "10px" } as CSSProperties}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? "showcase-tab is-active" : "showcase-tab"}
                type="button"
                aria-pressed={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className="demo-tab-panel"
            role="tabpanel"
            aria-label={`${tabs.find((tab) => tab.id === activeTab)?.label} preview`}
            aria-live="polite"
            data-reveal
            style={{ "--reveal-order": 2, "--reveal-distance": "10px" } as CSSProperties}
          >
            {activeTab === "store" ? <StoreView /> : null}
            {activeTab === "orders" ? <OrdersView /> : null}
            {activeTab === "insights" ? <InsightsView /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function StoreView() {
  return (
    <div className="store-view demo-enter">
      <div className="store-view-copy">
        <span className="store-view-kicker"><span className="live-dot" /> STOREFRONT PREVIEW</span>
        <h4>Thoughtful pieces for every day.</h4>
        <p>Browse a considered edit of goods made to be used and loved.</p>
        <div className="store-view-meta">
          <span>Sunday Market</span>
          <span>Store link ready to share</span>
        </div>
        <div className="store-view-action" aria-hidden="true">
          <span>Explore the collection</span>
          <ArrowUpRight size={16} weight="bold" />
        </div>
      </div>
      <div className="store-view-image">
        <Image
          src="/featured-product.jpg"
          alt="Orange leather mini bag in the Sunday Market sample storefront"
          fill
          sizes="(max-width: 700px) 44vw, 280px"
          className="product-image"
        />
        <span className="image-caption">Everyday mini bag</span>
      </div>
    </div>
  );
}

function OrdersView() {
  return (
    <div className="orders-view demo-enter">
      <div className="orders-toolbar">
        <div>
          <h4>Recent orders</h4>
          <p>Keep every customer update in one place.</p>
        </div>
        <span className="orders-period">This week <ArrowDownRight size={14} aria-hidden="true" /></span>
      </div>
      <div className="order-list">
        {sampleOrders.map((order, index) => (
          <article className="order-row" key={order.name}>
            <span className={`order-avatar avatar-${index}`}>{order.initials}</span>
            <div className="order-customer">
              <strong>{order.name}</strong>
              <span>{order.item}</span>
            </div>
            <div className="order-price-state">
              <strong>{order.amount}</strong>
              <span className="order-state"><Check size={12} weight="bold" aria-hidden="true" /> {order.state}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function InsightsView() {
  return (
    <div className="insights-view demo-enter">
      <div className="insights-topline">
        <div>
          <h4>Store activity</h4>
          <p>A sample view of what is getting attention.</p>
        </div>
        <span className="insights-range">Last 7 days</span>
      </div>
      <div className="insights-metrics">
        <div><span>Visits</span><strong>1,284</strong><small><TrendUp size={13} aria-hidden="true" /> 8.7%</small></div>
        <div><span>Orders</span><strong>38</strong><small><TrendUp size={13} aria-hidden="true" /> 4.2%</small></div>
        <div><span>Sales</span><strong>₦482,750</strong><small><TrendUp size={13} aria-hidden="true" /> 6.4%</small></div>
      </div>
      <div className="insights-chart" aria-label="Sample sales activity over seven days" role="img">
        <div className="chart-y-labels" aria-hidden="true"><span>₦80k</span><span>₦40k</span><span>₦0</span></div>
        <div className="chart-columns" aria-hidden="true">
          {chartValues.map((value, index) => (
            <div className="chart-column" key={`${value}-${index}`}>
              <span className="chart-bar" style={{ "--bar-height": `${value}%`, "--bar-index": index } as CSSProperties} />
              <span className="chart-day">{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="sample-note"><ArrowUpRight size={14} aria-hidden="true" /> Sample figures for preview only</p>
    </div>
  );
}
