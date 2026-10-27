import type { CSSProperties } from "react";
import GlobalReachMotion from "@/components/home/global-reach-motion";

const markets = [
  {
    currency: "USD",
    location: "United States",
    flag: "🇺🇸",
    left: "4%",
    top: "31%",
    mobileLeft: "2%",
    mobileTop: "15%",
    delay: "0ms",
  },
  {
    currency: "CAD",
    location: "Canada",
    flag: "🇨🇦",
    left: "20%",
    top: "7%",
    mobileLeft: "52%",
    mobileTop: "14%",
    delay: "90ms",
  },
  {
    currency: "GBP",
    location: "United Kingdom",
    flag: "🇬🇧",
    left: "38%",
    top: "21%",
    mobileLeft: "2%",
    mobileTop: "42%",
    delay: "180ms",
  },
  {
    currency: "EUR",
    location: "Europe",
    flag: "🇪🇺",
    left: "58%",
    top: "34%",
    mobileLeft: "52%",
    mobileTop: "42%",
    delay: "270ms",
  },
  {
    currency: "NGN",
    location: "Nigeria",
    flag: "🇳🇬",
    left: "39%",
    top: "58%",
    mobileLeft: "2%",
    mobileTop: "69%",
    delay: "360ms",
  },
  {
    currency: "KSh",
    location: "Kenya",
    flag: "🇰🇪",
    left: "69%",
    top: "58%",
    mobileLeft: "52%",
    mobileTop: "69%",
    delay: "450ms",
  },
] as const;

const mapPins = [
  { left: "22.5%", top: "33%" },
  { left: "25%", top: "22%" },
  { left: "48%", top: "33%" },
  { left: "51%", top: "36%" },
  { left: "51%", top: "55%" },
  { left: "57%", top: "58%" },
] as const;

export default function GlobalReachSection() {
  return (
    <section className="global-reach-section section-space bg-[#00875A] text-white dark:bg-[#101a28]" id="global-reach" aria-labelledby="global-reach-title">
      <div className="page-container">
        <div className="global-reach-copy">
         
          <h2 className="text-white" id="global-reach-title">
            <span >Built here.</span>
            <span> With room to grow.</span>
          </h2>
          <p className="global-reach-description font-semibold text-white">
            Sellonit is being built around how Nigerian businesses source products, sell, and reach customers. This map is an illustrative view of future possibilities—not a claim about currently supported markets or currencies.
          </p>
          <div className="global-pagination" aria-hidden="true">
            <span className="is-active" />
            <span />
            <span />
          </div>
          <span className="visually-hidden">Global commerce overview, page 1 of 3.</span>
        </div>

        <div className="global-map-stage" id="color" data-global-map>
          <svg className="global-map-svg" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
            <g className="global-map-land">
              <path d="M93 143 112 112 147 90 187 73 218 82 245 99 261 127 279 142 271 164 293 177 280 198 258 200 242 222 213 229 200 254 179 252 163 232 141 225 132 202 111 192 104 170 88 163Z" />
              <path d="m247 268 31-11 29 9 19 21-3 26 15 18-8 27 6 28-13 31-11 36-17 16-15-21-10-33-15-26-4-34-18-23 2-28Z" />
              <path d="m299 82 25-17 31 7 18 20-14 19-30 3-20-12Z" />
              <path d="m407 137 21-20 35-4 22 11 22-4 17-17 34 1 23-13 38 9 32-9 37 13 32-3 23 17 34 7 20 19 27 8 18 25-10 18-29-4-20 17-28-8-17 15-28-7-22 12-24-10-14 22-21 4-12 27-22 7-15 22-20 5-16 20-23 2-11 18-16-11-14-31-18-12-7-26-19-13-6-22-16-13-8-22-19-9-4-18-22-9-12-18Z" />
              <path d="m499 229 24-16 28 4 18 18 21 12 13 27-3 30-14 21-8 30-21 22-13 33-18 21-11-17-7-31-18-24-8-33-20-22-2-26-17-21 6-25Z" />
              <path d="m593 184 18 5 11 18-13 17-18-7-8-17Z" />
              <path d="m697 295 21-9 19 8 12 20-12 16-22-4-17-13Z" />
              <path d="m787 350 22-14 30 4 22 17 25 4 19 21-8 16-26 1-19 16-24-8-10-21-22-9-13-14Z" />
              <path d="m859 298 12-7 11 9-7 13-13-2Z" />
              <path d="m943 382 19-8 16 8-2 15-20 8-15-10Z" />
            </g>
            <g className="global-map-grid" aria-hidden="true">
              <path d="M70 260h1060M110 195h980M160 130h880M155 325h890M260 390h680" />
            </g>
          </svg>

          {mapPins.map((pin, index) => (
            <span
              className="global-map-pin"
              data-map-pin
              key={`pin-${index}`}
              style={{ left: pin.left, top: pin.top } as CSSProperties}
              aria-hidden="true"
            />
          ))}

          {markets.map((market) => (
            <div
              className="global-market-badge"
              data-market-badge
              key={market.currency}
              style={{
                "--badge-left": market.left,
                "--badge-top": market.top,
                "--badge-mobile-left": market.mobileLeft,
                "--badge-mobile-top": market.mobileTop,
                "--badge-delay": market.delay,
              } as CSSProperties}
            >
              <span className="global-market-flag" aria-hidden="true">{market.flag}</span>
              <span className="global-market-meta">
                <strong>{market.currency}</strong>
                <span>{market.location}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <GlobalReachMotion />
    </section>
  );
}
