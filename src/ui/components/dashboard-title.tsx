import { getDashboardTitle } from "@/shared/utils/get-dashboard-title";

import type { DashboardSection } from "@/shared/types/dashboard-section";

interface DashboardTitleProps {
  section: DashboardSection;
}

export default function DashboardTitle({
  section,
}: DashboardTitleProps) {
  return (
    <h1>
      {getDashboardTitle(section)}
    </h1>
  );
}
