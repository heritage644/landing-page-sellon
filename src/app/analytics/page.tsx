import type { Metadata } from "next";
import { ArrowUpRight, ChartLineUp, ClipboardText, Package, TrendUp, UsersThree } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import BusinessAnalyticsSection from "@/components/home/business-analytics-section";
import MarketingPageFrame from "@/components/marketing-page-frame";

export const metadata: Metadata = {
  title: "Business Analytics | Sellonit",
  description: "Explore Sellonit’s planned analytics direction for sales, product performance, orders, retailer activity, trends, and inventory awareness.",
};

const analyticsAreas = [
  { title: "Sales performance", copy: "Review available sales information over selected periods. Reports may include order totals, completed sales, and revenue summaries when supported data is available.", icon: TrendUp },
  { title: "Product performance", copy: "Understand which products generate sales, attract attention, or may need a different approach. Potential measures include units sold, best sellers, and activity over time.", icon: Package },
  { title: "Order analytics", copy: "Review order volumes and status across reporting periods. Status definitions should remain consistent so reports reflect operational activity accurately.", icon: ClipboardText },
  { title: "Retailer activity", copy: "Suppliers may be able to review retailer activity associated with their products, subject to permissions and data-sharing rules.", icon: UsersThree },
  { title: "Business trends", copy: "Compare activity across selected periods to identify changes in sales and product demand.", icon: ChartLineUp },
  { title: "Inventory awareness", copy: "Use available stock and sales information to inform replenishment and product availability decisions.", icon: Package },
];

export default function AnalyticsPage() {
  return (
    <MarketingPageFrame currentPath="/analytics">
      <section className="route-hero analytics-route-hero" aria-labelledby="analytics-page-title">
        <div className="page-container route-hero-content">
          <p className="eyebrow"><span className="eyebrow-dot" /> BUSINESS ANALYTICS</p>
          <h1 id="analytics-page-title">Know what’s happening in your business.</h1>
          <p>Sellonit is developing business analytics to help suppliers, retailers, and entrepreneurs understand sales activity, product performance, and orders. See the information available to your business and use it to guide your next decision.</p>
          <div className="route-hero-actions"><Link className="button button-primary" href={"/"}>Explore Sellonit <ArrowUpRight size={16} aria-hidden="true" /></Link><span>Metrics depend on role, data, and release phase.</span></div>
        </div>
      </section>
      <BusinessAnalyticsSection />
      <section className="analytics-detail-section section-space" aria-labelledby="analytics-details-title">
        <div className="page-container">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-dot" /> WHAT ANALYTICS CAN HELP WITH</p><h2 id="analytics-details-title">A clearer view of business activity.</h2><p>Potential reporting areas depend on the data available to each business and the analytics capabilities that are released.</p></div>
          <div className="analytics-detail-grid">{analyticsAreas.map(({ title, copy, icon: Icon }, index) => <article className="analytics-detail-card" key={title}><span className="analytics-detail-index">0{index + 1}</span><span className="analytics-detail-icon"><Icon size={19} aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
          <div className="analytics-definitions"><span>PRODUCT NOTE</span><p>A placed order is different from a completed sale. Gross order value is different from what a business receives after refunds, fees, and adjustments. Metric definitions should remain consistent across the platform.</p><Link href="/features#business-analytics">See analytics in the feature roadmap <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </MarketingPageFrame>
  );
}
