"use client";

import { useEffect, useState } from "react";
import { getNetworkFeed } from "@/lib/network";
import NetworkItem from "./NetworkItem";
import NetworkState from "./NetworkState";
import { NetworkActivity } from "@/lib/network/activity";

type Props = {
  userId: string;
};

export default function NetworkFeed({ userId }: Props) {
  const [feed, setFeed] = useState<NetworkActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getNetworkFeed(userId);
        setFeed(data);
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
    <div className="flex flex-col gap-3">
      {feed.map((item) => (
        <NetworkItem key={item.id}>
          <div className="text-sm">
            {item.type} — {item.targetUserId || "system"}
          </div>
        </NetworkItem>
      ))}
    </div>
  );
}
