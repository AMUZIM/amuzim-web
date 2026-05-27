import type { NavigationItem } from "@/shared/types/navigation-item";

import { ROUTES } from "./routes";

export const DASHBOARD_NAVIGATION: NavigationItem[] =
  [
    {
      label: "Profile",
      href: ROUTES.PROFILE,
    },

    {
      label: "Settings",
      href: ROUTES.SETTINGS,
    },

    {
      label: "Creator",
      href: ROUTES.CREATOR,
    },

    {
      label: "Network",
      href: ROUTES.NETWORK,
    },

    {
      label: "Editorial",
      href: ROUTES.EDITORIAL,
    },

    {
      label: "Explore",
      href: ROUTES.EXPLORE,
    },

    {
      label: "Streaming",
      href: ROUTES.STREAMING,
    },

    {
      label: "Future",
      href: ROUTES.FUTURE,
    },

    {
      label: "Analytics",
      href: ROUTES.ANALYTICS,
    },
  ];
