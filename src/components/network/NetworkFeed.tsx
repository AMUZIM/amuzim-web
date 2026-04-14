"use client";

import { networkPosts } from "@/data/networkPosts";

export default function NetworkFeed() {
  return (
    <div className="space-y-4">

      <div className="border rounded-xl p-6">
        Create Post
      </div>

      {networkPosts.map((post, index) => (
        <div key={index} className="border rounded-xl p-6">
          Feed Item
        </div>
      ))}

    </div>
  );
}
