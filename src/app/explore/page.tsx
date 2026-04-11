import HeroExplore from "../../components/HeroExplore"
import CuratedMusic from "../../components/CuratedMusic"
import MusicLovers from "../../components/MusicLovers"
import CreatorInfrastructure from "../../components/CreatorInfrastructure"
import Learning from "../../components/Learning"
import IndustryAccess from "../../components/IndustryAccess"
import ResponsibleAI from "../../components/ResponsibleAI"
import LegalRights from "../../components/LegalRights"
import FutureInfrastructure from "../../components/FutureInfrastructure"
import ExploreCTA from "../../components/ExploreCTA"

export default function Explore() {
  return (
    <main className="bg-white text-black">

      <HeroExplore />

      <div className="space-y-32">
        <CuratedMusic />
        <MusicLovers />
        <CreatorInfrastructure />
        <Learning />
        <IndustryAccess />
        <ResponsibleAI />
        <LegalRights />
        <FutureInfrastructure />
      </div>

      <ExploreCTA />

    </main>
  )
}
