"use client";

import { networkPosts } from "@/data/networkPosts";
import NetworkEmpty from "./NetworkEmpty";
import NetworkCreate from "./NetworkCreate";
import NetworkList from "./NetworkList";

export default function NetworkFeed() {
  return (
    <div className="space-y-4">

      <NetworkCreate title="Create Post" />

      {!networkPosts.length ? (
        <NetworkEmpty title="No posts yet" />
      ) : (
        <NetworkList>
          {networkPosts.map((post, index) => (
            <div key={index} className="border rounded-xl p-6">
              Feed Item
            </div>
          ))}
        </NetworkList>
      )}

    </div>
  );
}
