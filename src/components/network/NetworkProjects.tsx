"use client";

import { networkProjects } from "@/data/networkProjects";

export default function NetworkProjects() {
  return (
    <div className="space-y-4">

      <div className="border rounded-xl p-6">
        Create Project
      </div>

      {networkProjects.map((project, index) => (
        <div key={index} className="border rounded-xl p-6">
          Project
        </div>
      ))}

    </div>
  );
}
