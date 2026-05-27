import type { DashboardSection } from "@/shared/types/dashboard-section";

export function getDashboardSection(
  pathname: string
): DashboardSection | null {
  const sections: DashboardSection[] = [
    "profile",
    "settings",
    "creator",
    "network",
    "editorial",
    "explore",
    "streaming",
    "future",
    "analytics",
  ];

  const match = sections.find((section) =>
    pathname.includes(section)
  );

  return match ?? null;
}
