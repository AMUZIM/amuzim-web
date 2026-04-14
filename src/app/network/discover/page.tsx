"use client";

import NetworkSignals from "@/components/network/NetworkSignals";
import NetworkHeader from "@/components/network/NetworkHeader";
import NetworkSearch from "@/components/network/NetworkSearch";
import NetworkFilters from "@/components/network/NetworkFilters";

export default function NetworkDiscoverPage() {
  return (
    <div className="space-y-6">
      
      <NetworkHeader
        title="Discover"
        description="Discover creators, projects and collaboration signals"
      />

      <NetworkSearch />

      <NetworkFilters />

      <NetworkSignals />

    </div>
  );
}
