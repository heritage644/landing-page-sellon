"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const particles = [
  { x: "8%", y: "68%", size: "3px", delay: "-2s", duration: "8s" },
  { x: "15%", y: "42%", size: "2px", delay: "-6s", duration: "10s" },
  { x: "24%", y: "78%", size: "4px", delay: "-3s", duration: "9s" },
  { x: "32%", y: "58%", size: "2px", delay: "-7s", duration: "11s" },
  { x: "41%", y: "84%", size: "3px", delay: "-1s", duration: "8.5s" },
  { x: "50%", y: "71%", size: "2px", delay: "-5s", duration: "10.5s" },
  { x: "59%", y: "88%", size: "4px", delay: "-4s", duration: "9.5s" },
  { x: "67%", y: "62%", size: "2px", delay: "-8s", duration: "11.5s" },
  { x: "75%", y: "82%", size: "3px", delay: "-3.5s", duration: "8.8s" },
  { x: "84%", y: "72%", size: "2px", delay: "-6.5s", duration: "10.8s" },
  { x: "92%", y: "89%", size: "3px", delay: "-1.5s", duration: "9.2s" },
  { x: "97%", y: "58%", size: "2px", delay: "-4.5s", duration: "11.2s" },
];

export default function HeroAtmosphere() {
  const atmosphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const atmosphere = atmosphereRef.current;
    const hero = atmosphere?.closest<HTMLElement>("#top");
    if (!atmosphere || !hero) return;

    let isVisible = false;
    let frame = 0;
    let targetX = 0;
    let targetY = 0;

    const updateParallax = () => {
      frame = 0;
      if (!isVisible) return;

      const bounds = hero.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, ((targetX - bounds.left) / bounds.width - 0.5) * 2));
      const y = Math.max(-1, Math.min(1, ((targetY - bounds.top) / bounds.height - 0.5) * 2));

      atmosphere.style.setProperty("--parallax-photo-x", `${(-x * 7).toFixed(2)}px`);
      atmosphere.style.setProperty("--parallax-photo-y", `${(-y * 5).toFixed(2)}px`);
      atmosphere.style.setProperty("--parallax-wave-x", `${(x * 10).toFixed(2)}px`);
      atmosphere.style.setProperty("--parallax-wave-y", `${(y * 6).toFixed(2)}px`);
      atmosphere.style.setProperty("--parallax-beam-x", `${(x * 3).toFixed(2)}px`);
      atmosphere.style.setProperty("--parallax-particle-x", `${(x * 5).toFixed(2)}px`);
      atmosphere.style.setProperty("--parallax-particle-y", `${(y * 4).toFixed(2)}px`);
    };

    const requestParallax = () => {
      if (frame === 0) frame = window.requestAnimationFrame(updateParallax);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isVisible) return;
      targetX = event.clientX;
      targetY = event.clientY;
      requestParallax();
    };

    const handlePointerLeave = () => {
      targetX = hero.getBoundingClientRect().left + hero.clientWidth / 2;
      targetY = hero.getBoundingClientRect().top + hero.clientHeight / 2;
      requestParallax();
    };

    const pointerMotion = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
          isVisible = entry.isIntersecting;
          atmosphere.dataset.visible = String(isVisible);
          if (!isVisible && frame !== 0) {
            window.cancelAnimationFrame(frame);
            frame = 0;
          }
        }, { threshold: 0.06 })
      : null;

    if (observer) observer.observe(hero);
    else {
      isVisible = true;
      atmosphere.dataset.visible = "true";
    }

    if (pointerMotion.matches && !reducedMotion.matches) {
      hero.addEventListener("pointermove", handlePointerMove, { passive: true });
      hero.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    }

    return () => {
      observer?.disconnect();
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={atmosphereRef} className="hero-atmosphere" data-visible="false" aria-hidden="true">
      <div className="hero-photo-fade">
        <div className="hero-photo-parallax">
          <Image
            src="/lighthouse-shoreline.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-atmosphere-image"
          />
          <div className="hero-atmosphere-shade" />
        </div>
      </div>

      <div className="hero-lighthouse-glow" />
      <div className="hero-beacon-anchor">
        <span className="hero-beam" />
        <span className="hero-beam-core" />
      </div>

      <div className="hero-wave-parallax hero-wave-parallax-back">
        <svg className="hero-wave hero-wave-back" viewBox="0 0 1600 500" preserveAspectRatio="none">
          <path d="M0 175 C180 128 310 210 480 172 S780 123 955 171 1260 217 1600 145" />
          <path d="M0 246 C215 200 358 272 548 230 S890 190 1058 239 1380 287 1600 224" />
          <path d="M0 330 C210 289 398 360 615 320 S930 276 1120 326 1408 373 1600 311" />
        </svg>
      </div>
      <div className="hero-wave-parallax hero-wave-parallax-front">
        <svg className="hero-wave hero-wave-front" viewBox="0 0 1600 500" preserveAspectRatio="none">
          <path d="M0 282 C235 230 385 324 590 282 S914 226 1110 277 1400 333 1600 266" />
          <path d="M0 390 C190 347 355 417 560 379 S900 336 1090 384 1408 432 1600 374" />
        </svg>
      </div>

      <div className="hero-particles">
        {particles.map((particle, index) => (
          <span
            className="hero-particle"
            key={`${particle.x}-${particle.y}`}
            style={{
              "--particle-x": particle.x,
              "--particle-y": particle.y,
              "--particle-size": particle.size,
              "--particle-delay": particle.delay,
              "--particle-duration": particle.duration,
              "--particle-index": index,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="hero-atmosphere-vignette" />
    </div>
  );
}
