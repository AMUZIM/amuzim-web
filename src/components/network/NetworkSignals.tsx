"use client";

import { useEffect, useState } from "react";
import { getUserSignals } from "@/lib/network";
import NetworkState from "./NetworkState";

type Signal = {
  id: string;
  type: string;
  strength: number;
};

type Props = {
  userId: string;
};

export default function NetworkSignals({ userId }: Props) {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getUserSignals(userId);
        setSignals(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [userId]);

  if (loading) return <NetworkState type="loading" />;

  if (!signals.length)
    return <NetworkState type="empty" message="No signals yet" />;

  return (
    <div className="flex flex-col gap-2">
      {signals.map((s) => (
        <div
          key={s.id}
          className="text-sm border p-2 rounded-lg flex justify-between"
        >
          <span>{s.type}</span>
          <span className="text-xs text-gray-400">
            strength: {s.strength}
          </span>
        </div>
      ))}
    </div>
  );
}
