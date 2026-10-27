import { TaglineReveal } from "@/components/landing-motion";

export default function TaglineSection() {
  return (
    <section className="tagline-section" aria-label="The Sellonit promise" data-reveal>
      <div className="tagline-mark" aria-hidden="true"><span /><span /><span /></div>
      <p className="eyebrow">MORE SELLING. LESS SETUP.</p>
      <TaglineReveal lines={["Spend less time setting up.", "Spend more time growing."]} />
      <p className="tagline-support">Sellonit gives your business a clear place to grow, one product and one order at a time.</p>
    </section>
  );
}
