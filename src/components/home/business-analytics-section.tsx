import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  CaretDown,
  ChartLineUp,
  CheckCircle,
  ClipboardText,
  Package,
  TrendUp,
  UsersThree,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";
import BusinessAnalyticsMotion from "@/components/home/business-analytics-motion";

const weeklySales = [
  { day: "Mon", height: "31%" },
  { day: "Tue", height: "47%" },
  { day: "Wed", height: "39%" },
  { day: "Thu", height: "64%" },
  { day: "Fri", height: "51%" },
  { day: "Sat", height: "82%" },
  { day: "Sun", height: "69%" },
];

const metrics = [
  { label: "Total sales", value: "₦1.24M", target: "1240000", prefix: "₦", format: "compact", suffix: "", change: "+12.8%" },
  { label: "Orders", value: "184", target: "184", prefix: "", format: "standard", suffix: "", change: "+8.2%" },
  { label: "Store visits", value: "42K", target: "42000", prefix: "", format: "compact", suffix: "", change: "+18.4%" },
] as const;

const analyticsCapabilities = [
  { title: "Sales overview", copy: "Review available order and revenue summaries over a selected period.", icon: TrendUp },
  { title: "Product performance", copy: "Understand which products attract sales and which may need attention.", icon: Package },
  { title: "Order activity", copy: "Review order volumes and monitor changes in activity over time.", icon: ClipboardText },
  { title: "Retailer performance", copy: "For suppliers, view relevant retailer activity where the data is available.", icon: UsersThree },
  { title: "Business trends", copy: "Compare activity across periods to identify changes in sales and demand.", icon: ChartLineUp },
  { title: "Inventory awareness", copy: "Use available stock and sales information to inform availability decisions.", icon: CheckCircle },
] as const;

