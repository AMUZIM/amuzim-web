import { DASHBOARD_SECTIONS } from "@/shared/constants/dashboard-sections";

export function isDashboardSection(
  value: string
) {
  return DASHBOARD_SECTIONS.includes(
    value as (typeof DASHBOARD_SECTIONS)[number]
  );
}
