"use client";

import VideoPlayer from "./VideoPlayer";
import InteractionBar from "./InteractionBar";

type Props = {
  src: string;
  isActive: boolean;
  preload?: boolean;
};

export default function ShortCard({ src, isActive, preload }: Props) {
  return (
    <div className="h-screen w-full relative bg-black">
      <VideoPlayer src={src} isActive={isActive} preload={preload} />
      <InteractionBar />
    </div>
  );
}
