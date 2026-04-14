"use client";

import NetworkFeed from "@/components/network/NetworkFeed";
import NetworkHeader from "@/components/network/NetworkHeader";

export default function NetworkFeedPage() {
  return (
    <div className="space-y-6">
      
      <NetworkHeader
        title="Feed"
        description="Collaboration activity across AMUZIM"
      />

      <NetworkFeed />

    </div>
  );
}
