import { NetworkMessage } from "./message";

export interface NetworkThread {
  id: string;
  participants: string[];
  lastMessage?: NetworkMessage;
  updatedAt: string;
}

let threads: NetworkThread[] = [];

const generateThreadId = (userA: string, userB: string) =>
  [userA, userB].sort().join("_");

export async function getOrCreateThread(
  userA: string,
  userB: string
): Promise<NetworkThread> {
  const id = generateThreadId(userA, userB);

  let thread = threads.find((t) => t.id === id);

  if (!thread) {
    thread = {
      id,
      participants: [userA, userB],
      updatedAt: new Date().toISOString(),
    };
    threads.push(thread);
  }

  return thread;
}

export async function updateThreadLastMessage(
  threadId: string,
  message: NetworkMessage
) {
  const thread = threads.find((t) => t.id === threadId);
  if (!thread) return;

  thread.lastMessage = message;
  thread.updatedAt = new Date().toISOString();
}

export async function getUserThreads(
  userId: string
): Promise<NetworkThread[]> {
  return threads
    .filter((t) => t.participants.includes(userId))
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() -
        new Date(a.updatedAt).getTime()
    );
}
