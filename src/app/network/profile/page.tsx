"use client";

import NetworkProfile from "@/components/network/NetworkProfile";
import NetworkHeader from "@/components/network/NetworkHeader";

export default function NetworkProfilePage() {
  return (
    <div className="space-y-6">
      
      <NetworkHeader
        title="Profile"
        description="Your collaboration profile"
      />

      <NetworkProfile />

    </div>
  );
}
