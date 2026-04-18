"use client";

import { NetworkProfile } from "@/types/network";

type Props = {
  profile: NetworkProfile;
};

export default function NetworkProfilePreview({ profile }: Props) {
  return (
    <div className="p-4 border border-gray-200 rounded-xl w-64 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center gap-2 w-full px-1">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 shadow-sm">
          {profile.username?.charAt(0).toUpperCase()}
        </div>
        <div className="text-sm font-semibold text-gray-900 leading-tight">
          {profile.username}
        </div>

        {profile.bio && (
          <div className="text-xs text-gray-500 leading-tight line-clamp-2">
            {profile.bio}
          </div>
        )}

        {profile.location && (
          <div className="text-xs text-gray-400 leading-tight">
            {profile.location}
          </div>
        )}
      </div>
    </div>
  );
}
