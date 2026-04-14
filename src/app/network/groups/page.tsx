"use client";

import React from "react";

export default function NetworkGroupsPage() {
  return (
    <div className="min-h-screen w-full">
      
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="mb-8">
          <h1 className="text-3xl font-semibold">
            Groups
          </h1>
          <p className="text-muted-foreground mt-2">
            Join and create collaboration groups
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-3">
            <div className="border rounded-xl p-4">
              <h3 className="font-medium mb-4">
                Your Groups
              </h3>

              <div className="space-y-2 text-sm">
                <div>Production</div>
                <div>Writers</div>
                <div>Artists</div>
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="space-y-4">

              <div className="border rounded-xl p-6">
                Create Group
              </div>

              <div className="border rounded-xl p-6">
                Discover Groups
              </div>

              <div className="border rounded-xl p-6">
                Active Collaborations
              </div>

            </div>
          </div>

          <div className="col-span-3">
            <div className="border rounded-xl p-4">
              <h3 className="font-medium mb-4">
                Suggestions
              </h3>

              <div className="space-y-2 text-sm">
                <div>Trending Groups</div>
                <div>New Collaborations</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
