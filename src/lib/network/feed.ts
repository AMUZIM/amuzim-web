import { getUserActivities } from "@/lib/network/activity";
import { NetworkActivity } from "@/lib/network/activity";

export async function getNetworkFeed(
  userId: string
): Promise<NetworkActivity[]> {
  const own = await getUserActivities(userId);

  // v2: simple enriched feed (future: connections)
  const feed = [...own];

  return feed.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );
}
