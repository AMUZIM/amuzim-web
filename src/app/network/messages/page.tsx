"use client";

import React from "react";

export default function NetworkMessagesPage() {
  return (
    <div className="min-h-screen w-full">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="mb-8">
          <h1 className="text-3xl font-semibold">
            Messages
          </h1>
          <p className="text-muted-foreground mt-2">
            Collaboration conversations
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-3">
            <div className="border rounded-xl p-4">
              Conversations
            </div>
          </div>

          <div className="col-span-9">
            <div className="border rounded-xl p-6 h-[600px]">
              Select a conversation
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
