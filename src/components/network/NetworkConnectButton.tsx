"use client";

import { useEffect, useState } from "react";
import {
  sendConnectionRequest,
  acceptConnection,
  getConnectionStatus,
} from "@/lib/network";

type Status = "none" | "pending" | "connected";

type Props = {
  currentUserId: string;
  targetUserId: string;
};

export default function NetworkConnectButton({
  currentUserId,
  targetUserId,
}: Props) {
  const [status, setStatus] = useState<Status>("none");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      const s = await getConnectionStatus(
        currentUserId,
        targetUserId
      );
      setStatus(s as Status);
    };

    load();
  }, [currentUserId, targetUserId]);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);

    try {
      if (status === "none") {
        await sendConnectionRequest(currentUserId, targetUserId);
        setStatus("pending");
      } else if (status === "pending") {
        await acceptConnection(targetUserId, currentUserId);
        setStatus("connected");
      }
    } finally {
      setLoading(false);
    }
  };

  const label =
    status === "none"
      ? "Connect"
      : status === "pending"
      ? "Accept"
      : "Connected";

  return (
    <button
      onClick={handleClick}
      disabled={loading || status === "connected"}
      className="px-4 py-2 rounded-xl text-sm border"
    >
      {loading ? "..." : label}
    </button>
  );
}
