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
  metadata?: Record<string, any>;
  createdAt: string;
}

let activities: NetworkActivity[] = [];

const generateId = () => Math.random().toString(36).substring(2, 9);

export async function trackActivity(
  userId: string,
  type: ActivityType,
  targetUserId?: string,
  metadata?: Record<string, any>
): Promise<NetworkActivity> {
  const activity: NetworkActivity = {
    id: generateId(),
    userId,
    type,
    targetUserId,
    metadata,
    createdAt: new Date().toISOString(),
  };

  activities.push(activity);

  return activity;
}

export async function getUserActivities(
  userId: string
): Promise<NetworkActivity[]> {
  return activities.filter((a) => a.userId === userId);
}
