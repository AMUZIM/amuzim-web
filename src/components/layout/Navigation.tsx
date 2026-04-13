"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {

  const pathname = usePathname()

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-black font-semibold"
        : "text-neutral-500 hover:text-black"
    }`

  return (
    <nav className="flex items-center gap-8 text-sm font-medium">

      <Link href="/explore" className={linkClass("/explore")}>
        Explore
      </Link>

      <Link href="/creators" className={linkClass("/creators")}>
        Creators
      </Link>

      <Link href="/network" className={linkClass("/network")}>
        Network
      </Link>

      <Link href="/editorial" className={linkClass("/editorial")}>
        Editorial
      </Link>

      <Link href="/future" className={linkClass("/future")}>
        Future
      </Link>

      <Link 
        href="/join"
        className="px-4 py-2 border rounded-md hover:bg-black hover:text-white transition"
      >
        Join
      </Link>

    </nav>
  )
}
