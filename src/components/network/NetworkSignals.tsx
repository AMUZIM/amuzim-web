"use client";

import { networkSignals } from "@/data/networkSignals";

export default function NetworkSignals() {
  return (
    <div className="border rounded-xl p-4">
      <h3 className="font-medium mb-4">
        Signals
      </h3>

      <div className="space-y-3 text-sm">
        {networkSignals.map((signal, index) => (
          <div key={index}>
            Signal
          </div>
        ))}
      </div>

    </div>
  );
}
