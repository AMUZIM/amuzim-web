"use client";

import { networkPosts } from "@/data/networkPosts";
import NetworkEmpty from "./NetworkEmpty";
import NetworkCreate from "./NetworkCreate";

export default function NetworkFeed() {
  return (
    <div className="space-y-4">

      <NetworkCreate title="Create Post" />

      {!networkPosts.length ? (
        <NetworkEmpty title="No posts yet" />
      ) : (
        networkPosts.map((post, index) => (
          <div key={index} className="border rounded-xl p-6">
            Feed Item
          </div>
        ))
      )}

    </div>
  );
}
