"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {

  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-black font-semibold"
        : "text-neutral-600 hover:text-black"
    }`

  return (
    <>
      {/* Desktop Navigation */}

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

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


      {/* Mobile Hamburger */}

      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span className="w-5 h-[2px] bg-black"></span>
        <span className="w-5 h-[2px] bg-black"></span>
        <span className="w-5 h-[2px] bg-black"></span>
      </button>


      {/* Mobile Menu */}

      {open && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-neutral-200 md:hidden">

          <div className="flex flex-col gap-6 px-6 py-8 text-lg">

            <Link href="/explore" onClick={() => setOpen(false)}>
              Explore
            </Link>

            <Link href="/creators" onClick={() => setOpen(false)}>
              Creators
            </Link>

            <Link href="/network" onClick={() => setOpen(false)}>
              Network
            </Link>

            <Link href="/editorial" onClick={() => setOpen(false)}>
              Editorial
            </Link>

            <Link href="/future" onClick={() => setOpen(false)}>
              Future
            </Link>

            <Link 
              href="/join"
              className="border px-4 py-2 inline-block w-fit"
              onClick={() => setOpen(false)}
            >
              Join
            </Link>

          </div>

        </div>
      )}

    </>
  )
}
