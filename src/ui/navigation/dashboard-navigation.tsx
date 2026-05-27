import Link from "next/link";

import { ROUTES } from "@/shared/constants/routes";

export default function DashboardNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={ROUTES.PROFILE}>Profile</Link>
        </li>

        <li>
          <Link href={ROUTES.SETTINGS}>Settings</Link>
        </li>

        <li>
          <Link href={ROUTES.CREATOR}>Creator</Link>
        </li>

        <li>
          <Link href={ROUTES.NETWORK}>Network</Link>
        </li>

        <li>
          <Link href={ROUTES.EDITORIAL}>Editorial</Link>
        </li>

        <li>
          <Link href={ROUTES.EXPLORE}>Explore</Link>
        </li>

        <li>
          <Link href={ROUTES.STREAMING}>Streaming</Link>
        </li>

        <li>
          <Link href={ROUTES.FUTURE}>Future</Link>
        </li>

        <li>
          <Link href={ROUTES.ANALYTICS}>Analytics</Link>
        </li>
      </ul>
    </nav>
  );
}
