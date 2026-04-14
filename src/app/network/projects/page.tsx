"use client";

import React from "react";

export default function NetworkProjectsPage() {
  return (
    <div className="min-h-screen w-full">
      
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="mb-8">
          <h1 className="text-3xl font-semibold">
            Projects
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage and discover collaboration projects
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-3">
            <div className="border rounded-xl p-4">
              <h3 className="font-medium mb-4">
                Your Projects
              </h3>

              <div className="space-y-2 text-sm">
                <div>Active</div>
                <div>Draft</div>
                <div>Completed</div>
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="space-y-4">

              <div className="border rounded-xl p-6">
                Create Project
              </div>

              <div className="border rounded-xl p-6">
                Open Collaborations
              </div>

              <div className="border rounded-xl p-6">
                Recommended Projects
              </div>

            </div>
          </div>

          <div className="col-span-3">
            <div className="border rounded-xl p-4">
              <h3 className="font-medium mb-4">
                Signals
              </h3>

              <div className="space-y-2 text-sm">
                <div>Trending Projects</div>
                <div>Hiring Now</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
