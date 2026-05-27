import type { UserRole } from "./user-role";

export const AUTH_PERMISSIONS: Record<UserRole, string[]> = {
  guest: [],

  user: ["dashboard:view"],

  creator: [
    "dashboard:view",
    "creator:view",
  ],

  editor: [
    "dashboard:view",
    "creator:view",
    "editorial:view",
  ],

  admin: [
    "dashboard:view",
    "creator:view",
    "editorial:view",
    "analytics:view",
    "streaming:view",
  ],
};
