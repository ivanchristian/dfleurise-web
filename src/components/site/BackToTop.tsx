"use client";

import { useEffect, useState } from "react";

const getScrollTop = () =>
  Math.max(
    window.scrollY,
    document.scrollingElement?.scrollTop ?? 0,
    document.documentElement.scrollTop,
    document.body.scrollTop,
  );

const getScrollableElements = () => {
  const elements = Array.from(document.querySelectorAll<HTMLElement>("*"));

  return elements.filter((element) => {
    const style = window.getComputedStyle(element);
    const canScrollY = /(auto|scroll|overlay)/.test(`${style.overflowY}${style.overflow}`);

    return canScrollY && element.scrollHeight > element.clientHeight;
  });
};

const scrollElementToTop = (element: Element) => {
  element.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
  element.scrollTop = 0;
  element.scrollLeft = 0;
};

const scrollEverythingToTop = () => {
  document.documentElement.classList.add("is-jumping-to-top");

  [
    document.scrollingElement,
    document.documentElement,
    document.body,
    ...getScrollableElements(),
  ]
    .filter(Boolean)
    .forEach((element) => scrollElementToTop(element as Element));

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  window.scrollBy({ top: -999999, left: 0, behavior: "auto" });

  const topAnchor = document.getElementById("top");
  if (topAnchor) {
    const offset = topAnchor.getBoundingClientRect().top;
    if (Math.abs(offset) > 1) {
      window.scrollBy({ top: offset, left: 0, behavior: "auto" });
    }
  }
};

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

const animateEverythingToTop = () => {
  document.documentElement.classList.add("is-jumping-to-top");

  const scrollTargets = [
    document.scrollingElement,
    document.documentElement,
    document.body,
    ...getScrollableElements(),
  ].filter(Boolean) as Element[];

  const startWindowTop = getScrollTop();
  const startTops = new Map<Element, number>(
    scrollTargets.map((target) => [target, target.scrollTop]),
  );
  const duration = 900;
  const startedAt = performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = easeOutCubic(progress);
    const nextWindowTop = startWindowTop * (1 - eased);

    window.scrollTo({ top: nextWindowTop, left: 0, behavior: "auto" });

    scrollTargets.forEach((target) => {
      const startTop = startTops.get(target) ?? 0;
      target.scrollTop = startTop * (1 - eased);
      target.scrollLeft = 0;
    });

    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }

    scrollEverythingToTop();
    window.setTimeout(() => {
      document.documentElement.classList.remove("is-jumping-to-top");
    }, 80);
  };

  requestAnimationFrame(tick);
};

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const hero = document.querySelector<HTMLElement>(".hero-shell");
      const threshold = hero ? hero.offsetTop + hero.offsetHeight - 80 : 480;
      setIsVisible(getScrollTop() >= threshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    document.addEventListener("scroll", updateVisibility, { passive: true, capture: true });
    window.addEventListener("resize", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      document.removeEventListener("scroll", updateVisibility, { capture: true });
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const handleBackToTop = () => {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);

    animateEverythingToTop();
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onPointerDown={handleBackToTop}
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
    </button>
  );
}
