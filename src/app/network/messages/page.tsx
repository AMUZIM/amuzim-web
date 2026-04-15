"use client";

import NetworkThreadView from "@/components/network/NetworkThreadView";

export default function MessagesPage() {
  return (
    <div className="p-6">
      <NetworkThreadView threadId="demo_thread" />
    </div>
  );
}
