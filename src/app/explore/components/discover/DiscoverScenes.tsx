import DiscoverMusic from "./discover/DiscoverMusic";
import DiscoverArtists from "./discover/DiscoverArtists";
import DiscoverIndustry from "./discover/DiscoverIndustry";
import DiscoverOpportunities from "./discover/DiscoverOpportunities";
import DiscoverScenes from "./discover/DiscoverScenes";

export default function DiscoverSection() {
  return (
    <section>
      <h2>Discover</h2>
      <p>Explore music, talent and opportunities</p>

      <DiscoverMusic />
      <DiscoverArtists />
      <DiscoverIndustry />
      <DiscoverOpportunities />
      <DiscoverScenes />
    </section>
  );
}
