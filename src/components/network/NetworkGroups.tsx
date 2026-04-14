"use client";

import { networkGroups } from "@/data/networkGroups";
import NetworkEmpty from "./NetworkEmpty";
import NetworkCreate from "./NetworkCreate";

export default function NetworkGroups() {
  return (
    <div className="space-y-4">

      <NetworkCreate title="Create Group" />

      {!networkGroups.length ? (
        <NetworkEmpty title="No groups yet" />
      ) : (
        networkGroups.map((group, index) => (
          <div key={index} className="border rounded-xl p-6">
            Group
          </div>
        ))
      )}

    </div>
  );
}
