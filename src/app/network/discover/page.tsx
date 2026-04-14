"use client";

import React from "react";
import NetworkSignals from "@/components/network/NetworkSignals";

export default function NetworkDiscoverPage() {
  return (
    <div className="space-y-6">
      
      <div>
        <h1 className="text-2xl font-semibold">
          Discover
        </h1>
        <p className="text-muted-foreground">
          Discover creators, projects and collaboration signals
        </p>
      </div>

      <NetworkSignals />

    </div>
  );
}
