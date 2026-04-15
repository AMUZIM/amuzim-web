"use client";

import { useEffect, useState } from "react";
import {
  getDiscoveryProfiles,
  searchProfiles,
} from "@/lib/network";
import { NetworkProfile } from "@/types/network";
import NetworkProfileList from "@/components/network/NetworkProfileList";

export default function DiscoverPage() {
  const [profiles, setProfiles] = useState<NetworkProfile[]>([]);
  const [query, setQuery] = useState("");

  const currentUserId = "user_1"; // TODO: replace with auth

  useEffect(() => {
    const load = async () => {
      const data = await getDiscoveryProfiles();
      setProfiles(data);
    };

    load();
  }, []);

  const handleSearch = async (value: string) => {
    setQuery(value);
    const results = await searchProfiles(value);
    setProfiles(results);
  };

  return (
    <div className="p-6 flex flex-col gap-4">
      <input
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search creators..."
        className="px-4 py-2 border rounded-xl text-sm"
      />

      <NetworkProfileList
        profiles={profiles}
        currentUserId={currentUserId}
      />
    </div>
  );
}
