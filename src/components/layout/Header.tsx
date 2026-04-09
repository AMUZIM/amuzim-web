import Navigation from "./Navigation"

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="text-lg font-semibold">
          AMUZIM
        </div>

        <Navigation />

        <div className="w-24" />

      </div>
    </header>
  )
}
