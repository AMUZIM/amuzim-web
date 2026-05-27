import type { DashboardSection } from "@/shared/types/dashboard-section";

export function getDashboardDescription(
  section: DashboardSection
) {
  switch (section) {
    case "profile":
      return "Manage your public identity.";

    case "settings":
      return "Configure your account settings.";

    case "creator":
      return "Access creator workflows.";

    case "network":
      return "Manage social interactions.";

    case "editorial":
      return "Access editorial experiences.";

    case "explore":
      return "Discover ecosystem opportunities.";

    case "streaming":
      return "Access streaming workflows.";

    case "future":
      return "Explore experimental systems.";

    case "analytics":
      return "Review operational analytics.";

    default:
      return "Dashboard overview.";
  }
}
