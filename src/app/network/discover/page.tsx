"use client";

import { useEffect, useState } from "react";
import {
  getDiscoveryProfiles,
} from "@/lib/network";
import { NetworkProfile } from "@/types/network";
import NetworkProfileList from "@/components/network/NetworkProfileList";

export default function DiscoverPage() {
  const [profiles, setProfiles] = useState<NetworkProfile[]>([]);

  const currentUserId = "user_1"; // TODO: replace with auth

  useEffect(() => {
    const load = async () => {
      const data = await getDiscoveryProfiles();
      setProfiles(data);
    };

    load();
  }, []);

  return (
    <div className="p-6">
      <NetworkProfileList
        profiles={profiles}
        currentUserId={currentUserId}
      />
    </div>
  );
}
