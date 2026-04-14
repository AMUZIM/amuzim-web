"use client";

import React from "react";

export default function NetworkDiscoverPage() {
  return (
    <div className="min-h-screen w-full">
      
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">
            Discover
          </h1>
          <p className="text-muted-foreground mt-2">
            Discover creators, collaborations, and signals across AMUZIM
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-12 gap-6">

          {/* Left Sidebar */}
          <div className="col-span-3">
            <div className="border rounded-xl p-4">
              <h3 className="font-medium mb-4">
                Discover Filters
              </h3>

              <div className="space-y-2 text-sm">
                <div>Creators</div>
                <div>Projects</div>
                <div>Groups</div>
                <div>Signals</div>
                <div>Trending</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-6">
            <div className="space-y-4">

              <div className="border rounded-xl p-6">
                <h3 className="font-medium mb-2">
                  Trending Creators
                </h3>
                <p className="text-sm text-muted-foreground">
                  Creator discovery powered by signals
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-medium mb-2">
                  Active Projects
                </h3>
                <p className="text-sm text-muted-foreground">
                  Discover collaboration opportunities
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-medium mb-2">
                  Collaboration Signals
                </h3>
                <p className="text-sm text-muted-foreground">
                  Market activity and collaboration signals
                </p>
              </div>

            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <div className="border rounded-xl p-4">
              <h3 className="font-medium mb-4">
                Signals
              </h3>

              <div className="space-y-3 text-sm">
                <div>Trending Genres</div>
                <div>Hot Collaborations</div>
                <div>Industry Activity</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
