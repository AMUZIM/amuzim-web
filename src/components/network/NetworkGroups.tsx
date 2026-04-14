"use client";

import { networkGroups } from "@/data/networkGroups";
import NetworkEmpty from "./NetworkEmpty";

export default function NetworkGroups() {
  if (!networkGroups.length) {
    return <NetworkEmpty title="No groups yet" />;
  }

  return (
    <div className="space-y-4">
      {networkGroups.map((group, index) => (
        <div key={index} className="border rounded-xl p-6">
          Group
        </div>
      ))}
    </div>
  );
}
