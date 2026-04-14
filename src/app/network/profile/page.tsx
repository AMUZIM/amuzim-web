"use client";

import React from "react";

export default function NetworkProfilePage() {
  return (
    <div className="min-h-screen w-full">

      <div className="max-w-5xl mx-auto px-6 py-8">

        <div className="mb-8">
          <h1 className="text-3xl font-semibold">
            Profile
          </h1>
          <p className="text-muted-foreground mt-2">
            Your collaboration profile
          </p>
        </div>

        <div className="space-y-6">

          <div className="border rounded-xl p-6">
            Profile Header
          </div>

          <div className="border rounded-xl p-6">
            Skills
          </div>

          <div className="border rounded-xl p-6">
            Active Projects
          </div>

          <div className="border rounded-xl p-6">
            Collaboration History
          </div>

        </div>

      </div>

    </div>
  );
}
