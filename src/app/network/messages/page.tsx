"use client";

import { useEffect, useState } from "react";
import { getUserThreads } from "@/lib/network";
import { NetworkThread } from "@/lib/network/thread";
import NetworkThreadView from "@/components/network/NetworkThreadView";

export default function MessagesPage() {
  const userId = "user_1";

  const [threads, setThreads] = useState<NetworkThread[]>([]);
  const [activeThread, setActiveThread] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await getUserThreads(userId);
      setThreads(data);

      if (data.length && !activeThread) {
        setActiveThread(data[0].id);
      }
    };

    load();
  }, []);

  return (
    <div className="flex gap-4">
      <div className="w-1/3 border rounded-xl p-2 flex flex-col gap-2">
        {threads.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveThread(t.id)}
            className="text-left text-sm border p-2 rounded-lg"
          >
            {t.participants.join(" / ")}
          </button>
        ))}
      </div>

      <div className="flex-1 border rounded-xl p-4">
        {activeThread ? (
          <NetworkThreadView threadId={activeThread} />
        ) : (
          <div className="text-sm text-gray-400">
            No thread selected
          </div>
        )}
      </div>
    </div>
  );
}
