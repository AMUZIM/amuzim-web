import { hasPermission } from "./has-permission";
import { getUserRole } from "./get-user-role";

import type { Permission } from "@/shared/types/permission";

export function requirePermission(
  permission: Permission
) {
  const role = getUserRole();

  return hasPermission(role, permission);
}
