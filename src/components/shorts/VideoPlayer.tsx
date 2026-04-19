"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  isActive: boolean;
};

export default function VideoPlayer({ src, isActive }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-full object-cover"
      loop
      muted
      playsInline
      preload="metadata"
    />
  );
}
