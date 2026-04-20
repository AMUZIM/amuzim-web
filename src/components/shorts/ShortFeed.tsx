"use client";

import { useEffect, useRef, useState } from "react";
import ShortCard from "./ShortCard";

const mock = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
];

export default function ShortFeed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(
      container.querySelectorAll("[data-index]")
    ) as HTMLElement[];

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        let closestIndex = 0;
        let closestOffset = Infinity;

        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const offset = Math.abs(rect.top);

          if (offset < closestOffset) {
            closestOffset = offset;
            closestIndex = Number(el.dataset.index);
          }
        });

        setActiveIndex(closestIndex);
        ticking = false;
      });
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      {mock.map((src, index) => (
        <div
          key={index}
          data-index={index}
          className="h-screen snap-start"
        >
          <ShortCard src={src} isActive={activeIndex === index} />
        </div>
      ))}
    </div>
  );
}
