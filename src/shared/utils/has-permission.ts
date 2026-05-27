import { AUTH_PERMISSIONS } from "@/shared/types/auth-permissions";

import type { UserRole } from "@/shared/types/user-role";

export function hasPermission(
  role: UserRole,
  permission: string
) {
  return AUTH_PERMISSIONS[role]?.includes(permission);
}
