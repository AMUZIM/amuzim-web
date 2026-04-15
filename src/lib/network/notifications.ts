export type NotificationType =
  | "connection_request"
  | "connection_accepted"
  | "follow"
  | "message";

export interface NetworkNotification {
  id: string;
  userId: string;
  type: NotificationType;
  fromUserId?: string;
  read: boolean;
  createdAt: string;
}

let notifications: NetworkNotification[] = [];

const generateId = () => Math.random().toString(36).substring(2, 9);

export async function createNotification(
  userId: string,
  type: NotificationType,
  fromUserId?: string
): Promise<NetworkNotification> {
  const notification: NetworkNotification = {
    id: generateId(),
    userId,
    type,
    fromUserId,
    read: false,
    createdAt: new Date().toISOString(),
  };

  notifications.push(notification);

  return notification;
}

export async function getUserNotifications(
  userId: string
): Promise<NetworkNotification[]> {
  return notifications.filter((n) => n.userId === userId);
}

export async function markAsRead(
  notificationId: string
): Promise<boolean> {
  const notification = notifications.find((n) => n.id === notificationId);
  if (!notification) return false;

  notification.read = true;
  return true;
}
