"use client";

import { Fragment, useEffect } from "react";
import type { CSSProperties } from "react";

type MotionKeyframe = Keyframe[];

export function MotionController() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const wordTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-tagline-word]"));
    const storyTargets = revealTargets.filter((target) => target.hasAttribute("data-story"));
    const revealedTargets = new WeakSet<HTMLElement>();
    const activeAnimations = new Set<Animation>();
    let revealObserver: IntersectionObserver | null = null;
    let wordObserver: IntersectionObserver | null = null;

    const animate = (target: HTMLElement, keyframes: MotionKeyframe, delay: number) => {
      const animation = target.animate(keyframes, {
        duration: 960,
        delay,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "both",
      });
      activeAnimations.add(animation);
      animation.addEventListener(
        "finish",
        () => {
          animation.cancel();
          activeAnimations.delete(animation);
        },
        { once: true },
      );
      animation.addEventListener(
        "cancel",
        () => activeAnimations.delete(animation),
        { once: true },
      );
    };

    const reveal = (target: HTMLElement) => {
      if (revealedTargets.has(target)) return;
      revealedTargets.add(target);
      const style = window.getComputedStyle(target);
      const order = Number.parseFloat(style.getPropertyValue("--reveal-order")) || 0;
      const distance = style.getPropertyValue("--reveal-distance").trim() || "52px";
      animate(
        target,
        [
          { opacity: 0, transform: `translateY(${distance}) scale(0.97)`, filter: "blur(7px)" },
          { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" },
        ],
        order * 95,
      );
    };

    const revealWord = (word: HTMLElement) => {
      const index = Number.parseFloat(window.getComputedStyle(word).getPropertyValue("--word-index")) || 0;
      animate(
        word,
        [
          { opacity: 0, transform: "translateY(14px) rotateX(-14deg)", filter: "blur(4px)" },
          { opacity: 1, transform: "translateY(0) rotateX(0deg)", filter: "blur(0px)" },
        ],
        index * 50,
      );
    };

    const setStoryAnimations = (target: HTMLElement, shouldPlay: boolean) => {
      const descendants = [target, ...Array.from(target.querySelectorAll<HTMLElement>("*"))];
      descendants.forEach((element) => {
        element.getAnimations().forEach((animation) => {
          if (shouldPlay) {
            if (animation.playState !== "running") animation.play();
          } else if (animation.playState !== "paused" && animation.playState !== "finished") {
            animation.pause();
          }
        });
      });
    };

    const stopMotion = () => {
      revealObserver?.disconnect();
      wordObserver?.disconnect();
      revealObserver = null;
      wordObserver = null;
      activeAnimations.forEach((animation) => animation.cancel());
      activeAnimations.clear();
      storyTargets.forEach((target) => setStoryAnimations(target, false));
    };

    const startMotion = () => {
      if (reduceMotion.matches || !("IntersectionObserver" in window)) return;

      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              reveal(target);
              if (target.hasAttribute("data-story")) {
                setStoryAnimations(target, true);
              } else {
                observer.unobserve(target);
              }
            } else if (target.hasAttribute("data-story")) {
              setStoryAnimations(target, false);
            }
          });
        },
        {
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.2,
        },
      );
      revealTargets.forEach((target) => revealObserver?.observe(target));

      wordObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            revealWord(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          });
        },
        {
          rootMargin: "-42% 0px -42% 0px",
          threshold: 0,
        },
      );
      wordTargets.forEach((word) => wordObserver?.observe(word));
    };

    const handleMotionPreferenceChange = () => {
      stopMotion();
      startMotion();
    };

    startMotion();
    reduceMotion.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      reduceMotion.removeEventListener("change", handleMotionPreferenceChange);
      stopMotion();
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
