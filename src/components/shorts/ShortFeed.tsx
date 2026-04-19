"use client";

import { useEffect, useRef, useState } from "react";
import ShortCard from "./ShortCard";

const mock = [
  "/videos/1.mp4",
  "/videos/2.mp4",
  "/videos/3.mp4",
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full overflow-y-scroll snap-y snap-mandatory"
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
