import type { AppRoute } from "./routes";

export interface NavigationItem {
  label: string;

  href: AppRoute;
}
