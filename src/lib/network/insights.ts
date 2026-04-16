import { Signal } from "./signals";

export interface UserInsights {
  totalSignals: number;
  strongestConnections: { userId: string; score: number }[];
}

// 🔹 análisis simple de usuario
export function getUserInsights(
  userId: string,
  signals: Signal[]
): UserInsights {
  const map = new Map<string, number>();

  signals.forEach((s) => {
    if (s.fromUserId !== userId) return;

    const current = map.get(s.toUserId) || 0;
    map.set(s.toUserId, current + s.strength);
  });

  const strongestConnections = Array.from(map.entries())
    .map(([userId, score]) => ({ userId, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return {
    totalSignals: signals.length,
    strongestConnections,
  };
}
