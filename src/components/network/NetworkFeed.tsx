"use client";

import { useEffect, useState } from "react";
import { getNetworkFeed } from "@/lib/network";
import NetworkItem from "@/components/network/NetworkItem";
import NetworkState from "@/components/network/NetworkState";

type Activity = {
  id: string;
  type: string;
  targetUserId?: string;
  createdAt: string;
};

type Props = {
  userId: string;
};

export default function NetworkFeed({ userId }: Props) {
  const [feed, setFeed] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getNetworkFeed(userId);
        setFeed(data as Activity[]);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [userId]);

  if (loading) return <NetworkState type="loading" />;

  if (!feed.length)
    return <NetworkState type="empty" message="No activity yet" />;

  return (
    <div className="flex flex-col gap-2">
      {feed.map((item) => (
        <NetworkItem key={item.id}>
          <div className="text-sm flex justify-between">
            <span>{item.type}</span>
            <span className="text-gray-400 text-xs">
              {item.targetUserId || "system"}
            </span>
          </div>
        </NetworkItem>
      ))}
    </div>
  );
}
