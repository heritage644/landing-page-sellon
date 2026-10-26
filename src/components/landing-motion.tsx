"use client";

import { Fragment, useEffect } from "react";
import type { CSSProperties } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    root.classList.add("motion-ready");

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const wordTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tagline-word]"),
    );

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => {
        target.dataset.revealed = "true";
        target.dataset.inview = "true";
      });
      wordTargets.forEach((word) => {
        word.dataset.lit = "true";
      });
      return () => root.classList.remove("motion-ready");
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.dataset.revealed = "true";
            target.dataset.inview = "true";
            if (!target.hasAttribute("data-story")) observer.unobserve(target);
          } else if (target.hasAttribute("data-story")) {
            target.dataset.inview = "false";
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.2,
      },
    );

    revealTargets.forEach((target) => {
      if (target.hasAttribute("data-story")) target.dataset.inview = "false";
      revealObserver.observe(target);
    });

    const wordObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.lit = "true";
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0,
      },
    );

    wordTargets.forEach((word) => wordObserver.observe(word));

    return () => {
      revealObserver.disconnect();
      wordObserver.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}

type TaglineRevealProps = {
  lines: readonly string[];
};

export function TaglineReveal({ lines }: TaglineRevealProps) {
  return (
    <p className="tagline-copy">
      {lines.map((line, lineIndex) => {
        const words = line.split(" ");
        const startIndex = lines
          .slice(0, lineIndex)
          .reduce((total, previousLine) => total + previousLine.split(" ").length, 0);

        return (
          <span className="tagline-line" key={line}>
            {words.map((word, index) => (
              <Fragment key={`${line}-${word}-${index}`}>
                <span
                  className="tagline-word"
                  data-tagline-word
                  style={{ "--word-index": startIndex + index } as CSSProperties}
                >
                  {word}
                </span>
                {index < words.length - 1 ? " " : null}
              </Fragment>
            ))}
          </span>
        );
      })}
    </p>
  );
}
