"use client";

import { networkGroups } from "@/data/networkGroups";
import NetworkEmpty from "./NetworkEmpty";
import NetworkCreate from "./NetworkCreate";
import NetworkList from "./NetworkList";
import NetworkItem from "./NetworkItem";

export default function NetworkGroups() {
  return (
    <div className="space-y-4">

      <NetworkCreate title="Create Group" />

      {!networkGroups.length ? (
        <NetworkEmpty title="No groups yet" />
      ) : (
        <NetworkList>
          {networkGroups.map((group, index) => (
            <NetworkItem key={index}>
              Group
            </NetworkItem>
          ))}
        </NetworkList>
      )}

    </div>
  );
}
