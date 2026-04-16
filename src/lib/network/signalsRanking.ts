import { Signal } from "./signals";

export interface UserAffinity {
  userId: string;
  affinity: number;
}

// 🔹 afinidad directa entre usuarios
export function computeUserAffinity(
  signals: Signal[],
  fromUserId: string
): UserAffinity[] {
  const map = new Map<string, number>();

  signals.forEach((s) => {
    if (s.fromUserId !== fromUserId) return;

    const current = map.get(s.toUserId) || 0;
    map.set(s.toUserId, current + s.strength);
  });

  return Array.from(map.entries()).map(([userId, affinity]) => ({
    userId,
    affinity,
  }));
}

// 🔹 top usuarios relevantes
export function getTopAffinities(
  affinities: UserAffinity[],
  limit: number = 10
): UserAffinity[] {
  return affinities
    .sort((a, b) => b.affinity - a.affinity)
    .slice(0, limit);
}
