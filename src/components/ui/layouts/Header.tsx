import Navigation from "./Navigation"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        
        {/* Logo Horizontal
         */}

        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo horizontal.png"
            alt="AMUZIM"
            width={120}
            height={10}
            priority
          />
        </Link>

        <Navigation />

      </div>

    </header>
  )
}
