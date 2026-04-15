"use client";

import { useEffect, useState } from "react";
import { getThreadMessages } from "@/lib/network";
import { NetworkMessage } from "@/lib/network/message";

type Props = {
  threadId: string;
};

export default function NetworkThreadView({ threadId }: Props) {
  const [messages, setMessages] = useState<NetworkMessage[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getThreadMessages(threadId);
      setMessages(data);
    };

    load();
  }, [threadId]);

  if (!messages.length) {
    return (
      <div className="text-sm text-gray-400">
        No messages yet
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {messages.map((m) => (
        <div
          key={m.id}
          className="text-sm border p-2 rounded-lg"
        >
          <div className="text-xs text-gray-400">
            {m.senderId}
          </div>
          <div>{m.content}</div>
        </div>
      ))}
    </div>
  );
}
