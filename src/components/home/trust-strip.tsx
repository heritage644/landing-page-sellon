import {
  Coffee,
  DeviceMobile,
  Drop,
  House,
  TShirt,
} from "@phosphor-icons/react/ssr";

const categories = [
  { label: "Fashion", icon: TShirt },
  { label: "Beauty", icon: Drop },
  { label: "Electronics", icon: DeviceMobile },
  { label: "Home goods", icon: House },
  { label: "Food and drink", icon: Coffee },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip page-container" aria-label="Example product categories relevant to Sellonit businesses" data-reveal>
      <div className="trust-strip-heading">
        <p className="eyebrow">MADE FOR WHAT YOU SELL</p>
        <h2>One home for your next big idea.</h2>
      </div>
      <div className="category-list">
        {categories.map(({ label, icon: Icon }) => (
          <div className="category-item" key={label}>
            <Icon size={19} weight="regular" aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
