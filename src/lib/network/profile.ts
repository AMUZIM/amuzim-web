import { NetworkProfile } from "@/types/network";

let profiles: NetworkProfile[] = [];

const generateId = () => Math.random().toString(36).substring(2, 9);

export async function createProfile(
  userId: string,
  username: string
): Promise<NetworkProfile> {
  const existing = profiles.find((p) => p.userId === userId);
  if (existing) return existing;

  const profile: NetworkProfile = {
    id: generateId(),
    userId,
    username,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  profiles.push(profile);

  return profile;
}

export async function getProfile(
  userId: string
): Promise<NetworkProfile | null> {
  return profiles.find((p) => p.userId === userId) || null;
}

export async function updateProfile(
  userId: string,
  data: Partial<NetworkProfile>
): Promise<NetworkProfile | null> {
  const profile = profiles.find((p) => p.userId === userId);
  if (!profile) return null;

  Object.assign(profile, data, {
    updatedAt: new Date().toISOString(),
  });

  return profile;
}
