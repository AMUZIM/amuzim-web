import { trackActivity } from "@/lib/network/activity";
import { createNotification } from "@/lib/network/notifications";

export interface NetworkMessage {
  id: string;
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
  const message: NetworkMessage = {
    id: generateId(),
    senderId,
    receiverId,
    content,
    createdAt: new Date().toISOString(),
  };

  messages.push(message);

  await trackActivity(senderId, "message", receiverId);
  await createNotification(receiverId, "message", senderId);

  return message;
}

export async function getMessagesBetweenUsers(
  userA: string,
  userB: string
): Promise<NetworkMessage[]> {
  return messages.filter(
    (m) =>
      (m.senderId === userA && m.receiverId === userB) ||
      (m.senderId === userB && m.receiverId === userA)
  );
}
