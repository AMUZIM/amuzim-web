"use client";

import { useState, useEffect } from "react";
import { followUser, unfollowUser, isFollowing } from "@/lib/network";

type Props = {
  currentUserId: string;
  targetUserId: string;
};

export default function NetworkFollowButton({
  currentUserId,
  targetUserId,
}: Props) {
  const [following, setFollowing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      const state = await isFollowing(currentUserId, targetUserId);
      setFollowing(state);
    };

    load();
  }, [currentUserId, targetUserId]);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);

    try {
      if (!following) {
        await followUser(currentUserId, targetUserId);
        setFollowing(true);
      } else {
        await unfollowUser(currentUserId, targetUserId);
        setFollowing(false);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="px-3 py-1 text-xs border rounded-lg"
    >
      {loading ? "..." : following ? "Following" : "Follow"}
    </button>
  );
}
