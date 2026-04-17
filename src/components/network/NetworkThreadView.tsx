"use client";

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { getThreadMessages } from "@/lib/network";

type Message = {
  id: string;
  senderId: string;
  content: string;
};

export type ThreadViewRef = {
  refresh: () => void;
};

type Props = {
  threadId: string;
  currentUserId: string;
};

const NetworkThreadView = forwardRef<ThreadViewRef, Props>(
  ({ threadId, currentUserId }, ref) => {
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

    useImperativeHandle(ref, () => ({
      refresh: loadMessages,
    }));

    useEffect(() => {
      setLoading(true);
      loadMessages();
    }, [threadId]);

    useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: "auto" });
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
      <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
        {messages.map((m) => {
          const isMe = m.senderId === currentUserId;

          return (
          <div
           key={m.id}
           className={`flex w-full ${
             isMe ? "justify-end" : "justify-start"
           }`}
          >
              <div
                className={`text-sm px-4 py-2 rounded-2xl max-w-[65%] ${
                  isMe
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {!isMe && (
                  <div className="text-[10px] text-gray-400 mb-1 opacity-70">
                    {m.senderId}
                  </div>
                )}
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>
            </div>
          );
        })}

        <div ref={bottomRef} />
      </div>
    );
  }
);

NetworkThreadView.displayName = "NetworkThreadView";

export default NetworkThreadView;
