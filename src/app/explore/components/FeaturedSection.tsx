import FeaturedArtists from "./featured/FeaturedArtists";
import FeaturedMusic from "./featured/FeaturedMusic";
import FeaturedOpportunities from "./featured/FeaturedOpportunities";

export default function FeaturedSection() {
  return (
    <section>
      <h2>Featured</h2>
      <p>Curated artists, music and opportunities</p>

      <FeaturedArtists />
      <FeaturedMusic />
      <FeaturedOpportunities />
    </section>
  );
}
