import Navigation from "./Navigation"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}

        <Link 
          href="/" 
          className="text-lg font-semibold tracking-tight hover:opacity-70 transition"
        >
          AMUZIM
        </Link>

        {/* Navigation */}

        <div className="flex items-center">
          <Navigation />
        </div>

      </div>

    </header>
  )
}
