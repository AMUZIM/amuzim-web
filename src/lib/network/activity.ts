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
  createdAt: string;
  updatedAt: string;
}

// 🔹 Compatibilidad naming antiguo
export type NetworkActivity = Activity;

const activities: Activity[] = [];

function generateId(): string {
  return Math.random().toString(36).substring(2, 10);
}

function nowISO(): string {
  return new Date().toISOString();
}

export async function trackActivity(
  fromUserId: string,
  type: ActivityType,
  toUserId: string,
  metadata?: Record<string, any>
): Promise<Activity> {
  const now = nowISO();

  const activity: Activity = {
    id: generateId(),
    fromUserId,
    toUserId,
    type,
    metadata,
    timestamp: Date.now(),
    createdAt: now,
    updatedAt: now,
  };

  activities.push(activity);

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
