"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  isActive: boolean;
  preload?: boolean;
};

export default function VideoPlayer({ src, isActive, preload }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showIcon, setShowIcon] = useState<"play" | "pause" | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setShowIcon("play");
    } else {
      video.pause();
      setShowIcon("pause");
    }

    setTimeout(() => setShowIcon(null), 500);
  };

  return (
    <div className="relative w-full h-full bg-black">
      {!loaded && (
        <div className="absolute inset-0 bg-black animate-pulse" />
      )}

      <video
        ref={videoRef}
        src={src}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loop
        muted
        playsInline
        preload={preload ? "auto" : "metadata"}
        onClick={handleClick}
        onLoadedData={() => setLoaded(true)}
      />

      {showIcon && (
        <div className="absolute inset-0 flex items-center justify-center text-white text-5xl pointer-events-none">
          {showIcon === "play" ? "▶️" : "⏸️"}
        </div>
      )}
    </div>
  );
}
