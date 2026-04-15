"use client";

import { useEffect, useState } from "react";
import { getUserNotifications, markAsRead } from "@/lib/network";
import NetworkState from "./NetworkState";

type Notification = {
  id: string;
  type: string;
  fromUserId?: string;
  read: boolean;
};

type Props = {
  userId: string;
};

export default function NetworkNotifications({ userId }: Props) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getUserNotifications(userId);
        setNotifications(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [userId]);

  const handleRead = async (id: string) => {
    await markAsRead(id);
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  if (loading) return <NetworkState type="loading" />;

  if (!notifications.length)
    return <NetworkState type="empty" message="No notifications" />;

  return (
    <div className="flex flex-col gap-2">
      {notifications.map((n) => (
        <div
          key={n.id}
          onClick={() => handleRead(n.id)}
          className={`text-sm border p-2 rounded-lg cursor-pointer transition ${
            n.read ? "opacity-50" : "hover:bg-gray-50"
          }`}
        >
          {n.type} from {n.fromUserId || "system"}
        </div>
      ))}
    </div>
  );
}
