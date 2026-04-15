import { NetworkProfile } from "@/types/network";

let cachedProfiles: NetworkProfile[] = [];

export async function setDiscoveryProfiles(
  profiles: NetworkProfile[]
) {
  cachedProfiles = profiles;
}

export async function getDiscoveryProfiles(): Promise<NetworkProfile[]> {
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
