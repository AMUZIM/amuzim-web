"use client";

import VideoPlayer from "./VideoPlayer";

type Props = {
  src: string;
  isActive: boolean;
};

export default function ShortCard({ src, isActive }: Props) {
  return (
    <div className="h-screen w-full relative bg-black">
      <VideoPlayer src={src} isActive={isActive} />
    </div>
  );
}
