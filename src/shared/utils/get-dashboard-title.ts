import type { DashboardSection } from "@/shared/types/dashboard-section";

export function getDashboardTitle(
  section: DashboardSection
) {
  switch (section) {
    case "profile":
      return "Profile";

    case "settings":
      return "Settings";

    case "creator":
      return "Creator";

    case "network":
      return "Network";

    case "editorial":
      return "Editorial";

    case "explore":
      return "Explore";

    case "streaming":
      return "Streaming";

    case "future":
      return "Future";

    case "analytics":
      return "Analytics";

    default:
      return "Dashboard";
  }
}
