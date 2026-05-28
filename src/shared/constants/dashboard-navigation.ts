import type { NavigationItem } from "@/shared/types/navigation-item";

import { ROUTES } from "./routes";

export const DASHBOARD_NAVIGATION: NavigationItem[] =
  [
    {
      label: "Profile",
      href: ROUTES.PROFILE as any,
    },

    {
      label: "Settings",
      href: ROUTES.SETTINGS as any,
    },

    {
      label: "Creator",
      href: ROUTES.CREATOR as any,
    },

    {
      label: "Network",
      href: ROUTES.NETWORK as any,
    },

    {
      label: "Editorial",
      href: ROUTES.EDITORIAL as any,
    },

    {
      label: "Explore",
      href: ROUTES.EXPLORE as any,
    },

    {
      label: "Streaming",
      href: ROUTES.STREAMING as any,
    },

    {
      label: "Future",
      href: ROUTES.FUTURE as any,
    },

    {
      label: "Analytics",
      href: ROUTES.ANALYTICS as any,
    },
  ];
