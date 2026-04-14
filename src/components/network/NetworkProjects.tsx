"use client";

import { networkProjects } from "@/data/networkProjects";
import NetworkEmpty from "./NetworkEmpty";
import NetworkCreate from "./NetworkCreate";
import NetworkList from "./NetworkList";
import NetworkItem from "./NetworkItem";

export default function NetworkProjects() {
  return (
    <div className="space-y-4">

      <NetworkCreate title="Create Project" />

      {!networkProjects.length ? (
        <NetworkEmpty title="No projects yet" />
      ) : (
        <NetworkList>
          {networkProjects.map((project, index) => (
            <NetworkItem key={index}>
              Project
            </NetworkItem>
          ))}
        </NetworkList>
      )}

    </div>
  );
}
