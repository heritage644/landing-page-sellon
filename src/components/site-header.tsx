"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight, CaretDown, List, X } from "@phosphor-icons/react";
import Link from "next/link";
import SiteLogo from "@/components/site-logo";
import { MAIN_WEBSITE_URL } from "@/lib/site-links";

type SiteHeaderProps = {
  currentPath?: string;
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "For Retailers", href: "/retailers" },
  { label: "For Suppliers", href: "/suppliers" },
  { label: "For Entrepreneurs", href: "/entrepreneurs" },
  { label: "For Enterprise", href: "/enterprise" },
  { label: "Analytics", href: "/analytics" },
];

const featureLinks = [
  { label: "Storefronts", href: "/features#storefronts", description: "A dedicated place to present products" },
  { label: "Product Management", href: "/features#product-management", description: "Organise catalogues and product details" },
  { label: "Orders", href: "/features#orders", description: "Explore the planned order workflows" },
  { label: "Business Analytics", href: "/analytics", description: "Understand the product direction" },
];

export default function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const main = document.getElementById("main");
    const footer = document.querySelector<HTMLElement>(".site-footer");
    const previousMainInert = main?.inert ?? false;
    const previousFooterInert = footer?.inert ?? false;

    document.body.style.overflow = "hidden";
    if (main) main.inert = true;
    if (footer) footer.inert = true;

    const focusableElements = () =>
      Array.from(
        mobileMenuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), summary') ?? [],
      );

    const focusFrame = window.requestAnimationFrame(() => {
      (closeButtonRef.current ?? focusableElements()[0])?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = focusableElements();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      if (main) main.inert = previousMainInert;
      if (footer) footer.inert = previousFooterInert;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  const closeOnNavigate = () => {
    if (menuOpen) closeMenu();
  };

  return (
    <header className="site-header" data-hero-header={currentPath === "/" ? "" : undefined}>
      <div className="header-shell" inert={menuOpen}>
        <Link
          className="brand-lockup"
          href="/"
          aria-label="Sellonit home"
          aria-current={currentPath === "/" ? "page" : undefined}
          data-hero-logo={currentPath === "/" ? "" : undefined}
        >
          <SiteLogo className="brand-logo" eager />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.slice(0, 5).map((item) => (
            <Link key={item.href} href={item.href} aria-current={currentPath === item.href ? "page" : undefined} data-hero-nav-item>
              {item.label}
            </Link>
          ))}
          <details className="header-dropdown" data-hero-nav-item>
            <summary className="header-dropdown-trigger">Features <CaretDown size={13} weight="bold" aria-hidden="true" /></summary>
            <div className="header-dropdown-panel">
              {featureLinks.map((item) => <Link href={item.href} key={item.label} onClick={closeOnNavigate}><strong>{item.label}</strong><small>{item.description}</small></Link>)}
              <Link href="/features" className="header-dropdown-all" onClick={closeOnNavigate}>Explore all features <ArrowUpRight size={14} aria-hidden="true" /></Link>
            </div>
          </details>
          <Link href="/analytics" aria-current={currentPath === "/analytics" ? "page" : undefined} data-hero-nav-item>Analytics</Link>
        </nav>

        <div className="header-actions">
          <a className="header-login" href={MAIN_WEBSITE_URL} data-hero-nav-item>Log in</a>
          <a className="header-cta" href={MAIN_WEBSITE_URL} data-hero-nav-item><span>Get Started</span><ArrowUpRight size={15} weight="bold" aria-hidden="true" /></a>
        </div>

        <button
          ref={menuButtonRef}
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <List className="menu-toggle-open-icon" size={24} weight="regular" aria-hidden="true" />
          <X className="menu-toggle-close-icon" size={24} weight="regular" aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-label="Mobile site navigation"
        aria-modal={menuOpen || undefined}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-menu-top">
          <Link className="brand-lockup" href="/" onClick={closeMenu} aria-label="Sellonit home"><SiteLogo className="brand-logo" /></Link>
          <button ref={closeButtonRef} className="mobile-menu-close" type="button" onClick={closeMenu} aria-label="Close navigation menu">
            <X size={24} weight="regular" aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.slice(0, 5).map((item, index) => (
            <Link key={item.href} href={item.href} style={{ "--menu-index": index } as CSSProperties} onClick={closeMenu} aria-current={currentPath === item.href ? "page" : undefined}>
              <span>{item.label}</span><ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          ))}
          <details className="mobile-feature-dropdown" style={{ "--menu-index": 5 } as CSSProperties}>
            <summary><span>Features</span><CaretDown size={19} aria-hidden="true" /></summary>
            <div className="mobile-feature-links">{featureLinks.map((item) => <Link href={item.href} key={item.label} onClick={closeMenu}>{item.label}<ArrowUpRight size={15} aria-hidden="true" /></Link>)}<Link href="/features" onClick={closeMenu}>All features<ArrowUpRight size={15} aria-hidden="true" /></Link></div>
          </details>
          <Link href="/analytics" style={{ "--menu-index": 6 } as CSSProperties} onClick={closeMenu} aria-current={currentPath === "/analytics" ? "page" : undefined}>
            <span>Analytics</span><ArrowUpRight size={19} aria-hidden="true" />
          </Link>
          <div className="mobile-menu-actions">
            <a className="button button-secondary" href={MAIN_WEBSITE_URL} onClick={closeMenu}>Log in <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="button button-primary" href={MAIN_WEBSITE_URL} onClick={closeMenu}>Get Started <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </nav>
        <p className="mobile-menu-note">Built around the way Nigerian businesses sell.</p>
      </div>
    </header>
  );
}
