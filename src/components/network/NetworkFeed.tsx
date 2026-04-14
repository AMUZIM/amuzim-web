"use client";

import { networkPosts } from "@/data/networkPosts";
import NetworkEmpty from "./NetworkEmpty";

export default function NetworkFeed() {
  if (!networkPosts.length) {
    return <NetworkEmpty title="No posts yet" />;
  }

  return (
    <div className="space-y-4">
      {networkPosts.map((post, index) => (
        <div key={index} className="border rounded-xl p-6">
          Feed Item
        </div>
      ))}
    </div>
  );
}
