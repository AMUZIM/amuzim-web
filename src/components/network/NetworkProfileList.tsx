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
