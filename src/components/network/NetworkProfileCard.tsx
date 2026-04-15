"use client";

import { NetworkProfile } from "@/types/network";
import NetworkConnectButton from "./NetworkConnectButton";

type Props = {
  profile: NetworkProfile;
  currentUserId: string;
};

export default function NetworkProfileCard({
  profile,
  currentUserId,
}: Props) {
  return (
    <div className="p-4 border rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div>
          <div className="text-sm font-medium">{profile.username}</div>
          {profile.bio && (
            <div className="text-xs text-gray-500">
              {profile.bio}
            </div>
          )}
        </div>
      </div>

      <NetworkConnectButton
        currentUserId={currentUserId}
        targetUserId={profile.userId}
      />
    </div>
  );
}
