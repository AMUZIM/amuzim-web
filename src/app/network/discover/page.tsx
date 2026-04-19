"use client";

import { useEffect, useState } from "react";
import { getDiscoveryProfiles, searchProfiles } from "@/lib/network";
import { NetworkProfile } from "@/types/network";
import NetworkProfileList from "@/components/network/NetworkProfileList";
import NetworkState from "@/components/network/NetworkState";

export default function DiscoverPage() {
  const [profiles, setProfiles] = useState<NetworkProfile[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const currentUserId = "user_1";

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getDiscoveryProfiles();
        setProfiles(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleSearch = async (value: string) => {
    setQuery(value);
    setLoading(true);

    const results = await searchProfiles(value);
    setProfiles(results);

    setLoading(false);
  };

  return (
  <div className="p-6 flex flex-col gap-4">
    <input
      value={query}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search creators..."
      className="px-4 py-2 border rounded-xl text-sm"
    />

    {profiles.length === 0 && !loading ? (
      query ? (
        <NetworkState type="search-empty" />
      ) : (
        <NetworkState type="empty" />
      )
    ) : (
      <NetworkProfileList
        profiles={profiles}
        currentUserId={currentUserId}
        loading={loading}
      />
    )}
  </div>
);
