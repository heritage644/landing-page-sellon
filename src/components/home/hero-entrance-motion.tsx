"use client";

import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const releaseHeroPending = () => {
  if (typeof document !== "undefined") {
    document.documentElement.removeAttribute("data-hero-pending");
  }
};

export default function HeroEntranceMotion() {
  useIsomorphicLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      releaseHeroPending();
    } else {
      document.documentElement.setAttribute("data-hero-pending", "");
    }

    const header = document.querySelector<HTMLElement>("[data-hero-header]");
    const main = document.getElementById("main");
    if (!header || !main) {
      releaseHeroPending();
      return;
    }

    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const headerShell = header.querySelector<HTMLElement>(".header-shell");
        const logo = header.querySelector<HTMLElement>("[data-hero-logo]");
        const navItems = Array.from(header.querySelectorAll<HTMLElement>("[data-hero-nav-item]"));
        const introLabel = main.querySelector<HTMLElement>(".hero-intro-label");
        const words = Array.from(main.querySelectorAll<HTMLElement>("[data-hero-word]"));
        const subtitle = main.querySelector<HTMLElement>(".hero-subtitle");
        const actions = main.querySelector<HTMLElement>(".hero-actions");
        const reassurance = main.querySelector<HTMLElement>(".hero-reassurance");
        const visual = main.querySelector<HTMLElement>("[data-hero-visual]");

        const timeline = gsap.timeline({ defaults: { overwrite: "auto" } });

        if (headerShell) {
          timeline.fromTo(
            headerShell,
            { y: -20, opacity: 0, filter: "blur(8px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.64, ease: "back.out(1.25)" },
            0,
          );
        }

        if (logo) {
          timeline.fromTo(
            logo,
            { y: -9, opacity: 0, scale: 0.96 },
            { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.6)" },
            0.12,
          );
        }

        if (navItems.length) {
          timeline.fromTo(
            navItems,
            { y: -10, opacity: 0, filter: "blur(3px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.48,
              stagger: 0.065,
              ease: "back.out(1.45)",
            },
            0.2,
          );
        }

        if (introLabel) {
          timeline.fromTo(
            introLabel,
            { y: 16, opacity: 0, filter: "blur(4px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.56, ease: "power3.out" },
            0.22,
          );
        }

        if (words.length) {
          gsap.set(words, { transformPerspective: 760, transformOrigin: "50% 100%" });
          timeline.fromTo(
            words,
            { yPercent: 118, rotateX: -76, opacity: 0, filter: "blur(5px)" },
            {
              yPercent: 0,
              rotateX: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.82,
              stagger: 0.028,
              ease: "back.out(1.5)",
            },
            0.32,
          );
        }

        const copyTargets = [subtitle, actions, reassurance].filter(
          (element): element is HTMLElement => element !== null,
        );
        if (copyTargets.length) {
          timeline.fromTo(
            copyTargets,
            { y: 24, opacity: 0, filter: "blur(7px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.72,
              stagger: 0.12,
              ease: "power3.out",
            },
            0.92,
          );
        }

        if (visual) {
          timeline.fromTo(
            visual,
            { y: 34, opacity: 0, scale: 0.96, filter: "blur(7px)" },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.94,
              ease: "power3.out",
            },
            0.48,
          );
        }
      }, document.body);

      // fromTo renders the initial animation states before removing the pre-paint guard.
      releaseHeroPending();
      return () => context.revert();
    });

    motion.add("(prefers-reduced-motion: reduce)", () => {
      releaseHeroPending();
    });

    return () => {
      motion.revert();
      releaseHeroPending();
    };
  }, []);

  return null;
}
