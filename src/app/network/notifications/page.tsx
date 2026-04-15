"use client";

import NetworkNotifications from "@/components/network/NetworkNotifications";

export default function NotificationsPage() {
  const userId = "user_1"; // TODO: replace with auth

  return (
    <div className="p-6">
      <NetworkNotifications userId={userId} />
    </div>
  );
}
