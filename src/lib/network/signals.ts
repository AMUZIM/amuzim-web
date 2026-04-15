export type SignalType =
  | "connection"
  | "follow"
  | "message"
  | "activity";

export interface NetworkSignal {
  id: string;
  userId: string;
  type: SignalType;
  strength: number;
  createdAt: string;
}

let signals: NetworkSignal[] = [];

const generateId = () => Math.random().toString(36).substring(2, 9);

export async function emitSignal(
  userId: string,
  type: SignalType,
  strength: number = 1
): Promise<NetworkSignal> {
  const signal: NetworkSignal = {
    id: generateId(),
    userId,
    type,
    strength,
    createdAt: new Date().toISOString(),
  };

  signals.push(signal);

  return signal;
}

export async function getUserSignals(
  userId: string
): Promise<NetworkSignal[]> {
  return signals.filter((s) => s.userId === userId);
}

export async function getTrendingSignals(): Promise<SignalType[]> {
  const count: Record<SignalType, number> = {
    connection: 0,
    follow: 0,
    message: 0,
    activity: 0,
  };

  signals.forEach((s) => {
    count[s.type]++;
  });

  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .map(([type]) => type as SignalType);
}
