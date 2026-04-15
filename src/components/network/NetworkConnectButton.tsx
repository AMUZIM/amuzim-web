"use client";

import { useEffect, useState } from "react";
import {
  sendConnectionRequest,
  acceptConnection,
  removeConnection,
  getConnectionStatus,
} from "@/lib/network";

type Status = "none" | "pending" | "connected";

type Props = {
  currentUserId: string;
  targetUserId: string;
  isReceiver?: boolean; // clave para aceptar
};

export default function NetworkConnectButton({
  currentUserId,
  targetUserId,
  isReceiver = false,
}: Props) {
  const [status, setStatus] = useState<Status>("none");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadStatus = async () => {
      const s = await getConnectionStatus(
        currentUserId,
        targetUserId
      );
      setStatus(s as Status);
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
      } else if (status === "pending" && isReceiver) {
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
    if (status === "pending") return isReceiver ? "Accept" : "Pending";
    return "Connected";
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="px-4 py-2 rounded-xl text-sm border"
    >
      {loading ? "..." : getLabel()}
    </button>
  );
}
