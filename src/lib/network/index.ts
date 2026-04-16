export * from "./connect";
export * from "./follow";
export * from "./message";
export * from "./thread";
export * from "./activity";
export * from "./feed";
export * from "./collaboration";
export * from "./connections";
export * from "./signals";

// TEMP minimal compatibility (no romper build)
import { Signal } from "./signals";

export function getUserSignals(userId: string): Signal[] {
  return [];
}
