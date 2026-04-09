import Navigation from "./Navigation"
import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-neutral-200 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="text-lg font-semibold tracking-tight">
          AMUZIM
        </Link>

        <Navigation />

        <div className="w-24" />

      </div>
    </header>
  )
}
