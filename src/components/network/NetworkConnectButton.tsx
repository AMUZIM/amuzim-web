"use client";

import { useEffect, useState } from "react";
import {
  sendConnectionRequest,
  acceptConnection,
  removeConnection,
  getConnectionStatus,
} from "@/lib/network";

type Status =
  | "none"
  | "pending_sent"
  | "pending_received"
  | "connected";

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
        setStatus("pending_sent");
      } else if (status === "pending_received") {
        await acceptConnection(targetUserId, currentUserId);
        setStatus("connected");
      } else {
        await removeConnection(currentUserId, targetUserId);
        setStatus("none");
      }
    } finally {
      setLoading(false);
    }
  };

  const getLabel = () => {
    if (status === "none") return "Connect";
    if (status === "pending_sent") return "Pending";
    if (status === "pending_received") return "Accept";
    return "Connected";
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading || status === "pending_sent"}
      className="px-4 py-2 rounded-xl text-sm border"
    >
      {loading ? "..." : getLabel()}
    </button>
  );
}
