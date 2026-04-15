import { trackActivity } from "@/lib/network/activity";

export interface NetworkMessage {
  id: string;
  threadId: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
}

let messages: NetworkMessage[] = [];

const generateId = () => Math.random().toString(36).substring(2, 9);

const getThreadId = (userA: string, userB: string) =>
  [userA, userB].sort().join("_");

export async function sendMessage(
  senderId: string,
  receiverId: string,
  content: string
): Promise<NetworkMessage> {
  const message: NetworkMessage = {
    id: generateId(),
    threadId: getThreadId(senderId, receiverId),
    senderId,
    receiverId,
    content,
    createdAt: new Date().toISOString(),
  };

  messages.push(message);

  await trackActivity(senderId, "message", receiverId);

  return message;
}

export async function getThreadMessages(
  userA: string,
  userB: string
): Promise<NetworkMessage[]> {
  const threadId = getThreadId(userA, userB);

  return messages
    .filter((m) => m.threadId === threadId)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() -
        new Date(b.createdAt).getTime()
    );
}
