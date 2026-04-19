"use client";

import { NetworkProfile } from "@/types/network";
import NetworkProfileCard from "./NetworkProfileCard";

type Props = {
  profiles: NetworkProfile[];
  currentUserId: string;
  loading?: boolean;
};

export default function NetworkProfileList({
  profiles,
  currentUserId,
  loading,
}: Props) {
  return (
  <div
    className={`flex flex-col gap-3 transition-opacity duration-200 ${
      loading ? "opacity-70" : "opacity-100"
    }`}
  >
    {loading
      ? Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-4 border rounded-xl flex items-center justify-between border-gray-200 animate-pulse"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="flex-1">
                <div className="h-3 w-32 bg-gray-200 rounded mb-2" />
                <div className="h-3 w-24 bg-gray-200 rounded" />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="h-8 w-16 bg-gray-200 rounded-lg" />
              <div className="h-8 w-16 bg-gray-200 rounded-lg" />
            </div>
          </div>
        ))
      : profiles.map((profile) => (
          <div
            key={profile.id}
            className="opacity-0 animate-[fadeIn_0.2s_ease-out_forwards]"
          >
            <NetworkProfileCard
              profile={profile}
              currentUserId={currentUserId}
            />
          </div>
        ))}
    </div>
);
}
