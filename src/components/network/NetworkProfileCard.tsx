"use client";

import { useState } from "react";
import { NetworkProfile } from "@/types/network";
import NetworkConnectButton from "./NetworkConnectButton";
import NetworkFollowButton from "./NetworkFollowButton";
import NetworkProfilePreview from "./NetworkProfilePreview";
import NetworkModal from "./NetworkModal";

type Props = {
  profile: NetworkProfile;
  currentUserId: string;
};

export default function NetworkProfileCard({
  profile,
  currentUserId,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
     <div className="relative p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all duration-200 hover:bg-gray-50 active:scale-[0.99] overflow-hidden border-gray-200 shadow-sm hover:shadow-md"
       onMouseEnter={() => setHovered(true)}
       onMouseLeave={() => setHovered(false)}
       onClick={(e) => {
         const target = e.target as HTMLElement;
         if (target.closest("button")) return;
         setOpen(true);
       }}
     >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 shrink-0">
            {profile.username?.charAt(0).toUpperCase()}
           </div>
          <div className="min-w-0">
              <div className="text-sm font-semibold text-gray-900 leading-tight truncate">
               {profile.username}
              </div>
            {profile.bio && (
              <div className="text-xs text-gray-500 leading-tight line-clamp-1 break-words">
                {profile.bio}
                  </div>
            )}
          </div>
        </div>

        <div className="flex gap-2 shrink-0 items-center">
          <NetworkConnectButton
            currentUserId={currentUserId}
            targetUserId={profile.userId}
          />
          <NetworkFollowButton
            currentUserId={currentUserId}
            targetUserId={profile.userId}
          />
        </div>

        {hovered && (
          <div className="absolute top-full mt-2 left-0 z-20 w-[260px]">
            <NetworkProfilePreview profile={profile} />
          </div>
        )}
      </div>

      <NetworkModal open={open} onClose={() => setOpen(false)}>
        <NetworkProfilePreview profile={profile} />
      </NetworkModal>
    </>
  );
}
