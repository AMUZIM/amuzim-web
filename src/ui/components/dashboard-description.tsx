import { getDashboardDescription } from "@/shared/utils/get-dashboard-description";

import type { DashboardSection } from "@/shared/types/dashboard-section";

interface DashboardDescriptionProps {
  section: DashboardSection;
}

export default function DashboardDescription({
  section,
}: DashboardDescriptionProps) {
  return (
    <p>
      {getDashboardDescription(section)}
    </p>
  );
}
