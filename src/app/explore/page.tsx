import HeroExplore from "../../components/HeroExplore"
import CuratedMusic from "../../components/CuratedMusic"
import MusicLovers from "../../components/MusicLovers"
import Learning from "../../components/Learning"
import ExploreCTA from "../../components/ExploreCTA"

export default function Explore() {
  return (
    <main className="bg-white text-black">

      <HeroExplore />

      <div className="space-y-32">
        <QuickEntrySection />
        <FeaturedSection />
        <EarlyAccessSection />
        <DiscoverSection />
        <FutureSection />
        <EditorialEntrySection />
      </div>

      <ExploreCTA />

    </main>
  )
}
