"use client";

import { NetworkProfile } from "@/types/network";
import NetworkProfileCard from "./NetworkProfileCard";

type Props = {
  profiles: NetworkProfile[];
  currentUserId: string;
};

const mockProfiles: NetworkProfile[] = [
 {  
   id: "1",
   userId: "1",
   username: "john_doe",
   bio: "Music producer",
   createdAt: new Date().toISOString(),
   updatedAt: new Date().toISOString(),
 },
  {
    id: "2",
    userId: "2",
    username: "sarah_music",
    bio: "Singer & songwriter",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export default function NetworkProfileList({
  profiles,
  currentUserId,
}: Props) {
  const list = profiles.length ? profiles : mockProfiles;

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
