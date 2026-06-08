"use client";

import type { MouseEvent } from "react";

export function BackToTop() {
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
      className="back-to-top is-visible"
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
