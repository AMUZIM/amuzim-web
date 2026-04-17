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
        <div className="text-sm text-gray-400 text-center py-6">
          Loading messages...
        </div>
      );
    }

    if (!messages.length) {
      return (
        <div className="text-sm text-gray-400" px-2>
          No messages yet
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto px-3 bg-neutral-50 pt-2 pb-2 rounded-xl border border-neutral-200">
        {messages.map((m) => {
          const isMe = m.senderId === currentUserId;

          return (
          <div
           key={m.id}
           className={`flex w-full px-2 ${
             isMe ? "justify-end" : "justify-start"
           }`}
          >
              <div
                className={`text-sm leading-relaxed px-4 py-2 rounded-2xl max-w-[65%] break-words shadow-sm ${
                  isMe
                    ? "bg-neutral-900 text-white"
                    : "bg-gray-200 text-neutral-900"
                }`}
              >
                {!isMe && (
                  <div className="text-[10px] text-gray-400 mb-2 opacity-60">
                    {m.senderId}
                  </div>
                )}
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>
            </div>
          );
        })}

        <div ref={bottomRef} className="h-2" />
      </div>
    );
  }
);

NetworkThreadView.displayName = "NetworkThreadView";

export default NetworkThreadView;
