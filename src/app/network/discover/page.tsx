"use client";

import NetworkSignals from "@/components/network/NetworkSignals";
import NetworkHeader from "@/components/network/NetworkHeader";

export default function NetworkDiscoverPage() {
  return (
    <div className="space-y-6">
      
      <NetworkHeader
        title="Discover"
        description="Discover creators, projects and collaboration signals"
      />

      <NetworkSignals />

    </div>
  );
}
