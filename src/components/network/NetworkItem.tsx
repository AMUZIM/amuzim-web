"use client";

import NetworkActions from "./NetworkActions";
import NetworkButton from "./NetworkButton";
import NetworkAvatar from "./NetworkAvatar";

export default function NetworkItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-xl p-6 space-y-4">

      <div className="flex gap-3 items-start">
        <NetworkAvatar />
        <div className="flex-1">
          {children}
        </div>
      </div>

      <NetworkActions>
        <NetworkButton>Connect</NetworkButton>
        <NetworkButton>Message</NetworkButton>
      </NetworkActions>

    </div>
  );
}