export default function BusinessAnalyticsSection() {
  return (
    <section className="business-analytics-section section-space" id="analytics" aria-labelledby="analytics-title">
      <div className="page-container">
        <div className="business-analytics-copy">
      
          <h2 id="analytics-title">
            Understand your business.
            <span className="slong"> Beyond individual sales.</span>
          </h2>
          <p>
            Sellonit is developing analytics to help businesses understand their sales activity, products, orders, and operations. The dashboard below uses clearly marked demonstration figures.
          </p>
        </div>

        <div className="analytics-stage" data-analytics-stage>
          <div className="analytics-dashboard" data-analytics-dashboard role="group" aria-label="Sample business analytics dashboard">
            <div className="analytics-dashboard-topbar">
              <div className="analytics-dashboard-brand">
                <span className="analytics-brand-icon" aria-hidden="true">
                  <ChartLineUp size={18} weight="bold" />
                </span>
                <span>
                  <strong>Sellonit insights</strong>
                  <small>Illustrative workspace</small>
                </span>
              </div>
            </div>

            <div className="analytics-dashboard-content">
              <div className="analytics-dashboard-heading">
                <div>
                  <p className="analytics-dashboard-eyebrow">ILLUSTRATIVE BUSINESS</p>
                  <h3>Performance overview</h3>
                </div>
                <div className="analytics-period" aria-hidden="true">
                  Last 30 days <CaretDown size={14} weight="bold" aria-hidden="true" />
                </div>
              </div>

              <div className="analytics-metrics">
                {metrics.map((metric) => (
                  <article className="analytics-metric-card" key={metric.label}>
                    <span className="analytics-metric-label">{metric.label}</span>
                    <strong
                      className="analytics-metric-value"
                      data-analytics-counter
                      data-count-target={metric.target}
                      data-count-prefix={metric.prefix}
                      data-count-format={metric.format}
                      data-count-suffix={metric.suffix}
                    >
                      {metric.value}
                    </strong>
                    <span className="analytics-metric-change">
                      <TrendUp size={14} weight="bold" aria-hidden="true" />
                      {metric.change}
                      <small>vs. last month</small>
                    </span>
                  </article>
                ))}
              </div>

              <div className="analytics-chart-grid">
                <article className="analytics-chart-card" aria-labelledby="sales-chart-title">
                  <div className="analytics-chart-heading">
                    <div>
                      <h4 id="sales-chart-title">Sales activity</h4>
                      <p>Illustrative weekly sample</p>
                    </div>
                    <span className="analytics-chart-trend"><ArrowUpRight size={14} weight="bold" aria-hidden="true" /> +12.8%</span>
                  </div>
                  <div className="analytics-bar-chart" role="img" aria-label="Sample sales activity from Monday to Sunday, highest on Saturday">
                    <div className="analytics-chart-axis" aria-hidden="true">
                      <span>₦80k</span>
                      <span>₦40k</span>
                      <span>₦0</span>
                    </div>
                    <div className="analytics-chart-plot">
                      {weeklySales.map((item, index) => (
                        <div className="analytics-bar-column" key={`${item.day}-${index}`}>
                          <span
                            className="analytics-bar"
                            data-analytics-bar
                            style={{ "--bar-height": item.height, "--bar-index": index } as CSSProperties}
                            aria-hidden="true"
                          />
                          <span className="analytics-bar-day" aria-hidden="true">{item.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                <article className="analytics-channel-card" aria-labelledby="channel-chart-title">
                  <div className="analytics-chart-heading">
                    <div>
                      <h4 id="channel-chart-title">Store traffic</h4>
                      <p>Visitors by connection</p>
                    </div>
                    <span className="analytics-more" aria-hidden="true">•••</span>
                  </div>
                  <div className="analytics-donut-layout">
                    <div className="analytics-donut-wrap">
                      <svg className="analytics-donut" viewBox="0 0 100 100" role="img" aria-label="78 percent of visitors are online">
                        <circle className="analytics-donut-track" cx="50" cy="50" r="35" />
                        <circle
                          className="analytics-donut-online"
                          data-analytics-donut
                          cx="50"
                          cy="50"
                          r="35"
                          pathLength="100"
                          strokeDasharray="78 22"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="analytics-donut-center" aria-hidden="true">
                        <strong>78%</strong>
                        <span>online</span>
                      </div>
                    </div>
                    <div className="analytics-traffic-legend">
                      <div><span className="analytics-legend-dot is-online" /><span>Online</span><strong>78%</strong></div>
                      <div><span className="analytics-legend-dot is-offline" /><span>Offline</span><strong>22%</strong></div>
                      <p>42,000 visits this month</p>
                    </div>
                  </div>
                </article>
              </div>
              <p className="analytics-sample-note">Demonstration figures only · Not Sellonit business data</p>
            </div>
          </div>

          <div className="analytics-phone-device" data-analytics-device aria-hidden="true">
            <div className="analytics-phone-frame">
              <div className="analytics-phone-speaker" aria-hidden="true" />
              <div className="analytics-phone-screen">
                <div className="analytics-phone-topline">
                  <span>9:41</span>
                  <span className="analytics-phone-status" aria-hidden="true"><i /><i /><i /></span>
                </div>
                <div className="analytics-phone-greeting">
                  <span>YOUR STORE</span>
                  <strong>Good morning, seller</strong>
                </div>
                <div className="analytics-phone-sales-card">
                  <span>Total sales</span>
                  <strong>₦1.24M</strong>
                  <small><TrendUp size={12} weight="bold" aria-hidden="true" /> +12.8% this month</small>
                  <div className="analytics-phone-sparkline" aria-hidden="true">
                    {[32, 48, 40, 62, 52, 76, 66, 92].map((height, index) => (
                      <span key={index} style={{ "--spark-height": `${height}%` } as CSSProperties} />
                    ))}
                  </div>
                </div>
                <div className="analytics-phone-mini-grid">
                  <div><span>Orders</span><strong>184</strong><small>+8.2%</small></div>
                  <div><span>Visits</span><strong>42K</strong><small>+18.4%</small></div>
                </div>
                <div className="analytics-phone-bottom-nav" aria-hidden="true">
                  <span className="is-active"><i />Home</span>
                  <span><i />Orders</span>
                  <span><i />Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="analytics-product-note">
          <p>Metric availability will depend on business role and available data. Definitions must remain consistent: a placed order is not the same as a completed sale, and gross order value is not the same as money received after refunds, fees, and adjustments.</p>
          <Link href="/analytics">Explore Business Analytics <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <p className="analytics-mobile-note">Your sales and store activity, wherever you are.</p>
      </div>
      <BusinessAnalyticsMotion />
    </section>
  );
}
