import Link from "next/link";

import { DASHBOARD_NAVIGATION } from "@/shared/constants/dashboard-navigation";

export default function DashboardNavigation() {
  return (
    <nav>
      <ul>
        {DASHBOARD_NAVIGATION.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
