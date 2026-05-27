import Link from "next/link";

export default function DashboardNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/dashboard/profile">Profile</Link>
        </li>

        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>

        <li>
          <Link href="/dashboard/creator">Creator</Link>
        </li>

        <li>
          <Link href="/dashboard/network">Network</Link>
        </li>

        <li>
          <Link href="/dashboard/editorial">Editorial</Link>
        </li>

        <li>
          <Link href="/dashboard/explore">Explore</Link>
        </li>

        <li>
          <Link href="/dashboard/streaming">Streaming</Link>
        </li>

        <li>
          <Link href="/dashboard/future">Future</Link>
        </li>

        <li>
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
}
