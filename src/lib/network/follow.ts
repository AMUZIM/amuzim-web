import { NetworkFollow } from "@/types/network";
import { trackActivity } from "@/lib/network/activity";

let follows: NetworkFollow[] = [];

const generateId = () => Math.random().toString(36).substring(2, 9);

export async function followUser(
  followerId: string,
  followingId: string
): Promise<NetworkFollow> {
  const existing = follows.find(
    (f) =>
      f.followerId === followerId &&
      f.followingId === followingId
  );

  if (existing) return existing;

  const follow: NetworkFollow = {
    id: generateId(),
    followerId,
    followingId,
    createdAt: new Date().toISOString(),
  };

  follows.push(follow);

  await trackActivity(followerId, "follow", followingId);

  return follow;
}

export async function unfollowUser(
  followerId: string,
  followingId: string
): Promise<boolean> {
  const index = follows.findIndex(
    (f) =>
      f.followerId === followerId &&
      f.followingId === followingId
  );

  if (index === -1) return false;

  follows.splice(index, 1);
  return true;
}

export async function isFollowing(
  followerId: string,
  followingId: string
): Promise<boolean> {
  return follows.some(
    (f) =>
      f.followerId === followerId &&
      f.followingId === followingId
  );
}
