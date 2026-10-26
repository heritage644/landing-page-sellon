"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  List,
  Storefront,
  X,
} from "@phosphor-icons/react";

type CurrentPage = "home" | "privacy" | "terms" | "not-found";

type SiteHeaderProps = {
  currentPage?: CurrentPage;
};

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
];

export default function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(currentPage === "home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const homePrefix = currentPage === "home" ? "" : "/";
  const howItWorksHref = `${homePrefix}#how-it-works`;
  const headerClassName = [
    "site-header",
    currentPage === "home" ? "site-header-home" : "",
    currentPage === "home" ? (isHeroVisible ? "is-hero-visible" : "is-over-content") : "",
  ].filter(Boolean).join(" ");

  useEffect(() => {
    if (currentPage !== "home") return;

    const hero = document.getElementById("top");
    if (!hero || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsHeroVisible(entry.isIntersecting);
    }, { threshold: 0.12 });

    observer.observe(hero);
    return () => observer.disconnect();
  }, [currentPage]);

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
    <header className={headerClassName}>
      <div className="header-shell">
        <a
          className="brand-lockup"
          href={homePrefix || "#top"}
          aria-label="Sellonit home"
          aria-current={currentPage === "home" ? "page" : undefined}
        >
          <span className="brand-mark" aria-hidden="true">
            <Storefront size={22} weight="fill" />
          </span>
          <span className="brand-wordmark">sellonit<span>.</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={`${homePrefix}${item.href}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={howItWorksHref}>
          <span>See how it works</span>
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
          <a className="brand-lockup" href={homePrefix || "#top"} onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">
              <Storefront size={22} weight="fill" />
            </span>
            <span className="brand-wordmark">sellonit<span>.</span></span>
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
            href={howItWorksHref}
            style={{ "--menu-index": navigation.length } as CSSProperties}
            onClick={closeMenu}
          >
            <span>See how it works</span>
            <ArrowUpRight size={20} weight="bold" aria-hidden="true" />
          </a>
        </nav>
        <p className="mobile-menu-note">A simple home for the things you sell.</p>
      </div>
    </header>
  );
}
