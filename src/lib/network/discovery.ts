import { NetworkProfile } from "@/types/network";

let cachedProfiles: NetworkProfile[] = [];

export async function setDiscoveryProfiles(
  profiles: NetworkProfile[]
) {
  cachedProfiles = profiles;
}

export async function getDiscoveryProfiles(): Promise<NetworkProfile[]> {
  // seed mínimo si vacío
  if (!cachedProfiles.length) {
    cachedProfiles = [
      {
        id: "p1",
        userId: "user_2",
        username: "artist_alpha",
        bio: "Producer / DJ",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "p2",
        userId: "user_3",
        username: "vocal_beta",
        bio: "Singer / Songwriter",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  }

  return cachedProfiles;
}

export async function searchProfiles(
  query: string
): Promise<NetworkProfile[]> {
  if (!query) return cachedProfiles;

  return cachedProfiles.filter((p) =>
    p.username.toLowerCase().includes(query.toLowerCase())
  );
}
