import type { CSSProperties } from "react";
import { ArrowUpRight, Buildings, Package, Storefront, UsersThree } from "@phosphor-icons/react/ssr";
import Link from "next/link";

const businessTypes = [
  { title: "Suppliers", description: "You source, make, or distribute products and want to connect with retailers.", href: "/suppliers", icon: Package },
  { title: "Retailers", description: "You want to find products and build a store around what your customers need.", href: "/retailers", icon: Storefront },
  { title: "Entrepreneurs", description: "You’re growing a business and want to organise products and selling activity.", href: "/entrepreneurs", icon: UsersThree },
  { title: "Enterprise businesses", description: "You manage more complex supply, retail, or multi-team operations.", href: "/enterprise", icon: Buildings },
];

export function WhoShouldUseSection() {
  return (
    <section className="who-use-section section-space bg-[#ff8b00]" id="who-its-for" aria-labelledby="who-use-title">
      <div className="page-container">
        <div className="section-heading" data-reveal>
          <h2 className="[--ink:#172019]" id="who-use-title">Whatever your role in selling, there’s a place for you.</h2>
          <p className="[--ink:#263d54]">Sellonit is being built around the people and businesses moving products from supply to customer.</p>
        </div>
        <div className="who-use-grid grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-[700px]:gap-3 max-[420px]:grid-cols-1">
          {businessTypes.map(({ title, description, href, icon: Icon }, index) => (
            <Link
              className="who-use-card relative z-0 flex min-h-[236px] flex-col rounded-[18px] border border-[color:var(--line)] bg-linear-to-br from-[var(--paper)] to-[var(--surface-raised)] p-[22px] shadow-[0_2px_0_rgba(255,255,255,0.7),0_12px_24px_var(--card-shadow)] transition-[transform,border-color,box-shadow] duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] focus-visible:z-[2] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--focus-ring)] max-[700px]:min-h-[220px] max-[700px]:rounded-2xl max-[700px]:p-4 max-[420px]:min-h-0"
              data-reveal
              href={href}
              key={title}
              style={{ "--reveal-order": index } as CSSProperties}
            >
              <span className="who-use-icon grid size-11 shrink-0 place-items-center rounded-xl bg-[#ff8b00]/10 text-[#ff8b00] dark:bg-[#ff8b00]/20"><Icon size={22} aria-hidden="true" /></span>
              <span className="who-use-card-index absolute right-[22px] top-7 text-xs font-bold tracking-[0.08em] text-[var(--muted)]">0{index + 1}</span>
              <strong className="mt-[19px] font-[family-name:var(--font-baloo-2)] text-[19px] font-semibold leading-[1.15] tracking-[-0.025em] text-[var(--ink)]">{title}</strong>
              <span className="who-use-description mt-2 text-[15px] leading-[23px] text-[var(--muted)] max-[700px]:text-sm max-[700px]:leading-[21px] max-[420px]:max-w-[300px]">{description}</span>
              <span className="who-use-arrow mt-auto flex justify-end pt-[10px] text-[#ff8b00]"><ArrowUpRight size={18} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
