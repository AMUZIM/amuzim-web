"use client";

import { networkGroups } from "@/data/networkGroups";

export default function NetworkGroups() {
  return (
    <div className="space-y-4">

      <div className="border rounded-xl p-6">
        Create Group
      </div>

      {networkGroups.map((group, index) => (
        <div key={index} className="border rounded-xl p-6">
          Group
        </div>
      ))}

    </div>
  );
}
