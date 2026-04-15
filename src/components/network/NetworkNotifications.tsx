"use client";

import { useEffect, useState } from "react";
import { getUserNotifications, markAsRead } from "@/lib/network";

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

  useEffect(() => {
    const load = async () => {
      const data = await getUserNotifications(userId);
      setNotifications(data);
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

  if (!notifications.length) {
    return (
      <div className="text-sm text-gray-400">
        No notifications
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {notifications.map((n) => (
        <div
          key={n.id}
          onClick={() => handleRead(n.id)}
          className={`text-sm border p-2 rounded-lg cursor-pointer ${
            n.read ? "opacity-50" : ""
          }`}
        >
          {n.type} from {n.fromUserId || "system"}
        </div>
      ))}
    </div>
  );
}
