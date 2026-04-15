"use client";

import { NetworkProfile } from "@/types/network";
import NetworkActions from "./NetworkActions";
import NetworkButton from "./NetworkButton";

type Props = {
  profile: NetworkProfile;
};

export default function NetworkItem({ profile }: Props) {
  return (
    <div className="p-4 border rounded-xl flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div>
          <div className="text-sm font-medium">
            {profile.username}
          </div>
          {profile.bio && (
            <div className="text-xs text-gray-500">
              {profile.bio}
            </div>
          )}
        </div>
      </div>

      <NetworkActions>
        <NetworkButton>Connect</NetworkButton>
        <NetworkButton>Message</NetworkButton>
      </NetworkActions>
    </div>
  );
}
