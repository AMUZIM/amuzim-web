"use client";

import { useState } from "react";
import { sendMessage } from "@/lib/network";

type Props = {
  currentUserId: string;
  targetUserId: string;
};

export default function NetworkMessageBox({
  currentUserId,
  targetUserId,
}: Props) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!content.trim() || loading) return;

    setLoading(true);

    try {
      await sendMessage(currentUserId, targetUserId, content);
      setContent("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a message..."
        className="flex-1 px-3 py-2 border rounded-lg text-sm"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="px-3 py-2 text-sm border rounded-lg"
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}
