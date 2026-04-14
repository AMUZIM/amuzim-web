"use client";

import React from "react";
import NetworkGroups from "@/components/network/NetworkGroups";

export default function NetworkGroupsPage() {
  return (
    <div className="space-y-6">
      
      <div>
        <h1 className="text-2xl font-semibold">
          Groups
        </h1>
        <p className="text-muted-foreground">
          Collaboration groups across AMUZIM
        </p>
      </div>

      <NetworkGroups />

    </div>
  );
}
