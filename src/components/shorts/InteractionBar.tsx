"use client";

import { useState } from "react";

export default function InteractionBar() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="absolute right-4 bottom-20 flex flex-col items-center gap-4 text-white">
      <button
        onClick={() => setLiked(!liked)}
        className="text-sm bg-black/40 px-3 py-2 rounded-full"
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}
