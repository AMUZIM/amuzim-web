"use client";

import NetworkActions from "./NetworkActions";
import NetworkButton from "./NetworkButton";
import NetworkAvatar from "./NetworkAvatar";
import NetworkMeta from "./NetworkMeta";
import NetworkTag from "./NetworkTag";
import NetworkTitle from "./NetworkTitle";
import NetworkSubtitle from "./NetworkSubtitle";
import NetworkStatus from "./NetworkStatus";
import NetworkLocation from "./NetworkLocation";
import NetworkStats from "./NetworkStats";
import NetworkDivider from "./NetworkDivider";
import NetworkBadge from "./NetworkBadge";

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
          
          <div className="flex items-center gap-2">
            <NetworkTitle>
              {children}
            </NetworkTitle>

            <NetworkBadge>
              Verified
            </NetworkBadge>
          </div>

          <NetworkSubtitle>
            Music Creator
          </NetworkSubtitle>

          <NetworkStatus>
            Open to collaboration
          </NetworkStatus>

          <NetworkLocation>
            Global
          </NetworkLocation>

          <div className="flex gap-2 flex-wrap">
            <NetworkTag>Vocalist</NetworkTag>
            <NetworkTag>English</NetworkTag>
            <NetworkTag>Spanish</NetworkTag>
          </div>

          <NetworkDivider />

          <NetworkStats>
            <div>12 Projects</div>
            <div>8 Collaborations</div>
          </NetworkStats>

          <NetworkMeta>
            Active
          </NetworkMeta>

        </div>

      </div>

      <NetworkDivider />

      <NetworkActions>
        <NetworkButton>Connect</NetworkButton>
        <NetworkButton>Message</NetworkButton>
      </NetworkActions>

    </div>
  );
}
