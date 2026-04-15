"use client";

import { NetworkProfile } from "@/types/network";
import NetworkProfileCard from "./NetworkProfileCard";

type Props = {
  profiles: NetworkProfile[];
  currentUserId: string;
};

export default function NetworkProfileList({
  profiles,
  currentUserId,
}: Props) {
  if (!profiles.length) {
    return (
      <div className="text-sm text-gray-500">
        No profiles found
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {profiles.map((profile) => (
        <NetworkProfileCard
          key={profile.id}
          profile={profile}
          currentUserId={currentUserId}
        />
      ))}
    </div>
  );
}
