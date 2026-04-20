"use client";

import { useState } from "react";

export default function InteractionBar() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="absolute right-4 bottom-10 flex flex-col items-center gap-4 text-white">
      <button
        onClick={() => setLiked(!liked)}
        className="text-2xl transition-transform active:scale-125"
      >
        {liked ? "❤️" : "🤍"}
      </button>
      <span className="text-xs">Like</span>
    </div>
  );
}
