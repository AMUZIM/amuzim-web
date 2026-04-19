"use client";

import { useState } from "react";
import ShortCard from "./ShortCard";

const mock = [
  "/videos/1.mp4",
  "/videos/2.mp4",
  "/videos/3.mp4",
];

export default function ShortFeed() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-full overflow-y-scroll snap-y snap-mandatory">
      {mock.map((src, index) => (
        <div
          key={index}
          className="h-screen snap-start"
          onMouseEnter={() => setActiveIndex(index)}
        >
          <ShortCard src={src} isActive={activeIndex === index} />
        </div>
      ))}
    </div>
  );
}
