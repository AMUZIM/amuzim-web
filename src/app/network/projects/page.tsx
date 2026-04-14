"use client";

import React from "react";
import NetworkProjects from "@/components/network/NetworkProjects";

export default function NetworkProjectsPage() {
  return (
    <div className="space-y-6">
      
      <div>
        <h1 className="text-2xl font-semibold">
          Projects
        </h1>
        <p className="text-muted-foreground">
          Collaboration projects across AMUZIM
        </p>
      </div>

      <NetworkProjects />

    </div>
  );
}
