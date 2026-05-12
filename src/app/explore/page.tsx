import HeroExplore from "../../components/HeroExplore"
import ExploreCTA from "../../components/ExploreCTA"
import QuickEntrySection from "../../components/QuickEntrySection"
import FeaturedSection from "../../components/FeaturedSection"
import EarlyAccessSection from "../../components/EarlyAccessSection"
import DiscoverSection from "../../components/DiscoverSection"
import EditorialEntrySection from "../../components/EditorialEntrySection"

export default function Explore() {
  return (
    <main className="bg-white text-black">

      <HeroExplore />

      <div className="space-y-32">
        <QuickEntrySection />
        <EarlyAccessSection />
        <DiscoverSection />
        <EditorialEntrySection />
      </div>

      <ExploreCTA />

    </main>
  )
}
