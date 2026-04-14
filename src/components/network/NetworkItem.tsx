"use client";

import NetworkActions from "./NetworkActions";
import NetworkButton from "./NetworkButton";
import NetworkAvatar from "./NetworkAvatar";
import NetworkMeta from "./NetworkMeta";
import NetworkTag from "./NetworkTag";
import NetworkTitle from "./NetworkTitle";
import NetworkSubtitle from "./NetworkSubtitle";
import NetworkStatus from "./NetworkStatus";

export default function NetworkItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-xl p-6 space-y-4">

      <div className="flex gap-3 items-start">
        <NetworkAvatar />
        
        <div className="flex-1 space-y-2">
          
          <NetworkTitle>
            {children}
          </NetworkTitle>

          <NetworkSubtitle>
            Music Creator
          </NetworkSubtitle>

          <NetworkStatus>
            Open to collaboration
          </NetworkStatus>

          <div className="flex gap-2 flex-wrap">
            <NetworkTag>Vocalist</NetworkTag>
            <NetworkTag>English</NetworkTag>
            <NetworkTag>Spanish</NetworkTag>
          </div>

          <NetworkMeta>
            Active
          </NetworkMeta>

        </div>

      </div>

      <NetworkActions>
        <NetworkButton>Connect</NetworkButton>
        <NetworkButton>Message</NetworkButton>
      </NetworkActions>

    </div>
  );
}
