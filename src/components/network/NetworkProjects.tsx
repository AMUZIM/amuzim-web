"use client";

import { networkProjects } from "@/data/networkProjects";
import NetworkEmpty from "./NetworkEmpty";

export default function NetworkProjects() {
  if (!networkProjects.length) {
    return <NetworkEmpty title="No projects yet" />;
  }

  return (
    <div className="space-y-4">
      {networkProjects.map((project, index) => (
        <div key={index} className="border rounded-xl p-6">
          Project
        </div>
      ))}
    </div>
  );
}
