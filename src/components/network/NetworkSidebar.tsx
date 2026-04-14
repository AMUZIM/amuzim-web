"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Feed", href: "/network/feed" },
  { name: "Discover", href: "/network/discover" },
  { name: "Groups", href: "/network/groups" },
  { name: "Projects", href: "/network/projects" },
  { name: "Messages", href: "/network/messages" },
  { name: "Profile", href: "/network/profile" },
];

export default function NetworkSidebar() {
  const pathname = usePathname();

  return (
    <div className="border rounded-xl p-4">
      <h3 className="font-medium mb-4">
        Network
      </h3>

      <div className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block text-sm rounded-lg px-3 py-2 hover:bg-muted ${
              pathname === link.href ? "bg-muted font-medium" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

    </div>
  );
}
