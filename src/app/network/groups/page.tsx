"use client";

import NetworkGroups from "@/components/network/NetworkGroups";
import NetworkHeader from "@/components/network/NetworkHeader";

export default function NetworkGroupsPage() {
  return (
    <div className="space-y-6">
      
      <NetworkHeader
        title="Groups"
        description="Collaboration groups across AMUZIM"
      />

      <NetworkGroups />

    </div>
  );
}
