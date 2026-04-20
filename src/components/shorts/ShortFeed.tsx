"use client";

import { useEffect, useRef, useState } from "react";
import ShortCard from "./ShortCard";
import { useShorts } from "@/hooks/useShorts";

export default function ShortFeed() {
  const { data, loading } = useShorts();

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

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      {data.map((item, index) => (
        <div
          key={item.id}
          data-index={index}
          className="h-screen snap-start"
        >
          <ShortCard
            src={item.mediaUrl}
            isActive={activeIndex === index}
            preload={index === activeIndex + 1}
          />
        </div>
      ))}
    </div>
  );
}
