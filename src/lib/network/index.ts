export * from "./connect";
export * from "./follow";
export * from "./message";
export * from "./thread";
export * from "./activity";
export * from "./feed";
export * from "./collaboration";
export * from "./connections";
export * from "./signals";

// ---- TEMP STUBS (alineados con types reales) ----

import { Signal } from "./signals";
import { NetworkProfile } from "@/types/network";

export function getUserSignals(userId: string): Signal[] {
  return [];
}

// Discover stubs (usar tipo real)
export function getDiscoveryProfiles(): NetworkProfile[] {
  return [];
}

export function searchProfiles(query: string): NetworkProfile[] {
  return [];
}
