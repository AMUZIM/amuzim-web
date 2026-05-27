import DashboardHeader from "./dashboard-header";

import type { DashboardSection } from "@/shared/types/dashboard-section";

interface DashboardShellProps {
  section: DashboardSection;

  children?: React.ReactNode;
}

export default function DashboardShell({
  section,
  children,
}: DashboardShellProps) {
  return (
    <section>
      <DashboardHeader section={section} />

      {children}
    </section>
  );
}
