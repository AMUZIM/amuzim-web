import { trackActivity } from "@/lib/network/activity";
import { getOrCreateThread, updateThreadLastMessage } from "@/lib/network/thread";

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

export async function sendMessage(
  senderId: string,
  receiverId: string,
  content: string
): Promise<NetworkMessage> {
  const thread = await getOrCreateThread(senderId, receiverId);

  const message: NetworkMessage = {
    id: generateId(),
    threadId: thread.id,
    senderId,
    receiverId,
    content,
    createdAt: new Date().toISOString(),
  };

  messages.push(message);

  await updateThreadLastMessage(thread.id, message);
  await trackActivity(senderId, "message", receiverId);

  return message;
}

export async function getThreadMessages(
  threadId: string
): Promise<NetworkMessage[]> {
  return messages
    .filter((m) => m.threadId === threadId)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() -
        new Date(b.createdAt).getTime()
    );
}
