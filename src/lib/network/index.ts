export * from "./connect";
export * from "./follow";
export * from "./message";
export * from "./thread";
export * from "./activity";
export * from "./feed";
export * from "./collaboration";
export * from "./connections";
export * from "./signals";

// ---- TEMP STUBS (no romper build) ----

import { Signal } from "./signals";

export function getUserSignals(userId: string): Signal[] {
  return [];
}

// Discover stubs
export type NetworkProfile = {
  id: string;
  name: string;
  username: string;
  avatar?: string;
};

export function getDiscoveryProfiles(): NetworkProfile[] {
  return [];
}

export function searchProfiles(query: string): NetworkProfile[] {
  return [];
}
