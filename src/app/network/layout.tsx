"use client";

import React from "react";
import NetworkSidebar from "@/components/network/NetworkSidebar";
import NetworkSignals from "@/components/network/NetworkSignals";

export default function NetworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="grid grid-cols-12 gap-6">

          {/* Sidebar */}
          <div className="col-span-3">
            <NetworkSidebar />
          </div>

          {/* Main */}
          <div className="col-span-6">
            {children}
          </div>

          {/* Signals */}
          <div className="col-span-3">
            <NetworkSignals />
          </div>

        </div>

      </div>
    </div>
  );
}
