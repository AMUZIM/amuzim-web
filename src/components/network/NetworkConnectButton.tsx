"use client";

import { useEffect, useState } from "react";
import {
  sendConnectionRequest,
  cancelConnection,
  getConnectionStatus,
} from "@/lib/network/connect";

type Props = {
  currentUserId: string;
  targetUserId: string;
};

export default function NetworkConnectButton({
  currentUserId,
  targetUserId,
}: Props) {
  const [status, setStatus] = useState<
    "none" | "pending" | "connected"
  >("none");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadStatus = async () => {
      const s = await getConnectionStatus(
        currentUserId,
        targetUserId
      );
      setStatus(s === "accepted" ? "connected" : s);
    };

    loadStatus();
  }, [currentUserId, targetUserId]);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);

    try {
      if (status === "none") {
        await sendConnectionRequest(currentUserId, targetUserId);
        setStatus("pending");
      } else if (status === "pending") {
        // simple cancel (find + remove)
        setStatus("none");
      }
    } finally {
      setLoading(false);
    }
  };

  const label =
    status === "none"
      ? "Connect"
      : status === "pending"
      ? "Pending"
      : "Connected";

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="px-4 py-2 rounded-xl text-sm border"
    >
      {loading ? "..." : label}
    </button>
  );
}
