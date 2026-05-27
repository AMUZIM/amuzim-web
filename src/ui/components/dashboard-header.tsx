import DashboardDescription from "./dashboard-description";
import DashboardTitle from "./dashboard-title";

import type { DashboardSection } from "@/shared/types/dashboard-section";

interface DashboardHeaderProps {
  section: DashboardSection;
}

export default function DashboardHeader({
  section,
}: DashboardHeaderProps) {
  return (
    <header>
      <DashboardTitle section={section} />

      <DashboardDescription section={section} />
    </header>
  );
}
