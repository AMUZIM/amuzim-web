"use client";

import NetworkActions from "./NetworkActions";
import NetworkButton from "./NetworkButton";

export default function NetworkItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-xl p-6 space-y-4">

      <div>
        {children}
      </div>

      <NetworkActions>
        <NetworkButton>Connect</NetworkButton>
        <NetworkButton>Message</NetworkButton>
      </NetworkActions>

    </div>
  );
}
