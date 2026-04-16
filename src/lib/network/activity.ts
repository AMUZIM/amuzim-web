import { createSignal, SignalType } from "./signals";

export type ActivityType =
  | "follow"
  | "connect"
  | "message"
  | "reply"
  | "like"
  | "view"
  | "connection_request"
  | "connection_accepted";

export interface Activity {
  id: string;
  fromUserId: string;
  toUserId: string;
  type: ActivityType;
  metadata?: Record<string, any>;
  timestamp: number;
}

const activities: Activity[] = [];

function generateId(): string {
  return Math.random().toString(36).substring(2, 10);
}

export async function trackActivity(
  fromUserId: string,
  type: ActivityType,
  toUserId: string,
  metadata?: Record<string, any>
): Promise<Activity> {
  const activity: Activity = {
    id: generateId(),
    fromUserId,
    toUserId,
    type,
    metadata,
    timestamp: Date.now(),
  };

  activities.push(activity);

  // 🔗 Integración signals (solo tipos soportados)
  if (
    type !== "connection_request" &&
    type !== "connection_accepted"
  ) {
    createSignal(fromUserId, toUserId, type as SignalType);
  }

  return activity;
}

export const createActivity = trackActivity;

export function getActivities(): Activity[] {
  return activities;
}

export function getUserActivities(userId: string): Activity[] {
  return activities.filter(
    (a) => a.fromUserId === userId || a.toUserId === userId
  );
}
