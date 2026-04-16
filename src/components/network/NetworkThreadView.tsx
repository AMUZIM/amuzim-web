"use client";

import { useEffect, useRef, useState } from "react";
import { getThreadMessages } from "@/lib/network";

type Message = {
  id: string;
  senderId: string;
  content: string;
};

type Props = {
  threadId: string;
  currentUserId: string;
};

export default function NetworkThreadView({
  threadId,
  currentUserId,
}: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const loadMessages = async () => {
    try {
      const data = await getThreadMessages(threadId);
      setMessages(data);
    } catch {
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 initial load
  useEffect(() => {
    setLoading(true);
    loadMessages();
  }, [threadId]);

  // 🔹 auto refresh (simple polling)
  useEffect(() => {
    const interval = setInterval(loadMessages, 3000);
    return () => clearInterval(interval);
  }, [threadId]);

  // 🔹 auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (loading) {
    return (
      <div className="text-sm text-gray-400">
        Loading messages...
      </div>
    );
  }

  if (!messages.length) {
    return (
      <div className="text-sm text-gray-400">
        No messages yet
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
      {messages.map((m) => {
        const isMe = m.senderId === currentUserId;

        return (
          <div
            key={m.id}
            className={`flex ${
              isMe ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`text-sm px-3 py-2 rounded-lg max-w-[70%] ${
                isMe
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {!isMe && (
                <div className="text-xs text-gray-400 mb-1">
                  {m.senderId}
                </div>
              )}
              <div>{m.content}</div>
            </div>
          </div>
        );
      })}

      <div ref={bottomRef} />
    </div>
  );
}
