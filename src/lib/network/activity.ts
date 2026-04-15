import { emitSignal } from "@/lib/network/signals";

export type ActivityType =
  | "connection_request"
  | "connection_accepted"
  | "follow"
  | "message";

export interface NetworkActivity {
  id: string;
  userId: string;
  type: ActivityType;
  targetUserId?: string;
  createdAt: string;
}

let activities: NetworkActivity[] = [];

const generateId = () => Math.random().toString(36).substring(2, 9);

const mapToSignal = (type: ActivityType) => {
  switch (type) {
    case "connection_request":
    case "connection_accepted":
      return "connection";
    case "follow":
      return "follow";
    case "message":
      return "message";
    default:
      return "activity";
  }
};

export async function trackActivity(
  userId: string,
  type: ActivityType,
  targetUserId?: string
): Promise<NetworkActivity> {
  const activity: NetworkActivity = {
    id: generateId(),
    userId,
    type,
    targetUserId,
    createdAt: new Date().toISOString(),
  };

  activities.push(activity);

  await emitSignal(userId, mapToSignal(type));

  return activity;
}

export async function getUserActivities(
  userId: string
): Promise<NetworkActivity[]> {
  return activities.filter((a) => a.userId === userId);
}
