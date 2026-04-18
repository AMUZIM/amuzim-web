"use client";

import { NetworkProfile } from "@/types/network";

type Props = {
  profile: NetworkProfile;
};

export default function NetworkProfilePreview({ profile }: Props) {
  return (
    <div className="p-4 border border-gray-200 rounded-xl w-64 bg-white shadow-sm">
      <div className="flex flex-col items-center text-center gap-2">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
          {profile.username?.charAt(0).toUpperCase()}
        </div>
        <div className="text-sm font-semibold text-gray-900">
          {profile.username}
        </div>

        {profile.bio && (
          <div className="text-xs text-gray-500">
            {profile.bio}
          </div>
        )}

        {profile.location && (
          <div className="text-xs text-gray-400">
            {profile.location}
          </div>
        )}
      </div>
    </div>
  );
}
