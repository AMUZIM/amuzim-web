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
  createdAt?: string;
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
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    if (loading) {
      return (
        <div className="flex items-center justify-center h-full text-sm text-neutral-400">
          Loading messages...
        </div>
      );
    }

    if (!messages.length) {
      return (
        <div className="flex items-center justify-center h-full text-sm text-neutral-500">
          No messages yet
        </div>
      );
    }

    return (
      <div className="flex flex-col h-full overflow-y-auto px-4 py-6 space-y-4 bg-neutral-950">
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
                className={`
                  max-w-[70%]
                  px-4 py-2
                  rounded-2xl
                  text-sm
                  leading-relaxed
                  break-words
                  ${
                    isMe
                      ? "bg-white text-black rounded-br-md"
                      : "bg-neutral-800 text-white rounded-bl-md"
                  }
                `}
              >
                {!isMe && (
                  <div className="text-[10px] opacity-50 mb-1">
                    {m.senderId}
                  </div>
                )}

                <div>{m.content}</div>

                {m.createdAt && (
                  <div className="text-[10px] mt-1 opacity-40 text-right">
                    {new Date(m.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                )}
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
