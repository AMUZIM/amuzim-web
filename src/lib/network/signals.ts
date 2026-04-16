export type SignalType =
  | "follow"
  | "connect"
  | "message"
  | "reply"
  | "like"
  | "view";

export interface Signal {
  id: string;
  fromUserId: string;
  toUserId: string;
  type: SignalType;
  strength: number;
  timestamp: number;
}

export interface UserScore {
  userId: string;
  score: number;
}

const SIGNAL_WEIGHTS: Record<SignalType, number> = {
  follow: 2,
  connect: 5,
  message: 4,
  reply: 3,
  like: 1,
  view: 0.5,
};

// 🔹 almacenamiento en memoria (base real del sistema)
const signals: Signal[] = [];

function generateId(): string {
  return Math.random().toString(36).substring(2, 10);
}

export function createSignal(
  fromUserId: string,
  toUserId: string,
  type: SignalType
): Signal {
  const signal: Signal = {
    id: generateId(),
    fromUserId,
    toUserId,
    type,
    strength: SIGNAL_WEIGHTS[type],
    timestamp: Date.now(),
  };

  signals.push(signal);

  return signal;
}

// 🔹 NUEVO → usado por UI
export function getUserSignals(userId: string): Signal[] {
  return signals.filter(
    (s) => s.fromUserId === userId || s.toUserId === userId
  );
}

export function computeScore(signals: Signal[]): UserScore[] {
  const scores: Record<string, number> = {};

  for (const signal of signals) {
    if (!scores[signal.toUserId]) {
      scores[signal.toUserId] = 0;
    }

    scores[signal.toUserId] += signal.strength;
  }

  return Object.entries(scores).map(([userId, score]) => ({
    userId,
    score,
  }));
}

export function getScoreBetweenUsers(
  signals: Signal[],
  fromUserId: string,
  toUserId: string
): number {
  return signals
    .filter(
      (s) => s.fromUserId === fromUserId && s.toUserId === toUserId
    )
    .reduce((acc, s) => acc + s.strength, 0);
}
