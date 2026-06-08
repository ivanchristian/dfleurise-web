"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const hero = document.querySelector<HTMLElement>(".hero-shell");
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
      setIsVisible(window.scrollY >= heroBottom - 80);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const handleBackToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const topAnchor = document.getElementById("top");
    const scrollTargets = [
      document.scrollingElement,
      document.documentElement,
      document.body,
    ].filter(Boolean) as Element[];

    scrollTargets.forEach((target) => {
      target.scrollTop = 0;
      target.scrollLeft = 0;
    });

    window.scrollTo(0, 0);
    topAnchor?.scrollIntoView({ behavior: "smooth", block: "start" });

    requestAnimationFrame(() => {
      scrollTargets.forEach((target) => {
        target.scrollTop = 0;
        target.scrollLeft = 0;
      });
      window.scrollTo(0, 0);
    });

    setTimeout(() => {
      scrollTargets.forEach((target) => {
        target.scrollTop = 0;
        target.scrollLeft = 0;
      });
      window.scrollTo(0, 0);
    }, 260);
  };

  return (
    <a
      href="#top"
      aria-label="Back to top"
      onClick={handleBackToTop}
      className={`back-to-top ${isVisible ? "is-visible" : ""}`}
    >
      <svg
        aria-hidden="true"
        className="back-to-top-icon"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M6 14.5 12 8l6 6.5" />
      </svg>
      <span>Top</span>
    </a>
  );
}
