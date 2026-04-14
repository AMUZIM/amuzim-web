"use client";

import NetworkProjects from "@/components/network/NetworkProjects";
import NetworkHeader from "@/components/network/NetworkHeader";

export default function NetworkProjectsPage() {
  return (
    <div className="space-y-6">
      
      <NetworkHeader
        title="Projects"
        description="Collaboration projects across AMUZIM"
      />

      <NetworkProjects />

    </div>
  );
}
