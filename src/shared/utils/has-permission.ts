import { AUTH_PERMISSIONS } from "@/shared/types/auth-permissions";

import type { UserRole } from "@/shared/types/user-role";
import type { Permission } from "@/shared/types/permission";

export function hasPermission(
  role: UserRole,
  permission: Permission
) {
  return AUTH_PERMISSIONS[role]?.includes(permission);
}
