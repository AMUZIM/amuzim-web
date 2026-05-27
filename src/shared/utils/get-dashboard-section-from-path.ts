import type { DashboardSection } from "@/shared/types/dashboard-section";

import { getDashboardSection } from "./get-dashboard-section";

export function getDashboardSectionFromPath(
  pathname: string
): DashboardSection {
  return (
    getDashboardSection(pathname) ??
    "profile"
  );
}
