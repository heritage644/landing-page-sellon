"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import SiteLogo from "@/components/site-logo";
import ThemeToggle from "@/components/theme-toggle";
import { MAIN_WEBSITE_URL } from "@/lib/site-links";

type CurrentPage = "home" | "privacy" | "terms" | "not-found";

type SiteHeaderProps = {
  currentPage?: CurrentPage;
};

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Global reach", href: "#global-reach" },
  { label: "Analytics", href: "#analytics" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const homePrefix = currentPage === "home" ? "" : "/";

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
        mobileMenuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
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

  return (
    <header className="site-header" data-hero-header={currentPage === "home" ? "" : undefined}>
      <div className="header-shell" inert={menuOpen}>
        <a
          className="brand-lockup"
          href={homePrefix || "#top"}
          aria-label="Sellonit home"
          aria-current={currentPage === "home" ? "page" : undefined}
          data-hero-logo={currentPage === "home" ? "" : undefined}
        >
          <SiteLogo className="brand-logo" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={`${homePrefix}${item.href}`} data-hero-nav-item>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={MAIN_WEBSITE_URL} data-hero-nav-item>
          <span>Get started free</span>
          <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
        </a>

        <ThemeToggle className="header-theme-toggle" />

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
          <a className="brand-lockup" href={homePrefix || "#top"} onClick={closeMenu} aria-label="Sellonit home">
            <SiteLogo className="brand-logo" />
          </a>
          <div className="mobile-menu-tools">
            <ThemeToggle className="mobile-theme-toggle" />
            <button
              ref={closeButtonRef}
              className="mobile-menu-close"
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <X size={24} weight="regular" aria-hidden="true" />
            </button>
          </div>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={`${homePrefix}${item.href}`}
              style={{ "--menu-index": index } as CSSProperties}
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={20} weight="regular" aria-hidden="true" />
            </a>
          ))}
          <a
            className="mobile-nav-cta"
            href={MAIN_WEBSITE_URL}
            style={{ "--menu-index": navigation.length } as CSSProperties}
            onClick={closeMenu}
          >
            <span>Get started free</span>
            <ArrowUpRight size={20} weight="bold" aria-hidden="true" />
          </a>
        </nav>
        <p className="mobile-menu-note">A simple home for the things you sell.</p>
      </div>
    </header>
  );
}
