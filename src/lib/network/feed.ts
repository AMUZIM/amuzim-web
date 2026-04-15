import { getUserActivities } from "@/lib/network/activity";
import { NetworkActivity } from "@/lib/network/activity";

export async function getNetworkFeed(
  userId: string
): Promise<NetworkActivity[]> {
  // simple v1: own activity feed
  const activities = await getUserActivities(userId);

  return activities.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );
}
