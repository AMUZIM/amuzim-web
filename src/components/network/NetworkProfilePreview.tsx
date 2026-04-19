"use client";

import { NetworkProfile } from "@/types/network";

type Props = {
  profile: NetworkProfile;
};

export default function NetworkProfilePreview({ profile }: Props) {
  return (
    <div className="p-4 border border-gray-200 rounded-xl w-64 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 backdrop-blur-sm ring-1 ring-gray-100 hover:ring-gray-200 will-change-transform transition-transform">
      <div className="flex flex-col items-center text-center gap-2.5 w-full px-1 py-1 select-none transition-all duration-200 ease-out">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 shadow-sm ring-1 ring-gray-200 transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default">
        </div>
        <div className="text-sm font-semibold text-gray-900 leading-tight tracking-tight truncate select-text">
          {profile.username}
        </div>

        {profile.bio && (
           <div className="text-xs text-gray-500 leading-tight line-clamp-2 break-words tracking-tight px-1 select-text">
            {profile.bio}
           </div>
        )}

        {profile.location && (
          <div className="text-xs text-gray-400 leading-tight truncate tracking-tight px-1 select-text">
            {profile.location}
          </div>
        )}
      </div>
    </div>
  );
}
