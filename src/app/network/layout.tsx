"use client";

import Link from "next/link";

export default function NetworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-56 border-r p-4 flex flex-col gap-2">
        <Link href="/network">Overview</Link>
        <Link href="/network/feed">Feed</Link>
        <Link href="/network/discover">Discover</Link>
        <Link href="/network/notifications">Notifications</Link>
      </aside>

      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
