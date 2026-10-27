"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  List,
  X,
} from "@phosphor-icons/react";
import SiteLogo from "@/components/site-logo";
import { MAIN_WEBSITE_URL } from "@/lib/site-links";

type CurrentPage = "home" | "privacy" | "terms" | "not-found";

type SiteHeaderProps = {
  currentPage?: CurrentPage;
};

const navigation = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const homePrefix = currentPage === "home" ? "" : "/";

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return (
    <header className="site-header">
      <div className="header-shell">
        <a
          className="brand-lockup"
          href={homePrefix || "#top"}
          aria-label="Sellonit home"
          aria-current={currentPage === "home" ? "page" : undefined}
        >
          <SiteLogo className="brand-logo" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={`${homePrefix}${item.href}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={MAIN_WEBSITE_URL}>
          <span>Get started free</span>
          <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
        </a>

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
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-menu-top">
          <a className="brand-lockup" href={homePrefix || "#top"} onClick={closeMenu} aria-label="Sellonit home">
            <SiteLogo className="brand-logo" />
          </a>
          <button
            className="mobile-menu-close"
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <X size={24} weight="regular" aria-hidden="true" />
          </button>
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
