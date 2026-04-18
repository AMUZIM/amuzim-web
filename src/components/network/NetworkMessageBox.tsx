"use client";

import { useState } from "react";
import { sendMessage } from "@/lib/network";

type Props = {
  currentUserId: string;
  targetUserId: string;
  onMessageSent?: () => void; // 🔹 nuevo hook
};

export default function NetworkMessageBox({
  currentUserId,
  targetUserId,
  onMessageSent,
}: Props) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!content.trim() || loading) return;

    setLoading(true);

    try {
      await sendMessage(currentUserId, targetUserId, content);
      setContent("");

      // 🔹 trigger refresh inmediato
      onMessageSent?.();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2 px-3 py-2 border-t border-neutral-200 bg-white">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
          }
       }}
       disabled={loading}
      />

      <button
        onClick={handleSend}
        disabled={loading || !content.trim()}
        className="px-3 py-2 text-sm border rounded-lg"
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}
