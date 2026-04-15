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
